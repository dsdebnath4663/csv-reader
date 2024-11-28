import React from "react";
import SideBar from "./SideBar";

const PortfolioAndResume = () => {
  return (
    // <nav class="navbar navbar-expand-lg navbar-light bg-light">


    //   <div class="container-fluid d-flex justify-content-center align-items-center">
    //     <a class="navbar-brand blog-name pt-lg-4 mb-0" href="#">Navbar</a>



    //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span class="navbar-toggler-icon"></span>
    //     </button>



    //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //       <SideBar />

    //     </div>
    //   </div>
    // </nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid d-flex align-items-center">
        {/* <!-- Button always on the left --> */}
        <button
          class="navbar-toggler me-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Navbar brand in the center --> */}
        <a class="navbar-brand mx-auto pt-lg-4 mb-0" href="#">Navbar</a>

        {/* <!-- Sidebar collapsible content --> */}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <SideBar />
        </div>
      </div>
    </nav>

  );
};

export default PortfolioAndResume;
