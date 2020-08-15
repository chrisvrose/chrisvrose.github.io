import React from 'react';
import './SocialLink.css';

export default function (props:{name:string,url:string,picUrl:string,setSize?:number}){
    return (
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            <span className="icon-wrapper">
                <img src={props.picUrl} alt={props.name} width={String(props.setSize||32)} className="icon" />
            </span>
        </a>
    );
}