import React from 'react';
import { BrowserRouter, Route, Routes as PageRoutes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import HomePage from '../pages/HomePage';
import GlobalStyle from '../styles/globalStyles';
import {lightTheme,darkTheme} from '../styles/theme';
import Login from '../pages/Login';
// import { Container } from './styles';

function Routes() {
  const { theme } = useSelector(({ appOptions }) => appOptions);
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
    <GlobalStyle/>
    <BrowserRouter>
      <PageRoutes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
      </PageRoutes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default Routes;
