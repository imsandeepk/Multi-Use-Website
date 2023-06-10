import React from 'react'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-black ">
  <div className="container-fluid ">
    <img src="/chems.png" className='img-thumbnail h-10'/>
    <a className="navbar-brand text-white" href="/">Multi-Use Website</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
        </li>
      </ul>
    </div>
    <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheck"/>
  <label class="form-check-label text-white" for="flexSwitchCheckDefault">Dark Mode</label>
</div>
  </div>
  
</nav>
  )
}
