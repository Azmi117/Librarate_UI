import Navbar from "../Components/Navbar";
import Carousel from "../Components/Home/Carousel";
import Categories from "../Components/Home/Categories";
import Card from "../Components/Home/Card";
import Loading from "../Components/Loading";
import Pagination from "../Components/Pagination";
import Footer from "../Components/Footer";
import { getAllBooks } from "../Services/bookService";
import { useEffect, useState } from "react";

const Home = () => {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchBooks = async () => {
            try{
                const params = {
                    limit: 14,
                    page: currentPage,
                    title: searchQuery,
                    genre: selectedGenre,
                    country: selectedCountry,
                };
                const { books, totalPages } = await getAllBooks(params);
                setBooks(books);
                setTotalPages(totalPages);
            }catch(error){
                console.log('Error fetching books: ', error);
            }finally{
                setLoading(false);
            }
            
        };
        
        fetchBooks();
    }, [currentPage, searchQuery, selectedGenre, selectedCountry]);
    
    const handleSearch = (query) => {
        setSearchQuery(query);
        setSelectedCountry("");
        setSelectedGenre("");
        setCurrentPage(1); // Reset ke halaman 1 saat pencarian baru
    };
    
    const handleSelectGenre = (genre) => {
        setSelectedGenre(genre);
        setSearchQuery("");
        setCurrentPage(1); // Reset ke halaman 1 saat genre berubah
    };
    
    const handleSelectCountry = (country) => {
        setSelectedCountry(country);
        setSearchQuery(''); // Reset title search jika country berubah
        setSelectedGenre(''); // Reset genre jika country berubah
        setCurrentPage(1); // Reset ke halaman pertama
    };
    
    if(loading){
        return (
            <div className="flex items-center justify-center min-h-screen opacity-50">
              <Loading/>
            </div>
        )
    }
    
    return(
        <>
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Navbar onSearch={handleSearch} onSelectCountry={handleSelectCountry}/>
            <div className="flex-grow">
            <Carousel/>
                <h1 className="hidden md:block mt-5 ms-4 text-xl amaranth-bold">Featured & Categories</h1>
                <Categories onSelectedGenre={handleSelectGenre}/>
                <div className="w-full container md:grid grid-cols-4 xl:grid-cols-5 mt-3 mb-10">
                    <div className="w-screen flex justify-center flex-wrap gap-3 lg:gap-4">
                        {books.map((book) => (
                            <Card key={book.id} book={book}/>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mb-5">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Home;