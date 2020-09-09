import React from 'react';
import { useDataLayerValue } from '../../context/DataLayer';
import Header from '../Header/Header';
import './Body.scss';

const Body = ({ spotify }) => {
    
    const [{chill_tracks}] = useDataLayerValue();
   
    return (
        <div className="body">
            <Header spotify = {spotify} />
            <div className="body__content">
                <img className="body__playlist-image" src="https://i.scdn.co/image/ab67706f00000003719586de761e1ff231672faa" alt=""/>
                <div className="body__playlist-info">
                    <div className="playlist">
                    <strong className="playlist__root">PLAYLIST</strong>
                    <h2 className="playlist__name">Chill Tracks</h2>
                    <p className="playlist__description">Spotify kinda <strong className="underline">dance</strong></p>
                    <div className="playlist__time-props">
                        <strong className="playlist__root underline">Spotify</strong>
                        <span className="playlist__like dot">2.989.921 like</span>
                        <span className="playlist__total-min dot">6h 38 min</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;