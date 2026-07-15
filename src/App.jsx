import { Routes, Route, Link } from "react-router-dom";
import Menu from "./pages/Menu";
import Idosos from "./pages/Idosos";
import Pcd from "./pages/Pcd";
import Babas from "./pages/Babas";
import AcompDomiciliar from "./pages/AcompDomiciliar";
import TecEnfermagem from "./pages/TecEnfermagem";
import Hospitalar from "./pages/Hospitalar";

import Button from "./components/Button";
import { Baby, Accessibility, Hospital, Stethoscope, House, Search, PersonStanding, ShieldCheck, Star, Handshake, Headset } from 'lucide-react';
import "./styles/App.css";
import CardNavBar from "./components/CardNavBar";
import Beneficios from "./components/Beneficios";

function App(){
    return(
<div className="site">
    <div className="hero">
        <img className="hero-img" src="banner.png" alt="Cuidadora sorrindo com idosa" />
    </div>

    <div className="app">
        <nav className="categorias">
            <CardNavBar title="DESTAQUES" subTitle="Perfis em evidência" linkUrl="/" icone={<Star size={34} strokeWidth={1.8} />} />
            <CardNavBar title="Babás" subTitle="Cuidado com bebês e crianças" linkUrl="/Babas" icone={<Baby size={34} strokeWidth={1.8} />} />
            <CardNavBar title="Cuidadores de Idosos" subTitle="Apoio e companhia para idosos" linkUrl="/Idosos" icone={<PersonStanding size={34} strokeWidth={1.8} />} />
            <CardNavBar title="Pessoas com Deficiência" subTitle="Cuidados especializados e inclusivos" linkUrl="/Pcd" icone={<Accessibility size={34} strokeWidth={1.8} />} />
            <CardNavBar title="Acompanhantes Domiciliares" subTitle="Companhia e auxílio no dia a dia" linkUrl="/AcompDomiciliar" icone={<House size={34} strokeWidth={1.8} />} />
            <CardNavBar title="Técnicos de Enfermagem" subTitle="Cuidados técnicos e especializados" linkUrl="/TecEnfermagem" icone={<Stethoscope size={34} strokeWidth={1.8} />} />
            <CardNavBar title="Cuidadores Hospitalares" subTitle="Acompanhamento durante internações" linkUrl="/Hospitalar" icone={<Hospital size={34} strokeWidth={1.8} />} />
        </nav>
        <div className="page">
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/Babas" element={<Babas />} />
                <Route path="/Idosos" element={<Idosos />} />
                <Route path="/Pcd" element={<Pcd />} />
                <Route path="/AcompDomiciliar" element={<AcompDomiciliar />} />
                <Route path="/TecEnfermagem" element={<TecEnfermagem />} />
                <Route path="/Hospitalar" element={<Hospitalar />} />
            </Routes>
        </div>
        <Beneficios />
    </div>
</div>
    );
}

export default App