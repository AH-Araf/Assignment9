import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import QuizDetals from './components/QuizDetails/QuizDetals';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';

function App() {

  const router = createBrowserRouter([
    { path: '/', element: <Main></Main>,


    children: [
      { path: '/',
      loader: async ({data}) => {
        return fetch('https://openapi.programming-hero.com/api/quiz')
      },
      element: <Home></Home>
      },

      {
        path: '/quiz/:quizID',
        loader: async ({params}) =>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizID}`)
        },
        element: <QuizDetals></QuizDetals>
      },

      {
        path: '/topics',
        loader: async ({data}) => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Topics></Topics>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }

    ]
  },
  {path: '*', element: <div>404 Not Found Your Data</div>}
])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
