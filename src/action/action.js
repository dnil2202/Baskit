export const addAction=(data)=>{
    console.log('data dari page')
    console.log(data)
    return{
        type: "ADD_SUCCESS",
        payload: data

    }
}

export const deleteAction=(data)=>{
    return{
        type:'DELETE_SUCCESS',
        payload: data
    }
}

export const editAction = (data) =>{
    return {
        type : 'EDIT_SUCCESS',
        payload :data
    }
}
