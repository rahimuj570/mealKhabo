import React, { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="items-center px-5 relative flex justify-between">
        <h1 className="text-2xl font-bold">MealKhabo</h1>
        <nav className="duration-1000">
          <ul
            className={`duration py-6 start-0 text-center top-16 md:flex max-md:absolute max-md:bg-orange-400 max-md:w-screen gap-5  mobileNav ${
              toggle ? "navClick" : "navClick2"
            }`}
          >
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>

        <div className="">
          <button className="text-white max-md:hidden bg-orange-400 px-4 py-2 rounded">
            Login
          </button>

          <button
            onClick={() => setToggle(!toggle)}
            className={`md:hidden bg-orange-400 px-2 py-1 rounded ${
              toggle ? "menuBtn2" : "menuBtn"
            }`}
          >
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
            <br />
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
