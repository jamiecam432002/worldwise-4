import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import AppLayout from './pages/AppLayout';
import CityList from './components/CityList/CityList';
import CountryList from './components/CountryList/CountryList';
import City from './components/City/City';
import Form from './components/Form/Form';
import { CitiesProvider } from './contexts/CitiesContext';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './pages/ProtectedRoute';

export const BASE_URL = 'http://localhost:8000';

function App() {
	return (
		<AuthProvider>
			<CitiesProvider>
				<BrowserRouter>
					<Routes>
						<Route index element={<Homepage />} />
						<Route path='pricing' element={<Pricing />} />
						<Route path='product' element={<Product />} />
						<Route path='login' element={<Login />} />
						<Route
							path='app'
							element={
								<ProtectedRoute>
									<AppLayout />
								</ProtectedRoute>
							}>
							<Route index element={<Navigate replace to='cities' />} />
							<Route path='cities' element={<CityList />} />
							<Route path='cities/:id' element={<City />} />
							<Route path='countries' element={<CountryList />} />
							<Route path='form' element={<Form />} />
						</Route>
						<Route path='*' element={<PageNotFound />} />
					</Routes>
				</BrowserRouter>
			</CitiesProvider>
		</AuthProvider>
	);
}

export default App;
