import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import DisplayBookDetail from "../Components/bookDetails/DisplayBookDetail";
import AddComment from "../Components/bookDetails/AddComment";
import { getAllReview } from "../Services/reviewServices";
import { getUserByID } from "../Services/userService";
import { useEffect, useState } from "react";
import DisplayReviews from "../Components/bookDetails/DisplayReviews";
import Footer from "../Components/Footer";
import useAuthStore from "../store/store";
import { useNavigate } from "react-router-dom";

const BookDetails = () => {
  const {id} = useParams();
  const {validateToken, isLoggedIn} = useAuthStore();
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    validateToken();
    const userToken = localStorage.getItem('token');

    if(!userToken){
      navigate('/login');
    }

    setToken(userToken);

    if(id && userToken){
      getAllReview(id, userToken).then((data) => {
        if (data) {
          setComments(data);

          const userIds = [...new Set(data.map((comment) => comment.user_id))];

          Promise.all(
            userIds.map((userId) => 
              getUserByID(userId, userToken).then((userData) => ({
                userId,
                ...userData,
              }))
            )
          ).then((userData) => {
            const userMap = userData.reduce((acc, user) => {
              acc[user.userId] = user;
              return acc;
            }, {});
            setUsers(userMap);
          });
        }
      });
    }
  }, [id, token, validateToken, isLoggedIn]);

  const handleNewComment = (newComment) => {
    setComments((prevCommnets) => [...prevCommnets, newComment]);
  };

  const handleUpdateReview = (updatedComments) => {
    setComments(updatedComments); // Update comments state in BookDetails
  };

  return (
    <>
      <div className="overflow-x-hidden min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow mb-5">
          <DisplayBookDetail bookId={id}/>  
          <AddComment 
            bookId={id} 
            token={token} 
            onNewComment={handleNewComment}
          /> 
          <DisplayReviews comments={comments} users={users} setComments={handleUpdateReview}/>
        </div>
        <Footer/>
      </div>
    </>
  );
};
export default BookDetails;
