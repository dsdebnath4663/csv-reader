

import React from "react";
import '../css/sidebar.css'
const SideBar = () => {
  return (
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" >
      {/* <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none ">
        <svg class="bi pe-none me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
        <span class="fs-4">Sidebar</span>
      </a> */}
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="#" class="nav-link active" aria-current="page">
            <svg class="bi pe-none me-2" width="16" height="16"><use href="#home"></use></svg>
            Home
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-dark">
            <svg class="bi pe-none me-2" width="16" height="16"><use href="#speedometer2"></use></svg>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-dark">
            <svg class="bi pe-none me-2" width="16" height="16"><use href="#table"></use></svg>
            Orders
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-dark">
            <svg class="bi pe-none me-2" width="16" height="16"><use href="#grid"></use></svg>
            Products
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-dark">
            <svg class="bi pe-none me-2" width="16" height="16"><use href="#people-circle"></use></svg>
            Customers
          </a>
        </li>
      </ul>
      <div class="dropdown">

        <ul class="dropdown-menu text-small shadow">
          <li><a class="dropdown-item" href="#">New project...</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li><a class="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>);
};

export default SideBar;
