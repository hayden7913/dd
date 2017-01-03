import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import Square from './components/Square';
import { observe } from './components/Game';

const rootEl = document.getElementById('root');

const out = (
  <Square black={false}></Square>

)

ReactDOM.render(out, rootEl);


/*observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    rootEl
  )
);*/
