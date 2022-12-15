const TASK =[
    {tittle:'Makan', description:'makan telor jgn lupa buah',status:'todo'},
    {tittle:'Mandi', description:'panaskan air hangat',status:'todo'},
    {tittle:'Berdoa', description:'salam maria',status:'done'},
]

export const todoReducer=(state= TASK, action)=>{
    console.log("data dari Action", action)
        switch (action.type) {
        case "ADD_SUCCESS":
            return [...state, action.payload]
        case "DELETE_SUCCESS":
            return [...action.payload]
        case "EDIT_SUCCESS":
            return {...state,  ...action.payload}
        default:
            return state;
    }
    
    }