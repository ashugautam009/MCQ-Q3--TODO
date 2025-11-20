import "./App.css";
import Todo from "./to-do";
import {
  fakeData,
  AddButtonName,
  DeleteButtonName,
  EditButtonName,
} from "./constant";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registration from "./registration-page/Registration";
import Login from "./login-Page/Login";
import EditUser from "./to-do/user-edit";
import { useState } from "react";
function App() {
  //Set the fake data set here
  const [data, Setdata] = useState(fakeData);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Registration />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/todo",
      element: (
        <div>
          <Todo
            data={data}
            Setdata={Setdata}
            AddButtonName={AddButtonName}
            DeleteButtonName={DeleteButtonName}
            EditButtonName={EditButtonName}
          />
        </div>
      ),
    },
    {
      path: "/edit/:id",
      element: <EditUser data={data} Setdata={Setdata} />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
