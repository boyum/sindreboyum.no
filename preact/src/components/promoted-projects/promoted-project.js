import { h, Component } from 'preact';
import style from './style';
import Image from '../image';

export default class PromotedProject extends Component {
    render(props) {
        return(
            <div class={style.project}>
                {/*<Image class={style.image} placeholder={props.project.img.placeholder} large={props.project.img.large} />*/}
                <a href={props.project.url}>
                    {props.project.name}
                </a>
            </div>
        )
    }
}