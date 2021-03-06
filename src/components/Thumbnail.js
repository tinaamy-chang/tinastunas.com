import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Image = styled('img')`
  margin: 0;
  padding: 0;
  display: block;
  width: 500px;
  max-width: 100%;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 0.2em;
`;

const ThumbnailContainer = styled('div')`
  position: relative;
  margin: 1em;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 2px 8px 20px rgba(0, 0, 0, 0.7);
  }
`;

const ThumbnailHover = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  font-size: 2.5em;

  &:hover {
    opacity: 1;
    background: ${props => props.hoverBackground};
    color: white;
    padding: 1em;
    text-align: center;
    border-radius: 0.1em;
    font-weight: 500;
  }
`;

ThumbnailHover.defaultProps = {
  hoverBackground: 'rgba(0, 0, 0, 0.7)',
};

const Thumbnail = ({ alt, src, hoverText, hoverBackground, linkTo }) => (
  <Link to={linkTo}>
    <ThumbnailContainer>
      <Image alt={alt} src={src} />
      <ThumbnailHover hoverBackground={hoverBackground}>
        {hoverText}
      </ThumbnailHover>
    </ThumbnailContainer>
  </Link>
);

export default Thumbnail;
