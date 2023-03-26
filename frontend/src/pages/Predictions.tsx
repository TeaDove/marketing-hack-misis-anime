import React from "react"
import {Button, InfoCard, Input, Sidebar, Table} from "../components"
import {Outlet} from "react-router-dom"
import NavButton from "../components/NavButton"

function PredictionsPage() {
  return (
    <>
      <Sidebar>
        <NavButton text="Связи" url="/pred/link"/>
        <NavButton text="Отношения" url="/pred/relations"/>
      </Sidebar>
      <Outlet/>
    </>
  )
}

export default PredictionsPage
