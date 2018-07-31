import React from 'react';
import ReactDOM from 'react-dom';
import ListeActive from '../components/views/ListeActive';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListeActive />, div);
  ReactDOM.unmountComponentAtNode(div);
});
