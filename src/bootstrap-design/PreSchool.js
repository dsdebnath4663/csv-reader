// import React from "react";
import React, { useEffect } from "react";

import "./css/PreSchool.css";
import JumbotronCustom from "./custom-btsrp/JumbotronCustom";

function PreSchool() {
  const firstText = "Make A Brighter Future For Your Child";
  const secondText =
    "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.";

  const firstTextForSlideTwo = "The Best Kindergarten School For Your Child";
  const secondTextForSlideTwo =
    "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.";

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 100) {
        navbar.classList.add("navbar-scrolled");
        navbar.classList.remove("navbar-top");
      } else {
        navbar.classList.add("navbar-top");
        navbar.classList.remove("navbar-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container-xxl bg-white p-0">
      {/* <nav className="navbar navbar-expand-lg shadow-sm "> */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top  shadow-sm">
        {/* <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0 shadow-sm" style="top: 0px;"> */}
        {/* <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0" style="top: -100px;"> */}

        {/* <nav className="navbar navbar-expand-lg shadow-sm sticky-top bg-white"> */}

        <div className="container">
          <div className="text-center">
            <h1 className="h1-inline">
              <i className="fa fa-book" aria-hidden="true"></i>
              Kider
            </h1>
          </div>

          <div className="navbar-nav justify-content-center w-100">
            <a className="nav-link ">Home</a>
            <a className="nav-link ">About Us</a>
            <a className="nav-link ">Classes</a>
            {/* Dropdown Menu */}
            <div className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <a className="nav-link ml-5">Contact Us</a>
          </div>

          <div className="navbar-nav justify-content-center w-10">
            <button
              type="button"
              className="btn btn-primary btn-sm btn-primary-custom"
            >
              Join Us
              <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </nav>
      <div className="row justify-content-center align-items-center g-2">
        <div className=" ">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://themewagon.github.io/kider/img/carousel-1.jpg"
                  alt="..."
                />
                {/* <JumbotronCustom firstText={firstText} secondText={"Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr."} /> */}

                <JumbotronCustom
                  firstText={firstText}
                  secondText={secondText}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://themewagon.github.io/kider/img/carousel-2.jpg"
                  alt="..."
                />
                <JumbotronCustom
                  firstText={firstTextForSlideTwo}
                  secondText={secondText}
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>

      <div className=" container-xxl py-5">
        <div className="container bg-white mt-5">
          <div className="text-center md-5">
            <h1 class="h1-inline md-3">School Facilities</h1>
            <p class="mb-0">
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd
            </p>
            <p class="mb-0">
              vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor
              duo.
            </p>
          </div>

          <div className="row justify-content-center align-items-center g-2 custom-row-height mt-3 ">
            {/* first item */}
            <div className="col-md-3 bg-ligh custom-row-height animated-col">
              <div className="item item-1 px-1">
                <div className="item-top bg-orange">
                  <span className="text bg-orange"></span>
                  <i
                    class="fa fa-cab fa-custom text-orange "
                    aria-hidden="true"
                  ></i>
                  <span className=" text bg-orange"></span>
                </div>
                <div className="item-bottom bg-orange">
                  <div class="text-center md-5">
                    <h3 class=" mb-3 text-orange">School Bus</h3>
                    <p class="mb-0">
                      Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor
                      ut dolore lorem kasd
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second item */}
            <div class="col-md-3 bg-ligh custom-row-height animated-col">
              <div class="item item-2 px-1">
                <div class="item-top bg-green">
                  <span class="text bg-green"></span>

                  <i
                    class="fa fa-futbol-o fa-custom text-green"
                    aria-hidden="true"
                  ></i>

                  <span class=" text bg-green"></span>
                </div>
                <div class="item-bottom bg-green">
                  <div class="text-center md-5">
                    <h3 class=" mb-3 text-green">Playground</h3>
                    <p class="mb-0">
                      Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor
                      ut dolore lorem kasd
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Third item */}

            <div class="col-md-3 bg-ligh custom-row-height animated-col">
              <div class="item item-3 px-1">
                <div class="item-top bg-warning">
                  <span class="text bg-warning"></span>
                  {/* <i class="fa fa-futbol-o fa-custom text-warning" aria-hidden="true"></i> */}

                  <i
                    class="fa fa-home fa-custom text-warning"
                    aria-hidden="true"
                  ></i>

                  <span class=" text bg-warning"></span>
                </div>
                <div class="item-bottom bg-warning">
                  <div class="text-center md-5">
                    <h3 class=" mb-3 text-warning">Healthy Canteen</h3>
                    <p class="mb-0">
                      Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor
                      ut dolore lorem kasd
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3 bg-ligh custom-row-height animated-col">
              <div class="item item-4 px-1">
                <div class="item-top bg-info">
                  <span class="text bg-info"></span>

                  <i
                    class="fa fa-address-book-o  fa-custom text-info"
                    aria-hidden="true"
                  ></i>

                  <span class=" text bg-info"></span>
                </div>
                <div class="item-bottom bg-info">
                  <div class="text-center md-5">
                    <h3 class=" mb-3 text-info">Positive Learning</h3>
                    <p class="mb-0">
                      Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor
                      ut dolore lorem kasd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" container-xxl py-5">
        <div className="container bg-white mt-5">
          <div class="row justify-content-center align-items-center g-2">
            <div class="col-md-6">
              <div class="row justify-content-center align-items-center g-2">
                <div class=" md-4">
                  <h1>Learn More About Our Work And Our Cultural Activities</h1>

                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo magna dolore erat
                    amet
                  </p>

                  <p>
                    Stet no et lorem dolor et diam, amet duo ut dolore vero eos.
                    No stet est diam rebum amet diam ipsum. Clita clita labore,
                    dolor duo nonumy clita sit at, sed sit sanctus dolor eos,
                    ipsum labore duo duo sit no sea diam. Et dolor et kasd ea.
                    Eirmod diam at dolor est vero nonumy magna.
                  </p>

                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-md-6">
                      <a
                        class="btn btn-primary rounded-pill py-3 px-5 w-75 "
                        href="#"
                        role="button"
                      >
                        Read more
                      </a>
                    </div>

                    {/* Jhon Doe image section */}
                    <div class="col-md-6">
                      <div class="d-flex align-items-center">
                        <img
                          class="rounded-circle rounded-circle-one flex-shrink-0"
                          src="https://themewagon.github.io/kider/img/user.jpg"
                          alt=""
                        />
                        <div class="ms-3">
                          <h6 class="text-primary mb-1">Jhon Doe</h6>
                          <small>CEO &amp; Founder</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right column of Learn More About Our Work And Our Cultural Activities */}
            <div class="col-md-6">
              <div class="row">
                <div class="col-12 text-center">
                  <img
                    class="img-fluid w-75 rounded-circle bg-light p-3"
                    src="https://themewagon.github.io/kider/img/about-1.jpg"
                    alt=""
                  />
                </div>
                <div class="col-6 text-start mt-minius-150 ">
                  <img
                    class="img-fluid w-100 rounded-circle bg-light p-3"
                    src="https://themewagon.github.io/kider/img/about-2.jpg"
                    alt=""
                  />
                </div>
                <div class="col-6 text-end   mt-minius-150 ">
                  <img
                    class="img-fluid w-100 rounded-circle bg-light p-3"
                    src="https://themewagon.github.io/kider/img/about-3.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Become A Teacher Section*/}
      <div className=" container-xxl py-5">
        <div className="container bg-white mt-5">
          <div class="row justify-content-center align-items-center g-2">
            <div class="col-md-6">Left</div>
            <div class="col-md-6">Right</div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default PreSchool;
