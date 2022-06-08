import { alpha } from '@mui/material';
import { makeStyles } from '@mui/styles';

const styles = makeStyles(theme => ({
    pane: {
        position: 'fixed',
        top: '50%',
        transform: 'translateY(-50%)',
        background: theme.palette.secondary.dark,
        padding: 20,
        borderRadius: '4px 0 0 4px',
        zIndex: 20,
        transition: 'all .5s ease-in-out',
        '&.opened': {
            right: '0 !important',
            boxShadow: `0 0 10px 1px ${alpha('#fff', .05)}`
        }
    },
    paneToggle: {
        position: 'absolute',
        top: '50%',
        right: '100%',
        transform: 'translateY(-50%)',
        padding: '16px 0 16px 0',
        borderRadius: '4px 0 0 4px',
        minWidth: 12,
        '& svg': {
            transition: 'all .5s ease-in-out',
            fontSize: 32
        },
        '&.opened svg': {
            transform: 'rotate(-180deg)'
        }
    },
    placeholder: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 60
    }
}));

export default styles
