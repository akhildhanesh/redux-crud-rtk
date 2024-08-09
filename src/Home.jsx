import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeUser } from './features/userSlice'

const Home = () => {
    const users = useSelector(state => state.user)
    const dispatch = useDispatch()
    return (
        <div className='flex flex-col gap-3 mt-10'>
            <div className='ml-5'>
                <Link to='/create'>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Create
                    </button>
                </Link>
            </div>
            <div className='mx-3'>
                <table className="table-auto w-full border">
                    <thead>
                        <tr>
                            <th className='border border-gray-300'>ID</th>
                            <th className='border border-gray-300'>Name</th>
                            <th className='border border-gray-300'>Email</th>
                            <th className='border border-gray-300'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item, i) => (
                                <tr key={i} className='text-center'>
                                    <td className='border border-gray-300'>{item.id}</td>
                                    <td className='border border-gray-300'>{item.name}</td>
                                    <td className='border border-gray-300'>{item.email}</td>
                                    <td className='border border-gray-300 flex gap-3 justify-center'>
                                        <Link to={`/edit/${item.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Edit
                                        </Link>
                                        <button onClick={() => dispatch(removeUser({id: item.id}))} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home