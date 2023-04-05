import React, { useState, useEffect } from 'react';
import './sections.css';

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

    const [activeSection, setActiveSection] = useState('seccion 2');
    const [activeId, setActiveId] = useState(1);

    const handleActiveSection = ({ name, id }) => {
        setActiveSection(name);
        setActiveId(id);
      };

      const [sectionColors, setSectionColors] = useState([]);

      useEffect(() => {
        setSectionColors(data.map(({ color }) => color));
      }, []);

    console.log(sectionColors)

  return (
    <div className='sections__container'>
        <div className="sections__titles">
            {
                data.map(({ name, color, id }) => {
                    return (
                    <section key={id} style={{backgroundColor: color}}>
                        <div className='main-section__title' onClick={() => handleActiveSection ({ name, id })}>
                            <h3>{name}</h3>
                        </div>
                    </section>
                    )
                })
            }
        </div>

        <div className="sections__content">
            {
                data.map(({ name, color, id }) => {
                    return (
                        <div className={`main-section__content ${activeSection === name ? 'active' : (id < activeId ? 'left' : 'right')}`} style={{ backgroundColor: color}}>

                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default Sections