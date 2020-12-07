import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

const TitleDiv = styled.div`
  display: flex;
  width: 100%;
  color: red;
  background-color: black;
  height: 40px;
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
`;
const DateText = styled.p`
  color: grey;
  position: fixed;
  right: 50px;
  font-size: 12px;
`;

const TitleBanner = () => {
  return (
    <TitleDiv className='title-banner'>
      <Link to='/'>🏠</Link>
      <Link to='/'>
        <Name>Northcoders News</Name>
      </Link>
      <DateText>7th December 2020</DateText>
    </TitleDiv>
  );
};

export default TitleBanner;
