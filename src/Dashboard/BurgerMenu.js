import React, {useContext} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';
import {TokenContext} from "../token-context";

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})
((props) => (
  <Menu
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus(props) {

  const context_update = useContext(TokenContext);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="HamburgerMenu">
      <Button
        disableElevation
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon/>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {props.pages.map(page =>
          <Link to={`/${page}`}>
            <StyledMenuItem>
              <ListItemText primary={page}/>
            </StyledMenuItem>
          </Link>
        )}
        <Link to={`/`}>
          <StyledMenuItem onClick={() => context_update.logout()}>
            <ListItemText primary={"Logout"}/>
          </StyledMenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
}
