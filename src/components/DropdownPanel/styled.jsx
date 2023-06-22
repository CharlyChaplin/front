import styled from 'styled-components'

import { Z_INDEX_LEVEL_1 } from 'consts'


export const Wrapper = styled.div`
  position: relative;
`


export const DropdownWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06);
  position: absolute;
  top: calc(100% + 10px);
  ${p => p.toLeft ? 'right' : 'left'}: 0;
  z-index: ${Z_INDEX_LEVEL_1};
`
