import React from 'react';
import { Helmet } from 'react-helmet';
import { PageWrapper } from 'App.styled';
import { ProductGroup, ProductGroupContainer } from './styled';
import ProductCard from 'blocks/ProductCard/ProductCard';
import { dummyProducts } from 'pages/dummyProducts';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'features/Favorites/selector';

const HomePage = () => {

	const idsInFavorites = useSelector(selectFavorites);

	return (
		<>
			<Helmet>
				<title>Главная - MW Marketplace</title>
			</Helmet>

			<PageWrapper>
				<ProductGroup>
					<h2>Рекомендуемые товары</h2>

					<ProductGroupContainer>
						{
							dummyProducts.map(p => (
								<ProductCard
									{...p}
									key={p.id}
									isLiked={idsInFavorites.includes(p.id)}
								/>
							))
						}
					</ProductGroupContainer>
				</ProductGroup>
			</PageWrapper>

		</>
	);
}

export default HomePage;