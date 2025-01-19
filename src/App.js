import { useState } from 'react';
import style from './App.module.css'

import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';

//getComputedStyle(document.documentElement).getPropertyValue('--color-green');
//document.documentElement.style.setProperty('--color-green', '#aaaaaa');

function App() {
  const activePage = useState(1);

  return (
    < div className={style.container} >
      <Header activePage={activePage} />
      <Outlet context={{ activePage }} />
    </ div>
  );
}

export default App;
