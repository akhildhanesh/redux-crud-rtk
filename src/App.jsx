import React from 'react'
import Home from './Home'
import Create from './Create'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Update from './Update'

const App = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl text-center mt-5'>CRUD APP</h1>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Update />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App