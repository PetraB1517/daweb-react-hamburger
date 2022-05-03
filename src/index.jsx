import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const MenuItem = (props) => {
  return (
    <a onClick={()=>props.onSelect(props.text)} href="#" className="menu-item">
      {props.text}
    </a>
  );
};

const App = () => {
  const [menuOpened,setMenuOpened] = useState(false);
  const [pageTitle,setPageTitle] = useState(`Domů`);

  const handleSelectItem=(name)=>{
    setMenuOpened(false);
    setPageTitle(name);

  }

  return (
    <>
      <header>
        <div className={menuOpened == true? "menu": "menu menu--closed" }>
          <button className="menu__btn" onClick={()=>{menuOpened == true ? setMenuOpened(false):setMenuOpened(true)}}></button>
          <div className="menu__items" >
            <MenuItem text="Domů" onSelect = {handleSelectItem}/>
            <MenuItem text="Naše nabídka" onSelect = {handleSelectItem}/>
            <MenuItem text="Náš tým" onSelect = {handleSelectItem}/>
            <MenuItem text="Blog" onSelect = {handleSelectItem} />
            <MenuItem text="Kontakt" onSelect = {handleSelectItem}/>
          </div>
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};

render(<App />, document.querySelector('#app'));
