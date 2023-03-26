import React, {useState} from "react"
import {Button, Input, Table} from "../components"
import {fetcher} from "../common/backend"

function PredictionsLink() {
  const [firstInnInput, setFirstInnInput] = useState("97D9CA38928AE6B9A0EA52F3CABC99E4")
  const [secondInnInput, setSecondInnInput] = useState("1BAC9B05B40E762DB243D16567D3AB41")
  const [predictions, setPredictions] = useState([])

  const columns = React.useMemo(
    () => [
      {
        Header: "Вероятность",
        accessor: "value",
      },
      {
        Header: "Тип отношений",
        accessor: "class",
      },
    ], []
  )

  const handlePredict = async () => {
    let result = await fetcher(
      `http://84.252.136.195:8000/predictions/links?head_inn=${firstInnInput}&tail_inn=${secondInnInput}`
    )

    setPredictions(result.predictions)
  }


  return (
    <div className="outlet flex items-center justify-center">
      <div className="flex w-[50vw] shadow-indigo-900 shadow">
        <div className="h-[80vh] w-[50%] bg-indigo-500 flex flex-col items-center gap-4 p-12">
            <span className="text-indigo-50 text-3xl text-center mb-12">
              Предсказание связи между организациями
            </span>
          <Input
            label="Первый ИНН"
            value={firstInnInput}
            onChange={e => setFirstInnInput(e.target.value)}
          />
          <Input
            label="Второй ИНН"
            value={secondInnInput}
            onChange={e => setSecondInnInput(e.target.value)}
          />
          <Button
            className="mt-auto"
            onClick={handlePredict}
          >
            Предсказать
          </Button>
        </div>
        <div className="w-[50%]">
          <Table columns={columns} data={predictions}/>
        </div>
      </div>
    </div>
  )
}

export default PredictionsLink