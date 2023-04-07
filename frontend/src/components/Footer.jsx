import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
       <h3 className="copyright">
            &copy; Copyright <strong><span>Electronic Shop</span></strong>. All Rights Reserved
          </h3>
          <h4 class="credits">
            Designed by <Link href="#">SA coding</Link>
          </h4>
    </div>
  )
}
