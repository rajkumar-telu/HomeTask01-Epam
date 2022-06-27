import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './redux/store';

describe('Header component',()=>{
  test('Header should render',()=>{
      render(<Provider store={store}><App /></Provider>);
      const header = screen.getByTestId('header-comp');
      expect(header).toBeInTheDocument();
  })
  test('Title',()=>{
    render(<Provider store={store}><App /></Provider>);
    const title = screen.getByText(/eCommerce Site/i);
    expect(title).toBeInTheDocument();
  })
})
