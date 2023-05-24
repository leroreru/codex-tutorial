import React from 'react'
import {Link, Outlet} from "react-router-dom"
import Header from '../shared/header'
import Nav from '../shared/nav'
import Main from '../shared/main'
import Footer from '../shared/footer'
import Sidebar from '../shared/sidebar'
import styled from 'styled-components'


const layout=(props)=> {
  const Mainsidebar = styled.div`
  display:grid;
  margin:1rem auto;
  grid-template-columns:180px 2fr;
  grid-template-areas:"aside main main";

  aside{
    grid-area:aside;
  }

  main{
    grid-area:main;
  }
  
  `
  return (
    <div>
    <div>
      {/* <ul>
        <li><Link to="/latihan">Latihan JS</Link> </li>
        <li><Link to="/parent">Bunga</Link> </li>
        <li><Link to="/calculator">calculator</Link> </li>
        <li><Link to="/useEffect">useEffect</Link> </li>
        <li><Link to="/listProduct">List Product</Link> </li>

      </ul> */}
    </div>
    <div>
      <Header/>
      <Nav/>
      <Mainsidebar>
      <Sidebar/>
      <Main>

        {<Outlet></Outlet>}

      </Main>
      </Mainsidebar>
      <Footer/>
    </div>
    </div>
  )
}

export default layout
