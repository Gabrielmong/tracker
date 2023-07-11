import { Search } from '@mui/icons-material';
import { Box, Card, Grid, Input, Typography } from '@mui/material';

export const SearchBar = ({ isSmall }: { isSmall: boolean }) => {
  return (
    <Grid item xs={9} lg={10} xl={11}>
      <Card>
        <Box
          sx={{
            py: 1,
            px: 2,
            borderRadius: 4,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Transactions
          </Typography>

          <Input
            placeholder="Search"
            sx={{
              width: isSmall ? 120 : 200,
            }}
            endAdornment={
              <Search
                onClick={() => console.log('search')}
                sx={{
                  cursor: 'pointer',
                }}
              />
            }
          />
        </Box>
      </Card>
    </Grid>
  );
};
