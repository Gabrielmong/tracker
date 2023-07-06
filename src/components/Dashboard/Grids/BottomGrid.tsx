import { Grid, Card, CardContent, Typography, Box } from '@mui/material';

export const BottomGrid = ({
  notifications,
}: {
  notifications: {
    title: string;
  }[];
}) => {
  return (
    <Grid item xs={12} md={6} lg={5}>
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
            <Typography variant="h6">Notifications</Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              overflowY: 'scroll',
              height: 335,
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            {notifications.map((notification) => (
              <Box
                key={notification.title}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 1,
                  padding: 2,
                  backgroundColor: 'secondary.contrastText',
                  borderRadius: 3,
                  width: '100%',
                }}
              >
                <Typography variant="h6">{notification.title}</Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};
