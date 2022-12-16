import React, { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters  } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addAction, editAction } from '../action/action';

const ModalForm = ({id}) => {
    const [loading,setLoading]=useState(false)
    const dispatch = useDispatch()
    const [input,setInput]=useState({
        tittle:'',
        description:'',
        status:'todo'
    })

    const {data} =useSelector((state)=>{
        return {
            data: state.todoReducer
        }
    })


    useEffect(()=>{
        let index = parseInt(id)
        let editItem = data[index]
        setInput(editItem)
    },[])

    const onSubmit = (e) =>{
        e.preventDefault()
        let index = parseInt(id)
        let deleteItem = data[index]
        let newData = data.filter((e)=>{return e !== deleteItem})
        let res = [...newData,{...input}]
        console.log(res)
        setTimeout(() => {
            dispatch(editAction(res))
            setInput({
                tittle:'',
                description:'',
            })
            setLoading(false)
        }, 3000);
        setLoading(true)
    }

    const onChange = (e) =>{
        const { value, name } = e.target
        setInput({ ...input, [name]: value })
    }

  return (
    <div className=''>
        <div className='w-96 bg-white/100 rounded-2xl h-[450px] shadow-lg'>
            <div className='text-center font-bold border-b-2 py-4'>
                Add Now
            </div>
            <div className='my-4 px-10'>
                <div>
                    <label htmlFor='tittle' className="block mb-3 ">
                        <span className="block text-sm font-medium text-gray-700 after:content-['*'] after:text-red-500 after:ml-0.5 font-Public" >
                            Tittle
                        </span>
                        <input requried='true' id='tittle' name='tittle' onChange={onChange} className='mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-blue-600 block w-full rounded-md sm:text-sm focus:ring-1'
                        value={input.tittle}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor='description' className="block mb-3 ">
                        <span className="block text-sm font-medium text-gray-700 after:content-['*'] after:text-red-500 after:ml-0.5 font-Public" >
                            Description
                        </span>
                        <textarea requried='true' id='description' name='description' onChange={onChange} className='mt-1 px-3 py-2 h-36 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-blue-600 block w-full rounded-md sm:text-sm focus:ring-1'
                        value={input.description}
                        />
                    </label>
                    <button className='bg-teal-500 hover:bg-teal-700 focus:ring-teal-500 text-white rounded-lg w-full py-2 disabled:cursor-not-allowed' onClick={onSubmit} disabled={loading}>
                            {
                                loading ?
                                <div className='flex justify-center'>
                                <AiOutlineLoading3Quarters className='animate-spin mt-1 mr-2'/>
                                <p className='font-bold'>Processing</p>
                                </div>
                                :
                            'Submit'
                            }
                        </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalForm