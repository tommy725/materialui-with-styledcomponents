import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './slice';

const Section = styled.section`
  background-color: ${({ theme }) => theme.palette.primary.light};
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: auto;
  max-width: 100%;
  padding: 24px;
  span.counter {
    font-size: 2em;
    font-weight: bold;
  }
  .controls {
    button {
      font-weight: bold;
    }
  }
  input {
    max-width: 40px;
    text-align: center;
    font-weight: bold;
  }
`;

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <Section>
      <div className="controls">
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        <span className="counter">{count}</span>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </div>
      <TextField
        aria-label="Set increment amount"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div>
        <Button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
          variant="contained"
          color="primary"
          style={{ marginTop: 20 }}
        >
          Add Amount
        </Button>
        <br />
        <Button
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
          variant="contained"
        >
          Add Async
        </Button>
      </div>
    </Section>
  );
}
