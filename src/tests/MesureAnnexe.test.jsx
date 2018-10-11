import React from 'react';
import ReactDOM from 'react-dom';
import MesureAnnexe from '../components/views/MesureAnnexe';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MesureAnnexe />, div);
  ReactDOM.unmountComponentAtNode(div);
});
