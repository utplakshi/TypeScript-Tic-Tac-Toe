import * as React from 'react';
import { BoardState } from './GameState';
type LogProps = {
  history: BoardState[];
  jumpTo: (step: number) => void;
};
export function Log(props: LogProps) {
  return (
    <ol>
      {props.history.map((_, index) => {
        return (
          <li key={index}>
            <button className='btn-success	Moves' onClick={() => props.jumpTo(index)}>
             <b> Go to {index === 0 ? 'start' : `${index} move`}</b>
            </button>
          </li>
        );
      })}
    </ol>
  );
}