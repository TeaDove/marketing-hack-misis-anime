import React, {ReactNode} from "react"
import Ripples from "react-ripples"
import {TfiControlBackward} from "react-icons/tfi"
import {useLocation, useNavigate} from "react-router-dom"

interface Props {
  children?: ReactNode
}

function Sidebar({children}: Props) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div
      className="w-72 bg-indigo-600 h-full fixed top-0 left-0 overflow-x-hidden flex flex-col p-6 items-center"
      style={{zIndex: 1}}
    >
      <span className="text-indigo-50 text-2xl mt-6 pb-16">
        МИСИС Анимешники
      </span>
      <div className="w-full flex flex-col gap-4">
        {children}
      </div>
      {location.pathname !== "/" &&
        <Ripples className="mt-auto w-full">
          <button
            className="
              w-full p-2 flex items-center justify-center gap-5
              text-2xl text-indigo-300
            "
            onClick={() => navigate(-1)}
          >
            <TfiControlBackward size={28}/>
            Назад
          </button>
        </Ripples>
      }
    </div>
  )
}

export default Sidebar