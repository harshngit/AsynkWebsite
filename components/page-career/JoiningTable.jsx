"use client";
import { client } from '@/app/client';
import React, { useEffect, useState } from 'react';

const JoiningTable = () => {
	const [careerEntries, setCareerEntries] = useState([]);

	useEffect(() => {
		// Fetch data from the Sanity client
		client
			.fetch(`*[_type == "careerEntry"]{ position, experience, form }`)
			.then((data) => setCareerEntries(data))
			.catch(console.error);
	}, []);

	return (
		<>
			<table className="career-table section-padding">
				<thead>
					<tr>
						<th>Position</th>
						<th>Experience</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{careerEntries.length > 0 ? (
						careerEntries.map((item, index) => (
							<tr key={index}>
								<td>{item?.position}</td>
								<td>{item?.experience}</td>
								<td>
									<a
										href={item?.form}
										target="_blank"
										rel="noopener noreferrer"
										className="butn butn-full butn-bord radius-30"
									>
										Apply Now
									</a>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan="3">No career entries available.</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};

export default JoiningTable;
