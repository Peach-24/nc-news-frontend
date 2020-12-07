import React from 'react';
import { Link } from '@reach/router';

const Nav1 = () => {
  return (
    <div>
      <Link to='/latest'>
        <button>Latest</button>
      </Link>
      <Link to='/popular'>
        <button>Popular</button>
      </Link>
      <Link to='/topics'>
        <button>Topics</button>
      </Link>
      <Link to='/random'>
        <button>Random Story</button>
      </Link>
    </div>
  );
};

export default Nav1;
