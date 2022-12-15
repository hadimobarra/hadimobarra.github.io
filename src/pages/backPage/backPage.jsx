import React from 'react';
import Layout from '../../layout/layout';
import SecondPagePhoto from '../../components/photoSecondPage/SecondPhotoSection';
import LearnSrc from '../../components/srcContainer/srcContainer';
import Apprentices from '../../components/apprentices/apprentices';

const BackPage = () => {
	return (
		<Layout>
			<SecondPagePhoto />
			<LearnSrc />
			<Apprentices />
		</Layout>
	)
}

export default BackPage;
