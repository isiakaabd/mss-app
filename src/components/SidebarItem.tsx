import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import { List, Divider, Grid, Typography, ListItem, IconButton } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';
import QuestionMarkIcon from '@mui/icons-material/QuestionMarkOutlined';
import PersonIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import GroupIcon from '@mui/icons-material/GroupOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { HomeOutlined } from '@mui/icons-material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
function SideBar() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  const handleNavigate = (text: string) => () => {
    navigate(text);
  };
  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleNavigate('getting-started')}>
            <ListItemIcon>
              <HomeOutlined />
            </ListItemIcon>
            <ListItemText primary="Getting Started" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleNavigate('notifications')}>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="Notification" />
          </ListItemButton>
        </ListItem>
      </List>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          // <List>
          <ListSubheader component="div" id="nested-list-subheader">
            <Grid item container>
              <Typography flex={1}>Teams</Typography>
              <IconButton>
                <MoreHorizIcon />
              </IconButton>

              <IconButton onClick={handleClick}>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </Grid>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div">
                <ListItemButton dense onClick={handleNavigate('setup-team')}>
                  <ListItemIcon sx={{ minWidth: '3rem' }}>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText primary="Set up Team" />
                  <IconButton>
                    <MoreHorizIcon />
                  </IconButton>
                </ListItemButton>
                {/* second */}
                <ListItemButton dense onClick={handleNavigate('audit')}>
                  <ListItemIcon sx={{ minWidth: '3rem' }}>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText primary="Tryout Audit Team" />
                  <IconButton onClick={handleClick}>
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>{' '}
                </ListItemButton>
                {/* third */}
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="View More" />
                </ListItemButton>
              </List>
            </Collapse>
          </ListSubheader>
          // </List>
        }
      >
        <Divider />
        {/*  */}
        <ListItemButton onClick={handleNavigate('jobs')}>
          <ListItemIcon>
            <WorkOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Jobs" />
        </ListItemButton>
        <ListItemButton onClick={handleNavigate('payments')}>
          <ListItemIcon>
            <AccountBalanceWalletIcon />
          </ListItemIcon>
          <ListItemText primary="Payments" />
        </ListItemButton>

        {/*  */}
        <Divider />
        <ListItemButton onClick={handleNavigate('profile')}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
          <ArrowForwardIosIcon />
        </ListItemButton>

        <ListItemButton onClick={handleNavigate('help')}>
          <ListItemIcon>
            <QuestionMarkIcon />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItemButton>

        <ListItem
          secondaryAction={
            <IconButton edge="end" sx={{ pr: 3 }} aria-label="logout">
              <LogoutIcon onClick={handleNavigate('/auth/login')} />
            </IconButton>
          }
        >
          <ListItemText primary={'Olumide Alli'} secondary={'Olumide@gmail.com'} />
        </ListItem>
        <Divider />
      </List>
    </>
  );
}
export default SideBar;
