import * as Draggable from 'draggable'
import { Card } from './components/Card'

function App() {
  return (
    <>
      <Draggable.DndContext>
        <Draggable.Draggable>
          <Card />
        </Draggable.Draggable>
        <Draggable.Draggable>
          <Card />
        </Draggable.Draggable>
        <Draggable.Draggable>
          <Card />
        </Draggable.Draggable>
        <Draggable.Draggable>
          <Card />
        </Draggable.Draggable>
      </Draggable.DndContext>
    </>
  )
}

export default App
