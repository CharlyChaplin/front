import { styled } from "styled-components";

import { HEADER_HEIGHT, Z_INDEX_LEVEL_2 } from "consts";
import colors from "consts/colors";

export const Wrapper = styled.header`
	padding: 14px 20px;
	display: flex;
	align-items: center;
	transition: margin 0.25s ease 0s;
	background-color: ${colors.primary};
	height: ${HEADER_HEIGHT}px;
	z-index: ${Z_INDEX_LEVEL_2};
	color: #FFF;
`