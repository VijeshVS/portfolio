import './App.css'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'

function App() {
  return (
   <div className='h-screen bg-slate-200 font-sans'>
      <Navbar/>
      <Homepage/>
   </div>
  )
}

export default App
