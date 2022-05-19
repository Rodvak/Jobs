import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateForm from './components/CreateForm';
import Dashboard from './components/Dashboard';
import Display from './components/Display';
import Update from './components/Update';

function App() {
  return (
    <div>
      <h1>Jobs Board</h1>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="/jobs/new" element={<CreateForm />} />
          <Route path="/jobs/:id" element={<Display />} />
          <Route path="/jobs/edit/:id" element={<Update />} />
          <Route path="*" element={<><h1>Error</h1></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
