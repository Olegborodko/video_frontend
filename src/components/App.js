import React, {Component} from 'react';

const axios = require('axios');
const getVideoId = require('get-video-id');
require('dotenv').config();
const parseString = require('xml2js').parseString;


class App extends Component {
	state = {
    value: '',
    error: ''
  };   

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
			    <input type="text" value={this.state.value} onChange={this.handleChange} />
		  	<input type="submit" value="Submit" />
		  	<div>{this.state.error}</div>
			</form>
		)
	}

	handleSubmit = (event) => {
		event.preventDefault();
		
		const { id } = getVideoId(this.state.value);

		if (id) {
			const link = `${process.env.REACT_APP_YOUTUBE_SUBTITLE_HOST}${id}`;
			this.setState({
				error: ''
			})

			axios.get(link)
		  .then(function (response) {
		    if (response.status === 200) {
					parseString(response.data, function (err, result) {
						if (err) {
							this.setState({
								error: 'Something wrong with subtitles'
							})
						} else {
		    			console.log(result);
		    		}
					});
		    } else {
		    	this.setState({
						error: 'Something wrong with subtitles'
					})
		    }
		  })
		  .catch(function (error) {
		    this.setState({
						error: 'Something wrong with subtitles'
				})
		  });
		} else {
			this.setState({
				error: 'Can not take video id'
			})
		}
	}

	handleChange = (event) => {
    this.setState({value: event.target.value});
  }
}

export default App