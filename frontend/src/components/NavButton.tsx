import React from "react"
import Ripples from "react-ripples"
import {NavLink} from "react-router-dom"

interface Props {
  text: string,
  url: string,
}

function NavButton({text, url}: Props) {
  const baseLink = "w-full rounded-xl p-2 pl-3 text-xl text-indigo-50 flex items-center"
  const normalLink = baseLink + " hover:bg-white/10"
  const activeLink = baseLink + " bg-white/20 hover:bg-white/30"

  return (
    <Ripples during={200} color="rgba(0, 0, 0, .07)">
      <NavLink
        to={url}
        className={({isActive}) => isActive ? activeLink : normalLink}
      >
        {text}
      </NavLink>
    </Ripples>
  )
}

export default NavButton
