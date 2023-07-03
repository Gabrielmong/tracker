import { Accounts, Dashboard, Profile, Transactions } from 'pages';
import { Routes, Route, useLocation } from 'react-router-dom';

export const Router = ({
  currentTheme,
  toggleTheme,
}: {
  currentTheme: 'light' | 'dark';
  toggleTheme: () => void;
}) => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route
        path="/profile"
        element={
          <Profile toggleTheme={toggleTheme} currentTheme={currentTheme} />
        }
      />
    </Routes>
  );
};
