import './index.css';
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
import Sidebar from './sidebar';
function App() {

  const [isSidebarOpen, setSidebar] = useState(false)
  const [isModalOpen, setModal] = useState(false)

  function sidebarHandler() {
    if (isModalOpen) {
      setModal(false);
      setSidebar(!isSidebarOpen)
    } else {
      setSidebar(!isSidebarOpen)
    }
  }
  function modalHandler() {
    if (isSidebarOpen) {
      setSidebar(false);
      setModal(!isModalOpen)
    } else {
      setModal(!isModalOpen)
    }
  }
  return (
    <div className={`container-fluid bg-warning p-0 m-0 vh-100 ${isModalOpen ? 'bg-opacity-50' : 'bg-opacity-100'}`}>

      <div className={` ${isSidebarOpen ? 'visually-hidden' : 'visible nav-btn'}`} onClick={() => sidebarHandler()}>
        <button className='btn btn-sm btn-outline-dark'><FaBars /></button>
      </div>

      <aside className={`h-100 w-25 ${isSidebarOpen ? 'sidebar show-sidebar shadow-lg' : ' sidebar'}`}>
        <Sidebar state={{ isSidebarOpen, sidebarHandler }} />
      </aside>

      <div className=' w-100 h-100 '>
        <div className={`modal-btn ${isModalOpen ? 'visually-hidden' : 'visible'}`}>
          <button className='btn btn-outline-dark fs-3' onClick={() => modalHandler()}>show modal</button>
        </div>
        <div className={`modal h-75 w-50 py-5 ${isModalOpen ? 'visible bg-light rounded shadow' : 'visually-hidden'}`}>
          <h3 className=''>modal header</h3>
          <p>modal content</p>
          <button className='mt-5 btn btn-sm btn-outline-dark fw-bold' onClick={() => modalHandler()}>X</button>
        </div>
      </div>

    </div>
  );
}

export default App;
