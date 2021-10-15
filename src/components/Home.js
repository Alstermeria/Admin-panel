import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import SidebarLink from "./SidebarLink";

function createLink(link) {
  return <Sidebar key={link.id} img={link.icon} name={link.title} />;
}

function Home() {
  return (
    <div>
      <div className="d-flex">
        <div className="sidebar">
          <div className="sidebar__title d-flex">
            <img src="img/close.svg" alt="icon" />
            <h2>Brand Name</h2>
          </div>
          {SidebarLink.map(createLink)}
        </div>

        <div className="main-page">
          <Header />
          <h1>Home</h1>
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default Home;
