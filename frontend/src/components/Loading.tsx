import React from "react"
import {Sidebar} from "./index"
import {Triangle} from "react-loader-spinner"

function Loading() {
  return (
    <>
      <Sidebar/>
      <div className="outlet flex items-center justify-center">
        <Triangle
          height="96"
          width="96"
          color="#6366f1"
          ariaLabel="triangle-loading"
          visible={true}
        />
      </div>
    </>
  )
}

export default Loading