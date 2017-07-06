import { h, Component } from 'preact';
import style from './style';
import AsyncImage from '../async-image';

export default class PromotedProject extends Component {
    render(props) {
        return(
            <div class={style.project}>
                {/*<AsyncImage class={style.image} placeholder={props.project.img.placeholder} large={props.project.img.large} />*/}
                <a href={props.project.url}>
                    {props.project.name}
                </a>
            </div>
        )
    }
}