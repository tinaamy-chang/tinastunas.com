import React from 'react';
import styled from 'styled-components';

import Menu from '../components/sidebar';
import NavigationBar from '../components/NavigationBar';
import DesignsLightbox from '../components/DesignsLightbox';

import '../App.css';
import TopNav from '../components/TopNav';

const Intro = styled('p')``;
const IntroWrapper = styled('p')`
  font-size: 2em;
  font-weight: 500;
`;
const Bottom = styled('div')`
  margin: 6em 5em;
  padding-bottom: 70em;
`;

const Designs = () => {
  return (
    <div>
      <Menu right />
      <TopNav>
        <NavigationBar />
      </TopNav>

      <Bottom>
        <IntroWrapper>
          <Intro>
            A collection of finished designs and illustrations. Click to
            enlarge.
          </Intro>
        </IntroWrapper>
        <DesignsLightbox />
      </Bottom>
    </div>
  );
};

export default Designs;
