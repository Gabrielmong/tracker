import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export const AnimatedRoutes = ({
  currentTheme,
}: {
  currentTheme: 'light' | 'dark';
}) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/">
          <Route
            path="/"
            element={
              <div>
                <h1>Dashboard</h1>
              </div>
            }
          />
          <Route
            path="accounts"
            element={
              <div>
                <h1>Accounts</h1>
              </div>
            }
          />
          <Route
            path="transactions"
            element={
              <div>
                <h1>Transactions</h1>
              </div>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
