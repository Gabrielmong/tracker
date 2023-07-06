import { Grid, Card, CardContent, Typography, Box } from '@mui/material';

export const MidGrid = ({
  spendings,
}: {
  spendings: {
    name: string;
    amount: number;
    convertedAmount: number;
    color: string;
  }[];
}) => {
  return (
    <Grid item xs={12} md={6} lg={7}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card
            sx={{
              height: '100%',
            }}
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
                <Typography variant="h6">Income</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card
            sx={{
              height: '100%',
            }}
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
                <Typography variant="h6">Expenses</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Grid item xs={12}>
            <Card
              sx={{
                height: '100%',
              }}
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
                  <Typography variant="h6">Spendings</Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    minHeight: 250,
                    flexWrap: 'wrap',
                  }}
                >
                  {spendings.map((spending) => (
                    <Box
                      key={spending.name}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        padding: 1,
                        borderRadius: 3,
                        backgroundColor: spending.color,
                        color: 'white',
                        width: 100,
                        height: 100,
                        margin: '1rem 1rem 0 0',
                        // marginBottom: isMobile ? '1rem' : 0,
                      }}
                    >
                      <Typography variant="body2">{spending.name}</Typography>
                      <Typography variant="h6">$ {spending.amount}</Typography>
                      <Typography variant="body2">
                        ₡ {spending.convertedAmount}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
