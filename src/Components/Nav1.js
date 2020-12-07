import React from 'react';
import { Link } from '@reach/router';

const Nav1 = () => {
  return (
    <div>
      <Link to='/latest'>
        <button className='sidebar-button'>Latest</button>
      </Link>
      <Link to='/popular'>
        <button className='sidebar-button'>Popular</button>
      </Link>
      <Link to='/topics'>
        <button className='sidebar-button'>Topics</button>
      </Link>
      <Link to='/random'>
        <button className='sidebar-button'>Random Story</button>
      </Link>
    </div>
  );
};

export default Nav1;
