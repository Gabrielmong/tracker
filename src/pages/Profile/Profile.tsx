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
import { ProfileDetails, TransitionedPage } from 'components';
import { useAuth } from 'hooks';
import toast from 'react-hot-toast';

export const Profile = ({
  toggleTheme,
  currentTheme,
}: {
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
}) => {
  const { user } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleEditProfile = () => {
    toast('Not implemented yet', { icon: '🚧' });
  };
  return (
    <TransitionedPage>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',

                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="h4">Profile</Typography>
                <Button
                  variant="text"
                  sx={{
                    textTransform: 'none',
                  }}
                  onClick={handleEditProfile}
                >
                  Edit Profile
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            direction={isMobile ? 'column-reverse' : 'row'}
          >
            <ProfileDetails
              profile={user}
              toggleTheme={toggleTheme}
              currentTheme={currentTheme}
            />
          </Grid>
        </Grid>
      </Grid>
    </TransitionedPage>
  );
};
