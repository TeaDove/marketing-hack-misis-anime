import React from "react"
import {FetchingError, InfoCard, Loading, Sidebar, Table} from "../components"
import {copyableCellHandler, nullCellHandler} from "../components/Table"
import {Navigate, useNavigate, useParams} from "react-router-dom"
import {ProductData, useProducts} from "../common/backend"
import {CellProps} from "react-table"

function OrganizationPage() {
  const columns = React.useMemo(
    () => [
      {
        Header: "GTIN",
        accessor: "gtin",
        maxWidth: 150,
        Cell: copyableCellHandler
      },
      {
        Header: "Название",
        accessor: "productName",
        maxWidth: 150,
        Cell: copyableCellHandler
      },
      {
        Header: "Короткое название",
        accessor: "productShortName",
        maxWidth: 150,
        Cell: copyableCellHandler
      },
      {
        Header: "ТН ВЭД",
        accessor: "tnved",
        maxWidth: 150,
        Cell: copyableCellHandler
      },
      {
        Header: "ТН ВЭД 10",
        accessor: "tnved10",
        maxWidth: 150,
        Cell: copyableCellHandler
      },
      {
        Header: "Страна",
        accessor: "country",
        Cell: nullCellHandler
      },
      {
        Header: "Объём",
        accessor: "volume",
        Cell: nullCellHandler
      },
      {
        Header: "Опции",
        Cell: ({cell}: CellProps<object>) => {
          const {gtin} = cell.row.original as ProductData

          return (
            <div className="flex flex-col gap-1">
              <button
                className="hover:bg-indigo-200 py-1"
                onClick={() => navigate(`/org/${inn}/${gtin}/sale-points`)}
              >Точки продаж</button>
              <button
                className="hover:bg-indigo-200 py-1"
                onClick={() => navigate(`/org/${inn}/${gtin}/distributors`)}
              >Дистрибьюторы</button>
            </div>
          )
        }
      }
    ], []
  )

  const navigate = useNavigate()

  const {inn} = useParams<{inn: string}>()
  if (!inn) {
    return <Navigate to="/"/>
  }

  const {products, isError, isLoading} = useProducts(inn)

  if (isLoading) {
    return <Loading/>
  } else if (isError) {
    return <FetchingError/>
  }

  return (
    <>
      <Sidebar>
        <InfoCard
          title="Информация об организации"
          info={[{label: "ИНН", value: inn}]}
        />
      </Sidebar>
      <div className="outlet">
        {/*@ts-ignore*/}
        <Table columns={columns} data={products}/>
      </div>
    </>
  )
}

export default OrganizationPage
