'use client';
import initIsotope from '@/common/initIsotope';
import React, { useEffect, useLayoutEffect } from 'react';

function Portfolio() {
  useEffect(() => {
    initIsotope();
  }, []);
  return (
    <section className="work-grid section-padding pb-0">
      <div className="container">
        <div className="row mb-80">
          <div className="col-lg-4">
            <div className="sec-head">
              <h6 className="sub-title main-color mb-10">DISCOVER OUR CASES</h6>
              <h3>Latest Work</h3>
            </div>
          </div>
          <div className="filtering col-lg-8 d-flex justify-content-end align-items-end">
            <div>
              <div className="filter">
                <span data-filter="*" className="active" data-count="08">
                  All
                </span>
                <span data-filter=".design" data-count="03">
                  Design
                </span>
                <span data-filter=".development" data-count="02">
                  Development
                </span>
                <span data-filter=".marketing" data-count="03">
                  Marketing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="gallery row md-marg">
          <div className="col-lg-4 col-md-6 items design">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/works/1/union.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Website</span>
                  <h6>Union Living</h6>
                </div>
                <div className="ml-auto">
                  <a href="https://unionliving.in/" target='_blank'>
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items marketing">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/works/1/orex.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Website</span>
                  <h6>Orex Venture</h6>
                </div>
                <div className="ml-auto">
                  <a href="https://orex.asynk.in/" target='_blank'>
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items design">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/works/1/tejaswani.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">E-Commerce Website</span>
                  <h6>Tejaswani Herbs</h6>
                </div>
                <div className="ml-auto">
                  <a href="https://tejaswaniherbs.com/" target='_blank'>
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items development">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/works/1/royal.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">E-commerce Website</span>
                  <h6>Royal Bird Incense</h6>
                </div>
                <div className="ml-auto">
                  <a href="https://royalbirdincense.com/" target='_blank'>
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items design">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/works/1/preppy.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">E-commerce Website</span>
                  <h6>Preppy </h6>
                </div>
                <div className="ml-auto">
                  <a href="https://preppyshoe.com/" target='_blank'>
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items marketing">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/works/1/meltzsweet.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Website</span>
                  <h6>Meltz London</h6>
                </div>
                <div className="ml-auto">
                  <a href="https://meltzsweets.com/" target='_blank'>
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items marketing">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/works/1/ekttaar.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">E-commerce Website</span>
                  <h6>Ekttaar</h6>
                </div>
                <div className="ml-auto">
                  <a href="https://www.ekttaar.com/" target='_blank'>
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items development">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/works/1/grc.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Website</span>
                  <h6>GRC Logistics</h6>
                </div>
                <div className="ml-auto">
                  <a href="https://www.grclogistics.com/#/" target='_blank'>
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items development">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/works/1/ashmit.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Website</span>
                  <h6>Ashmit Associates</h6>
                </div>
                <div className="ml-auto">
                  <a href="https://ashmitassociates.com/" target='_blank'>
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items development">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/works/1/introtelecom.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Website</span>
                  <h6>Intro Telecom</h6>
                </div>
                <div className="ml-auto">
                  <a href="https://introtelecom.in/" target='_blank'>
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
