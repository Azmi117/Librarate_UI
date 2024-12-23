import { Link, useLocation } from 'react-router-dom';

const BreadCrumbs = () => {
  const location = useLocation(); // Mendapatkan path saat ini
  const pathnames = location.pathname.split('/').filter((x) => x); // Memisahkan path berdasarkan '/'

  return (
    <nav className="flex md:ms-5" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {/* Home Link */}
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm poppins-semibold font-medium text-gray-700 hover:text-white"
          >
            <svg
              className="w-3 h-3 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </Link>
        </li>
        {/* Dynamic Links */}
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`; // Membentuk path hingga bagian ini
          const isLast = index === pathnames.length - 1; // Apakah ini breadcrumb terakhir
          return (
            <li key={to}>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-700 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                {isLast ? (
                  <span className="ms-1 text-sm poppins-semibold font-medium text-gray-700 md:ms-2">
                    {value.replace('-', ' ')} {/* Breadcrumb terakhir hanya teks */}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="ms-1 text-sm font-medium text-gray-700 hover:text-white md:ms-2"
                  >
                    {value.replace('-', ' ')}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
