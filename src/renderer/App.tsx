import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Sheet from './views/sheet/sheet';
import './index.scss';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Sheet />} />
      </Routes>
    </Router>
  );
}
