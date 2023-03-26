import React, {useState} from "react"
import {Button, Input, Sidebar, Table} from "../components"
import {useNavigate} from "react-router-dom"


function MainPage() {
  const navigate = useNavigate()
  const [inn, setInn] = useState("DA62EC79660CF21AC37A260DA6F642C4")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInn(e.target.value)
  }

  const handleSearchClick = () => {
    navigate(`/org/${inn}`)
  }

  const handlePredClick = () => {
    navigate(`/pred/link`)
  }

  return (
    <>
      <Sidebar>
        <Input onChange={handleInputChange} value={inn} label="Инн"/>
        <Button onClick={handleSearchClick}>Найти</Button>
      </Sidebar>
      <div className="outlet">
        <div className="p-12 flex flex-col">
          <span className="text-3xl pb-14">
            Добро пожаловать!
          </span>
          <span className="text-xl">
            Используйте меню слева чтобы посмотреть информацию про организацию.
          </span>
          <span className="text-xl">
            Или нажмите <a onClick={handlePredClick} className="cursor-pointer text-indigo-800">сюда</a>, чтобы перейти к аналитике.
          </span>
          <span className="text-xl mt-4">
            Полезные ссылки:<br/>
            1. <a href="https://github.com/TeaDove/marketing-hack-misis-anime" className="cursor-pointer text-indigo-800">Гитхаб</a>
          </span>
        </div>
      </div>
    </>
  )
}

export default MainPage
