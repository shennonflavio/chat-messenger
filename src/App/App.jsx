import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import Routes from '../Routes';
import { Container } from './styles';
import { store } from '../store';

function App() {
  return (
    <Container>
      <ReduxProvider store={store}>
        <Routes />
      </ReduxProvider>
    </Container>
  );
}

export default App;
