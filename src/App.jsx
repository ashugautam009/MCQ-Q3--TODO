
import './App.css'
import Todo from './to-do'
import { fakeData,AddButtonName,DeleteButtonName } from './constant'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Registration from './registration-page/Registration'
import Login from './login-Page/Login'

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Registration/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/todo',
      element:<div>
         <Todo fakeData={fakeData} AddButtonName={AddButtonName} DeleteButtonName={DeleteButtonName}/>
      </div>
    }
  ])

  return (
    
    <div>
        <RouterProvider router={router} />
       
    </div>
  )
}

export default App
