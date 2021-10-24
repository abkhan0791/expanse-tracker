import React, { createContext, useReducer } from "react";
import transactionR from './transactionR';

let initTransactions = [
    {amount: 500, descreption: 'CASH'},
    {amount: -50, descreption: 'BOOK'},
    {amount: -200, descreption: 'BILLS'}
]

const transactionC = createContext(initTransactions)

export const TransactionProvider = ({children})=> {
    let [state, dispatch] = useReducer(transactionR, initTransactions)

    function addTransaction(transObj){
        dispatch({
            type: "Add Transaction",
            payload:{
                amount: transObj.amount,
                descreption: transObj.descreption
            },
        })
    }
    return (
        <transactionC.Provider value = {{
            transactions: state,
            addTransaction
        }}>
            {children}
        </transactionC.Provider>
    )
}


export default transactionC;