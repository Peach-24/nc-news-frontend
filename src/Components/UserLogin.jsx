import React from 'react';

const UserLogin = ({ loggedInUser, login, logout }) => {
  let username = 'guest-user';
  return (
    <div className='user-login-box'>
      {loggedInUser ? (
        <div>
          <p>Welcome {loggedInUser}</p>
          <button onClick={() => logout()}>Sign out</button>
        </div>
      ) : (
        <div>
          <input
            id='username-login'
            placeholder='username'
            onChange={(event) => {
              username = event.target.value;
            }}
          ></input>
          <button onClick={() => login(username)}>Login</button>
        </div>
      )}
    </div>
  );
};

export default UserLogin;
