import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Sheet from './views/sheet/sheet';
import './index.scss';
import { SheetProvider } from './contexts/SheetContext';

export default function App() {
  return (
    <SheetProvider>
      <Router>
        <Routes>
          <Route index element={<Sheet />} />
        </Routes>
      </Router>
    </SheetProvider>
  );
}
