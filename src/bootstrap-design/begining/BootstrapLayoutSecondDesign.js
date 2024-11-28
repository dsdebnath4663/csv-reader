import React from 'react';

function BootstrapLayoutSecondDesign() {
  return (
    <><div className='row-one'>

    </div>
      <div class="container row-two">
        <div class="row ">
          <div class="col-9 text-center p-3">
            {/* <!-- Responsive video --> */}
            <div class="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/wA-AiVyXiA4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
            <div class="row">
              <div class="col-4 text-center p-3">
                <div class="card">
                  <div class="card-body">
                    This is some text within a card body.
                  </div>
                </div>
              </div>
              <div class="col-4  text-center p-3">
                <div class="card">
                  <div class="card-body">
                    This is some text within a card body.
                  </div>
                </div>
              </div>
              <div class="col-4  text-center p-3">
                <div class="card">
                  <div class="card-body">
                    This is some text within a card body.
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <p class="font-weight-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className='row'>
              <div class="card">
                <div class="card-body">
                  This is some text within a card body.
                </div>
              </div>
            </div>
          </div>
          <div class="col-3 text-center p-3">
            <div className='row'>
              <div class="card">
                <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80" class="card-img" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>


            <div className='row right-column-second-card'>
              <div class="card">
                <div class="card-body">
                  This is some text within a card body.
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-3 bg-primary text-white text-center p-3">
                Column with 3/12 width
              </div>
              <div class="col-9 bg-secondary text-white text-center p-3">
                <div class="row">

                  <p class="font-weight-normal">Lorem Ipsusions of Lorem Ipsum.</p>

                  <div class="card"><div class="card-body">This body.</div></div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default BootstrapLayoutSecondDesign;
