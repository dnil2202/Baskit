import React, { useState } from 'react'
import ModalInput from '../component/ModalInput'
import TableComponent from '../component/TableComponent'

const MainPage = () => {
    
  return (
    <div className='md:container md:mx-auto md:px-10'>
        <div>
            <p className='text-center font-bold text-5xl py-5'>ToDo App</p>
            <div className='bg-orange-200'>
                <div className='py-3 flex justify-between px-5'>
                    <p className='font-bold text-3xl'>Task :</p>
                    <div className='flex mt-1'>
                        <ModalInput/>
                    </div>
                </div>
            </div>
            <div>
                <TableComponent/>
            </div>
        </div>
    </div>
  )
}

export default MainPage