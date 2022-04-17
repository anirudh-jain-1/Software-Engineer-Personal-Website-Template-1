import React, { Component } from 'react';

let experience_list = require('./experience.json');

export default class ExperienceComponent extends Component {
  getExperience = () => {
    return (
      <div style={{ textAlign: 'center', margin: 25 }}>
        {experience_list.map(experience => {
          return (
            <div style={{ marginTop: '2.5vh' }}>
              <i>
                {experience.dates} | {experience.location}
              </i>
              <br />

              <b
                style={{
                  fontSize: '2em',
                  marginTop: 0,
                  maxWidth: '800px',
                  flexWrap: 'wrap',
                  textAlign: 'left',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
              >
                {experience.position} @{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={experience.company_link}
                >
                  {experience.company_name}
                </a>
              </b>
              {experience.description.map(description => {
                return (
                  <span
                    style={{
                      textAlign: 'justify',
                      maxWidth: '800px',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      fontSize: '1em'
                    }}
                  >
                    &gt; {description}
                  </span>
                );
              })}
              <br />
            </div>
          );
        })}
      </div>
    );
  };
  render() {
    return (
      <div id="experience" style={{ width: '100%' }}>
        <div style={{ fontSize: '4em', marginTop: 0 }}>
          <b>Experience</b>
        </div>
        {this.getExperience()}
      </div>
    );
  }
}
