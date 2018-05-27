import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Stores from './Stores/Stores';

export default class HoursOfOperation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
    };
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://api.uwaterloo.ca/v2/foodservices/locations.json?key=1602fe1b27c726c1eb5dd4697d28a280')
      .then(response => response.json())
      .then(({ data }) => {
        this.setState({ stores: data });
      });
  }

  render() {
    return (
      <Wrapper>
        <Stores storeList={this.state.stores} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background-color: #e2e1e0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 80px;
`;

