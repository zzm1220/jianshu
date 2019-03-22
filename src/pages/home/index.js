import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style.js';
import bannerPic from '../../statics/banner.jpg';
import Topics from './components/Topics';
import Lists from './components/Lists';
import Recommends from './components/Recommends';
import Writer from './components/Writer';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img 
                        src={bannerPic} 
                        alt="banner"
                        className="banner"
                    />
                    <Topics />
                    <Lists />
                </HomeLeft>
                <HomeRight>
                    <Recommends />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        );
    }
}

export default Home;