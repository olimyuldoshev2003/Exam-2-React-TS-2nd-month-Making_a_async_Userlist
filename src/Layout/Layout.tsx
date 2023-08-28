import { Link, Outlet } from "react-router-dom";



const Layout = () => {
  return (
    <div className="dark:bg-[#000]">
      <header className="header">
        <ul>
          <li>
            <Link className="text-[#fff] dark:text-[#000]" to={`/`}>
              Home
            </Link>
          </li>
        </ul>
      </header>
      <Outlet/>
      <footer className="footer"></footer>
    </div>
  );
}

export default Layout