import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  
const [open , setOpen]=useState('false')
console.log(open);

  return (
    <>
     <Navbar open={open} setOpen={setOpen}/>
     <Sidebar open={open} />
    </>
  )
}

export default App
