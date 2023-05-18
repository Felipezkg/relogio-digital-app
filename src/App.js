import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const relogio = setInterval(() => {
      const dateToday = new Date();
      const hr = dateToday.getHours();
      const min = dateToday.getMinutes();
      const seg = dateToday.getSeconds();

      setHoras(hr);
      setMinutos(min);
      setSegundos(seg);
    }, 1000);

    return () => clearInterval(relogio);
  }, []);


  return (
    
    <div className='relogio'>
      <div>
        <span>{horas}</span>
        <span className='tempo'>Horas</span>
      </div>
      <div>
        <span>{minutos}</span>
        <span className='tempo'>Minutos</span>
      </div>
      <div>
        <span>{segundos}</span>
        <span className='tempo'>Segundos</span>
      </div>
    </div>
  );
}

export default App;
