import React from 'react';
import FirstPagePhoto from '../../components/photoFirstPage/FirstPhotoSection';
import HamrahFamily from '../../components/bigFamily/BigFamily.js';
import Cards from '../../components/card/Card';
import Layout from '../../layout/layout';

const IntroPage = () => {
	return (
		<Layout>
			<FirstPagePhoto />
			<HamrahFamily />
			<Cards />
		</Layout>
	)
}

export default IntroPage;
