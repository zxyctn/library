import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Add from './pages/Add';
import BookDetails from './pages/BookDetails';
import { LibraryProvider } from './context/library/LibraryContext';

function App() {
  return (
    <LibraryProvider>
      <Router>
        <div className='flex flex-col h-screen w-screen' id='app'>
          <Navbar />
          <Routes>
            <Route path='/library/' element={<Home />} />
            <Route path='/library/add' element={<Add />} />
            <Route path='/library/:id' element={<BookDetails />} />
          </Routes>
        </div>
        <ToastContainer />
      </Router>
    </LibraryProvider>
  );
}

export default App;
