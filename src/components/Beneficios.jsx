import React from "react";
import { ShieldCheck, Star, Handshake, Headset } from "lucide-react";
import "../styles/App.css";

export default function Beneficios() {
  return (
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
  );
}
