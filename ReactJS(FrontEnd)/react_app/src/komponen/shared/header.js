import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Hero = styled.div`
    background:url("./banner.jpg") no-repeat center;
    background-size:cover;
    color:#fff;
    font-size:110px;
    // text-align:center;
    display:grid;
    grid-template-columns:10px 2fr 10px;
    grid-template-rows:.5fr 1fr 20px;
    grid-gap: 20px;
    img{
        margin:auto;
        padding-top:1rem;
        grid-column:2/3;
        grid-row:1/2;
        height:185px;
    }
    article{
        grid-column:2/3;
        grid-row:2/3;
    }
    article p{
        font-size:18px;
        font-weight:600;
        line-height:5px;
        color:#fff;
        padding-left:315px;
        filter: drop-shadow(.1px 2px 1.5px #200);
    }
    h2{
        font-size:30px;
        text-transform:uppercase;
        font-weight:600;
        color:#fff;
        padding-left:190px;
        filter: drop-shadow(.1px 2px 1.5px #200);
    }
    button{
        background-color:#fff;
        border-radius:4px;
        border:#000;
        color:#2abadf;
        font-size:1rem;
        padding:5px 10px;
        margin:.75rem auto 0;
        cursor:pointer;
    }
`


function Header() {
  return (
    <Hero>
        <article>
            <h2>Welcome to enter komputer</h2>
            <p> Build PC Makin Gampang</p>
            <button>Getting Started<FontAwesomeIcon icon={faAngleDoubleRight}/></button>
        </article>
    </Hero>
  )
}

export default Header
