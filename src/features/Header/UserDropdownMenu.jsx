import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from 'routes/helpers';
import { UserProfileDropdown } from './styled';
import { useSelector } from 'react-redux';
import { selectUserData } from 'features/UserData/selectors';
import DropdownPanel from 'components/DropdownPanel/DropdownPanel';
import UserAvatar from './UserAvatar';


const UserDropdownMenu = () => {
	const navigate = useNavigate();

	const { nameFirst, nameLast, displayName } = useSelector(selectUserData);

	const handleLogout = useCallback(() => navigate(paths.logout), [navigate]);

	return (
		<>
			<DropdownPanel
				toggler={props => <UserAvatar onClick={props.onClick} />}
				toLeft
			>
				<UserProfileDropdown>
					<div>
						<strong>
							{displayName || (nameFirst + ' ' + nameLast)}
						</strong>
					</div>

					<hr />

					<div>Заказы</div>
					<div>Возвраты</div>
					<div>Избранное</div>
					<div>Справка</div>
					<div>Поддержка</div>
					<div>Настройки</div>

					<hr />

					<div onClick={handleLogout}>Выйти</div>
				</UserProfileDropdown>

			</DropdownPanel>
		</>
	);
}

export default UserDropdownMenu;