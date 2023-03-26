import React from "react"
import {FetchingError, InfoCard, Loading, Sidebar, Table} from "../components"
import {copyableCellHandler} from "../components/Table"
import {Navigate, useParams} from "react-router-dom"
import {useDistributors, useSalePoints} from "../common/backend"

function DistributorsPage() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Дистрибьютор",
        accessor: "distributor",
        maxWidth: 150,
        Cell: copyableCellHandler
      },
    ], [])

  const {inn, gtin} = useParams<{inn?: string, gtin?: string}>()
  if (!inn || !gtin) {
    return <Navigate to="/"/>
  }

  const {distributors, isError, isLoading} = useDistributors(inn, gtin)

  if (isLoading) {
    return <Loading/>
  } else if (isError) {
    return <FetchingError/>
  }

  return (
    <>
      <Sidebar>
        <InfoCard
          title="Информация о дистрибьюторах"
          info={[
            {label: "ИНН", value: inn},
            {label: "ГТИН", value: gtin}
          ]}
        />
      </Sidebar>
      <div className="outlet">
        {/*@ts-ignore*/}
        <Table columns={columns} data={distributors}/>
      </div>
    </>
  )
}

export default DistributorsPage
