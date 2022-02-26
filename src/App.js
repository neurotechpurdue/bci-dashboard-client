import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Streaming from './pages/Streaming';
import Main from './pages/Main';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/streaming" element={<Streaming/>}/>
        <Route path="/" element={<Main/>}/>
        </Routes>

    </Router>
  );
}

export default App;
