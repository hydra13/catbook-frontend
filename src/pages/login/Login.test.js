import React from 'react';
import { render } from '@testing-library/react';
import { Login } from './index';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./../../store";

describe('Login render', () => {

  const LoginPage = (
    <Provider store={store}>
      <Router>
        <Login />
      </Router>
    </Provider>
  );

  const exprectElementByText = (text) => {
    const { getByText } = render(LoginPage);
    const element = getByText(RegExp(text, 'i'));
    expect(element).toBeInTheDocument();
  }

  const exprectElementsByText = (text) => {
    const { getAllByText } = render(LoginPage);
    const elements = getAllByText(RegExp(text, 'i'));
    expect(elements).not.toBeNull();
    expect(elements.length).not.toBe(0);
  }

  test('should be Username field', () => {
    exprectElementsByText('Username');
  });
  test('should be Password field', () => {
    exprectElementsByText('Password');
  });
  test('should be SignUp button', () => {
    exprectElementsByText('Sign up');
  });
  test('should be Enter button', () => {
    exprectElementsByText('Enter');
  });
});
