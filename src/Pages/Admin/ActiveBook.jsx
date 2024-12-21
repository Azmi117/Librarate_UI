import { useEffect, useState } from "react";
import SideBar from "../../Components/AdminComponents/SideBar";
import Pagination from "../../Components/Pagination";
import CardActiveBook from "../../Components/AdminComponents/cardActiveBook";
import { getAllBooks } from "../../Services/bookService";
import Loading from "../../Components/Loading";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/store"

const ActiveBook = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { token, validateToken, isLoggedIn } = useAuthStore();



  useEffect(() => {
    validateToken();

      if (!token) {
          navigate('/login');
      }

    const fetchBooks = async () => {
      try {
        const params = {
          title: searchQuery,
          limit: 12,
          page: currentPage,
        };
        const { books, totalPages } = await getAllBooks(params);
        setBooks(books);
        setTotalPages(totalPages);
      } catch (error) {
        console.log("Error fetching books: ", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBooks();
  }, [token, navigate, isLoggedIn, validateToken, currentPage, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Memperbarui searchQuery sesuai input
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(`Searching for: ${searchQuery}`); // Log pencarian jika diperlukan
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen opacity-50">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div>
        <SideBar />
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
        <div className="lg:ms-80 lg:me-20 mt-16 mb-16 flex justify-center flex-wrap gap-5 min-h-full">
          {books.map((book) => (
            <>
              <CardActiveBook key={book.id} book={book} />
            </>
          ))}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </>
  );
};

export default ActiveBook;
