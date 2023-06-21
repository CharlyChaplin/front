import React from 'react';
import { Helmet } from 'react-helmet';
import { TestDiv } from './styled';

const HomePage = () => {
	return (
		<>
			<Helmet>
				<title>Главная - MW Marketplace</title>
			</Helmet>

			<h1>Главная - MW Marketplace</h1>
			<TestDiv />
		</>
	);
}

export default HomePage;