import React, {ButtonHTMLAttributes, ReactNode} from "react"
import Ripples from "react-ripples"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  children?: ReactNode,
}

function Button({className, children, ...rest}: Props) {
  return (
    <button
      className={`
        w-full bg-indigo-800 rounded shadow shadow-indigo-900
        p-2 text-xl text-white hover:bg-indigo-900
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
