import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Modal,Label, TextInput, Textarea} from 'flowbite-react';
import { AiOutlineLoading3Quarters  } from 'react-icons/ai';
import { addAction } from '../action/action';


const ModalEdit = ({dataEdit}) => {

    console.log(dataEdit)

    const dispatch = useDispatch()

    const { data }=useSelector((state)=>{
        return {
            data:state.todoReducer
        }
    })

    const [loading, setLoading]=useState(false)
    const[open,setOpen]=useState(false)

    const[input,setInput]=useState({
        tittle:'',
        description:'',
        status:'todo'
    })

    const onChange = (e) => {
        const { value, name } = e.target
        setInput({ ...input, [name]: value })
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        setTimeout(() => {
            dispatch(addAction(input))
            setOpen(false)
            setInput({
                tittle:'',
                description:'',
            })
            setLoading(false)
        }, 3000);
        setLoading(true)
    }


  return (
    <div>
    <React.Fragment>
<button onClick={()=>{setOpen(!open);setInput(dataEdit)}} className='bg-yellow-400 px-3 rounded-lg'>Edit</button>
<Modal
show={open}
size='md'
popup={true}
onClose={()=>{setOpen(!open);setInput({ tittle:'',
description:'',
status:'todo'})}}

>
<Modal.Header/>
    <Modal.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white font-Public text-center">
                Add Now
            </h3>
            <div className="block font-Public">
                <Label
                value='Tittle'
                className='font-bold mb-2'
                />
            </div>
            <TextInput
            placeholder=""
            required={true}
            className='font-Public'
            onChange={onChange}
            name='tittle'
            value={input.tittle}
            />
            <div className="block font-Public">
                <Label
                value='Description'
                className='font-bold mb-2'
                />
            </div>
            <Textarea
            placeholder=""
            required={true}
            className='font-Public'
            rows={4}
            name='description'
            onChange={onChange}
            value={input.description}
            />
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
    </Modal.Body>
            </Modal>
</React.Fragment>
</div>
  )
}

export default ModalEdit