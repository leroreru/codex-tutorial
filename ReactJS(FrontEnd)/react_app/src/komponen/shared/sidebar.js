import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'

const SidebarStyled = styled.aside`
    background-color: #F7F7F7;
    ul{
        list-style-type: none;
    }
    ul li a{
        display: inline-block;
        text-decoration: none;
        width: 60%;
        padding: 0 .75rem 1rem;
        color: #212f54;
        border-bottom:solid 1px rgba(255,255,255,.5rem);
        transition: 0ms .14s ease-in-out;
    }
    li a:hover{
        color: #36bae6;
        background: #e0e5eb;
    }
`
function Sidebar() {
  return (
    <SidebarStyled>
      <ul>
       <li><Link to={'/home'}>Home</Link></li>
       <li><Link to={'/latihan'}>Latihan</Link></li>
       <li><Link to={'/calculator'}>Calculator</Link></li>
       <li><Link to="parent">ParentChild</Link></li>
       <li><Link to="useEffect1">UseEffect1</Link></li> 
       <li><a href="#contact">Contact</a></li>
      </ul>
    </SidebarStyled>
  )
}

export default Sidebar
