import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
      <div className="overflow-x-hidden flex flex-col">
        <Navbar />
        <div className="w-full flex flex-col lg:flex-row">
          <img
            src="https://images.pexels.com/photos/1988270/pexels-photo-1988270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-full lg:w-4/6"
          />
          <div className="w-full flex flex-col">
            <h1 className="mt-10 text-xl font-bold mx-auto poppins-semibold">
              About Librarate
            </h1>
            <h2 className="w-5/6 mx-auto text-justify mt-3 flex flex-wrap quicksand-regular">
              Librarate adalah platform yang dirancang khusus untuk para pecinta
              buku. Di sini, Anda dapat menemukan berbagai koleksi buku dari
              berbagai genre, mulai dari fiksi hingga nonfiksi, klasik hingga
              modern. Kami memberikan Anda ruang untuk menjelajahi dunia
              literasi yang luas dan tak terbatas.
            </h2>
            <h2 className="w-5/6 mx-auto text-justify mt-3 flex flex-wrap quicksand-regular">
              Selain sebagai tempat untuk menemukan buku favorit Anda, Librarate
              juga memungkinkan Anda berbagi pendapat dan memberikan penilaian
              terhadap buku yang telah Anda baca. Kami percaya bahwa setiap
              pembaca memiliki perspektif unik, dan melalui opini serta rating
              Anda, komunitas pembaca dapat saling terinspirasi dan menemukan
              karya-karya terbaik.
            </h2>
            <h2 className="w-5/6 mx-auto text-justify mt-5 flex flex-wrap font-bold poppins-semibold">
              Apa yang bisa Anda lakukan di Librarate?
            </h2>
            <ul className="w-5/6 mx-auto text-justify text-sm mt-3 mb-7 flex flex-wrap quicksand-regular list-disc list-inside">
              <li>Temukan buku-buku menarik sesuai minat Anda.</li>
              <li className="mt-2">Berikan opini dan ulasan terhadap buku yang Anda baca.</li>
              <li className="mt-2">Berikan rating untuk memilih buku terbaik.</li>
              <li className="mt-2">Jelajahi ulasan dari pembaca lainnya.</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
