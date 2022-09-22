import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="PLANETAS" />
        <hr className="linha" />
        <div className="sistema-solar">
          {
            Planets
              .map((element, index) => (
                <PlanetCard
                  key={ index }
                  planetName={ element.name }
                  planetImage={ element.image }
                />
              ))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
