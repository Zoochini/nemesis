import React from 'react';
import { ResponsiveEmbed } from 'react-bootstrap';

const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js';

class Flux extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            targetID: 'twitch-embed',
            width: 940,
            height: 480,
            theme: 'dark',
        };
    }

    componentDidMount() {
        // eslint-disable-next-line no-unused-vars
        let embed;
        const script = document.createElement('script');
        script.setAttribute(
            'src',
            EMBED_URL
        );
        script.addEventListener('load', () => {
            embed = new window.Twitch.Embed(this.state.targetID, { width: this.state.width, height: this.state.height, channel: this.props.channel, theme: this.state.theme });
        });
        document.body.appendChild(script);
    }

    componentDidUpdate(){
        this.componentDidMount();
    }

    render() {
        return (
            <ResponsiveEmbed aspectRatio="21by9"
                children={<div id="twitch-embed"></div>}>
            </ResponsiveEmbed>
        )
    }
}

export default Flux;