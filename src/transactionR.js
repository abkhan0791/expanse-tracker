const transactionR = ((state, action)=>{
    switch (action.type){
        case "Add Transaction":{
            return [action.payload, ...state]
        }
        default:
            return state;
    }
})

export default transactionR;