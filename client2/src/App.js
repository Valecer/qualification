import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/Home.js";
import {Smoke} from "./pages/smoke/Smoke.js";
import {Meter} from "./pages/meteorologia/Meter.js"
import {Fire} from "./pages/fire/Fire.js";
import {Header} from "./components/header/Header.js";

function App() {
  return (
    <div className="md:min-h-screen bg-slate-200 dark:bg-gray-700">
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/fire' element={<Fire/>}/>
            <Route path='/smoke' element={<Smoke/>}/>
            <Route path='/meter' element={<Meter/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
