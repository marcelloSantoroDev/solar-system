import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../Missions.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missoes">
        <Title headline="Missões" />
        { missions.map((element, index) => (<MissionCard
          key={ index }
          name={ element.name }
          year={ element.year }
          country={ element.country }
          destination={ element.destination }
        />))}
      </div>
    );
  }
}

export default Missions;
