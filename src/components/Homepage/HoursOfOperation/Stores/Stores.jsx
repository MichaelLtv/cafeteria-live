import React from 'react';
import PropTypes from 'prop-types';

import Store from './Store/Store';

export default function Stores(props) {
  return props.storeList.map(store => <Store key={store.outlet_name} store={store} />);
}

Stores.defaultProps = {
  storeList: [],
};

Stores.propTypes = {
  storeList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
