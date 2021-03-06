import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';

import List from '../components/List';

const People = props =>
  <div>
    People.jsx<br />
    <List
      items={props.people}
    />
  </div>;

People.propTypes = {
  people: PropTypes.array.isRequired
};

const connected = connect(
  state => ({
    people: state.person.items
  }),
  () => ({})
)(People);

const asynced = asyncConnect([{
  promise: ({ helpers: { fetcher } }) => {
    const promises = [];
    promises.push(fetcher.person.load());
    return Promise.all(promises);
  }
}])(connected);

export default asynced;
