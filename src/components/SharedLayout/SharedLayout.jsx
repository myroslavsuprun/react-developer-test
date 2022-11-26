import { Component, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Container, Loader } from 'components';
import { withUpdateTitle } from 'hoc';

class SharedLayout extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </main>
      </>
    );
  }
}

export default withUpdateTitle(SharedLayout, 'Home');
