import React from 'react';
import logo from '../img/logo.webp';
import fondo2 from '../img/fondo-2.webp';
import fondo3 from '../img/fondo-3.webp';
import fondo5 from '../img/fondo 5.png';
import fondo6 from '../img/fondo 6.png';
import delicious from '../img/delicious.png';
import menu0 from './assets/menu-0.jpg';
import menu3 from './assets/menu-3.jpg';
import menu6 from './assets/menu-6.jpg';
import menu7 from './assets/menu-7.jpg';
import menu10 from './assets/menu-10.jpg';
import Pichanga from '../img/Pichanga.png';
import aveItaliano from '../img/Platos/Ave italiano.png';
import chorrillanas from '../img/Platos/Chorrillanas.png';
import churrascoALoPobre from '../img/Platos/churrasco a lo pobre.png';
import churrascoItaliano from '../img/Platos/Churrasco italiano.png';
import completoItaliano from '../img/Platos/completo italiano.png';
import completoLomoItaliano from '../img/Platos/Completo lomo italiano.png';
import mechadaItaliana from '../img/Platos/Mechada italiana.png';
import papasFritas from '../img/Platos/papas fritas.png';


const WHATSAPP = '+56968094574';

const sections = [
  {
    id: 'sandwich-ave',
    title: 'Sandwich Ave',
    image: aveItaliano,
    items: [
      { name: 'Ave Italiano', price: '$6.000' },
      { name: 'Ave Queso', price: '$6.000' },
      { name: 'Ave Chacarero', price: '$6.000' },
      { name: 'Ave a lo Pobre', price: '$7.000', note: 'Huevo frito, cebolla caramelizada' },
    ],
  },
  {
    id: 'sandwich-mechados',
    title: 'Sandwich Mechados',
    image: mechadaItaliana,
    items: [
      { name: 'Mechado Italiano', price: '$7.000' },
      { name: 'Mechado Queso', price: '$7.000' },
      { name: 'Mechado Chacarero', price: '$8.000' },
      { name: 'Mechado a lo Pobre', price: '$8.000', note: 'Huevo frito, cebolla caramelizada' },
    ],
  },
  {
    id: 'sandwich-lomo',
    title: 'Sandwich Lomo',
    image: churrascoALoPobre,
    items: [
      { name: 'Lomo Italiano', price: '$6.000' },
      { name: 'Lomo Queso', price: '$6.000' },
      { name: 'Lomo Chacarero', price: '$6.000' },
      { name: 'Lomo a lo Pobre', price: '$7.000', note: 'Huevo frito, cebolla caramelizada' },
    ],
  },
  {
    id: 'completos-salchicha-mechado',
    title: 'Completo Salchicha - Mechado',
    image: completoItaliano,
    items: [
      { name: 'Completo Italiano', price: '$2.500' },
      { name: 'Completo Especial Palta o Tomate Mayo', price: '$2.500' },
      { name: 'Completo Chucrut, Mayo', price: '$2.500' },
      { name: 'Completo Chucrut, Tomate o Palta, Mayo', price: '$2.500' },
      { name: 'Completo Chucrut, Tomate, Palta, Mayo', price: '$3.000' },
      { name: 'Mechado Italiano', price: '$3.000' },
      { name: 'Mechado Especial Palta o Tomate, Mayo', price: '$3.000' },
      { name: 'Mechado Queso', price: '$3.000' },
    ],
  },
  {
    id: 'completos-ave-lomo',
    title: 'Completo Ave - Lomo',
    image: completoLomoItaliano,
    items: [
      { name: 'Ave Italiano', price: '$3.000' },
      { name: 'Ave Especial Palta o Tomate, Mayo', price: '$3.000' },
      { name: 'Ave Queso', price: '$3.000' },
      { name: 'Lomo Italiano', price: '$3.000' },
      { name: 'Lomo Especial Palta o Tomate, Mayo', price: '$3.000' },
      { name: 'Lomo Queso', price: '$3.000' },
    ],
  },
  {
    id: 'papas-fritas-porciones',
    title: 'Papas Fritas',
    image: papasFritas,
    items: [
      { name: 'Papas a la crema (2-3 personas)', price: '$14.000' },
      { name: 'Papas a la crema (4-5 personas)', price: '$18.000' },
      { name: 'Porción papas fritas 1 persona', price: '$3.000' },
      { name: 'Porción papas fritas (2-3 personas)', price: '$7.000' },
      { name: 'Porción papas fritas (4-5 personas)', price: '$12.000' },
      { name: 'Porción papas fritas grande 1 persona', price: '$5.000' },
      { name: 'Porción papas fritas grande (2-3 personas)', price: '$10.000' },
      { name: 'Porción papas fritas grande (4-5 personas)', price: '$10.000' },
    ],
  },
  {
    id: 'papas-fritas-pichangas',
    title: 'Papas Fritas Pichangas / Chorrillanas',
    image: chorrillanas,
    items: [
      { name: 'Pichangas o chorrillanas (2-3 personas)', price: '$13.000' },
      { name: 'Pichangas o chorrillanas (4-5 personas)', price: '$17.000' },
      { name: 'Pichangas o chorrillanas (6-7 personas)', price: '$20.000' },
      { name: 'Pichangas o chorrillanas (10-12 personas)', price: '$32.000' },
      { name: 'Papas mechadas (2-3 personas)', price: '$15.000' },
      { name: 'Papas mechadas (4-5 personas)', price: '$18.000' },
      { name: 'Papas mechadas (6-7 personas)', price: '$22.000' },
      { name: 'Pichanga / mechada (2-3 personas)', price: '$16.000' },
      { name: 'Pichanga / mechada (4-5 personas)', price: '$20.000' },
      { name: 'Pichanga / mechada (6-7 personas)', price: '$24.000' },
    ],
  },
  {
    id: 'sandwich-churrasco',
    title: 'Sandwich Churrasco',
    image: churrascoItaliano,
    items: [
      { name: 'Churrasco Italiano', price: '$6.000' },
      { name: 'Churrasco Barros Luco', price: '$6.000' },
      { name: 'Churrasco Chacarero', price: '$6.000' },
      { name: 'Churrasco a lo Pobre', price: '$7.000', note: 'Huevo frito, cebolla caramelizada' },
    ],
  },
];

