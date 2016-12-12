import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { stringify } from 'koiki';
import uris from '../uris';

const MovieList = context =>
  <div>
    MovieList.jsx<br />
    ここにリスト<br />
    <Link
      to={stringify(uris.pages.movieDetail, { lang: context.lang, id: 12345 })}
    >
      リンク
    </Link>
  </div>;

MovieList.propTypes = {
};

MovieList.contextTypes = {
  lang: PropTypes.string.isRequired,
  i18n: PropTypes.object.isRequired
};

export default MovieList;
