import React from 'react'
import { Link,} from 'react-router-dom';
import {MapPin, Users, Video} from 'react-feather';

const SideBar = () => {
  return (
    <div className='SideBar p-0 pt-4'>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <Users /><span className='pl-3'>Personajes</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="location">
                        <MapPin /><span className='pl-3'>Lugares</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="episodes">
                        <Video /><span className='pl-3'>Episodios</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="heat">
                        <Video /><span className='pl-3'>Mapa calor</span>
                    </Link>
                </li>
            </ul>
        </div>
  )
};

export default SideBar;
