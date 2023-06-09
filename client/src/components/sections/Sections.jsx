import React, { useState, useEffect } from 'react';
import './sections.css';
import pepe from '../../assets/pepe.jpg'

const data = [
    {
        name: 'seccion 1',
        color: '#8882ff',
        id: 1
    },
    {
        name: 'seccion 2',
        color: '#e282ff',
        id: 2
    },
    {
        name: 'seccion 3',
        color: '#ff8282',
        id: 3
    },
    {
        name: 'seccion 4',
        color: '#8aff82',
        id: 4
    },
]

const Sections = () => {

    const [activeSection, setActiveSection] = useState('seccion 1');
    const [activeId, setActiveId] = useState(1);

    const handleActiveSection = ({ name, id }) => {
        setActiveSection(name);
        setActiveId(id);
    };

    const [sectionColors, setSectionColors] = useState([]);

    useEffect(() => {
        setSectionColors(data.map(({ color }) => color));
    }, []); 

return (
    <div className='sections__container'>
        <div className="sections__titles">
            {
                data.map(({ name, color, id }) => {
                    return (
                    <section key={id} style={{ boxShadow: `0px 0px 40px 1px ${color} inset` }}>
                        <div className='main-section__title' onClick={() => handleActiveSection ({ name, id })}>
                            <h3 style={{ color: color, filter: 'brightness(0.8)' }}>{name}</h3>
                        </div>
                    </section>
                    )
                })
            }
        </div>

        <div className="sections__content">
            {
                data.map(({ name, color, id }) => {
                    const sectionClassName = `${activeSection === name ? 'active' : (id < activeId ? 'left' : 'right')}`;
                    return (
                        <div className={`main-section__content ${sectionClassName}`} style={{ boxShadow: `0px 0px 60px 5px ${color} inset` }}>
                            <div className={`main-section__content-photos ${sectionClassName}`}>
                                {
                                    sectionClassName === 'active' ?
                                    <>
                                    <img src={pepe} className='photo' />
                                    <img src={pepe} className='photo' />
                                    <img src={pepe} className='photo' />
                                    <img src={pepe} className='photo' />
                                    <img src={pepe} className='photo' />
                                    <img src={pepe} className='photo' />
                                    <img src={pepe} className='photo' />
                                    <img src={pepe} className='photo' />
                                    <img src={pepe} className='photo' />
                                    <img src={pepe} className='photo' />
                                    <img src={pepe} className='photo' />
                                    <img src={pepe} className='photo' />
                                    </> :
                                    <>
                                    <img src={pepe} className='photo' />
                                    <img src={pepe} className='photo' />
                                    <img src={pepe} className='photo' />
                                    <img src={pepe} className='photo' />
                                    </>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>

    </div>
)
}

export default Sections