import { h, Component } from 'preact';
import style from './style';
import { TransformStream } from '../../lib/transform-stream';
import JSONTransformer from '../../lib/json-transformer';
import PromotedProject from './promoted-project';

export default class PromotedProjects extends Component {
    state = {
        projects: []
    };
    
    constructor() {
        super();
		this.fetchPromotedProjects();
    }

    render() {
        return(
            <div>{this.renderPromotedProjects()}</div>
        );
    }
    
    renderPromotedProjects() {
        const projects = [];

        this.state.projects.map(project => {
            projects.push(
                <PromotedProject project={project} />
            );
        });
        
        return (
            <div class={style.projects}>{projects}</div>
        );
    }

    fetchPromotedProjects = () => {
		fetch('/promoted-projects.json')
			.then(async response => {
				const jsonStream = response.body.pipeThrough(new TransformStream(new JSONTransformer()));

				const reader = jsonStream.getReader();

				while(true) {
					const { value, done } = await(reader.read());
					if (done) return;

                    const projects = this.state.projects;
                    projects.push(JSON.parse(value));
                    
                    this.setState({projects});
				}
			});
	}
}
