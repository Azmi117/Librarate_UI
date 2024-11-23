import Navbar from "../Components/Home/Navbar";
import Carousel from "../Components/Home/Carousel";
import Categories from "../Components/Home/Categories";
import Card from "../Components/Home/Card";
import Pagination from "../Components/Home/Pagination";
import Footer from "../Components/Home/Footer";

const Home = () => {
    return(
        <>
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Navbar/>
            <div className="flex-grow">
            <Carousel/>
                <h1 className="hidden md:block mt-5 ms-4 text-xl amaranth-bold">Featured & Categories</h1>
                <Categories/>
                <div className="w-screen container md:mx-auto md:grid grid-cols-4 xl:grid-cols-5 flex flex-wrap mt-3 mb-10">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="flex justify-center mb-5">
                    <Pagination/>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Home;