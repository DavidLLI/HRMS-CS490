import React, { Component } from 'react';
import { PageHeader, Panel } from 'react-bootstrap';

class Announcements extends Component {
  articles = [
    {
      title: 'Company continues to grow!',
      summary: 'This past quarter has been really good! We have a lot of money now. Let\' all celebrate!'
    },
    {
      title: 'Welcome our new hires!',
      summary: 'Today, 3 new employees are joining the family. Please welcome Bob, Eve, and Johnny!'
    },
    {
      title: 'Who stole my cake?',
      summary: 'I want my cake back. Please give it back. I need it.'
    },
    {
      title: 'Turkeys on the loose.',
      summary: 'We need volunteers to catch the turkeys running around the office. Please contact Monique.'
    },
    {
      title: 'Easter Event',
      summary: 'Please join us for our annual Easter event this Saturday!'
    },
  ];

  renderPanels = () => {
    return this.articles.map((a) => {
      return (
        <Panel header={(<h2>{a.title}</h2>)}>
          { a.summary }
        </Panel>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <PageHeader>Announcements</PageHeader>
        { this.renderPanels() }
      </div>
    );
  }
}

export default Announcements;
