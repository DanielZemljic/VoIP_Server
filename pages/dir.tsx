import React from "https://esm.sh/react"
import Link from 'link.tsx'

export default function Nav() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  )
}