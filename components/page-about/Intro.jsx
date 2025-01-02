import React from 'react';

function Intro() {
  return (
    <section className="page-intro section-padding pb-0">
      <div className="container">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="img md-mb80">
              <div className="row">
                <div className="col-6">
                  <img src="/assets/imgs/intro/i1.jpg" alt="" />
                  <div className="img-icon">
                    <img src="/assets/imgs/arw0.png" alt="" />
                  </div>
                </div>
                <div className="col-6 mt-40">
                  <img src="/assets/imgs/intro/i2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="cont">
              <h3 className="mb-30">
                Empowering{' '}
                <span className="fw-200">Your Digital</span> With
                Experience
              </h3>
              <p>
                Asynk is a forward-thinking web service agency specializing in web development, social media marketing, and organic marketing strategies. Our mission is to empower businesses with cutting-edge digital solutions that drive growth and enhance online presence. At Asynk, we combine creativity, technology, and data-driven insights to deliver exceptional results tailored to your unique goals. Partner with us to unlock the full potential of your digital journey!
              </p>
              <a href="/portfolio-grid" className="underline main-color mt-40">
                <span className="text">
                  Our Work <i className="ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
