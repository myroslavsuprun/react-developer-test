import { Component, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Container } from 'components';

class SharedLayout extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Container>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </Container>
        </main>
      </>
    );
  }
}

export default SharedLayout;
