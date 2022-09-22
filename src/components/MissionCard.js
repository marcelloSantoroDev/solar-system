import React from 'react';
import PropTypes from 'prop-types';
import '../MissionCard.css';
import calendar from '../images/Vector (1).png';
import flag from '../images/Vector (2).png';
import pin from '../images/Vector (3).png';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="seção-missão">
        <p data-testid="mission-name" className="nome-missão">{ name.toUpperCase() }</p>
        <hr />
        <div className="missão-data">
          <p data-testid="mission-year">
            <img
              src={ calendar }
              alt="calendario"
              width={ 15 }
              height={ 15 }
              className="icons"
            />
            { year }

          </p>
          <p data-testid="mission-country">
            <img
              src={ flag }
              alt="país"
              width={ 15 }
              height={ 15 }
              className="icons"
            />
            { country }
          </p>
          <p data-testid="mission-destination">
            <img
              src={ pin }
              alt="bandeira"
              width={ 15 }
              height={ 15 }
              className="icons"
            />
            { destination }
          </p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
