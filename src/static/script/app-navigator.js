import Menu from '@mui/material/Menu';
import { MenuItem } from "@mui/material";

const AppNavigator = (props) => {
    return (
        <Menu
            id="basic-menu"
            open={props.isMenuOpen}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem>Home</MenuItem>
            <MenuItem>Teams Dashboard</MenuItem>
            <MenuItem>Tasks Dashboard</MenuItem>
        </Menu>
    );
};

export default AppNavigator;