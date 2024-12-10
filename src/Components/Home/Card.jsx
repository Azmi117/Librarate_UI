import { useNavigate } from "react-router-dom";

const Card = ({ book }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/bookDetails/${book.id}`);
  };

  return (
    <div className="group perspective-container mt-10">
      <button
        onClick={handleClick}
        className="card-3d border border-slate-950 rounded-md flex flex-col bg-gray-400 transition-transform duration-500 group-hover:rotate-3d hover:shadow-2xl"
      >
        <img
          src={book.photo}
          alt={book.title}
          className="w-44 h-40 rounded-t-md border-b border-slate-950"
        />
        <img
          src={book.image_3d}
          alt={book.title}
          className="image-3d w-[20rem] h-[15.5rem] absolute -top-5 rounded-t-md opacity-0 hover:opacity-100 transition-opacity duration-300"
        />
        <img src={book.image_Title} className="mx-auto w-44 h-12 rounded-b-md" />
      </button>
    </div>
  );
};

export default Card;
