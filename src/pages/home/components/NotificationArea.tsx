import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Badge } from '@mui/material';

function NotificationArea() {
    return (
        <div style={{ display: 'flex', gap: '0.3em' }}>
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                <Badge badgeContent={1} color="error">
                    <ShoppingCartOutlinedIcon color="action" />
                </Badge>
                <p style={{ fontSize: '1.2rem' }}>Cart</p>
            </div>
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                <PersonOutlineOutlinedIcon />
                <p style={{ fontSize: '1.2rem' }}>Login</p>
            </div>
            <p>|</p>
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}><p style={{ fontSize: '1.2rem' }}>Sign Up</p></div>
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                <LanguageOutlinedIcon />
                <p style={{ fontSize: '1.2rem' }}>EN/</p>
            </div>
        </div>
    )
}

export default NotificationArea