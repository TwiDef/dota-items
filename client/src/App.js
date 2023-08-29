import { paths } from './paths';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import ItemPage from './pages/item-page/ItemPage';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={paths.home} element={<HomePage />} />
                <Route path={`${paths.item}/:id`} element={<ItemPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
