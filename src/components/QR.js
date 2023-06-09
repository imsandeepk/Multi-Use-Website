import React from 'react'
import { useState } from "react";

export default function QR() {
    const [img, setimg] = useState()
    const [url, seturl] = useState()
    const handleInputChange = (event) => {
        seturl(event.target.value);
      };
    const image = () => {
        const res = `https://qrtag.net/api/qr_4.png?url=${url}`
        setimg(res)
      }
  return (
    <div className='container py-4'>
    <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input type="text" class="form-control" placeholder="URL" value={url} onChange={handleInputChange} aria-label="Username" aria-describedby="addon-wrapping"/>
  
  
  
</div>
<button type="button" className="btn btn-primary mx-1 rounded my-2" onClick={image}>
        Generate QR code
      </button>
      <div className="container">
      <img src={img}></img>
      </div>
      </div>
    
  )
}
