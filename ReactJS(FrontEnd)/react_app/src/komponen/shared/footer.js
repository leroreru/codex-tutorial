import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import {faFacebook,faLinkedinIn,faYoutube,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footerstyled = styled.footer `
    .social,.contactInfo{
        background-color:#F7F7F7;
        color: #222222;
        padding: 1rem 1rem 0;
        text-align:center;
    }
    .social h3 {
        border-bottom: solid 1px #b6e8ff;
        font-weight: 400;
        padding-bottom: 1rem; 
      }
      
    .socialIcons{
        font-size: 200%;
        padding: 0.1px 0;
    }
    .socialIcons a{
        color: #223055;
        padding: 0 .5rem;
    }
    .socialIcons a:hover{
        color: #ffc107;
    }
    .contactInfo{
        padding-top: 0;
    }
    .contactInfo article{
        border-bottom: solid 1px #b6e8ff;
        padding: 1rem 0;
    }
    .contactInfo h4{
        font-weight: 400;
    }
    .contactInfo li{
        font-weight: 300;
        list-style-type: none;
    }
    .copy{
        font-size: 30px;
        font-weight: 300;
        padding-top: 0.1rem;
    }
    
`
function Footer(props) {
  return (
    <Footerstyled>
      <section className="social" id="contact">
        <article>
          <h3>Let's be Social connect with us</h3>
          <div className="socialIcons">
            <a href=""><FontAwesomeIcon icon={faFacebook}/></a>
            <a href=""><FontAwesomeIcon icon={faLinkedinIn}/></a>
            <a href=""><FontAwesomeIcon icon={faYoutube}/></a>
            <a href=""><FontAwesomeIcon icon={faInstagram}/></a>
            <a href=""><FontAwesomeIcon icon={faTwitter}/></a>
          </div>
        </article>
      </section>
      <section className="contactInfo">
        <article>
          <h4>Contact Information</h4>
          {/* <ul> */}
            <p>Phone : 0123-123-123</p>
            <p>Email : batch3@codex.id</p>
            <p>Address : Sentul City</p>
          {/* </ul> */}
          <p className="copy"> CodeX Academy &copy;2023</p>
        </article>
      </section>
    </Footerstyled>
  )
}

export default Footer
