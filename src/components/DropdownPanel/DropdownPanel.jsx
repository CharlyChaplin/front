import React, { useCallback, useRef, useState } from 'react';
import { DropdownWrapper, Wrapper } from './styled';
import { useOnClickOutside } from 'helpers/hooks';


const DropdownPanel = ({ toggler, children, toLeft = false }) => {
	const dropdownWrapperRef = useRef(null);

	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = useCallback(() => setIsVisible(pred => !pred), []);

	useOnClickOutside(dropdownWrapperRef, toggleVisibility);

	const Toggler = toggler;

	return (
		<>
			<Wrapper>
				<Toggler onClick={toggleVisibility} />

				{
					isVisible &&
					<DropdownWrapper ref={dropdownWrapperRef} toLeft={toLeft}>
						{children}
					</DropdownWrapper>
				}
			</Wrapper>
		</>
	);
}

export default DropdownPanel;