import React ,{useEffect}  from 'react';
import './card.scss';
import {Link, Outlet} from 'react-router-dom';
import data from '../../data/card.json';
// import {useEffect} from "@types/react";
const Card = () => {

	return ( 
		<>
		<div>
		<h2 className="cardsIn__sub cardsIn wow fadeInDown" data-wow-delay="2.5s">مسیرت رو انتخاب من </h2>
			<div className="cardsIn__container cardsIn wow fadeInDown" data-wow-delay="2.6s">
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
