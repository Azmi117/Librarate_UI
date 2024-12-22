import { useEffect, useState } from "react";
import Sidebar from "../../Components/AdminComponents/SideBar";
import CardUserAccount from "../../Components/AdminComponents/cardUserAccount";
import Pagination from "../../Components/Pagination";
import { getAllUser } from "../../Services/userService";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/store";

const UserAccount = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { token, validateToken, isLoggedIn } = useAuthStore();

  useEffect(() => {

    validateToken();

        if (!token) {
            navigate('/login');
        }

    const fetchUser = async () => {
      try {
        const params = {
          username: searchQuery,
          limit: 12,
          page: currentPage,
        };

        const { users, totalPages } = await getAllUser(params, token);
        setUsers(users);
        setTotalPages(totalPages);
      } catch (error) {
        console.log("Error fetching users: ", error);
      }
    };

    fetchUser();
  }, [token, isLoggedIn, navigate, validateToken, currentPage, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Memperbarui searchQuery sesuai input
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(`Searching for: ${searchQuery}`); // Log pencarian jika diperlukan
    }
  };
  

  const handleSearchClick = () => {
    console.log(`Searching for: ${searchQuery}`); // Jika ingin aksi tambahan saat tombol pencarian diklik
  };

  return (
    <>
      <div className="overflow-x-hidden">
        <Sidebar />
        <div className="flex justify-center mt-20">
          <input
            type="text"
            className="w-5/6 md:w-3/6 lg:ms-56 h-8 rounded-md px-1 bg-gray-200 shadow-md"
            placeholder="Search here..."
            value={searchQuery}
            onChange={handleSearchChange} // Memperbarui searchQuery saat pengguna mengetik
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="min-h-full ms-5 lg:ms-60 mt-10 flex justify-center flex-wrap gap-5">
          {users.map((user) => (
            <CardUserAccount key={user.id} user={user} />
          ))}
          <div className="my-2">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAccount;
