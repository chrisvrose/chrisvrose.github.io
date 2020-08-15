import React from 'react';
import './Header.css';

export default (props:{text:string})=>(
    <header className="header">{props.text}</header>
);