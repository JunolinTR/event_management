import Login from "./pages/login"
import Signup from './pages/signup';
import Home from './pages/Home';
import EventsPage from './pages/EventPage';
import CreateEvent from './pages/CreateEvent';


import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/events" element={<EventsPage/>}></Route>
          <Route path="/create" element={<CreateEvent/>}></Route>          
        </Routes>
      </BrowserRouter>

  );
}

export default App;
