import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useBreakpoint } from 'hooks';
import { Transaction } from 'models';

export const TransactionsTable = ({
  transactions,
  handleTransactionClick,
  selectedTransaction,
}: {
  transactions: Transaction[];
  handleTransactionClick: (transaction: Transaction) => void;
  selectedTransaction: Transaction | null;
}) => {
  const width = useBreakpoint();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const currentTheme = theme.palette.mode;

  const widths: {
    [key: string]: {
      id: string | number;
      name: string | number;
      amount: string | number;
      date: string | number;
    };
  } = {
    xs: {
      id: '10%',
      name: '40%',
      amount: '20%',
      date: '25%',
    },
    sm: {
      id: '10%',
      name: '40%',
      amount: '20%',
      date: '25%',
    },
    md: {
      id: '10%',
      name: '30%',
      amount: '27%',
      date: '27%',
    },
    lg: {
      id: '8%',
      name: '40%',
      amount: '22%',
      date: '22%',
    },
    xl: {
      id: '5%',
      name: '50%',
      amount: '15%',
      date: '15%',
    },
  };

  const getCellWidth = (index: number) => {
    switch (index) {
      case 0:
        return widths[width].id;
      case 1:
        return widths[width].name;
      case 2:
        return widths[width].amount;
      case 3:
        return widths[width].date;
      default:
        return '10%';
    }
  };

  return (
    <TableContainer>
      <Table>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow
              sx={{
                '&:hover': {
                  backgroundColor: 'background.default',
                  cursor: 'pointer',
                },
                backgroundColor:
                  selectedTransaction?.id === transaction.id
                    ? currentTheme === 'light'
                      ? 'background.default'
                      : 'background.paper'
                    : 'transparent',
              }}
              key={transaction.id}
              onClick={() => handleTransactionClick(transaction)}
            >
              <TableCell
                sx={{
                  borderBottom: 'none',
                  width: getCellWidth(0),
                  padding: '5px',
                  borderRadius: '15px 0 0 15px',
                }}
              >
                <Typography variant="h6" component="div">
                  {transaction.id.slice(0, 4)}
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: 'none',
                  width: getCellWidth(1),
                  padding: '5px',
                }}
              >
                <Typography variant="h6" component="div">
                  {transaction.title}
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: 'none',
                  width: getCellWidth(2),
                  padding: '5px',

                  borderRadius: isSmall ? '0 15px 15px 0' : null,
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    textAlign: 'right',
                  }}
                >
                  {transaction.amount}
                </Typography>
              </TableCell>
              {!isSmall && (
                <TableCell
                  sx={{
                    borderBottom: 'none',
                    width: getCellWidth(3),
                    padding: '5px',

                    borderRadius: '0 15px 15px 0',
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      textAlign: 'right',
                    }}
                  >
                    {transaction.date.toLocaleDateString()}
                  </Typography>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
