import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClientLayout from './layouts/ClientLayout';
import Register from './pages/Register';
import Questionaire from './pages/Questionaire';
import Prize from './pages/Prize';
import ParticipantManager from './pages/ParticipantManager';
import AdminLayout from './layouts/AdminLayout';
import Result from './pages/Result';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<ClientLayout/>}>
                    <Route path="/" element={<Register/>}/>
                    <Route path="/questionaire" element={<Questionaire/>}/>
                    <Route path="/prize" element={<Prize/>} />
                    <Route path="/result" element={<Result/>} />
                </Route>
                <Route path="/admin" element={<AdminLayout/>}>
                    <Route path="participant" element={<ParticipantManager/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;