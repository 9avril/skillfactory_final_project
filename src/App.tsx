import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import DescriptionComp from "./MainContent/Description/DescriptionComp.tsx";
import Advantages from "./MainContent/Advantages/Advantages.tsx";
import Rates from "./MainContent/Rates/Rates.tsx";
import Auth from './Auth/Auth.tsx';
import {AuthProvider} from "./Auth/AuthContext.tsx";
import FindData from "./FindData/FindData.tsx";

function App() {
    return (
        <AuthProvider>
            <Router>
                <>
                    <Header/>
                    <Routes>
                        <Route path="/login" element={<Auth/>}/>
                        <Route path="/findata" element={<FindData/>}/>
                        <Route path="/" element={<>
                            <DescriptionComp/>
                            <Advantages/>
                            <Rates/>
                        </>}/>
                    </Routes>
                    <Footer/>
                </>
            </Router>
        </AuthProvider>
    )
}


export default App;
