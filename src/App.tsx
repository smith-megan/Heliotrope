import { useEffect, useState } from "react"
import One from "./assets/photos/1.jpg"
import Two from "./assets/photos/2.jpg"
import Three from "./assets/photos/3.jpg"
import Four from "./assets/photos/4.jpg"
import Five from "./assets/photos/5.jpg"
import Six from "./assets/photos/6.jpg"

import "./App.css"

function App() {
  const [mouse, setMouse] = useState(0)
  const [mouseChange, setMouseChange] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const [down, setDown] = useState(false)

  let scroll = (e) => {
    setMouse(e.clientX)
    console.log(mouse, "Mouse")
    setDown(true)
  }

  let moved = (e) => {
    if (!down) {
      return
    }
    setMouseChange(e.clientX)
    console.log(mouseChange, "mousechange")
  }

  useEffect(() => {
    // const maxDistance= 1/2window
    // const percentage=(mouseChange/maxDistance)*100
    setPercentage(((mouse - mouseChange) / 500) * 100)
    console.log(percentage, "percentage")
  }, [mouseChange])
  return (
    <>
      <div
        className={"photo-track"}
        style={{ transform: `translateX(${percentage}%)` }}
        onMouseDown={(e) => {
          scroll(e)
        }}
        onMouseMove={(e) => {
          moved(e)
        }}
        onMouseUp={() => {
          setDown(false)
        }}
        onMouseLeave={() => {
          setDown(false)
        }}
      >
        <img
          className={"photo"}
          style={{ objectPosition: `${percentage}px 50%` }}
          src={One}
          draggable="false"
        />
        <img className="photo" src={Two} draggable="false" />
        <img className="photo" src={Three} draggable="false" />
        <img className="photo" src={Four} draggable="false" />
        <img className="photo" src={Five} draggable="false" />
        <img className="photo" src={Six} draggable="false" />
      </div>
    </>
  )
}

export default App
