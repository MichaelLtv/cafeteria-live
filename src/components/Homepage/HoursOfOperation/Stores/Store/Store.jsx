import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Store({ store }) {
  return (
    <Wrapper>
      <Title>{store.outlet_name}</Title>
      <div>{store.description}</div>
    </Wrapper>
  );
}

Store.defaultProps = {
  store: {},
};

Store.propTypes = {
  store: PropTypes.shape({
    outlet_name: PropTypes.string,
  }),
};

const Wrapper = styled.div`
  background-color: #ffffff;
  margin: 5px;
  padding: 5px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px;
`;

const Title = styled.h1`
`;
