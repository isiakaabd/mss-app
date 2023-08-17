import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import login from 'assets/images/login.png';
import signup from 'assets/images/signup.png';
import { Avatar, Grid } from '@mui/material';
import { Registration, Login } from 'pages/auth';

import { useState, useLayoutEffect } from 'react';
const AuthLayout = () => {
  const { pathname } = useLocation();
  const loginPath = '/auth/login';
  const RegisterPath = '/auth/signup';
  const [image, setImage] = useState(login);
  useLayoutEffect(() => {
    switch (pathname) {
      case loginPath:
        setImage(login);
        break;
      case RegisterPath:
        setImage(signup);
        break;
      default:
        setImage(login);
    }
  }, [pathname]);
  return (
    <Grid
      item
      container
      sx={{
        py: 0,
        height: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        overflowY: { md: 'hidden', sm: 'auto' },
      }}
    >
      <Grid item container sx={{ p: 0 }}>
        <Grid
          item
          container
          sx={{ display: { xs: 'none', md: 'flex' }, bgColor: 'red' }}
          alignItems={'center'}
          flex={1}
          p={0}
        >
          <Avatar
            src={image}
            variant="square"
            sx={{
              height: '100%',
              width: '100%',
              objectFit: 'contain',
            }}
          />
        </Grid>
        <Grid item flex={1}>
          <Grid
            item
            sx={{
              boxShadow: 0,
              width: { md: '80%' },
              mx: 'auto',
              p: { md: 5, xs: 3 },
            }}
          >
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Registration />} />
      <Route index element={<Login />} />
    </Route>
  </Routes>
);

export { AuthPage };
