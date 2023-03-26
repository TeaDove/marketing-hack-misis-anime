import React from "react"

interface Props {
  title?: string,
  info: Array<{label: string, value: string}>,
}

function InfoCard({info, title}: Props) {
  return (
    <div className="w-full p-4 bg-indigo-100 flex flex-col gap-4">
      {
        title &&
          <span className="text-xl pb-2 text-center">
            {title}
          </span>
      }
      {
        info.map(v => (
          <div className="flex flex-col" key={v.label}>
            <span className="text-sm text-indigo-500">
              {v.label}
            </span>
            <span className="text-lg text-indigo-500 overflow-hidden overflow-ellipsis">
              {v.value}
            </span>
          </div>
        ))
      }
    </div>
  )
}

export default InfoCard
