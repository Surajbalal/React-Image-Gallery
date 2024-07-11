import React from 'react'
import {Routes,Route} from 'react-router-dom'
import ImageList from './ImageList'
import ImageDetail from './ImageDetail'

function CustomRouts() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<ImageList/>} />
            <Route path="/photo/:id" element={<ImageDetail/>}/>
        </Routes>
    </div>
  )
}

export default CustomRouts