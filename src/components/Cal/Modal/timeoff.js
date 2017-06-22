import React, { Component } from 'react';
import AuthStore from '@stores/Auth.store';
import './modalBase.css';

class timeoffPage extends Component {

	render() {
		console.log('render timeoffpage');
		return (
			<div className="timeoffPage">
				<label>
					Time off page
				</label>
			</div>
		);
	}
}

export default timeoffPage;