export default class CommentForm  extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: '',
        };
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <textarea
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button
                    className="comment"
                >
                    评论
                </button>
            </div>
        );
    }

}