import colors from "consts/colors";

const { styled } = require("styled-components");

const Button = styled(({
	children,
	type = 'primary',
	disabled,
	block = false,
	onClick = () => { },
	...props
}) => (
	<button
		{...props}
		type="button"
		onClick={!disabled ? onClick : () => { }}
	>
		{children}
	</button>
))
	`
	user-select: none;
	cursor: ${(p) => p.disabled ? 'not-allowed' : 'pointer'};
	border-radius: 5px;
	display: inline-flex;
	align-items: center;
	width: ${(p) => p.block ? '100%' : 'fit-content'};
	justify-content: ${(p) => p.block ? 'center' : 'initial'};
	font-size: 14px;
	font-weight: 500;
	padding: 10px 22px;
	letter-spacing: 0.36px;

	border: 1px solid ${(p) => p.type === 'ghost' ? colors.primary : 'transparent'};

	background-color: ${(p) => {
		if (p.disabled) return '#c2c2c2'

		switch (p.type) {
			case 'primary': return colors.primary
			case 'secondary': return colors.secondary
			case 'ghost': return 'transparent'
			case 'danger': return colors.danger
			default: return colors.primary
		}
	}};

	color: ${(p) => {
		switch (p.type) {
			case 'primary': return '#fff'
			case 'secondary': return '#fff'
			case 'ghost': return colors.primary
			default: return '#fff'
		}
	}};
`;

export default Button;