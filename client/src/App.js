import { paths } from './paths';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import ItemPage from './pages/item-page/ItemPage';
import CreateItemPage from './pages/create-item-page/CreateItemPage';
import OrderPage from './pages/order-page/OrderPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={paths.home} element={<HomePage />} />
                <Route path={`${paths.item}/:id`} element={<ItemPage />} />
                <Route path={paths.createItem} element={<CreateItemPage />} />
                <Route path={paths.order} element={<OrderPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
