import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Events from './Components/Events/Events';
import Forum from './Components/Forum/Forum';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import Search from './Components/Search/Search';
import Settings from './Components/Settings/Settings';
import Verify from './Components/Verify/Verify';
import Main from './Layout/Main';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
      {
        path: '/',
        element: <Main></Main>,
        children:[
          {
            path: '/',
            loader: async () => {
              return fetch('advisors.json');
            },
            element: <PrivateRoute><Home></Home></PrivateRoute>
          },
          {
            path: '/search',
           
            element: <PrivateRoute><Search></Search></PrivateRoute>
          },
          {
            path: '/events',
            loader: async() => {
              return fetch('events.json');
            },
            element: <PrivateRoute><Events></Events></PrivateRoute>
          },
          {
            path: '/forum',
            element: <PrivateRoute><Forum></Forum></PrivateRoute>
          },
          {
            path: '/verify',
            element: <PrivateRoute> <Verify></Verify></PrivateRoute>
          },
          {
            path: '/settings',
            element: <PrivateRoute><Settings></Settings></PrivateRoute>
          },
          {
            path: '/login',
            element: <Login></Login>
          },
          {
            path: '/registration',
            element: <Registration></Registration>
          }
        ]
      }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
