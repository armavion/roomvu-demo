import React from 'react';
import PropTypes from 'prop-types';

const Spacer = (props) => {
    const {height} = props;
    return <div style={{height}} />;
};

Spacer.propTypes = {
    logo: PropTypes.string.isRequired
};

export default Spacer;