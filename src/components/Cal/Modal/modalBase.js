import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import TimeoffPage from './timeoff';
import SpecialAvailPage from './specialAvail';
import TimesheetPage from './timesheet';
import moment from 'moment';
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
		let timeChosen = {};
		if (this.props.slotInfo.start) {
			timeChosen = {start: this.props.slotInfo.start,
						end: this.props.slotInfo.end};
		}
		else {
			timeChosen = {start: this.props.event.start,
						end: this.props.event.end};
		}

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
								moment(this.props.slotInfo.start).format('YYYY-MM-DD')}
							{this.props.event.start &&
								moment(this.props.event.start).format('YYYY-MM-DD')}
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
					<TimeoffPage
						timeChosen={timeChosen}
						onEnter={this.onEnter}
						onHide={this.props.onHide}
					/>
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