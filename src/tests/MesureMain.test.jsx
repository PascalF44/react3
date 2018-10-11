import React from 'react';
import ReactDOM from 'react-dom';
import MesureMain from '../components/views/MesureMain';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MesureMain />, div);
  ReactDOM.unmountComponentAtNode(div);
});
