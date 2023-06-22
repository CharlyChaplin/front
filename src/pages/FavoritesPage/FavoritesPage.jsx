import { PageWrapper } from 'App.styled';
import { selectFavorites } from 'features/Favorites/selector';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { ProductGroupContainer } from './styled';
import { dummyProducts } from 'pages/dummyProducts';
import ProductCard from 'blocks/ProductCard/ProductCard';


const FavoritesPage = () => {
	const idsInFavorites = useSelector(selectFavorites);


	return (
		<>
			<Helmet>Главная - KPL Market</Helmet>

			<PageWrapper>
				<h2>Избранное</h2>

				{
					idsInFavorites.length
						? <ProductGroupContainer>
							{
								dummyProducts
									.filter(p => idsInFavorites.includes(p.id))
									.map(p => (
										<ProductCard
											{...p}
											key={p.id}
											isLiked={false}
											hideLikes={true}
										/>
									))
							}
						</ProductGroupContainer>
						: <>
							<hr />
							<p>Пока в Избранном ничего нет</p>
						</>
				}
			</PageWrapper>
		</>
	);
}

export default FavoritesPage;