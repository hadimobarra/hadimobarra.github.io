import React, {useState} from 'react';
import './resources.scss';
import upSign from '../../assets/icons/Vector 3.png';
import book from '../../assets/images/Rectangle 11.png'

const Resources = ({title, body, review}) => {
	const [toggle, setToggle] = useState(true);

	return (
		<div className="resources" >
			<div className={toggle? "resources-text": "resources-text0"} >
				<p className="resources-text_paragraph" >{title}</p>
				<div className="resources-text_lable">Book</div>
			</div>
			<img className={toggle? "resources-sign": "resources-sign0" } src={upSign} onClick={ () => setToggle(!toggle) } />	
		   { !toggle &&
			<div className="resources-items" >
				<div className="resources-items_img"><img src={book} /></div>
				<div className="resources-items_info" >
					<div className="resources-items_info__one" >
						<p className="resources-items_info__one__title" >{title}</p>
						<div className="resources-items_info__one__lable">Book</div>
					</div>
					<div className="resources-items_info__two" >
						<p>{body}</p>
					</div>
					<div className="resources-items_info__three" >Customer Reviews: {review} Ratings</div>
					<div className="resources-items_info__four" >Tajrobiate karamoz</div>	
				</div>
				<img className="resources-sign2" src={upSign} onClick={ () => setToggle(!toggle) } />
			</div>	
			}
		</div>
	)
}

export default Resources;
