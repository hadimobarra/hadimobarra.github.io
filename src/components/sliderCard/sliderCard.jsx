import React from 'react';

import './sliderCard.scss';

const CardItems = ({img, name, link}) => {
	return (
		<div className="card">
			<img className="card-img" src={img}/>
			<p className="card-name" >{name}</p>
			<img className="card-link" src={link} />
		</div>
	)
}

export default CardItems;
