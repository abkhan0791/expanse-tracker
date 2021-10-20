import React from 'react';
import App from './App';
import './App.css';


function Expanse() {

    let transactions = [
        {amount: +500, descreption: 'CASH'},
        {amount: -50, descreption: 'BOOK'},
        {amount: -200, descreption: 'BILLS'}

    ]
  return (
    <div className='expanse-container'>
        <h1 className='text'> EXPANSE TRACKER </h1>

        <h2> YOUR BALANCE <br /> $250.00 </h2>

        <div className='container'>
            <h3> INCOME <br /> $500 </h3>
            <h3> EXPANSE <br /> $250 </h3>
        </div>

        <h3> HISTORY </h3>
        <hr />

        <ul className = 'history'>
            {transactions.map((transObj, ind) => {
                return (
                    <li>
                        <sapn> {transObj.descreption} </sapn>
                        <span> {transObj.amount} </span>
                    </li>    
                )
            })}
        </ul> 

        <h3> ADD NEW TRANSACTION </h3>
        <hr />

        <form className='new-transaction'>
            <label>   
                DESCREPTION
                <br />
                <input type='text' required placeholder='TEXT' />
            </label>

            <br />

            <label>
                Amount
                <br />
                <input type='number' required placeholder='AMOUNT' />
            </label>

            <br />

            <input className='button' type='submit' value='ADD' />
        </form> 
    </div>

        
   

      
  );
}

export default Expanse;