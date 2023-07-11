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
import { formatCurrency, formatNumber } from 'utils';
import { AccountTableRow } from './AccountTableRow';

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
          {accounts?.map((account) => (
            <AccountTableRow
              key={account?.id}
              account={account}
              handleAccountClick={handleAccountClick}
              selectedAccount={selectedAccount}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
