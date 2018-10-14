import React from 'react';
import ReactDOM from 'react-dom';
import MesureAnnexe from '../components/views/MesureAnnexe';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const mes = { heure: '', valeur: 20 };
  ReactDOM.render(<MesureAnnexe mesure={ mes } />, div);
  ReactDOM.unmountComponentAtNode(div);
});
