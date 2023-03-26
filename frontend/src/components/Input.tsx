import React, {InputHTMLAttributes} from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement>{
  className?: string,
  name?: string,
  label?: string,
}

function Input({className, name, label, ...rest}: Props) {
  return (
    <div className="w-full">
      {label &&
        <label
          className="text-xl text-indigo-50"
          {...(name !== undefined ? {htmlFor: name}: {})}
        >
          {label}
        </label>
      }
      <input
        {...(name !== undefined ? {id: name}: {})}
        className={`
          w-full bg-indigo-200 rounded shadow shadow-indigo-900
          outline-none p-2 disabled:bg-indigo-400
          ${className || ""}
        `}
        {...rest}
      />
    </div>
  )
}

export default Input
