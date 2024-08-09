import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { editUser } from './features/userSlice'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const userDetails = useSelector(state => state.user)
    const [details, setDetails] = useState(() => (
        userDetails.find(item => item.id === id)
    ))
    const handleSubmit = e => {
        e.preventDefault()
        const id = uuidv4()
        dispatch(editUser({
            id: id.slice(0, 6),
            ...details
        }))
        setDetails({
            name: '',
            email: ''
        })
        navigate('/')
    }

    const handleInput = e => {
        const { name, value } = e.target

        setDetails(prevDetails => (
            { ...prevDetails, [name]: value }
        ))
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className='border p-10'>
                <form className="w-[80vw] md:w-[40vw]" onSubmit={handleSubmit}>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Full Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input value={details.name} required onChange={handleInput} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Jane Doe" name='name' />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                                Email
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input value={details.email} required onChange={handleInput} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="email" placeholder="hello@example.com" name='email' />
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                create
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update