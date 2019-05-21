import React, {Component, PureComponent} from 'react';

class Test extends PureComponent {
  state = {
    stateTest: false
  };    

	render() {
		const { dd } = this.props;

		let body;
		if (this.state.stateTest) {
			body = "123";
		} else {
			body = "456";
		}

		return (
			<div>
				<h1>{body}</h1>
				<button onClick={this.buttonClick}>
					{this.state.stateTest ? 'close' : 'open'}
				</button>
			</div>
		)
	}

	buttonClick = () => {
		this.setState({
			stateTest: !this.state.stateTest
		})
	}
}

export default Test