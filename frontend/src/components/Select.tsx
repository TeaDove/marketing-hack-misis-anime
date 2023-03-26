import React, {SelectHTMLAttributes} from "react"

interface Props extends SelectHTMLAttributes<HTMLSelectElement>{
  options: Array<{value?: any, name: string}>,
  label?: string,
  name?: string,
}

function Select({options, label, name, disabled, ...rest}: Props) {
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
      <select
        {...(name !== undefined ? {id: name}: {})}
        className="
          w-full bg-indigo-200 rounded shadow shadow-indigo-900
          outline-none p-2 disabled:bg-indigo-400 h-[40px]
        "
        {...rest}
      >
        {options.map(({value, name}) => (
          <option value={value} className="bg-secondary">
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