function App() {
  const handleWhatsApp = () => {
    const phone = WHATSAPP.replace(/[^0-9]/g, '');
    const message = 'Hola, quisiera realizar un pedido';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="page">
      <div className="bg-graphics" aria-hidden="true">
        <img src={delicious} alt="" className="bg-img bg-img-top" />
        <img src={fondo2} alt="" className="bg-img bg-img-middle" />
        <img src={fondo3} alt="" className="bg-img bg-img-bottom" />
        <img src={fondo5} alt="" className="bg-img bg-img-f5-1" />
        <img src={fondo5} alt="" className="bg-img bg-img-f5-2" />
        <img src={fondo6} alt="" className="bg-img bg-img-f6-1" />
        <img src={fondo6} alt="" className="bg-img bg-img-f6-2" />
      </div>
      <header className="header">
        <div className="logo-block">
          <img src={logo} alt="Carito Pichangas" className="logo" />
          <div className="brand">
            <span className="brand-top">Carito</span>
            <span className="brand-bottom">Pichangas</span>
          </div>
        </div>
        <button className="cta-button" onClick={handleWhatsApp}>
          ¡Escríbenos! {WHATSAPP}
        </button>
      </header>

      <main className="content">
        <section className="hero">
          <div className="hero-text">
            <p className="hero-kicker">La carta completa</p>
            <h1>Sabores caseros para compartir</h1>
            <p className="hero-sub">Sandwiches, completos, papas fritas y pichangas para todos los antojos.</p>
            <button className="hero-button" onClick={handleWhatsApp}>
              <span className="hero-button-icon" aria-hidden="true">☎</span>
              <span className="hero-button-label">Pedir por WhatsApp</span>
            </button>
          </div>
          <div className="hero-images">
            <img src={Pichanga} alt="Pichanga" className="hero-img hero-img-main zoom-on-load" />
          </div>
        </section>

        <section className="sections-wrapper">
          {sections.map((section) => (
            <article key={section.id} className="menu-card">
              <div className="menu-card-left">
                <img src={section.image} alt={section.title} className="menu-photo" />
              </div>
              <div className="menu-card-right">
                <h2 className="menu-title">{section.title}</h2>
                <ul className="menu-list">
                  {section.items.map((item) => (
                    <li key={item.name} className="menu-item">
                      <div className="menu-item-main">
                        <span className="menu-item-name">{item.name}</span>
                        <span className="menu-item-price">{item.price}</span>
                      </div>
                      {item.note && <p className="menu-item-note">{item.note}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section className="delivery-note">
          <div className="delivery-note-card">
            <p>Delivery incluye costo adicional</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Pedidos y consultas por WhatsApp</p>
        <button className="footer-button" onClick={handleWhatsApp}>
          {WHATSAPP}
        </button>
      </footer>
    </div>
  );
}

export default App;
