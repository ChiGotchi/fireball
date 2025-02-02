import { makeStyles } from '@mui/styles';

const styles = makeStyles(theme => ({
    owner: {
        margin: '0 2px',
        '&:hover': {
            textDecoration: 'underline'
        },
        '$gotchiBadges &': {
            marginRight: 'auto'
        },
        '.narrowed &': {
            fontSize: 12
        }
    },
}));

export default styles;
