import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
	Wrapper, LeftSide, Logo, Burger,
	SearchWrapper, BtnSearch, RightSide,
	BtnOrders, BtnFavorites, BtnNotifications, BtnCart,
} from './styled';
import { selectIsLogged } from 'features/App/selectors';
import { paths } from 'routes/helpers';
import logoPng from 'img/logo.png';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import UserDropdownMenu from './UserDropdownMenu';


const Header = () => {
	const isLogged = useSelector(selectIsLogged);
	const [searchInput, setSearchInput] = useState('');

	const changeSearchInput = useCallback(e => setSearchInput(e.target.value), []);

	return (
		<>
			<Wrapper>
				<LeftSide>
					<Link to={paths.home}>
						<Logo src={logoPng} />
					</Link>

					<Button>
						<Burger>
							<div /><div /><div />
						</Burger>

						<span>Каталог</span>
					</Button>
				</LeftSide>

				<SearchWrapper>
					<Input
						value={searchInput}
						onChange={changeSearchInput}
						isGhost
						placeholder='Поиск товаров'
					/>
					<BtnSearch />
				</SearchWrapper>

				<RightSide>
					{
						isLogged
							? <>
								<BtnOrders />
								<BtnFavorites />
								<BtnNotifications />
								<BtnCart />
								<UserDropdownMenu />
							</>
							: <Link to={paths.login}>
								&nbsp;&nbsp;&nbsp;
								Войти
							</Link>
					}
				</RightSide>

			</Wrapper>
		</>
	);
}

export default Header;