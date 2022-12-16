import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAction } from '../action/action';
import ModalForm from './Modal';
import { RxCross1  } from 'react-icons/rx';

const TableComponent = () => {

    const dispatch =useDispatch()

    const[modalFormOn,setModalFormOn]=useState(false)

    const [idEdit, setIdEdit]= useState('')

    const {data} =useSelector((state)=>{
        return {
            data: state.todoReducer
        }
    })

    useEffect(()=>{
        setModalFormOn(false)
    },[data])

    const onDelete = (event)=>{
        let index = parseInt(event.target.value)
        let deletedItem = data[index]
        let newData = data.filter((e) => {return e !== deletedItem})
        dispatch(deleteAction(newData))
    }

    const openModalEdit = (e) =>{
        setModalFormOn(!modalFormOn)
        setIdEdit(e.target.value)
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
                                <button className='bg-yellow-400 px-3 rounded-lg' onClick={openModalEdit} value={i} >
                                    edit
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
    <div className='py-5 relative'>
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
            {
                modalFormOn &&
                <div className='absolute top-3 left-[600px] '>
                    <div className='flex justify-end'>
                    <button className='absolute' onClick={()=>setModalFormOn(!modalFormOn)}><RxCross1 size={20}/></button>
                </div>
                    <ModalForm 
                    setModalOn={modalFormOn}
                    id={idEdit}
                    />
                </div>
            }
    </div>
  )
}

export default TableComponent