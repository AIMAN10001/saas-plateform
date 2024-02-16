import React from "react";

const Welcome = () => {
  return (
    <div className="welcome-area bg-color-4 fix area-padding-2">
      <div className="container">
        <div className="row d-flex flex-wrap align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="row">
              <div className="col-xl-6 col-lg-6 -col-md-6">
                <div
                  className="well-services first-well wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="services-img">
                    <a className="big-icon" href="#">
                      <img src="img/icon/t1.png" />
                    </a>
                  </div>
                  <div className="main-wel">
                    <div className="wel-content">
                      <h4>Latest Technology</h4>
                      <p>
                        Distinctio, numquam in modi fugit quod ducimus facere
                        eaque dignissimos quas omnis ratione?
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="well-services second-well wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="services-img">
                    <a className="big-icon" href="#">
                      <img src="img/icon/t2.png" alt="" />
                    </a>
                  </div>
                  <div className="main-wel">
                    <div className="wel-content">
                      <h4>Certik Certified</h4>
                      <p>
                        Laboriosam laborum mollitia fuga ducimus quo placeat nam
                        minima error nostrum numquam! Expedita, temporibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div
                  className="well-services three-well wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="services-img">
                    <a className="big-icon" href="#">
                      <img src="img/icon/t3.png" alt="" />
                    </a>
                  </div>
                  <div className="main-wel">
                    <div className="wel-content">
                      <h4>Mining plateform</h4>
                      <p>
                        Suscipit repellat possimus ab magni aliquam
                        perspiciatis? Facere molestias labore voluptatibus a
                        libero.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="well-services four-well wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="services-img">
                    <a className="big-icon" href="#">
                      <img src="img/icon/t4.png" alt="" />
                    </a>
                  </div>
                  <div className="main-wel">
                    <div wel-content>
                      <h4>Metaverse Blockchain</h4>
                      <p>
                        Velit sunt praesentium, reiciendis recusandae qui
                        aspernatur possimus autem, nam incidunt ex dolores
                        itaque.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="well-service-text">
              <div className="top-text-title">Ultimate Metaverse</div>
              <h2 className="main-title">
                {""}
                <span className="color-text-bold">Blockchain</span> provide you
                best services
              </h2>
              <p>
                Adipisicing elit. Assumenda animi repellat voluptas repudiandae
                minus ut tempore maiores cumque unde quaerat nihil optio
                deleniti sapiente officiis velit necessitatibus, quo soluta.
                Dignissimos consectetur adipisicing elit. Provident voluptatibus
                quod eius corporis? In rem porro deleniti, qui similique,
                tenetur facilis animi accusamus illo voluptatem molestiae esse
                sit tempore sunt.
              </p>
              <a className="services-btn coin-btn" href="/">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
