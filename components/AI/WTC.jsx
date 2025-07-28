'use client';
import isInView from '@/common/isInView';
import React, { useEffect } from 'react';
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill, RiCheckboxCircleLine } from "react-icons/ri";

function WTC() {
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
							<h6 className="sub-title main-color mb-15">Why AI/ML? Why Now?</h6>
							<h2 className="mb-15">Empowering the Future with AI</h2>
							<p>
								We are a dynamic tech agency delivering web and software solutions tailored to modern business needs.Trusted by startups and brands for building scalable digital platforms
							</p>
							<div className="list_about">
								<ul>
									<li>
										<RiCheckboxCircleFill size={20} />
										Smart Automation
									</li>
									<li>
										<RiCheckboxCircleFill size={20} />
										Personalized Intelligence
									</li>
									<li>
										<RiCheckboxCircleFill size={20} />
										Predictive Insights
									</li>
								</ul>
								<a
                                    href="/assets/imgs/pdf/AIAsynkDeck.pdf"
                                    download
                                    className="butn w-110 butn-sm butn-bg main-colorbg radius-5"
                                >
                                <span className="text">Download</span>
                                </a>
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
								<img src="/assets/imgs/intro/why.png" alt="" />
							</div>
							<div className="img2">
								<img src="/assets/imgs/intro/choose.png" alt="" />
							</div>
							<div className="img3">
								<img src="/assets/imgs/intro/us.png" alt="" />
							</div>
						</div>

					</div>

				</div>
			</div>
		</section>
	);
}

export default WTC;
