import { Delete, Edit, Summarize } from '@mui/icons-material';
import {
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { Account, Transaction } from 'models';
import { useEffect, useRef } from 'react';
import { formatCurrency, formatDate, getColor } from 'utils';
import { useMutation } from '@apollo/client';
import { DELETE_TRANSACTION } from 'api/transactions';
import toast from 'react-hot-toast';

export const TTransactionDetails = ({
  selectedTransaction,
  selectedAccount,
  handleVanishDetails,
  handleEditTransaction,
}: {
  selectedTransaction: Transaction | null;
  selectedAccount: Account | undefined;
  handleVanishDetails: () => void;
  handleEditTransaction: () => void;
}) => {
  const controls = useAnimation();
  const ref = useRef(null);

  const [deleteTransaction] = useMutation(DELETE_TRANSACTION);

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
  }, [selectedTransaction, controls, selectedAccount]);

  const handleDelete = async () => {
    try {
      const { data } = await deleteTransaction({
        variables: { transactionId: selectedTransaction?.id },
      });

      if (data) {
        toast.success('Account deleted');

        controls
          .start({
            opacity: 0,
            transition: { duration: 0.5 },
          })
          .then(() => {
            handleVanishDetails();
          });
      }
    } catch (error) {
      console.log(error);
      toast.error('Error deleting account');
    }
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CardContent>
        <Typography variant="h6" component="div">
          Transaction Details
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
            {selectedTransaction?.title}
          </Typography>

          <Typography
            variant="h4"
            component="div"
            sx={{
              color: getColor(selectedTransaction?.amount || 0),
            }}
          >
            {formatCurrency(
              selectedTransaction?.amount,
              selectedAccount?.currency,
            )}
          </Typography>
        </Box>

        <Typography variant="body1" component="div">
          {formatDate(selectedTransaction?.date || '').toLocaleDateString()}
        </Typography>

        <Box
          sx={{
            mt: 3,
          }}
        >
          <Typography variant="h6" component="div">
            {selectedTransaction?.description}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginY: 3,
          }}
        >
          <Typography variant="body1" component="div">
            Sent to
          </Typography>

          <Typography
            variant="body1"
            component="div"
            sx={{
              ml: 1,
            }}
          >
            {selectedTransaction?.sentTo}
          </Typography>
        </Box>

        <Typography variant="body2" component="div">
          {selectedTransaction?.id}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          padding: 2,
        }}
      >
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
          onClick={handleEditTransaction}
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
        >
          <Summarize color="inherit" />
        </Button>
      </CardActions>
    </motion.div>
  );
};
