import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);

  const [dia, setDia] = useState(0);
  const [mes, setMes] = useState(0);
  const [ano, setAno] = useState(0);

  useEffect(() => {
    const relogio = setInterval(() => {
      const dateToday = new Date();
      const hr = dateToday.getHours() < 10 ? '0' + dateToday.getHours() : dateToday.getHours();
      const min = dateToday.getMinutes() < 10 ? '0' + dateToday.getMinutes() : dateToday.getMinutes();
      const seg = dateToday.getSeconds() < 10 ? '0' + dateToday.getSeconds() : dateToday.getSeconds();

      const d = dateToday.getDate();
      const m = dateToday.getMonth() + 1;
      const a = dateToday.getFullYear();

      setHoras(hr);
      setMinutos(min);
      setSegundos(seg);

      setDia(d);
      setMes(m);
      setAno(a);
    
    }, 1000);

    return () => clearInterval(relogio);
  }, []);


  return (
    <header>
      <div className='title'>
        <h1>Relógio Digital Dinâmico + Data</h1>
      </div>
      <div className='data'>
        <div className='box-date'>
          <span>{dia}</span>
          <span className='tempo'>Dia</span>
        </div>
        <div className='box-date'>
          <span>{mes}</span>
          <span className='tempo'>Mês</span>
        </div>
        <div className='box-date'>
          <span>{ano}</span>
          <span className='tempo'>Ano</span>
        </div>
      </div>

      <div className='relogio'>
        <div className='box-time'>
          <span>{horas}</span>
          <span className='tempo'>Horas</span>
        </div>
        <div className='box-time'>
          <span>{minutos}</span>
          <span className='tempo'>Minutos</span>
        </div>
        <div className='box-time'>
          <span>{segundos}</span>
          <span className='tempo'>Segundos</span>
        </div>
      </div>
    </header>
  );
}

export default App;
