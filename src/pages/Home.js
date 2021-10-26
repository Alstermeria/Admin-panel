import React from "react";
import { Redirect } from "react-router";
import Layout from "../components/Layout/Layout";
import SideBar from "../components/SideBar/SideBar";

function Home(props) {
  const { isAuth, logoutBtnWasPressed } = props;
  if (!isAuth) {
    return (
      <Redirect
        to={{
          pathname: "/login",
        }}
      />
    );
  }

  return (
    <div>
      <div className="d-flex">
        <div className="sidebar">
          <div className="sidebar__title d-flex">
            <img src="img/brand.png" alt="brand" />
            <h2>Brand Name</h2>
          </div>
          <SideBar logout={logoutBtnWasPressed} />
        </div>

        <div className="main-page">
          <Layout>
            <h1>Home</h1>
          </Layout>
        </div>
      </div>
    </div>
  );
}
export default Home;
