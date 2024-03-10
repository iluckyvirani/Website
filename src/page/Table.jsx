import React from 'react'
import "./Style.css";
// import Table1 from './Tables/Table1';
import {Link} from "react-router-dom"

function Table() {
  return (
    <>
    <div className='containeer'>
    <h2 className='text1'>A table that only span half the page</h2>
    </div>
    <table style={{width:"100%"}}>
  <tr>
    <th style={{color: "red", textAlign:"center",backgroundColor: "yellow"}}>DATE</th>
    <th style={{textAlign:"center",backgroundColor: "yellow"}}>DESHRAJ</th>
    <th style={{textAlign:"center",backgroundColor: "yellow"}}>FRBDES</th>
    <th style={{textAlign:"center",backgroundColor: "yellow"}}>GZB</th>
    <th style={{textAlign:"center",backgroundColor: "yellow"}}>GANESH</th>
  </tr>
  <tr style={{backgroundColor :'#FFFFFF'}}>
    <td style={{color: "red", textAlign:"center"}}>01</td>
    <td style={{textAlign:"center"}}>XX</td>
    <td style={{textAlign:"center"}}>97</td>
    <td style={{textAlign:"center"}}>22</td>
    <td style={{textAlign:"center"}}>84</td>
  </tr>
  <tr>
    <td style={{color: "red", textAlign:"center", backgroundColor:"#e9e8e8"}}>02</td>
    <td style={{textAlign:"center", backgroundColor:"#e9e8e8"}}>27</td>
    <td style={{textAlign:"center", backgroundColor:"#e9e8e8"}}>48</td>
    <td style={{textAlign:"center", backgroundColor:"#e9e8e8"}}>61</td>
    <td style={{textAlign:"center", backgroundColor:"#e9e8e8"}}>97</td>
  </tr>
  <tr style={{backgroundColor :'#FFFFFF'}}>
    <td style={{color: "red", textAlign:"center"}}>03</td>
    <td style={{textAlign:"center"}}>87</td>
    <td style={{textAlign:"center"}}>27</td>
    <td style={{textAlign:"center"}}>98</td>
    <td style={{textAlign:"center"}}>93</td>
  </tr>
  <tr>
    <td style={{color: "red", textAlign:"center",  backgroundColor:"#e9e8e8"}}>04</td>
    <td style={{textAlign:"center",  backgroundColor:"#e9e8e8"}}>62</td>
    <td style={{textAlign:"center",  backgroundColor:"#e9e8e8"}}>76</td>
    <td style={{textAlign:"center",  backgroundColor:"#e9e8e8"}}>25</td>
    <td style={{textAlign:"center",  backgroundColor:"#e9e8e8"}}>62</td>            
  </tr>
  <tr style={{backgroundColor :'#FFFFFF'}}>
    <td style={{color: "red", textAlign:"center"}}>05</td>
    <td style={{textAlign:"center"}}>51</td>
    <td style={{textAlign:"center"}}>33</td>
    <td style={{textAlign:"center"}}>83</td>
    <td style={{textAlign:"center"}}>224</td>
  </tr>
  <tr>
    <td style={{color: "red", textAlign:"center",  backgroundColor:"#e9e8e8", }}>06</td>
    <td style={{textAlign:"center",  backgroundColor:"#e9e8e8", }}>21</td>
    <td style={{textAlign:"center",  backgroundColor:"#e9e8e8",}}>64</td>
    <td style={{textAlign:"center",  backgroundColor:"#e9e8e8", }}>38</td>
    <td style={{textAlign:"center",  backgroundColor:"#e9e8e8", }}>40</td>
  </tr>
  <tr style={{backgroundColor :'#FFFFFF'}}>
    <td style={{color: "red", textAlign:"center"}}>07</td>
    <td style={{textAlign:"center"}}>26</td>
    <td style={{textAlign:"center"}}>30</td>
    <td style={{textAlign:"center"}}>99</td>
    <td style={{textAlign:"center"}}>98</td>
  </tr>
  <tr>
    <td style={{color: "red", textAlign:"center", backgroundColor:"#e9e8e8", }}>08</td>
    <td style={{textAlign:"center", backgroundColor:"#e9e8e8"}}>18</td>
    <td style={{textAlign:"center", backgroundColor:"#e9e8e8"}}>13</td>
    <td style={{textAlign:"center", backgroundColor:"#e9e8e8"}}>84</td>
    <td style={{textAlign:"center", backgroundColor:"#e9e8e8"}}>40</td>
  </tr>
  <tr style={{backgroundColor :'#FFFFFF'}}>
    <td style={{color: "red", textAlign:"center"}}>09</td>
    <td style={{textAlign:"center"}}>86</td>
    <td style={{textAlign:"center"}}>98</td>
    <td style={{textAlign:"center"}}>59</td>
    <td style={{textAlign:"center"}}>39</td>
  </tr>
  <tr>
    <td style={{color: "red", textAlign:"center", backgroundColor:"#e9e8e8"}}>10</td>
    <td style={{textAlign:"center", backgroundColor:"#e9e8e8"}}>32</td>
    <td style={{textAlign:"center", backgroundColor:"#e9e8e8"}}>68</td>
    <td style={{textAlign:"center", backgroundColor:"#e9e8e8"}}>86</td>
    <td style={{textAlign:"center", backgroundColor:"#e9e8e8"}}>68</td>
  </tr>
  <tr style={{backgroundColor :'#FFFFFF'}}>
    <td style={{color: "red", textAlign:"center"}}>11</td>
    <td style={{textAlign:"center"}}>94</td>
    <td style={{textAlign:"center"}}>50</td>
    <td style={{textAlign:"center"}}>XX</td>
    <td style={{textAlign:"center"}}>XX</td>
  </tr>
</table>
<div>
  <Link to="/table1">
<button className='btn1' >Jan 2024</button>
</Link>
<button className='btn2'>Mar 20024</button>

</div>
</>
  )
}

export default Table
