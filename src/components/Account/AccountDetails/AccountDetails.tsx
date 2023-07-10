import {
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from '@mui/material';
import { Account } from 'models';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { formatCurrency, formatNumber } from 'utils';
import { ContentCopy, Delete, Edit, Summarize } from '@mui/icons-material';
import toast from 'react-hot-toast';

export const AccountDetails = ({ account }: { account: Account }) => {
  const controls = useAnimation();
  const ref = useRef(null);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(account.number);
    toast.success('Copied to clipboard');
  };

  const handleDelete = () => {
    toast('Not implemented yet', { icon: '🚧' });
  };

  const handleEdit = () => {
    toast('Not implemented yet', { icon: '🚧' });
  };

  const handleSummary = () => {
    toast('Not implemented yet', { icon: '🚧' });
  };

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
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h4">{account.name}</Typography>
          <Typography variant="h4">
            {formatCurrency(account?.balance, account.currency)}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 4,
          }}
        >
          <Typography
            variant="body2"
            onClick={handleCopyToClipboard}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                color: 'text.secondary',
              },
            }}
          >
            {account.number} <ContentCopy fontSize="inherit" />
          </Typography>
          <Typography variant="body2">{account.currency}</Typography>
        </Box>

        <Box
          sx={{
            mb: 2,
          }}
        >
          <Typography variant="body1">{account.bank}</Typography>

          <Typography variant="body2">{account.type}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            backgroundColor: '#763C3C',
            height: 64,
            width: 64,
            padding: 0,
            color: 'white',
          }}
          onClick={handleDelete}
        >
          <Delete color="inherit" />
        </Button>

        <Button
          sx={{
            backgroundColor: '#32925E',
            height: 64,
            width: 64,
            padding: 0,
            color: 'white',
          }}
          onClick={handleEdit}
        >
          <Edit color="inherit" />
        </Button>
        <Button
          sx={{
            backgroundColor: '#27314A',
            height: 64,
            width: 64,
            padding: 0,
            color: 'white',
          }}
          onClick={handleSummary}
        >
          <Summarize color="inherit" />
        </Button>
      </CardActions>
    </motion.div>
  );
};
