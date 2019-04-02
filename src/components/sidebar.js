import React from 'react';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';

const burgerBarClassName = 'burger-bar-class';
const burgerButtonClassName = 'burger-button-class';
const StyleWrapper = styled('div').attrs({
  burgerButtonClassName,
  burgerBarClassName,
})`
  .${burgerButtonClassName} {
    top: 8px;
    right: 8px;
    @media screen and (min-width: 600px) {
      display: none;
    }
  }
  .${burgerBarClassName} {
    background: black;
  }
`;

export default props => {
  return (
    <StyleWrapper>
      <Menu
        burgerBarClassName={burgerBarClassName}
        burgerButtonClassName={burgerButtonClassName}
        right={props.right}
      >
        <a className="menu-item" href="/">
          Home
        </a>

        <a className="menu-item" href="/designs">
          Designs&etc
        </a>

        <a className="menu-item" href="/react">
          Resume
        </a>
      </Menu>
    </StyleWrapper>
  );
};
