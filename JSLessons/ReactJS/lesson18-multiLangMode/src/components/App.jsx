import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ModeBtn from './mode/ModeBtn'
import ModeTop from './mode/ModeTop'
import { useTranslation } from 'react-i18next';
import i18n from '../langConfig/i18n'


const App = () => {
    const { t, i18n } = useTranslation();
    const handleClick =(lang)=>{
        i18n.changeLanguage(lang);
    }
 
    const [mode,setMode] =useState(localStorage.getItem('mode')); 
    useEffect(()=>{
       if (localStorage.getItem('mode')===null) {
        localStorage.setItem('mode',"light");
        
       }else{
        localStorage.setItem('mode',mode);
        document.body.className = localStorage.getItem('mode'); 
       }
    })
  return (

<div>
<nav class={`navbar navbar-expand-lg bg-${mode} navbar-${mode}`}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">{t('menu.0')}</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">{t('menu.1')}</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">{t('menu.2')}</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">{t('menu.3')}</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">{t('menu.4')}</a>
        </li>
   
      </ul>
      
    </div>
    <div className='d-flex'>
        <button onClick={()=>{handleClick('az')}}>AZ</button>
        <button onClick={()=>{handleClick('en')}}>EN</button>
        <button onClick={()=>{handleClick('pl')}}>PL</button>
    </div>
  </div>
</nav>
<div className='container mt-3'>

<p className="test">para</p>
<h1 className="test">hara</h1>
<ModeTop color={mode}/>
<ModeBtn color={mode} setColor={setMode}/>
</div>
</div>
  
  
  )
}

export default App