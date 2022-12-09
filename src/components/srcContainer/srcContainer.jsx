import React from 'react';
import Resource from '../resources/resources';
import './srcContainer';
//import myJson from '../../data/sourceData.json';

const SrcContainer = () => {
	let srcJson = [
		{title: 'The Design of everyday Thing', body: '1. by Jake knapp (Author), John zeratsky (Author), Braden kowitz (Author), Dan Bittner (Reader)', review: '2,910'},
		{title: 'Universal Principles of Design', body: '2. by Jake knapp (Author), John zeratsky (Author), Braden kowitz (Author), Dan Bittner (Reader)', review: '3,418'},
		{title: 'Sprint: How To Solve Big Problems', body: '3. by Jake knapp (Author), John zeratsky (Author), Braden kowitz (Author), Dan Bittner (Reader)', review: '1,875'},
	];
	return (
		<div className="container" >
			<h2>Manabe YadGiri</h2>
			{
				srcJson.map((item, index) => {
					return (
						<Resource title={item.title} body={item.body} review={item.review} />
					)
			})
			}
		</div>
	)
}

export default SrcContainer;
