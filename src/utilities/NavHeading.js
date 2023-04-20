import { useMediaQuery } from '@mui/material';
import React from 'react';

const NavHeading = (props) => {
    const { heading } = props;
    const matches = useMediaQuery('(min-width:1220px)');

    return (
        <p style={{ marginTop: matches ? "" : "-15px", marginBottom: matches ? "" : "5px", fontSize: matches ? '23px' : "22px", fontWeight: 'bold', position: matches ? 'fixed' : "", left: matches ? '5%' : "", top: matches ? '16px' : "", transform: matches ? 'translate(calc(50vw - 50%))' : "", zIndex: matches ? "20" : "" }}>
            {heading}
        </p>
    )
}

export default NavHeading