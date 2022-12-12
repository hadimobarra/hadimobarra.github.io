import React from 'react';
import './card.scss';
import {Link, Outlet} from 'react-router-dom';
import data from '../../data/card.json';
const Card = () => {

	return ( 
		<>
		<div className="cardsIn">
		<h2 className="cardsIn__sub">مسیرت رو انتخاب من </h2>
			<div className="cardsIn__container">
			{data && data.map(post => {
				return(
					<Link className="cardsIn__item" key={post.id} to={post.to} >
						<img className="cardsIn__image" src={require('../../assets/images' + post.image) } alt="item"/>
				
						<h2 className="cardsIn__title">{post.title}</h2>
					</Link>

				)
				
			})}
			</div>

		</div>
		<Outlet />
		</>

	);

}
export default Card;
