import React from 'react'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Navbar() {
  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/logout');
         toast.warn("logout success", {
        autoClose: 2000
      });
      // Clear localStorage/sessionStorage or navigate
       setTimeout(() => {
         window.location.href = '/login'; // or use navigate()
      }, 3000);
      localStorage.removeItem('user');
     
    } catch (error) {
      console.toast.warn('Logout failed', error);
    }
  };
  return (<>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="./logo.png"  alt='logo' style={{ height: '50px',width:'75px'}}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/products">Product</a>
        </li>
           <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
      </ul>
      <div class="d-flex ms-auto gap-2">
       <button type="button"  onClick={handleLogout} class="btn btn-outline-light">Logout</button> 
       <ToastContainer/>
      </div>
    </div>
   
  </div>
</nav>
  </>)
}

export default Navbar
