// import React from "react";
import React, { useEffect } from "react";

import "../css/PreSchool.css";
import JumbotronCustom from "./JumbotronCustom";

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
      <div class="container-xxl py-5">
        <div class="container">
          <div class="bg-orange rounded">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="position-relative h-100">
                  <img
                    class="position-absolute w-100 h-100 rounded"
                    src="https://themewagon.github.io/kider/img/call-to-action.jpg"
                  />
                </div>
              </div>
              <div class="col-lg-6 ">
                <div class="h-100 d-flex flex-column justify-content-center p-5">
                  <h1 class="mb-4">Become A Teacher</h1>
                  <p class="mb-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo magna dolore erat
                    amet
                  </p>
                  <a class="btn btn-primary py-3 px-5" href="">
                    Get Started Now<i class="fa fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* School Classes Section */}

      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center mx-auto mb-5 height">
            <h1 class="mb-3">School Classes</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6">
              <div class="classes-item">
                <div class="bg-orange rounded-circle w-75 mx-auto p-3">
                  <img
                    class="img-fluid rounded-circle"
                    src="https://themewagon.github.io/kider/img/classes-1.jpg"
                    alt=""
                  />
                </div>
                <div class="bg-orange rounded p-4 pt-5 mt-n5">
                  <a class="d-block text-center h3 mt-3 mb-4" href="">
                    Art &amp; Drawing
                  </a>
                  <div class="d-flex align-items-center justify-content-between mb-4">
                    <div class="d-flex align-items-center">
                      <img
                        class="rounded-circle flex-shrink-0 rounded-circle-one"
                        src="https://themewagon.github.io/kider/img/user.jpg"
                        alt=""
                      />
                      <div class="ms-3">
                        <h6 class="text-orange mb-1">Jhon Doe</h6>
                        <small>Teacher</small>
                      </div>
                    </div>
                    <span
                      class="bg-orange-2 text-white rounded-pill py-2 px-3"
                      href=""
                    >
                      $99
                    </span>
                  </div>
                  <div class="row g-1">
                    <div class="col-4">
                      <div class="border-top border-3 border-orange pt-2">
                        <h6 class="text-orange mb-1">Age:</h6>
                        <small>3-5 Years</small>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="border-top border-3 border-success pt-2">
                        <h6 class="text-success mb-1">Time:</h6>
                        <small>9-10 AM</small>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="border-top border-3 border-warning pt-2">
                        <h6 class="text-warning mb-1">Capacity:</h6>
                        <small>30 Kids</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Make Appointment Section */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="bg-light2 rounded">
            <div class="row g-0">
              <div class="col-lg-6 ">
                <div class="h-100 d-flex flex-column justify-content-center p-5">
                  <h1 class="mb-4">Make Appointment</h1>

                  <form>
                    <div class="row  g-2">
                      <div class="col-sm-6">
                        <div class="form-floating mb-3">
                          <input
                            type="email"
                            class="form-control is-invalid1"
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label for="floatingInput">Email address</label>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-floating mb-3">
                          <input
                            type="email"
                            class="form-control is-invalid1"
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label for="floatingInput">Email address</label>
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <div class="form-floating mb-3">
                          <input
                            type="email"
                            class="form-control is-invalid1"
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label for="floatingInput">Email address</label>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-floating mb-3">
                          <input
                            type="email"
                            class="form-control is-invalid1"
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label for="floatingInput">Email address</label>
                        </div>
                      </div>

                      <div class="col-sm-12">
                        <div class="form-floating mb-3">
                          <textarea
                            class="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea2"
                          ></textarea>
                          <label for="floatingTextarea2">Comments</label>
                        </div>
                      </div>

                      <a class="btn btn-primary py-3 px-5" href="">
                        Get Started Now
                      </a>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="position-relative h-100">
                  <img
                    class="position-absolute w-100 h-100 rounded"
                    src="https://themewagon.github.io/kider/img/call-to-action.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Popular Teachers
 Section */}

      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center mx-auto mb-5 height">
            <h1 class="mb-3"> Popular Teachers</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6">
              <div class="classes-item team-item position-relative">
                <img
                  class="img-fluid rounded-circle w-75"
                  src="https://themewagon.github.io/kider/img/team-1.jpg"
                  alt=""
                />
                <div className="team-text text-center rounded-circle  ">
                  <h3>Full Name</h3>
                  <p>Designation</p>
                  <div class="">
                    <a class="btn btn-primary mx-1 btn-square bg-black" href="#" role="button">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a class="btn btn-primary mx-1 btn-square" href="#" role="button">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a class="btn btn-primary mx-1 btn-square" href="#" role="button">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-xxl py-5 bg-dark">
        <div class="container">
          <div class="row "          >
            <div class="col-lg-3 col-md-6 ">
              <h3 className="mb-3 text-white">Get In Touch </h3>
              <p className="mb-1 text-white-50">
                <i className="fa fa-arrow-right ms-2 me-2 " aria-hidden="true"></i>
                123 Street, New York, USA
              </p>
              <p className="mb-1 text-white-50">
                <i className="fa fa-arrow-right ms-2 me-2 " aria-hidden="true"></i>
                +012 345 67890
              </p>

              <p className="mb-1 text-white-50">
                <i className="fa fa-arrow-right ms-2 me-2 " aria-hidden="true"></i>
                info@example.com
              </p>
              <div className="mt-4">
                <a class="btn mx-1 btn-square btn-outline" href="#" role="button">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a class="btn mx-1 btn-square btn-outline" href="#" role="button">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>

                <a class="btn mx-1 btn-square btn-outline" href="#" role="button">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a class="btn mx-1 btn-square btn-outline" href="#" role="button">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-white">
              <h3>Quick Links </h3>
              <a className="btn-link text-white-50 mb-2">About Us</a>
              <a className="btn-link  text-white-50 mb-2">Contact Us</a>
              <a className="btn-link text-white-50 mb-2">Our Services</a>
              <a className="btn-link text-white-50 mb-2">Privacy Policy</a>
              <a className="btn-link text-white-50 mb-2">Terms & Condition</a>
            </div>
            <div class="col-lg-3 col-md-6 text-white">
              <h3>Photo Gallery              </h3>
              <div class="row g-2 pt-2" >
                <div class="col-4">
                  <img src="https://themewagon.github.io/kider/img/classes-1.jpg" alt="image-1" className="rounded img-fluid bg-orange p-1" />
                </div>
                <div class="col-4">
                  <img src="https://themewagon.github.io/kider/img/classes-2.jpg" alt="image-1" className="rounded img-fluid bg-orange p-1" />
                </div>
                <div class="col-4">
                  <img src="https://themewagon.github.io/kider/img/classes-3.jpg" alt="image-1" className="rounded img-fluid bg-orange p-1" />
                </div>
                <div class="col-4">
                  <img src="https://themewagon.github.io/kider/img/classes-4.jpg" alt="image-1" className="rounded img-fluid bg-orange p-1" />
                </div>
                <div class="col-4">
                  <img src="https://themewagon.github.io/kider/img/classes-5.jpg" alt="image-1" className="rounded img-fluid bg-orange p-1" />
                </div>
                <div class="col-4">
                  <img src="https://themewagon.github.io/kider/img/classes-6.jpg" alt="image-1" className="rounded img-fluid bg-orange p-1" />
                </div>


              </div>

            </div>

            <div class="col-lg-3 col-md-6 text-white">
              <h3>Photo Gallery </h3>
              <p>
                Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="position-relative mx-auto">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control is-invalid1 bg-transparent"
                    id="floatingInput"
                    placeholder="Your email"
                  />

                  <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>

                </div>
              </div>
            </div>


          </div>


        </div>
      </div>
    </div>
  );
}

export default PreSchool;
