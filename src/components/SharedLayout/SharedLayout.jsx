import { Component } from 'react';
import { Outlet } from 'react-router-dom';

class SharedLayout extends Component {
  render() {
    return (
      <>
        <div>SharedLayout</div>
        <Outlet />
      </>
    );
  }
}

export default SharedLayout;
