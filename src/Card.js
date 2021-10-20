import React from 'react'
import './Card.css'

export default function Card({
		profileImage,
		imageBorderColor, 
		background,
		name, 
		status,
		statusColor,
		title,
		titleColor, 
		body, 
		bodyColor,
		pattern,
		selector
	}){

	return(
		<section 
			style={{
				backgroundColor: `var(--${background})`
			}} 
			className={`card ${selector}`}
		>
			<div className="card-profile">
				<img 
					style={{border: `2px solid var(--${imageBorderColor})`}}
					src={profileImage} 
					alt="profile"
				/>
				<div className="profile-info">
					<p 
						className="profile-name"
						style={{color:`var(--${titleColor})`}}
					>
						{name}
					</p>
					<p 
						className="profile-status"
						style={{color: `var(--${statusColor})`}}
					>
						{status}
					</p>
				</div>
			</div>

			<h2 style={{color:`var(--${titleColor})`}} >{title}</h2>
			<p className="body" style={{color:`var(--${bodyColor})`}}>{`"${body}"`}</p>
		</section>
	)

}