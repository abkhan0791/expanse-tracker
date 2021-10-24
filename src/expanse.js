import React, { useContext, useState} from 'react';
import transactionC from './transactionC.js';
import './App.css';


function Expanse() {

    let {transactions, addTransaction} = useContext(transactionC)

    let [newDesc, setDesc] = useState('')
    let [newAmount, setAmount] = useState(0)

    const handleAddition = (event) =>{
        event.preventDefault()
        addTransaction({
            descreption: newDesc,
            amount: Number(newAmount)
        })
        setDesc('');
        setAmount(0)
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    return (
        <header className = 'header'>
            <div>
                <h1 className='text'> EXPANSE TRACKER </h1>      

                <h2 className='text'> YOUR BALANCE <br /> ${getIncome() + getExpense()} </h2>

                <div className='container'>
                    <h3> INCOME <br /> ${getIncome()} </h3>
                    <h3> EXPENSE <br /> ${getExpense()} </h3>
                </div>

                <h3 className='text_1'> HISTORY </h3>
                <hr />

                <ul className = 'history'>
                    {transactions.map((transObj, ind) => {
                        return (
                            <li key={ind}>
                                <sapn> {transObj.descreption} </sapn>
                                <span> ${transObj.amount} </span>
                            </li>    
                        )
                    })}
                </ul> 

                <h3 className='text_1'> ADD NEW TRANSACTION </h3>
                <hr />

                <form className='new-transaction' onSubmit={handleAddition}>
                    <label className='text_1'>   
                        DESCREPTION
                        <br />
                        <input type='text' 
                        value={newDesc}
                        required placeholder='TEXT' 
                        onChange={(ev)=>setDesc(ev.target.value)} />
                    </label>

                    <br />

                    <label className='text_1'>
                        Amount
                        <br />
                        <input type='number' 
                        value={newAmount}
                        required placeholder='AMOUNT' 
                        onChange={(ev)=>setAmount(ev.target.value)} />
                    </label>

                    <br />

                    <input className='button' type='submit' value='ADD' />
                </form> 
            </div>
        </header>  
  );
}

export default Expanse;