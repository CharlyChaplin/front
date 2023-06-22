import { UserAvatarWrapper } from './styled';


const UserAvatar = props => (
	<UserAvatarWrapper onClick={props.onClick}>
		<img src='https://i.pravatar.cc/46' alt='User avatar' />
	</UserAvatarWrapper>
)

export default UserAvatar;
