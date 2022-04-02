import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import 'chartjs-adapter-luxon';
import Streaming from './pages/Streaming';
import Main from './pages/Main';
import Train from './component/Train';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/streaming" element={<Streaming/>}/>
        <Route path="/" element={<Main/>}/>
        <Route path="/train" element={<Train name="vssss" data="weeeee"/>}/>
        </Routes>

    </Router>
  );
}

export default App;
