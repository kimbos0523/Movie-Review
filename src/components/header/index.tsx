import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { BiSearch } from "react-icons/bi";
import { useSearchMovie } from "../../hook";

const Header: React.FunctionComponent = () => {
  const [search, setSearch] = useState<string>("");
  const path = window.location.pathname;

  const handleSearchInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearch(event.target.value);
  };

  const { data: result } = useSearchMovie(search);

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-menus-container">
          <ul className="header-menus">
            <li className="header-menu">
              <a className="no-underline" href="/">
                <h1 className="header-logo">
                  <span className="text-red-600">MOVIE</span>
                  <span className="">REVIEW</span>
                </h1>
              </a>
            </li>
            <li className="header-search-menu">
              <div className="header-search-container relative w-full">
                <div className="header-search-form-container">
                  <form className="header-search-form">
                    <label className="header-search-label">
                      <BiSearch />
                      <input
                        type="text"
                        className="header-search-input"
                        placeholder="Search contents, figures, collections or users"
                        onChange={handleSearchInput}
                      />
                    </label>
                  </form>
                </div>
                <div className="header-result-container">
                  <div className="header-result-list m-0 p-0">
                    {result?.data.results.map((item) => (
                      <a
                        key={item.id}
                        href={`/details/${item.id}`}
                        className="no-underline"
                      >
                        <ul className="header-result-item">{item.title}</ul>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </li>
            <li className="header-menu">
              <Link to="/login">
                <button className="header-btn-login">Log In</button>
              </Link>
            </li>
            <li className="header-menu">
              <Link to="/signup">
                <button className="header-btn-signup">Sign Up</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
