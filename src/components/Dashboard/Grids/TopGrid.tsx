import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { MastercardLogo } from 'assets/svg';

export const TopGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid item xs={12}>
      <Grid
        container
        spacing={2}
        direction={isMobile ? 'column-reverse' : 'row'}
      >
        <Grid item xs={12} md={6} lg={7}>
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
                <Typography variant="h6">Income vs Expenses</Typography>
                <Button
                  variant="text"
                  sx={{
                    textTransform: 'none',
                  }}
                >
                  This month
                </Button>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 2,
                  height: 200,
                }}
              >
                <Typography variant="h6">A graph will go here</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={5}>
          <Card
            sx={{
              height: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                padding: 3,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-end',
                  height: '100%',
                  paddingBottom: 3,
                }}
              >
                <Typography variant="body2">Available balance</Typography>
                <Typography variant="h4">$ 99.999,99</Typography>
                <Typography variant="h6">₡ 99.999.99</Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="body2">**** xxxx</Typography>

                <MastercardLogo height={50} width={80} />
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};
