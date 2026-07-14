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

function App(){
    return(
<div className="site">
    <div className="hero">
        <img className="hero-img" src="banner.png" alt="Cuidadora sorrindo com idosa" />
        
    </div>

    <div className="app">
        <nav className="categorias">
            <div className="lnk-card">
                <Link to="/">
                    <span className="icon-box"><Star size={34} strokeWidth={1.8} /></span>
                </Link>
                <h3>DESTAQUES</h3>
                <p>Perfis em evidência</p>
            </div>

            <div className="lnk-card">
                <Link to="/Babas">
                    <span className="icon-box"><Baby size={34} strokeWidth={1.8} /></span>
                </Link>
                <h3>Babás</h3>
                <p>Cuidado com bebês e crianças</p>
            </div>

            <div className="lnk-card">
                <Link to="/Idosos">
                    <span className="icon-box"><PersonStanding size={34} strokeWidth={1.8} /></span>
                </Link>
                <h3>Cuidadores de Idosos</h3>
                <p>Apoio e companhia para idosos</p>
            </div>

            <div className="lnk-card">
                <Link to="/Pcd">
                    <span className="icon-box"><Accessibility size={34} strokeWidth={1.8} /></span>
                </Link>
                <h3>Pessoas com Deficiência</h3>
                <p>Cuidados especializados e inclusivos</p>
            </div>

            <div className="lnk-card">
                <Link to="/AcompDomiciliar">
                    <span className="icon-box"><House size={34} strokeWidth={1.8} /></span>
                </Link>
                <h3>Acompanhantes Domiciliares</h3>
                <p>Companhia e auxílio no dia a dia</p>
            </div>

            <div className="lnk-card">
                <Link to="/TecEnfermagem">
                    <span className="icon-box"><Stethoscope size={34} strokeWidth={1.8} /></span>
                </Link>
                <h3>Técnicos de Enfermagem</h3>
                <p>Cuidados técnicos e especializados</p>
            </div>

            <div className="lnk-card">
                <Link to="/Hospitalar">
                    <span className="icon-box"><Hospital size={34} strokeWidth={1.8} /></span>
                </Link>
                <h3>Cuidadores Hospitalares</h3>
                <p>Acompanhamento durante internações</p>
            </div>
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

        <div className="beneficios">
            <div className="beneficio-item">
                <ShieldCheck size={26} strokeWidth={1.8} />
                <div>
                    <h4>Perfis verificados</h4>
                    <p>Segurança e confiança em primeiro lugar</p>
                </div>
            </div>
            <div className="beneficio-item">
                <Star size={26} strokeWidth={1.8} />
                <div>
                    <h4>Avaliações reais</h4>
                    <p>Veja a experiência de outros clientes</p>
                </div>
            </div>
            <div className="beneficio-item">
                <Handshake size={26} strokeWidth={1.8} />
                <div>
                    <h4>Contratação fácil</h4>
                    <p>Conecte-se e contrate de forma segura</p>
                </div>
            </div>
            <div className="beneficio-item">
                <Headset size={26} strokeWidth={1.8} />
                <div>
                    <h4>Suporte dedicado</h4>
                    <p>Estamos aqui para te ajudar sempre</p>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}

export default App