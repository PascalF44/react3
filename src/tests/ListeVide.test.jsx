import React from 'react';
import ReactDOM from 'react-dom';
import ListeVide from '../components/views/ListeVide';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListeVide />, div);
  ReactDOM.unmountComponentAtNode(div);
});
