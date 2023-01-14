import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Add from './pages/Add';
import { LibraryProvider } from './context/library/LibraryContext';

function App() {
  return (
    <LibraryProvider>
      <Router>
        <div className='flex flex-col h-screen w-screen'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<Add />} />
          </Routes>
        </div>
      </Router>
    </LibraryProvider>
  );
}

export default App;
