import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';

const Menue = props =>
  <div>
    Menue.jsx<br />
    {
      props.tags.map(tag =>
        <li key={tag}>{tag}: {tag}</li>
      )
    }
  </div>;

Menue.propTypes = {
  tags: PropTypes.array.isRequired
};

const connected = connect(
  state => ({
    tags: state.tag.items
  }),
  () => ({})
)(Menue);

const asynced = asyncConnect([{
  promise: ({ helpers: { fetcher } }) => {
    const promises = [];
    console.log('[asyncConnect] I am here!');
    promises.push(fetcher.tag.load());
    return Promise.all(promises);
  }
}])(connected);

export default asynced;
