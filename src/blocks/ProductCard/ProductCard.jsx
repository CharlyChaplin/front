import React from 'react';
import { Desc, Image, InnerWrapper, LikeWrapper, PriceDiscounted, PriceRegular, PriceRegularWhenDiscounted, PriceWrapper, Title, Wrapper } from './styled';
import { ReactComponent as HeartEmpty } from 'img/heart-empty.svg';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';


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
	return (
		<>
			<Wrapper>
				{!hideLikes && (
					<LikeWrapper
						data-product-id={id}
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

				<Button>В корзину</Button>

			</Wrapper>
		</>
	);
}

export default ProductCard;