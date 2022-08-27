
import React, { Component, useState } from 'react';
import axios from 'axios';

function Section(props) {
    const [title,setTitle] = useState(props.title);
    const [section,setSection] = useState(props.section);

    return ( 
        <section className='section'>
            <div className='header'>
                <h2 className="title">{section.title}</h2>
                <button>voir tout</button>
            </div>
            <div className='cards'>
                {section.cards.map((card,i)=>{
                    return <div className='card' key={i}>
                        <div className='image'></div>
                        <h3 className='title'>{card.title}</h3>
                        <p className='text'>{card.text}</p>
                    </div>
                })}
            </div>
        </section>
    );
}

export default Section;