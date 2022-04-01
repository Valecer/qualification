import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/Home.js";
import {Smoke} from "./pages/smoke/Smoke.js";
import {Meter} from "./pages/meteorologia/Meter.js"
import {FirstF} from "./pages/fire_first_step/FirstF.js";
import {Fire} from "./pages/fire/Fire.js";
import {Header} from "./components/header/Header.js";


function App() {
    return (
        <div className="mh-100">
            <BrowserRouter>
                <Header/>
                <div className="container pt-4">
                    <Routes>
                        <Route path='/' exact element={<Home/>}/>
                        <Route path='/fire' element={<Fire/>}/>
                        <Route path='/smoke' element={<Smoke/>}/>
                        <Route path='/meter' element={<Meter/>}/>
                        <Route path='/fistf' element={<FirstF/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;
