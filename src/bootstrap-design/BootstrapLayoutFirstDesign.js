import React from 'react';

const BootstrapLayoutFirstDesign = () => {
  return (

    <><div className='color'>

    </div><div className="container mt-5 ">

        <div className="row">
          <div id="carouselExample" class="carousel slide slider-top">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896.jpg" class="d-block w-100 slider-height" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg" class="d-block w-100 slider-height" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmw2_zFJ1wAeEkc0YyaBeCzMnkUtWXTn6dhg&s" class="d-block w-100 slider-height" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div class="card-container">
          <div class="row">
            <div class="col-md-4">

              <div class="card">

                <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex justify-content-center">

              <div class="card">
                <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">

              <div class="card float-end">
                <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div></>
  );
};

export default BootstrapLayoutFirstDesign;
