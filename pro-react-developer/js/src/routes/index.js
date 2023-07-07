import { BrowserRouter, Route, Routes } from 'react-router-dom'

import BatchUpdating from '../pages/batchUpdating'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/batchUpdating" element={<BatchUpdating />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter