import Drawer from 'components/Drawer';
// import { CreatePost, Post, Posts } from 'pages';
import { Route, Routes, Navigate } from 'react-router-dom';
import { FC } from 'react';
import Dashboard from 'pages/dashboard';
import GettingStarted from 'pages/dashboard/GettingStarted';
import Notifications from 'pages/dashboard/Notifications';
import SetUpTeam from 'pages/dashboard/SetUpTeam';
import Audit from 'pages/dashboard/Audit';
import Jobs from 'pages/dashboard/Jobs';
import Payment from 'pages/dashboard/Payment';
import Profile from 'pages/dashboard/Profile';
import Help from 'pages/dashboard/Help';

const PrivateRoutes: FC = () => {
  return (
    <Routes>
      <Route element={<Drawer />}>
        <Route path="auth/*" element={<Navigate to="/" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/setup-team" element={<SetUpTeam />} />
        <Route path="/audit" element={<Audit />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<Help />} />
        {/* <Route path="post/:id" element={<Post />} />
        <Route path="post/create" element={<CreatePost />} /> */}

        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

// };

export default PrivateRoutes;
