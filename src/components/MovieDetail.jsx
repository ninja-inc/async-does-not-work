import React, { PropTypes } from 'react';

const MovieDetail = props =>
  <div>
    MovieDetail.jsx<br />
    {props.params.id} <br />
    ここに詳細<br />
  </div>;

MovieDetail.propTypes = {
  params: React.PropTypes.shape({
    id: PropTypes.string.isRequired
  })
};

export default MovieDetail;
