import React, {useState} from "react"
import {CellProps, useTable} from "react-table"

interface Props {
  columns: Array<object>,
  data: Array<object>,
  className?: string,
}

function Table({columns, data, className}: Props) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    // @ts-ignore
    columns,
    data
  })

  const classNames = [
    "bg-tertiary text-black w-full rounded-xl",
    className || ""
  ]

  return (
    <div className={classNames.join(" ")}>
      <table
        {...getTableProps()}
        className="w-full"
      >
        <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                className="
                text-xl pt-3 font-medium pb-2 border-2 border-indigo-500
                border-t-0 first-of-type:border-l-0
                last-of-type:border-r-0 bg-indigo-500 text-white
              "
                style={{
                  width: column.width,
                  minWidth: column.minWidth,
                  maxWidth: column.maxWidth
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} className="first-of-type:pt-2">
              {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    className="
                    border-x-2 border-indigo-500
                    border-y-2
                    text-center
                    first-of-type:border-l-0
                    last-of-type:border-r-0
                    text-sm p-2 px-4
                    overflow-ellipsis overflow-hidden
                  "
                    style={{
                      width: cell.column.width,
                      minWidth: cell.column.minWidth,
                      maxWidth: cell.column.maxWidth
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              )}
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

function CopyableText({value}: {value: string}) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => navigator.clipboard.writeText(value)
    .then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1000)
    })

  return (
    <span
      className="cursor-pointer"
      onClick={handleClick}
    >
      {copied ? "Скопировано" : value}
    </span>
  )
}

export default Table
export const nullCellHandler = ({cell}: CellProps<object>) => cell.value || "-"
export const copyableCellHandler = ({cell}: CellProps<object>) => (
  <CopyableText value={cell.value}/>
)
