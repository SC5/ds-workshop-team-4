import styled, { css } from 'styled-components'
import {
  isCircular,
  withHover
} from 'styled-utils'

const isIcon = ({ isIcon }) => {
  if (!isIcon) return
  return css`
    padding: 0px 0.5em;
    & .icon {
      margin: 0;
    }
  `
}

/* Default styles for all the buttons */
export const Button = styled.div`
  font-family: ${p => 'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", "Helvetica", "Arial", sans-serif'};
  font-weight: 400;
  height: ${p => '2.40em'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0px 1.0em;
  cursor: pointer;
  outline: none;
  border: 1px solid;
  border-color: transparent;
  border-radius: ${p => '3px'};
  box-sizing: border-box;
  line-height: 1.5;
  position: relative;
  user-select: none;
  text-decoration: none;
  background-color: ${p => p.color};
  color: ${p => p.textColor};
  font-size: ${p => p.size ? p.size : '1rem'};
  &:not(:last-child) {
    margin: 0 0.25em 0 0;
  }

  & .icon {
    margin: 0 5px 0 0;
    font-size: ${p => p.size ? p.size : '1rem'};
  }
  ${isIcon}
  ${isCircular}
`

/* Styled for a label element inside a button */
export const Label = styled.span`
  margin: 0;
  margin-left: 0.5em;
  padding: 0 1em 0 0.5em;
  display: inline-flex;
  border-radius: 0 ${p => '3px'} ${p => '3px'} 0;
  height: ${p => ('2.40em'.split('em')[0] - 0.1 + 'em')};
  line-height: ${p => '2.40em'};
  font-size: ${p => p.size ? p.size : '1rem'};
`;
