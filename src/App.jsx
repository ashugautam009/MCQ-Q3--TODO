
import './App.css'
import Todo from './to-do'
import { fakeData,AddButtonName,DeleteButtonName } from './constant'
function App() {


  return (
    
    <div>
        <Todo fakeData={fakeData} AddButtonName={AddButtonName} DeleteButtonName={DeleteButtonName}/>
    </div>
  )
}

export default App
