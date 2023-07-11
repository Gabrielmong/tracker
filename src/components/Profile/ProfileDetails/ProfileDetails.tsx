import { AccountCircle, ContentCopy } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material';
import { User } from 'models';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

type ProfileDetailsProps = {
  profile: User;
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
};

type InfoProps = {
  title: string;
  value: string;
};

export const ProfileDetails = ({
  profile,
  toggleTheme,
  currentTheme,
}: ProfileDetailsProps) => {
  const [information, setInformation] = useState<InfoProps[]>([]);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.id);
    toast.success('Copied to clipboard');
  };

  useEffect(() => {
    setInformation([
      {
        title: 'Name',
        value: profile.name,
      },
      {
        title: 'Email',
        value: profile.email,
      },
      {
        title: 'Joined',
        value: profile.createdAt.toDateString(),
      },
      {
        title: 'Your id',
        value: profile.id.slice(0, 8),
      },
    ]);
  }, [profile]);

  return (
    <>
      <Grid item xs={12} md={8}>
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
                  <Typography variant="h4">Your information</Typography>
                  <Button
                    variant="text"
                    sx={{
                      textTransform: 'none',
                    }}
                    onClick={toggleTheme}
                  >
                    Toggle Theme
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {information.map((info) => (
            <Grid item xs={12} md={6} key={info.title}>
              <Card>
                <CardHeader title={info.title} />
                <CardContent>
                  <Typography variant="body1">
                    {info.value}{' '}
                    {info.title === 'Your id' && (
                      <ContentCopy
                        fontSize="inherit"
                        sx={{
                          cursor: 'pointer',
                        }}
                        onClick={handleCopy}
                      />
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card
          sx={{
            height: '100%',
          }}
        >
          <CardContent>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
              }}
            >
              <AccountCircle fontSize="large" />
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem',
              }}
            >
              <Typography variant="h4">{profile.name}</Typography>
              <Typography variant="body2">{profile.email}</Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
