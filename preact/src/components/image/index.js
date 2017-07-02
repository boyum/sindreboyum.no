import { h, Component } from 'preact';
import style from './style';

export default class Image extends Component {
    state = {
        style: ''
    }
    
    constructor(props) {
        super(props);
        this.props = props;

        this.state.style = `background-image: url('${this.props.placeholder}');`;
        this.setBackgroundImage();
    }

    render(props) {
        return(<div class={this.props.class} style={this.state.style}></div>);
    }

    setBackgroundImage = async () => {
        this.setState({style: `background-image: url('${(await (this.loadLargeImage(this.props.large)))}');`});
    }

    async loadLargeImage(url) {
        let imgUrl;
        await fetch(url)
            .then(response => {
                return response.blob();
            })
            .then(blob => {
                imgUrl = URL.createObjectURL(blob)
            });
        return imgUrl;
    }
}