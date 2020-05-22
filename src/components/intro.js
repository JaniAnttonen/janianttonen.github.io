import React from 'react'
import './intro.css'
import './nav.css'

const Intro = ({ location }) =>
  location &&
  location.pathname === '/' && (
    <header className="intro animated fadeIn">
      <span className="animated fadeIn">
        <strong>Jani Anttonen</strong> – A creative mind with a broad view of
        cutting edge technologies. Expert in designing and building web
        applications with over 10 years of experience. Currently working on
        decentralized stuff at{' '}
        <a
          href="https://equilibrium.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Equilibrium
        </a>
        .
      </span>
    </header>
  )

export default Intro
