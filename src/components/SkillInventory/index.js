import React, { Component } from 'react';
import PieChart from "react-svg-piechart";
import './skill.css';

class SkillInventory extends Component {
	render() {
		return (
			<div className="piechart">
				<PieChart
					data={[
						{ label: 'something', value: 10 },
					    { label: 'other things', value: 20 },
					]}
				/>
			</div>
		);
	}
}

export default SkillInventory;