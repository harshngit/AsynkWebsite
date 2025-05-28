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
                <span data-filter="*" className="active" data-count="16">
                  All
                </span>
                <span data-filter=".ecom" data-count="04">
                  E-commerce
                </span>
                <span data-filter=".development" data-count="07">
                  Development
                </span>
                <span data-filter=".marketing" data-count="06
                ">
                  Marketing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="gallery row md-marg">
          {/* Union Living */}
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
          {/* Orex Venture */}
          <div className="col-lg-4 col-md-6 items development">
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
          {/* Tejaswini Herbs */}
          <div className="col-lg-4 col-md-6 items ecom">
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
          {/* Royal Bird Incense */}
          <div className="col-lg-4 col-md-6 items ecom">
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
          {/* Preppy */}
          <div className="col-lg-4 col-md-6 items ecom">
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
          {/* Meltz London */}
          <div className="col-lg-4 col-md-6 items development">
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
          {/* Ekttaar */}
          <div className="col-lg-4 col-md-6 items ecom">
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
          {/* GRC Logistics */}
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
          {/* Ashmit  */}
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
          {/* Inter Telecom */}
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
          {/* Rumman */}
          <div className="col-lg-4 col-md-6 items development">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/works/1/Rumanacc.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Website</span>
                  <h6>Ruman - Accounting Intelligence</h6>
                </div>
                <div className="ml-auto">
                  <a href="https://www.rumanaccounting.com/" target='_blank'>
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* RILD */}
          <div className="col-lg-4 col-md-6 items marketing">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/works/1/rild.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Marketing</span>
                  <h6>RILD</h6>
                </div>
                {/* <div className="ml-auto">
                  <a target='_blank'>
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          {/* dil se khana */}
          <div className="col-lg-4 col-md-6 items marketing">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/works/1/13.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Marketing</span>
                  <h6>Dil Se Khana</h6>
                </div>
                {/* <div className="ml-auto">
                  <a target='_blank'>
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          {/* Meri Banvat */}
          <div className="col-lg-4 col-md-6 items marketing">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/works/1/MeriBanvat.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Marketing</span>
                  <h6>Meri Banvat</h6>
                </div>
                {/* <div className="ml-auto">
                  <a target='_blank'>
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          {/* Janeil art works */}
          <div className="col-lg-4 col-md-6 items marketing">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/works/1/jeinil.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Marketing</span>
                  <h6>𝐉𝐀𝐈𝐍𝐈𝐋 𝐀𝐑𝐓 𝐉𝐄𝐖𝐄𝐋𝐋𝐄𝐑𝐘</h6>
                </div>
                <div className="ml-auto">
                  <a href='https://www.instagram.com/jainilartjewellery?igsh=MWloMXR3bWl2cHMwcQ%3D%3D' target='_blank'>
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Ambiator */}
          <div className="col-lg-4 col-md-6 items ecom">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/works/1/Ambiator.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">E-commerce Website</span>
                  <h6>Ambiator</h6>
                </div>
                <div className="ml-auto">
                  <a href="https://www.ambiator.com/" target='_blank'>
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Kevalya Marketing */}
          <div className="col-lg-4 col-md-6 items marketing">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/works/1/kevalyamarketing.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">MARKETING</span>
                  <h6>Kevlaya</h6>
                </div>
                <div className="ml-auto">
                  <a href="https://www.instagram.com/kevalya_house.of.elegance?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'>
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Ruman Marketing*/}
          <div className="col-lg-4 col-md-6 items marketing">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/works/1/rumanmarketing.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Marketing</span>
                  <h6>Ruman</h6>
                </div>
                <div className="ml-auto">
                  <a href='https://www.instagram.com/ruman.accounting?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank'>
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* RS */}
          <div className="col-lg-4 col-md-6 items development">
            <div className="item mb-50">
              <div className="img">
                <img src="/assets/imgs/works/1/rs.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Website</span>
                  <h6>Riddhi Siddhi</h6>
                </div>
                <div className="ml-auto">
                  <a href="https://www.riddhisiddhicpl.in/" target='_blank'>
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
