import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { css } from '@emotion/core';
import ClockLoader from 'react-spinners/ClockLoader';

const override = css`
  margin: 100px auto;
  border-color: block;
`;
const NavBtn = styled.button`
  &:hover {
    text-decoration: underline;
  }
  margin: 1rem 1rem 0;
  color: black;
  background-color: transparent;
  border: 0px;
  font-size: 13px;
  font-family: monospace;
`;

class Nav2 extends Component {
  state = {
    page: '',
    isLoading: true,
  };

  componentDidMount() {
    const { pageHeader } = this.props;
    console.log(pageHeader);
    this.setState({ page: pageHeader, isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <ClockLoader
          css={override}
          size={50}
          color={'black'}
          loading={this.state.loading}
        />
      );
    }
    return (
      <div>
        <Link to={`/${this.state.page}/all`}>
          <NavBtn>All</NavBtn>
        </Link>
        <Link to={`/${this.state.page}/coding`}>
          <NavBtn>Coding</NavBtn>
        </Link>
        <Link to={`/${this.state.page}/football`}>
          <NavBtn>Football</NavBtn>
        </Link>
        <Link to={`/${this.state.page}/cooking`}>
          <NavBtn>Cooking</NavBtn>
        </Link>
        <hr></hr>
      </div>
    );
  }
}

export default Nav2;
