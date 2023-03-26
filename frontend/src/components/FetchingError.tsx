import React from "react"
import {Sidebar} from "./index"

function FetchingError() {
  return (
    <>
      <Sidebar/>
      <div className="outlet flex items-center justify-center text-4xl text-rose-500 text-semibold">
        Ошибка загрузки
      </div>
    </>
  )
}
export default FetchingError
