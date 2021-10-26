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

                <h3 className='text_1'> HISTORY <hr /> </h3>

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

                <h3 className='text_1'> ADD NEW TRANSACTION  <hr /> </h3>

                <form className='new_transaction' onSubmit={handleAddition}>
                    <label>   
                        DESCREPTION
                        <input type='text' 
                        value={newDesc}
                        required placeholder='Descreption' 
                        onChange={(ev)=>setDesc(ev.target.value)} />
                    </label>

                    <label>
                        Amount
                        <input type='number' 
                        value={newAmount}
                        required placeholder='AMOUNT' 
                        onChange={(ev)=>setAmount(ev.target.value)} />
                    </label>

                    <input className='button' type='submit' value='ADD TRANSACTION' />
                </form> 
            </div>
        </header>  
    );
}

export default Expanse;