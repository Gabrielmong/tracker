import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  useTheme,
  useMediaQuery,
  Box,
  Card,
  CardContent,
  Grid,
  CircularProgress,
  Pagination,
} from '@mui/material';
import { useBreakpoint } from 'hooks';
import { Transaction } from 'models';
import { formatCurrency, formatDate, getColor } from 'utils';

export const TransactionsTable = ({
  handlePageChange,
  transactions,
  handleTransactionClick,
  selectedTransaction,
  loading,
  pagination: { page, take, total, pages },
}: {
  transactions: Transaction[];
  handleTransactionClick: (transaction: Transaction) => void;
  selectedTransaction: Transaction | null;
  loading: boolean;
  handlePageChange: (page: number) => void;
  pagination: {
    page: number;
    take: number;
    total: number;
    pages: number;
  };
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
    <Grid
      item
      xs={12}
      md={7}
      sx={{
        minHeight: '100%',
      }}
    >
      <Card
        sx={{
          minHeight: '100%',
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6" component="div">
              Transactions
            </Typography>

            <Pagination
              count={pages}
              page={page}
              onChange={(event, value) => handlePageChange(value)}
              sx={{
                '& .MuiPaginationItem-root': {
                  color: 'white',
                },
              }}
            />
          </Box>

          {loading ? (
            <CardContent
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <CircularProgress />
            </CardContent>
          ) : (
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
                            color: getColor(transaction.amount),
                          }}
                        >
                          {formatCurrency(
                            transaction?.amount,
                            transaction?.account?.currency,
                          )}
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
                            {formatDate(transaction.date).toLocaleDateString()}
                          </Typography>
                        </TableCell>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};
