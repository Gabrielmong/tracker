import { Box, Typography } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { Account } from 'models';
import { useEffect, useRef } from 'react';
import { formatCurrency } from 'utils';

export const TAccountDetails = ({
  account,
}: {
  account: Account | undefined;
}) => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    controls
      .start({
        opacity: 0,
        transition: { duration: 0 },
      })
      .then(() => {
        controls.start({
          opacity: 1,
          transition: { duration: 0.5 },
        });
      });
  }, [account, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: 2,
        }}
      >
        <Typography variant="h6" component="div">
          Account
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="div">
            {account?.name}
          </Typography>
        </Box>

        <Typography variant="h6" component="div">
          {account?.bank}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 5,
          }}
        >
          <Typography variant="body1" component="div">
            {account?.number}
          </Typography>

          <Typography variant="body2" component="div">
            {account?.type}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};
