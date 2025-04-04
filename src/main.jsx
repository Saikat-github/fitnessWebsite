import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import PricingPage from './pages/PricingPage.jsx'
import FormInfo from './pages/FormInfo.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import Account from './pages/Account.jsx'
import ResetPassword from './components/ResetPassword.jsx'
import FreeSession from './pages/FreeSession.jsx'
import { PrivacyPolicy } from './pages/index.js'
import TermsAndCondition from './pages/legal/TermsAndCondition.jsx'
import ProtectedRoutes from './components/ProtectedRoutes.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/pricing",
        element: <PricingPage />
      },
      {
        path: "/input",
        element: <ProtectedRoutes>
          <FormInfo />
        </ProtectedRoutes>
      },
      {
        path: "/input-freesession",
        element: <FreeSession />
      },
      {
        path: "/account",
        element: <ProtectedRoutes>
          <Account />
        </ProtectedRoutes>
      },
      {
        path: "/resetPassword",
        element: <ResetPassword />
      },
      {
        path: "/terms",
        element: <TermsAndCondition />
      },
      {
        path: '/privacy',
        element: <PrivacyPolicy />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
)
