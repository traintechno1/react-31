import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { router } from './routes/AppRoutes'
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import { Provider } from 'react-redux';
import { store } from './context/store/store';

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <Provider store={store}>
            <RouterProvider router={router} /> 
        </Provider>
    </AuthProvider>
)
