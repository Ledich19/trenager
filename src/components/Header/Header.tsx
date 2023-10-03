import { AppBar, Container, Toolbar, Box, Stack, Typography } from '@mui/material';
import MaterialUISwitch from './MaterialUISwitch';

const Header = () => {
  return (
    <AppBar>
      <Container fixed color="primary">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box>
            <MaterialUISwitch />
          </Box>
          <Stack direction="row" alignItems="center">
            <Typography>👀</Typography>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
