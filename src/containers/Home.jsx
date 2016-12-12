import React, { PropTypes } from 'react';
import Menue from '../components/Menue';

const Home = props =>
  <div>
    Home.jsx<br />
    <Menue />
    {props.children}
  </div>;

Home.contextTypes = {
  lang: PropTypes.string.isRequired,
  i18n: PropTypes.object.isRequired
};

Home.propTypes = {
  children: PropTypes.element
};

export default Home;
