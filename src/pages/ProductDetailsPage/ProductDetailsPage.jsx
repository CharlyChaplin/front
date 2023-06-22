import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
	Wrapper,
	LikeWrapper,
	ImagesWrapper,
	Image,
	InfoWrapper,
	PriceWrapper,
	PriceRegular,
	PriceRegularWhenDiscounted,
	PriceDiscounted
} from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { dummyProducts } from 'pages/dummyProducts';
import { ReactComponent as HeartEmpty } from 'img/heart-empty.svg';
import { PageWrapper } from 'App.styled';
import { addToFavorites, removeFromFavorites } from 'features/Favorites/reducer';
import { selectFavorites } from 'features/Favorites/selector';
import colors from 'consts/colors';


const ProductDetailsPage = () => {
	const params = useParams();
	const dispatch = useDispatch();

	const [productDetails, setProductDetails] = useState();

	useEffect(() => {
		const found = dummyProducts.find(p => [String(p.id), p.slug].includes(params.idOrSlug));

		if (found) setProductDetails(found);
	}, [params.idOrSlug]);

	const idsInFavorites = useSelector(selectFavorites);

	const isLiked = useMemo(
		() => idsInFavorites.includes(productDetails?.id),
		[idsInFavorites, productDetails]
	)

	const handleFavorites = useCallback(e => {
		const { productId } = e.currentTarget.dataset;

		dispatch(
			!idsInFavorites.includes(+productId)
				? addToFavorites(+productId)
				: removeFromFavorites(+productId)
		)
	}, [dispatch, idsInFavorites]);


	if (!productDetails) return null;


	const { id, imgSrc, title, description, price, priceDiscounted } = productDetails;

	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>

			<PageWrapper>
				<Wrapper>
					<ImagesWrapper>
						<Image src={imgSrc} />

						<LikeWrapper
							data-product-id={id}
							onClick={handleFavorites}
							color={isLiked ? colors.danger : 'transparent'}
						>
							<HeartEmpty />
						</LikeWrapper>
					</ImagesWrapper>

					<InfoWrapper>
						<h1>{title}</h1>

						<PriceWrapper>
							{Number.isInteger(priceDiscounted) ? <>
								<PriceDiscounted>{priceDiscounted} ₽</PriceDiscounted>
								<PriceRegularWhenDiscounted>{price} ₽</PriceRegularWhenDiscounted>
							</> : (
								<PriceRegular>{price} ₽</PriceRegular>
							)}
						</PriceWrapper>

						<p>{description}</p>
					</InfoWrapper>
				</Wrapper>
			</PageWrapper>
		</>
	);
}

export default ProductDetailsPage;