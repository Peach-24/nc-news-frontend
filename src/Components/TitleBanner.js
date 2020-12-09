import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

const TitleDiv = styled.div`
  display: flex;
  width: 100%;
  color: red;
  background-color: black;
  margin: 0;
  z-index: 100;
`;

const Name = styled.h3`
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  top: 10px;
  color: red;
  font-size: 1.5rem;
`;
const DateText = styled.p`
  color: grey;
  align-items: center;
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
      <DateText>7th December 2020</DateText>
    </TitleDiv>
  );
};

export default TitleBanner;
