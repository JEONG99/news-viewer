import {
  BrowserRouter,
  Route,
  Routes,
} from '../node_modules/react-router-dom/index';
import './App.css';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewsPage />} />
          <Route path="/:category" element={<NewsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
