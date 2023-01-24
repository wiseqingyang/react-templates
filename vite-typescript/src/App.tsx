import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';
import MinePage from './pages/Mine';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/mine',
    element: <MinePage />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
