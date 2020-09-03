import React from 'react';
import './SidebarOption.scss';

const SidebarOption = ({title, Icon}) => {
    return (
        <div className="sidebarOption">
        {
            Icon && <Icon className = "sidebarOption__icon">{Icon}</Icon>
        }
        {
            Icon ? <h4 className="sidebarOption__text">{title}</h4> : <p className="sidebarOption__text">{title}</p>
        }
        </div>
    )
}

export default SidebarOption;
