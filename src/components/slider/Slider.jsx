import React, {useState, useEffect} from 'react';
import Card from '../card/card';
import Boy1 from '../../assets/images/pic 3.png';
import Boy2 from '../../assets/images/pic 4.png';
import Girl1 from '../../assets/images/pic 1.png';
import Girl2 from '../../assets/images/pic 2.png';
import LinkedIn from '../../assets/images/linkedin.png';
import './Slider.scss';
import Right from '../../assets/images/Vector.png';
import Left from '../../assets/images/Vector(1).png';

const Slider = () => {
	let json = [
		{name: 'Hassan Ketabi(1)', img: Boy2, linkTo: LinkedIn},
		{name: 'Hadi Mobarra(2)', img: Boy1, linkTo: LinkedIn},
		{name: 'Mobina Esmaili(3)', img: Girl1, linkTo: LinkedIn},
		{name: 'Mahya Behbody(4)', img: Girl2, linkTo: LinkedIn},
		{name: 'Melika Karimi(5)', img: Girl1, linkTo: LinkedIn},
		{name: 'Ali Ali(6)', img: Boy2, linkTo: LinkedIn},
		{name: 'Hanieh Aboutalebi(7)', img: Girl1, linkTo: LinkedIn},
		{name: 'Shaghayegh Mobasher(8)', img: Girl2, linkTo: LinkedIn}
	];

	const [slidesToShow, setSlidesToShow] = useState([0, 4]);

	const next = () => {
		let start = slidesToShow[0];
		let end = slidesToShow[1];
		if (end >= json.length ) {
			return 
		} else {
			start += 1;
			end += 1;
			setSlidesToShow([start, end]);
		}
	}

	const prev = () => {
		let prevStart = slidesToShow[0];
		let prevEnd = slidesToShow[1];
		if (prevStart <= 0) {
			return
		} else {
			prevStart -= 1;
			prevEnd -= 1;
			setSlidesToShow([prevStart, prevEnd]); 
		}
	}

	
	return (
		<div className="cardContainer" >
			<button className="btn" onClick={prev} ><img src={Left} /></button>
			{
				json.slice(slidesToShow[0], slidesToShow[1]).map((e, id) => {
					return (
						<Card name={e.name} img={e.img} link={e.linkTo} />
					)
			})
			}
			<button className="btn" onClick={next} ><img src={Right} /></button>
		</div>
	)
}

export default Slider;
