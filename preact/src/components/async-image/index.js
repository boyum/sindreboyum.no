import { h, Component } from 'preact';
import style from './style';

export default class AsyncImage extends Component {
    state = {
        placeholderStyle: '',
        style: ''
    }
    
    constructor(props) {
        super(props);
        this.props = props;

        this.state.placeholderStyle = `background-image: url('${this.props.placeholder}');`;
        this.setBackgroundImage();
    }

    render(props) {
        return(
            <div>
                <div class={this.props.class} style={this.state.placeholderStyle}></div>
                <div class={this.props.class} style={this.state.style}></div>
            </div>
        );
    }

    setBackgroundImage = async () => {
        this.setState({style: `background-image: url('${(await (this.loadLargeImage(this.props.large, this.fadeIn)))}');`});
    }

    /**
     * 
     * @param {string} url 
     * @param {function} callback 
     */
    async loadLargeImage(url, callback) {
        return await fetch(url)
            .then(response => response.blob())
            .then(blob => {
                callback();
                return URL.createObjectURL(blob);
            });
    }

    fadeIn() {
        // TODO: Fade placeholder out, original in
    }
}