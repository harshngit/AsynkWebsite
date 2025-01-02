'use client';
import isInView from '@/common/isInView';
import React, { useEffect } from 'react';
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill, RiCheckboxCircleLine } from "react-icons/ri";

function Intro() {
  function handleShowProgressValues() {
    isInView({
      selector: '.skill-progress .progres',
      isElements: true,
      callback: (element) => {
        element.style.width = element.getAttribute('data-value');
      },
    });
  }
  useEffect(() => {
    window.addEventListener('scroll', handleShowProgressValues);
    return () => window.removeEventListener('scroll', handleShowProgressValues);
  }, []);
  return (
    <section className="intro-skill section-padding mt-140 pt-0">
      <div className="container pt-80 pb-80">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="cont">
              <h6 className="sub-title main-color mb-15">Who Are We</h6>
              <h2 className="mb-15">Engineers who loves building Tech</h2>
              <p>
                We are a team of passionate engineers in Mumbai, dedicated to building innovative tech solutions. We specialize in automating business processes to help our clients achieve their tech goals efficiently.
              </p>
              <div className="list_about">
                <ul>
                  <li>
                    <RiCheckboxCircleFill size={20} />
                    Highly Skilled Developers
                  </li>
                  <li>
                    <RiCheckboxCircleFill size={20} />
                    Masters of 100+ AI Powered Technologies
                  </li>
                  <li>
                    <RiCheckboxCircleFill size={20} />
                    Experts in Personalization and Automation
                  </li>
                </ul>
              </div>
              {/* <div className="skills-box row mt-80">
                <div className="col-md-6">
                  <div className="skill-item sm-mb30">
                    <h5 className="sub-title mb-15">UI / UX Design 90%</h5>
                    <div className="skill-progress">
                      <div className="progres" data-value="90%"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="skill-item">
                    <h5 className="sub-title mb-15">Development 80%</h5>
                    <div className="skill-progress">
                      <div className="progres" data-value="80%"></div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="imgs">
              <div className="img1">
                <img src="/assets/imgs/intro/2.jpg" alt="" />
              </div>
              <div className="img2">
                <img src="/assets/imgs/intro/03.jpg" alt="" />
              </div>
              <div className="img3">
                <img src="/assets/imgs/intro/04.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
