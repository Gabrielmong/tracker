import { Grid } from '@mui/material';
import { TransitionedPage, TopGrid, MidGrid, BottomGrid } from 'components';

export const Dashboard = () => {
  const spendings = [
    {
      name: 'College',
      amount: 1234,
      convertedAmount: 123456,
      color: '#763C3C',
    },
    {
      name: 'Car',
      amount: 1234,
      convertedAmount: 123456,
      color: '#1F6E8C',
    },
    {
      name: 'Rent',
      amount: 1234,
      convertedAmount: 123456,
      color: '#3C765A',
    },
    {
      name: 'Food',
      amount: 1234,
      convertedAmount: 123456,
      color: '#27314A',
    },
  ];

  const notifications = [
    {
      title: 'Phone payment due 15/06',
    },
    {
      title: 'Internet payment due 15/06',
    },
    {
      title: 'Rent payment due 15/06',
    },
  ];

  return (
    <TransitionedPage>
      <Grid container spacing={2}>
        <TopGrid />

        <MidGrid spendings={spendings} />

        <BottomGrid notifications={notifications} />
      </Grid>
    </TransitionedPage>
  );
};
