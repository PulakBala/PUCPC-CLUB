import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Events from './Components/Events/Events';
import Forum from './Components/Forum/Forum';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Search from './Components/Search/Search';
import Settings from './Components/Settings/Settings';
import Verify from './Components/Verify/Verify';
import Main from './Layout/Main';

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
            element: <Home></Home>
          },
          {
            path: '/search',
            element: <Search></Search>
          },
          {
            path: '/events',
            element: <Events></Events>
          },
          {
            path: '/forum',
            element: <Forum></Forum>
          },
          {
            path: '/verify',
            element: <Verify></Verify>
          },
          {
            path: '/settings',
            element: <Settings></Settings>
          },
          {
            path: '/login',
            element: <Login></Login>
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
