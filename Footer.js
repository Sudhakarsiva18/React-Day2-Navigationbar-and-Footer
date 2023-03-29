import * as React from 'react';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import './Footer.css'

const Footer =()=>
{
    return<footer><div className='footer'>
      <center>
        <Facebook/>
        <Instagram/>
        <Twitter/>
        <h6>Contact Details : 0481- 256 7483</h6>
        </center>
        </div>
    </footer>
}
export default Footer