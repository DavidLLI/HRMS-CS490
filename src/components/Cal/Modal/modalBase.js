import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import TimeoffPage from './timeoff';
import SpecialAvailPage from './specialAvail';
import TimesheetPage from './timesheet';
import './modalBase.css';

class modalBase extends Component {

	constructor() {
		super();
		this.state = {
			activePage: ''
		};

		this.timeoffButton = this.timeoffButton.bind(this);
		this.specialAvailButton = this.specialAvailButton.bind(this);
		this.timesheetButton = this.timesheetButton.bind(this);
		this.onEnter = this.onEnter.bind(this);
	}



	timeoffButton() {
		this.setState({activePage: 'timeoff'});
	}

	specialAvailButton() {
		this.setState({activePage: 'specialAvail'});
	}

	timesheetButton() {
		this.setState({activePage: 'timehseet'});
	}

	onEnter() {
		this.setState({activePage: ''});
	}

	render() {
		console.log(this.props.event);
		return (
			<Modal
				{...this.props}
				onEnter={this.onEnter}
				autoFocus={true}
          		restoreFocus={true}
          		bsSize='large'
			>
				{
					this.state.activePage === '' && 
					<div>
						<label className="timeChosen">
							{this.props.slotInfo.start && 
								this.props.slotInfo.start + ' to ' + this.props.slotInfo.end}
							{this.props.event.start &&
								this.props.event.start + ' to ' + this.props.event.end}
						</label>
						{
							this.props.buttonList && this.props.buttonList.includes('timeoff') && 
							<button onClick={this.timeoffButton}>
								Request time off
							</button>
						}
						{
							this.props.buttonList && this.props.buttonList.includes('special') && 
							<button onClick={this.specialAvailButton}>
								Specify special availability
							</button>
						}
						{
							this.props.buttonList && this.props.buttonList.includes('timesheet') && 
							<button onClick={this.timesheetButton}>
								Fill time sheet
							</button>
						}
					</div>
				}
				{
					this.state.activePage === 'timeoff' &&
					<TimeoffPage />
				}
				{
					this.state.activePage === 'specialAvail' &&
					<SpecialAvailPage />
				}
				{
					this.state.activePage === 'timehseet' &&
					<TimesheetPage />
				}
				
			</Modal>
		);
	}
}

export default modalBase;