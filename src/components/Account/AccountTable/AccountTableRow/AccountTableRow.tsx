import { TableRow, TableCell, useMediaQuery, useTheme } from '@mui/material';
import { Account } from 'models';
import { formatCurrency } from 'utils';
import { motion } from 'framer-motion';

export const AccountTableRow = ({
  account,
  handleAccountClick,
  selectedAccount,
}: {
  account: Account;
  handleAccountClick: (account: Account) => void;
  selectedAccount: Account | null;
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const currentTheme = theme.palette.mode;

  return (
    <TableRow
      key={account?.id}
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
        '&:hover': {
          backgroundColor: 'background.default',
          cursor: 'pointer',
        },
        backgroundColor:
          selectedAccount?.id === account?.id
            ? currentTheme === 'light'
              ? 'background.default'
              : 'background.paper'
            : 'transparent',
      }}
      onClick={() => handleAccountClick(account)}
    >
      <TableCell>{account?.name}</TableCell>
      <TableCell>
        {formatCurrency(account?.balance, account.currency)}
      </TableCell>
      <TableCell>{account?.bank}</TableCell>

      {!isMobile && (
        <>
          <TableCell>{account?.number}</TableCell>
          <TableCell>{account?.createdAt}</TableCell>
        </>
      )}
    </TableRow>
  );
};
