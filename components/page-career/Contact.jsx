"use client"

import { client } from '@/app/client';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

function Contact() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [message, setMessage] = useState("")
	const [resume, setResume] = useState("")

	const sendMessage = async () => {
		console.log(resume)
		const doc = {
			_type: "career",
			name: name,
			email: email,
			phone: phone,
			message: message,
			resume: {
				_type: "file",
				asset: {
					_type: "reference",
					_ref: resume?._id,
				},
			}
		}
		client.create(doc)
			.then((res) => {
				toast.success("Message Sent");
				// setTimeout(() => window.location.reload(), 2000); // Add a delay before reload to allow the toast to display
			})
			.catch((error) => {
				toast.error("Failed to send message");
				console.error(error);
			});
	};

	const handleupload = (e) => {
		const { type, name } = e.target.files[0];
		client.assets
			.upload("file", e.target.files[0], {
				contentType: type,
				filename: name,
			})
			.then((document) => {
				setResume(document);

			})
			.catch((error) => {
				console.log("Image upload error", error);
			});
	}
	return (
		<>
			<ToastContainer className=" mt-100" />
			<section className="contact section-padding">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 valign">
							<div className="sec-head info-box full-width md-mb80">
								<div className="phone fz-30 fw-600 underline main-color">
									<a href="tele:+91 89288 84804">+91 89288 84804</a>
								</div>
								{/* <div className="morinfo mt-50 pb-30 bord-thin-bottom">
				<h6 className="mb-15">Address</h6>
				<p>Besòs 1, 08174 Sant Cugat del Vallès, Barcelona</p>
			  </div> */}
								<div className="morinfo mt-30 pb-30 bord-thin-bottom">
									<h6 className="mb-15">Email</h6>
									<p>work@asynk.in</p>
								</div>

								<div className="social-icon mt-50">
									<a href="https://www.linkedin.com/company/assynk" target='_blank' className="hover-anim">
										<i className="fab fa-linkedin-in"></i>
									</a>
									<a href="https://www.instagram.com/asynk.in/" target='_blank' className="hover-anim">
										<i className="fab fa-instagram"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-7 offset-lg-1 valign">
							<div className="full-width">
								<div className="sec-head mb-50">
									<h6 className="sub-title main-color mb-15">Join Us</h6>
									<h3 className="text-u ls1">
										Send an <span className="fw-200">application</span>
									</h3>
								</div>
								<div
									id="contact-form"
									className="form2"
									method="post"

								>
									<div className="messages"></div>

									<div className="controls row">
										<div className="col-lg-6">
											<div className="form-group mb-30">
												<input
													id="form_name"
													type="text"
													name="name"
													value={name}
													onChange={(e) => setName(e.target.value)}
													placeholder="Name"
													required="required"
												/>
											</div>
										</div>

										<div className="col-lg-6">
											<div className="form-group mb-30">
												<input
													id="form_email"
													type="email"
													name="email"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
													placeholder="Email"
													required="required"
												/>
											</div>
										</div>
										<div className="col-12">
											<div className="form-group mb-30">
												<input
													id="form_subject"
													type="text"
													value={phone}
													onChange={(e) => setPhone(e.target.value)}
													name="phone"
													placeholder="Phone Number"
												/>
											</div>
										</div>

										<div className="col-12">
											<div className="form-group mb-30">
												<input
													id="form_subject"
													type="file"
													accept='.pdf'
													onChange={handleupload}
													name="resume"
													placeholder="Resume"
												/>
											</div>
										</div>

										<div className="col-12">
											<div className="form-group">
												<textarea
													id="form_message"
													name="message"
													placeholder="Message"
													value={message}
													onChange={(e) => setMessage(e.target.value)}
													rows="4"
													required="required"
												></textarea>
											</div>
											<div className="mt-30">
												<button
													onClick={sendMessage}

													className="butn butn-full butn-bord radius-30"
												>
													<span className="text">Let&lsquo;s Talk</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Contact;
