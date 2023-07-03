import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Account } from 'models';
import { useState } from 'react';
import { formatNumber } from 'utils';

export const AccountTable = ({
  accounts,
  handleAccountClick,
  selectedAccount,
}: {
  accounts: Account[];
  handleAccountClick: (account: Account) => void;
  selectedAccount: Account | null;
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const currentTheme = theme.palette.mode;

  return (
    <TableContainer
      sx={{
        borderRadius: '10px',
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Account Name</TableCell>
            <TableCell>Available Balance</TableCell>
            <TableCell>Bank</TableCell>

            {!isMobile && (
              <>
                <TableCell>Account Number</TableCell>
                <TableCell>Added</TableCell>
              </>
            )}
          </TableRow>
        </TableHead>

        <TableBody>
          {accounts.map((account) => (
            <TableRow
              key={account.accountNumber}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                '&:hover': {
                  backgroundColor: 'background.default',
                  cursor: 'pointer',
                },
                backgroundColor:
                  selectedAccount?.accountNumber === account.accountNumber
                    ? currentTheme === 'light'
                      ? 'background.default'
                      : 'background.paper'
                    : 'transparent',
              }}
              onClick={() => handleAccountClick(account)}
            >
              <TableCell>{account.accountName}</TableCell>
              <TableCell>$ {formatNumber(account.availableBalance)}</TableCell>
              <TableCell>{account.bank}</TableCell>

              {!isMobile && (
                <>
                  <TableCell>{account.accountNumber}</TableCell>
                  <TableCell>
                    {account.createdAt.toLocaleDateString()}
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
