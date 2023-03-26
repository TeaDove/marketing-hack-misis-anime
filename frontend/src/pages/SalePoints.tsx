import React from "react"
import {FetchingError, InfoCard, Loading, Sidebar, Table} from "../components"
import {Navigate, useParams} from "react-router-dom"
import {useSalePoints} from "../common/backend"
import {copyableCellHandler, nullCellHandler} from "../components/Table"

function SalePointsPage() {
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "idSp",
        maxWidth: 150,
        Cell: copyableCellHandler
      },
      {
        Header: "ИНН",
        accessor: "inn",
        maxWidth: 150,
        Cell: copyableCellHandler
      },
      {
        Header: "Код региона",
        accessor: "regionCode",
        maxWidth: 150,
        Cell: copyableCellHandler
      },
      {
        Header: "Город",
        accessor: "cityWithType",
        maxWidth: 150,
        Cell: nullCellHandler
      },
      {
        Header: "Почтовый индекс",
        accessor: "postalCode",
        maxWidth: 150,
        Cell: nullCellHandler
      },
    ], [])

  const {inn, gtin} = useParams<{inn?: string, gtin?: string}>()
  if (!inn || !gtin) {
    return <Navigate to="/"/>
  }

  const {salePoints, isError, isLoading} = useSalePoints(inn, gtin)

  if (isLoading) {
    return <Loading/>
  } else if (isError) {
    return <FetchingError/>
  }

  return (
    <>
      <Sidebar>
        <InfoCard
          title="Информация о точках продаж"
          info={[
            {label: "ИНН", value: inn},
            {label: "ГТИН", value: gtin}
          ]}
        />
      </Sidebar>
      <div className="outlet">
        {/*@ts-ignore*/}
        <Table columns={columns} data={salePoints}/>
      </div>
    </>
  )
}

export default SalePointsPage