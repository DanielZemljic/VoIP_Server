import { useDeno } from 'aleph'
import React from 'react'
import Logo from '../components/logo.tsx'
import useCounter from '../lib/useCounter.ts'
import Link from 'link.tsx'
import Nav from 'dir.tsx' 

export default function Home() {
  const [count, isSyncing, increase, decrease] = useCounter()
  const version = useDeno(() => Deno.version.deno)

  return (

    <div className="page">
      <div className="sticky"> 
      <Nav></Nav>
      </div>
      <link rel="stylesheet" href="../style/index.css" />
      <p className="logo"><Logo /></p>
      <h1>Welcome to use <strong>Aleph.js</strong>!</h1>
      <p className="links">
        <a href="https://alephjs.org" target="_blank">Website</a>
        <span></span>
        <a href="https://alephjs.org/docs/get-started" target="_blank">Get Started</a>
        <span></span>
        <a href="https://alephjs.org/docs" target="_blank">Docs</a>
        <span></span>
        <a href="https://github.com/alephjs/aleph.js" target="_blank">Github</a>
      </p>
      <p className="moreLinks">
        <li>
          <Link to= "/about">ABOUT</Link>
        </li>
      </p>
      <div className="counter">
        <span>Counter:</span>
        {isSyncing && (
          <em>...</em>
        )}
        {!isSyncing && (
          <strong>{count}</strong>
        )}
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
      <p className="copyinfo">Built by Aleph.js in Deno {version}</p>
    </div>
  )
}
