// import ReactDOM from 'react-dom/client';
// // Bringing in the required imports from 'react-router-dom' to set up application routing behavior
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './style.css';

// // Bringing in the pages the router will use to conditionally show the appropriate views
// import App from './App';
// import Error from './sections/Error';
// import Home from './sections/Home';
// import Portfolio from './sections/Portfolio';
// import AboutMe from './sections/AboutMe';
// import Resume from './sections/Resume'

// // Define the accessible routes, and which components respond to which URL
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: 'portfolio',
//         element: <Portfolio />,
//       },
//       {
//         path: 'aboutme',
//         element: <AboutMe />,
//       },
//       {
//         path: 'Resume',
//         element: <Resume/>
//       },
//       {
//         path: 'Contact',
//         element: <Contact/>
//       }
//     ],
//   },
// ]);

// // Render the RouterProvider component
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// );

import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);