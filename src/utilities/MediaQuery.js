import useMediaQuery from '@mui/material/useMediaQuery';

const Responsive_Query = () => {
    const matches_1220 = useMediaQuery('(min-width:1220px)');
    const data = {
        matches_1220: matches_1220
    }
    return data;
}

export const responsive_query = Responsive_Query();