import React from 'react';
import { Link } from '@reach/router';

const Nav1 = () => {
  const randomArticleNo = Math.floor(Math.random() * Math.floor(36));

  return (
    <div className='sidebar-links'>
      <Link to='/latest/all'>
        <button className='sidebar-button'>Latest</button>
      </Link>
      <Link to='/popular/all'>
        <button className='sidebar-button'>Popular</button>
      </Link>
      {/* <Link to='/topics'>
        <button className='sidebar-button'>Topics</button>
      </Link> */}
      <Link to={`/articles/${randomArticleNo}`}>
        <button className='sidebar-button'>Random</button>
      </Link>
    </div>
  );
};

export default Nav1;
