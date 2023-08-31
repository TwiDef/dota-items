import { paths } from './paths';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import ItemPage from './pages/item-page/ItemPage';
import CreateItemPage from './pages/create-item-page/CreateItemPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={paths.home} element={<HomePage />} />
                <Route path={`${paths.item}/:id`} element={<ItemPage />} />
                <Route path={paths.createItem} element={<CreateItemPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
