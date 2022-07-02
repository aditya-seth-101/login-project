import FrontPage from './Components/FrontPage';
import './App.css';

import './CSS/Login.css'

import FeedbackForm from './Components/FeedbackForm.js';
import FeedTableUser from './Components/FeedTableUser.js';
import FeedTableAdmin from './Components/FeedTableAdmin.js';
import UserPanel from './Components/UserPanel'
import MainPage from './Components/MainPage';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AdminPanel from './Components/AdminPanel';
import EditComp from './Components/EditComp';
import TableEditAdmin from './Components/TableEditAdmin';

function App() {
 
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<FrontPage />} />
        <Route path='/feedback-form' element={<FeedbackForm />} />
        <Route path='/feedback-table' element={<FeedTableUser />} />
        <Route path='/feedback-table-admin' element={<FeedTableAdmin />} />
        <Route path='/user-panel' element={<UserPanel />} />
        <Route path='/admin-panel' element={<AdminPanel />} />
        <Route path='/admin-table-edit' element={<TableEditAdmin />} />
        <Route path='/main-page' element={<MainPage />} />
        <Route path='/edit-user' element={<EditComp />} />
        <Route path='/nav' element={<Navbar />} />
      </Routes>     
     </BrowserRouter>
    </div>
  );
}

export default App;
