import React, { useCallback, useMemo } from 'react';
import { BtnsWrapper, Desc, Image, InnerWrapper, LikeWrapper, PriceDiscounted, PriceRegular, PriceRegularWhenDiscounted, PriceWrapper, Title, Wrapper } from './styled';
import { ReactComponent as HeartEmpty } from 'img/heart-empty.svg';
import { ReactComponent as HeartFilled } from 'img/heart-filled.svg';
import { Link, useLocation } from 'react-router-dom';
import Button from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from 'features/Favorites/reducer';
import { paths } from 'routes/helpers';
import colors from 'consts/colors';


const ProductCard = ({
	id,
	slug,
	imgSrc,
	price,
	priceDiscounted,
	title,
	desc,
	isLiked,
	hideLikes = false,
}) => {
	const dispatch = useDispatch();
	const location = useLocation();


	const handleFavorites = useCallback(e => {
		const { productId } = e.currentTarget.dataset;
		dispatch(!isLiked
			? addToFavorites(+productId)
			: removeFromFavorites(+productId));

	}, [dispatch, isLiked]);

	const isFavoritePage = useMemo(
		() => location.pathname === paths.favorites, [location.pathname]
	);

	const removeFavorite = useCallback(e => {
		const { productId } = e.currentTarget.dataset;
		dispatch(removeFromFavorites(+productId));
	}, [dispatch]);


	return (
		<>
			<Wrapper>
				{!hideLikes && (
					<LikeWrapper
						data-product-id={id}
						onClick={handleFavorites}
						color={isLiked ? colors.danger : 'transparent'}
					>
						<HeartEmpty />
					</LikeWrapper>
				)}

				<Link to={`/product/${slug || id}`}>
					<Image src={imgSrc} />
				</Link>

				<InnerWrapper>

					<PriceWrapper>
						{
							Number.isInteger(priceDiscounted)
								?
								<>
									<PriceDiscounted>{priceDiscounted} &#8381;</PriceDiscounted>
									<PriceRegularWhenDiscounted>{price}</PriceRegularWhenDiscounted>
								</>
								: (<PriceRegular>{price}</PriceRegular>)
						}
					</PriceWrapper>

					<Title className='h4'>
						<Link to={`/product/${slug || id}`}>{title}</Link>
					</Title>

					<Desc>{desc}</Desc>

				</InnerWrapper>

				<BtnsWrapper>
					<Button block>В корзину</Button>
					{
						isFavoritePage &&
						<Button
							type='danger'
							block
							onClick={removeFavorite}
							data-product-id={id}
						>Удалить</Button>
					}
				</BtnsWrapper>

			</Wrapper>
		</>
	);
}

export default ProductCard;