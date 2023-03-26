import React, {useState} from "react"
import {Button, Input, Select, Table} from "../components"
import {fetcher} from "../common/backend"

function PredictionsRelations() {
  const [node, setNode] = useState("97D9CA38928AE6B9A0EA52F3CABC99E4")
  const [relation, setRelation] = useState("distributes_from_to")
  const [predictions, setPredictions] = useState([])

  const columns = React.useMemo(
    () => [
      {
        Header: "Вероятность",
        accessor: "value",
      },
      {
        Header: "Объект",
        accessor: "node",
      },
    ], []
  )

  const handlePredict = async () => {
    let result = await fetcher(
      `http://84.252.136.195:8000/predictions/relations?node=${node}&relation=${relation}`,
    )

    setPredictions(result.predictions)
  }

  return (
    <div className="outlet flex items-center justify-center">
      <div className="flex w-[50vw] shadow-indigo-900 shadow">
        <div className="h-[80vh] w-[50%] bg-indigo-500 flex flex-col items-center gap-4 p-12">
          <span className="text-indigo-50 text-3xl text-center mb-12">
            Предсказание связи между объектами
          </span>
          <Input
            label="Объект"
            onChange={e => setNode(e.target.value)}
            value={node}
          />
          <Select
            options={[
              {name: "distributes_from_to", value: "distributes_from_to"},
              {name: "distributes", value: "distributes"},
              {name: "distributed_to", value: "distributed_to"},
              {name: "located_in", value: "located_in"},
              {name: "distributes_inverse", value: "distributes_inverse"},
              {name: "distributed_to_inverse", value: "distributed_to_inverse"},
              {name: "distributes_from_to_inverse", value: "distributes_from_to_inverse"},
              {name: "sales_inverse", value: "sales_inverse"},
              {name: "sold_in", value: "sold_in"},
              {name: "sold_in_inverse", value: "sold_in_inverse"},
              {name: "sales", value: "sales"},
              {name: "located_in_inverse", value: "located_in_inverse"}
            ]}
            label="Отношение"
            onChange={e => setRelation(e.target.value)}
            value={relation}
          />
          <Button className="mt-auto" onClick={handlePredict}>
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

export default PredictionsRelations
