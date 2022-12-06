import React from 'react';
import './card.scss';

import data from '../../data/card.json';
const Card = () => {

	return ( 
		<>
		<div className="card">
		<h2 className="card__sub">مسیرت رو انتخاب من </h2>
			<div className="card__container">
			{data && data.map(post => {
				return(
					<div className="card__item" key={post.id}>
						<img className="card__image" src={require('../../assets/images' + post.image) } alt="item"/>
				
						<h2 className="card__title">{post.title}</h2>
					</div>

				)
				
			})}
			</div>

		</div>


		</>

	);

}
export default Card;
