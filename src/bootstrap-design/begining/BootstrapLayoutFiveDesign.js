import React from "react";
import CarouselData from "./CarouselData";
import './css/five.css'
function BootstrapLayoutFiveDesign() {
  return (
    <div className="container">
      <div className="row   g-2">
        <div className="col">
          <nav className="navbar navbar-expand-lg ">
            <div className="container">
              <div className="text-center">
                <div className=" oswald-602">COMPANY</div>
                <div className="fs-6 text-muted m-0 p-0 opacity-zero">
                  Lorem Ipsum
                </div>
              </div>

              <div className="navbar-nav ms-auto">
                <a className="nav-link mx-5">Company</a>
                <a className="nav-link mx-5">Our Cases</a>
                <a className="nav-link mx-5">Blog</a>
                <a className="nav-link mx-5">News</a>
                <a className="nav-link mx-5">Contact</a>
                <a className="nav-link mx-5 ms-4 fw-bold">999-456-009</a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 bg-lght">
          <h1 className="oswald-600 mt-5">LANDING PAGE</h1>
          <h1 className="oswald-600 "> TEMPLATE </h1>

          <p className="oswald-601 mt-5 ">LOREM IPSUM </p>

          <div className="row ">
            <div className="col-md-7">
              <p className="p-opacity">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>

              <div className="d-grid gap-2 d-md-block">
                <button className="btn btn-primary zero-radius" type="button">
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="ratio ratio-16x9 mt-5">
            <iframe
              src="https://www.youtube.com/embed/wA-AiVyXiA4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="range-slider">
            <input
              type="range"
              id="progressRange"
              className="form-range"
              min="0"
              max="100"
              value="25"
              step="1"
            />
          </div>
        </div>
      </div>

      <div className="row ">
        <div className="col-md-4 px-3">
          <p className="oswald-601 mt-5 ">LOREM IPSUM </p>
          <div className="custom-height bg-light"></div>
          <p className="p-opacity pt-2">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
        </div>
        <div className="col-md-4 px-3">
          <p className="oswald-601 mt-5 ">LOREM IPSUM </p>
          <div className="custom-height bg-light"></div>
          <p className="p-opacity pt-2">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
        </div>

        <div className="col-md-4 px-3">
          <p className="oswald-601 mt-5 ">LOREM IPSUM </p>
          <div className="custom-height bg-light">.</div>
          <p className="p-opacity pt-2">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-8">
          <h1 className="oswald-600 ">COMPANY ADVANTAGES</h1>
        </div>
        <div className="col-md-4">
          <div className="row justify-content-end ">
            <div className="col-md-1 custom-height-4 bg-light mx-2"></div>
            <div className="col-md-1 custom-height-4 bg-light mx-2"></div>
            <div className="col-md-1 custom-height-4 bg-light mx-2"></div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-md-4">
          <div className="row col-md-3-height">
            <div className="col-md-3  bg-light"></div>
            <div className="col-md-9">
              <p className="oswald-601 ">DOOLOR FIT BOR </p>
              <p className="p-opacity pt-2">
                There are many variations of pateration in some form, by
                injected humour.
              </p>
            </div>
          </div>

          <div className="row col-md-3-height pb-2">
            <div className="col-md-3  bg-light"></div>
            <div className="col-md-9">
              <p className="oswald-601 ">DOOLOR FIT BOR </p>
              <p className="p-opacity pt-2">
                There are many variations of pateration in some form, by
                injected humour.
              </p>
            </div>
          </div>

          <div className="row col-md-3-height pb-2">
            <div className="col-md-3  bg-light"></div>
            <div className="col-md-9">
              <p className="oswald-601 ">DOOLOR FIT BOR </p>
              <p className="p-opacity pt-2">
                There are many variations of pateration in some form, by
                injected humour.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 px-4">
          <div className="row col-md-3-height">
            <div className="col-md-3  bg-light"></div>
            <div className="col-md-9">
              <p className="oswald-601 ">DOOLOR FIT BOR </p>
              <p className="p-opacity pt-2">
                There are many variations of pateration in some form, by
                injected humour.
              </p>
            </div>
          </div>
          <div className="row col-md-3-height pb-2">
            <div className="col-md-3  bg-light"></div>
            <div className="col-md-9">
              <p className="oswald-601 ">DOOLOR FIT BOR </p>
              <p className="p-opacity pt-2">
                There are many variations of pateration in some form, by
                injected humour.
              </p>
            </div>
          </div>
          <div className="row col-md-3-height pb-2">
            <div className="col-md-3  bg-light"></div>
            <div className="col-md-9">
              <p className="oswald-601 ">DOOLOR FIT BOR </p>
              <p className="p-opacity pt-2">
                There are many variations of pateration in some form, by
                injected humour.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 px-4 bg-secondary">
          <div className="mt-4 ps-3">
            <p className="oswald-601 dolor-color mb-1-custom px-3">LOREIPSUM</p>
            <p className="oswald-601 dolor-color-1 mb-1-custom  ps-2 ms-4">
              DOOLOR
            </p>
            <p className="oswald-601 dolor-color mb-1-custom px-1">
              TAURUS BIGOR
            </p>
          </div>
        </div>
        <div class="row row-height  bg-secondary mt-5">
          <h1 class="oswald-500 text-center oswald-500-color">OUR CASES</h1>

          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <CarouselData />
              </div>
              <div class="carousel-item">
                <CarouselData />
              </div>
              <div class="carousel-item">
                <CarouselData />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div>

        </div>
        <div class="container">
          <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
            </ul>
            <p class="text-center text-muted">© 2021 Company, Inc</p>
          </footer>
        </div>

      </div>
    </div>
  );
}

export default BootstrapLayoutFiveDesign;
