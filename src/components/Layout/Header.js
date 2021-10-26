function Header() {
  return (
    <div className="header">
      <div className="header__hamb">
        <img src="img/hamburger.svg" alt="icon" />
      </div>
      <div className="header__search">
        <img src="img/search.png" alt="icon" />
        <input type="text" placeholder="search here" />
      </div>
      <div className="header__img">
        <img src="img/1.jpg" alt="profileimage" />
      </div>
    </div>
  );
}

export default Header;
