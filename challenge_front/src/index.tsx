import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
import { Base } from './components/Base'
import {Main} from "./components/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />
    },
    {
        path: '/home',
        element: <Main />
    },

])

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <React.StrictMode>
        <Base>
            <RouterProvider router={router} />
        </Base>
    </React.StrictMode>
)
