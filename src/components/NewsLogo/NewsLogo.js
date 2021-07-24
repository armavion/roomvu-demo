import React from 'react';
import PropTypes from 'prop-types';

const NewsLogo = (props) => {
    const {logo} = props;
    let logoHeight;
    if (logo === 'forbes') logoHeight = '2.2rem';
    if (logo === 'ny-times') logoHeight = '2.2rem';
    if (logo === 'daily-mail') logoHeight = '2.2rem';
    return <img src={`./logos/${logo}.svg`} style={{height: logoHeight, marginBottom: '1rem'}} alt="" />
};

NewsLogo.propTypes = {
    logo: PropTypes.string.isRequired
};

export default NewsLogo;