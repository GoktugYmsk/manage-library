import React from "react";
import "./index.scss";
import { IoLibrarySharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLoginCLick = () => {
    navigate("/Login");
  };

  const handleSigninCLick = () => {
    navigate("/Signin");
  };

  const handleMainPageCLick = () => {
    navigate("/");
  };

  return (
    <div className="container-header">
      <div
        onClick={handleMainPageCLick}
        className="container-header__left-icons"
      >
        <IoLibrarySharp className="icons" />
        <p>Library</p>
      </div>
      <div className="container-header__login">
        <p onClick={handleLoginCLick}>Giriş Yap</p>
        <p>/</p>
        <p onClick={handleSigninCLick}>Üye ol</p>
      </div>
    </div>
  );
}

export default Header;
