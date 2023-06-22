import styled from 'styled-components'

import colors from 'consts/colors'


export const Wrapper = styled.div`
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  svg {
    cursor: pointer;
  }
`

export const LikeWrapper = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(${({ color }) => color === colors.danger ? 1.1 : 1.0});
  transition: all 0.3s cubic-bezier(0.75, -1, 0.21, -1) 0s;
  
  svg {
	 fill: ${(p => p.color)};
	 transition: fill 0.3s cubic-bezier(0.75, -1, 0.21, -1) 0s
  }
`

export const Image = styled.img`
  margin-bottom: 10px;
  width: 100%;
  height: 165px;
  border-radius: 4px;
  object-fit: scale-down;
`
export const InnerWrapper = styled.div`
	flex: 1 1 auto;
`

export const PriceWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
`

export const PriceRegular = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-right: 10px;
  color: ${colors.primary};
`

export const PriceRegularWhenDiscounted = styled.div`
  text-decoration: line-through;
  color: #999;
  font-size: 15px;
`

export const PriceDiscounted = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-right: 10px;
  color: ${colors.primary};
`

export const Title = styled.h3`
  margin-bottom: 15px;
`

export const Desc = styled.div`
  margin-bottom: 10px;
`

export const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px
  /* * + * {
    margin-top: 10px;
  } */
`
