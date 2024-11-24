import React from 'react';

function BootstrapLayoutThirdDesign() {
  return (

    <>
      <div className='row-one bg-primary'></div>

      <div class="container  row-two ">
        <div class="row ">
          {/* <!-- 9 Column --> */}
          <div class="col-md-9">
            <div class="row ">
              {/* <!-- 9 Column --> */}
              <div class="col-md-9">
                <div class="p-3  text-center">
                  <div className="row">
                    <div class="col-md-4">
                      <div class="card card-width bg-success text-white" >
                        <img class="card-img-top" src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" alt="Card image cap" />
                        <div class="card-body">
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card card-width bg-light text-primary" >
                        <img class="card-img-top" src="..." alt="Card image cap" />
                        <div class="card-body">
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                      </div>

                    </div>
                    <div class="col-md-4">
                      <div class="card card-width bg-secondary text-white" >
                        <img class="card-img-top" src="..." alt="Card image cap" />
                        <div class="card-body">
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row  mt-4" >
                    <div class="col-md-4  ">
                      <div class="card card-width bg-success text-white" >
                        <img class="card-img-top" src="..." alt="Card image cap" />
                        <div class="card-body">
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 ">
                      <div class="card card-width  bg-danger text-white" >
                        <img class="card-img-top" src="..." alt="Card image cap" />
                        <div class="card-body">
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                      </div>

                    </div>
                    <div class="col-md-4">
                      <div class="card card-width bg-warning  text-white" >
                        <img class="card-img-top" src="..." alt="Card image cap" />
                        <div class="card-body">
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="col-md-12">

                    <div class="card card-bottom-width mt-2" >

                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                      </ul>
                      <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
              {/* <!-- 3 Column --> */}
              <div class="col-md-3">
                <div class="p-3 bg-secondary text-white text-center h-90 mt-3">3-Column Content</div>
              </div>
            </div>

          </div>
          {/* <!-- 3 Column --> */}
          <div class="col-md-3">
            <div class="p-3 bg-secondary text-white text-center mt-3">3-Column Content</div>
            <img src="https://static.vecteezy.com/ti/photos-gratuite/t2/48021360-colore-lezard-dans-neon-couleurs-fonce-contexte-avec-une-fermer-photo.jpg" class="custom-img" alt="Custom Image" />
            <div class="row">
              <div class="p-3 bg-secondary text-white text-center mt-3">3-Column Content</div>
            </div>
            <div class="row mt-2">
              <div class="col-4 bg-primary text-white text-center p-3">
              </div>
              <div class="col-8 bg-secondary text-white text-center p-3">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>

            <div class="row mt-2">
              <div class="col-4 bg-primary text-white text-center p-3">
              </div>
              <div class="col-8 bg-secondary text-white text-center p-3">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div >
    </>
  )
}

export default BootstrapLayoutThirdDesign;
