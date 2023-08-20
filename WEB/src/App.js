import './App.css';
import Home from "./Pages/Home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SchoolPage from "./Pages/SchoolPage/SchoolPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/schools" element={<Home/>}/>
                    <Route path="/schools/:schoolId" element={<SchoolPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
