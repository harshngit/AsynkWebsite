import React from 'react';

function Services() {
  return (
    <section className="services-inline2 section-padding sub-bg bord-bottom-grd bord-top-grd">
      <div className="container ontop">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Specialize</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Featured <span className="fw-200">Services.</span>
                </span>
              </h3>
            </div>
            {/* <div className="ml-auto vi-more">
              <a
                href="/page-services"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div> */}
          </div>
        </div>
        <div className="item">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">01</span>
                <div>
                  <span className="sub-title main-color mb-10">Web Marketing</span>
                  <h2>
                    E - <span className="fw-200">Commerce</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>
                  From Building Highly Scalable Website to Listings on Marketplaces, We Cover Everything in our E-commerce Service.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img">
                <img src="/assets/imgs/serv-img/service_1.png" alt="" />
                {/* <a href="/page-services-details">
                  <span className="ti-arrow-top-right"></span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">02</span>
                <div>
                  <span className="sub-title main-color mb-10">Web Development</span>
                  <h2>
                    Website & App <span className="fw-200">Development</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>
                  Asynk crafts exceptional websites, Application and CRMs seamlessly blending functionality and aesthetics for a standout online presence. Elevate your brand with us!
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img">
                <img src="/assets/imgs/serv-img/service_2.png" alt="" />
                {/* <a href="/page-services-details">
                  <span className="ti-arrow-top-right"></span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="item pb-0">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">03</span>
                <div>
                  <span className="sub-title main-color mb-10">Marketing</span>
                  <h2>
                    Email<span className="fw-200">& Whatsapp Marketing</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>
                  Monthly bulk email and WhatsApp marketing services with advanced automation for efficient and impactful customer outreach, tailored to your business needs.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img">
                <img src="/assets/imgs/serv-img/service_3.png" alt="" />
                {/* <a href="/page-services-details">
                  <span className="ti-arrow-top-right"></span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="item pb-0">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">04</span>
                <div>
                  <span className="sub-title main-color mb-10">Marketing</span>
                  <h2>
                    Organic<span className="fw-200">Content Marketing</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>
                  Boost your online presence with expert SEO, engaging blog writing, creative social media content, and viral meme marketing.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img">
                <img src="/assets/imgs/serv-img/service_3.png" alt="" />
                {/* <a href="/page-services-details">
                  <span className="ti-arrow-top-right"></span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="item pb-0">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">05</span>
                <div>
                  <span className="sub-title main-color mb-10">Development</span>
                  <h2>
                    AI<span className="fw-200">ML Development</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>
                  We are a dynamic tech agency delivering web and software solutions tailored to modern business needs.Trusted by startups and brands for building scalable digital platforms
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img">
                <img src="/assets/imgs/serv-img/service_5.png" alt="" />
                {/* <a href="/page-services-details">
                  <span className="ti-arrow-top-right"></span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
