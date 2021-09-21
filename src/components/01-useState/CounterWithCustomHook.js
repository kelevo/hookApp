import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } =  useCounter( 100 );

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Counter with Hook: { state } </h1>
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <button onClick={ () => decrement(2) } className="btn btn-secondary"> - 1 </button>
                        <button onClick={ () => increment(2) }  className="btn btn-success"> + 1 </button>
                        <button onClick={ reset }  className="btn btn-success"> RESET </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
