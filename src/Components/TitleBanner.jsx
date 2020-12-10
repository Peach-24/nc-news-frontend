import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

const TitleDiv = styled.div`
  display: flex;
  width: 100%;
  background-color: rgba(19, 17, 17, 0.979);
  padding: 1px;
  margin: 0;
  z-index: 100;
`;

const Name = styled.h3`
  position: fixed;
  width: 100%;
  margin: auto;
  left: 0;
  right: 0;
  top: 13px;
  color: red;
  font-size: 1rem;
`;

const TitleBanner = () => {
  return (
    <TitleDiv className='title-banner'>
      <Link id='home-emoji' to='/'>
        🏠
      </Link>
      <Link to='/'>
        <Name>Northcoders News</Name>
      </Link>
      <p className='title-date'>7th December 2020</p>
    </TitleDiv>
  );
};

export default TitleBanner;
