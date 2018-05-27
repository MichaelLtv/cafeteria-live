import React from 'react';
// import PropTypes from 'prop-types';

import Navbar from './Navbar/Navbar';
import HoursOfOperation from './HoursOfOperation/HoursOfOperation';

export default function Homepage() {
  return (
    <React.Fragment>
      <Navbar />
      <HoursOfOperation />
    </React.Fragment>
  );
}

// SimpleComponent.propTypes = {
//   message: PropTypes.string.isRequired,
// };
