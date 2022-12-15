import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAction } from '../action/action';
import ModalEdit from './ModalEdit';

const TableComponent = () => {

    const dispatch =useDispatch()

    const {data} =useSelector((state)=>{
        return {
            data: state.todoReducer
        }
    })

    const [id, setId]=useState('')

    const onDelete = (event)=>{
        let index = parseInt(event.target.value)
        let deletedItem = data[index]
        let newData = data.filter((e) => {return e !== deletedItem})
        dispatch(deleteAction(newData))
    }

    const findId = (e)=>{
        let index = parseInt(e.target.value)
        console.log(index)
    }



    const printData = ()=>{
        if(data){
            return data?.map((v,i)=>{
                return(
                        <tr key={i}>    
                            <td className='border-b-2 p-4'>{i+1}</td>
                            <td className='border-b-2 p-4'>{v.tittle}</td>
                            <td className='border-b-2 p-4'>{v.description}</td>
                            <td className='border-b-2 p-4'>{v.status}</td>
                            <td className='border-b-2 p-4 md:flex'>
                                <button onClick={findId} value={i}>
                                    <ModalEdit/>
                                </button>
                                <button className='bg-red-400 px-3 rounded-lg my-1 md:my-0 md:mx-2' value={i} onClick={onDelete}>Delete</button>
                                <button className='bg-green-400 px-3 rounded-lg'>Done</button>
                            </td>
                        </tr>
                    
                )
    
            })
        }
    }
  return (
    <div className='py-5'>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th className='p-4 md:w-10'>No</th>
                        <th className='p-4'>Tittle</th>
                        <th className='p-4'>Description</th>
                        <th className='p-4 w-10'>Status</th>
                        <th className='p-4 w-10'>Action</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {printData()}
                </tbody>
            </table>
            
    </div>
  )
}

export default TableComponent