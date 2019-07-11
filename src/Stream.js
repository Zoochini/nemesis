import React from 'react';

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

class Stream extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            targetID : 'twitch-embed',
            width : 940,
            height : 480,
            channel : 'loufokalov',
            theme : 'dark',
            layout : 'video'
        };
    }

    componentDidMount(){
        let embed;
        const script = document.createElement('script');
        script.setAttribute(
            'src',
            EMBED_URL
        );
        script.addEventListener('load', () => {
            embed = new window.Twitch.Embed(this.state.targetID, { ...this.state });
        });
        document.body.appendChild(script);
    }

    render(){
        return(
            <div id="twitch-embed">
            <p>Bienvenue sur les lives de Nemesis</p>
        </div>
        )
    }
}

export default Stream;