import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App render', () => {

  const exprectElementByText = (text) => {
    const { getByText } = render(<App />);
    const element = getByText(RegExp(text, 'i'));
    expect(element).toBeInTheDocument();
  }

  const exprectElementsByText = (text) => {
    const { getAllByText } = render(<App />);
    const elements = getAllByText(RegExp(text, 'i'));
    expect(elements).not.toBeNull();
    expect(elements.length).not.toBe(0);
  }

  test('should be Logo', () => {
    exprectElementsByText('CatBook');
  });

  test('should be Login link', () => {
    exprectElementsByText('Log in');
  });

  test('should be Home link', () => {
    exprectElementByText('Home');
  });

  test('should be Signup link', () => {
    exprectElementsByText('Sign up');
  });
});
