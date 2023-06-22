import React, { useState } from 'react';

import { Wrapper, InputItself, Label, TogglePasswordVisibility } from './styled';

const Input = ({
	value,
	onChange = () => { },
	onFocus = () => { },
	name,
	label,
	placeholder,
	type = 'text',
	isGhost = false,
	autoComplete,
	icon,
	disabled
}) => {
	const [passwordVisibility, setPasswordVisibility] = useState(false);

	const handleTogglePasswordVisibilityClick = () => setPasswordVisibility(!passwordVisibility);

	const inputItself = (
		<InputItself
			name={name}
			onChange={onChange}
			onFocus={onFocus}
			type={type === 'password' && passwordVisibility ? 'text' : type}
			placeholder={placeholder}
			value={value}
			isGhost={isGhost}
			autoComplete={autoComplete || ''}
			icon={icon}
			disabled={disabled}
		/>
	);

	const togglePassword = (
		<TogglePasswordVisibility
			passwordVisibility={passwordVisibility}
			onClick={handleTogglePasswordVisibilityClick}
		/>
	);

	return (
		<Wrapper>
			{
				label
					? <Label>
						<div>
							<p>{label}</p>
							{inputItself}
							{type === 'password' && togglePassword}
						</div>

						{icon && <i>{icon}</i>}
					</Label>
					: <>
						{inputItself}
						{type === 'password' && togglePassword}
					</>
			}
		</Wrapper>
	);
}

export default Input;