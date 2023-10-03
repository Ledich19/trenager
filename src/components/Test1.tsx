import { useState } from 'react';
import { Box, Button, Stack, Alert, Card } from '@mui/material';
// import { useTheme } from '@mui/material/styles';

import { TestType } from '../app/types';

type Props = {
  data: TestType;
  position: number;
  setPosition: (el: number) => void;
};

const Test1 = ({ data, position, setPosition }: Props) => {
  const [right, setRight] = useState('');
  const [wrong, setWrong] = useState('');
  // const theme = useTheme();
  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setRight('');
    setWrong('');
  };
  const handleClick = (isRight: boolean) => {
    handleClose();
    if (isRight) {
      setRight(data.right || 'success');
    } else {
      setWrong(data.wrong);
    }
  };
  return (
    <>
      {data.audio && (
        <Card sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <IconButton aria-label="previous">
                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
              <IconButton aria-label="next">
                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
              </IconButton>
            </Box> */}
            <audio controls>
              <track kind="captions" src="" srcLang="en" label="English" />
              <source src={`audio/${data.audio}`} />
              Your browser does not support the audio element.
            </audio>
            {/* <audio ref={audioRef} src={`img/${data.audio}`} controls /> */}
          </Box>
          {/* <CardMedia
            component="img"
            sx={{ width: 50 }}
            image="/img/photo_5237960892807762127_x.jpg"
            alt="Live from space album cover"
          /> */}
        </Card>
      )}
      <Box sx={{ margin: '0 auto', height: '500px', width: '500px' }}>
        <img
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
          src={`img/${data.img}`}
          alt=""
        />
      </Box>
      <Stack direction="row" justifyContent="center" spacing={2}>
        {data.answers.map((el) => (
          <Button key={el.value} onClick={() => handleClick(el.isRight)} variant="outlined">
            {el.value}
          </Button>
        ))}
      </Stack>

      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar> */}
      {wrong && <Alert severity="error">{wrong}</Alert>}
      {right && <Alert severity="success">{right}</Alert>}
      <Stack direction="row" justifyContent="center">
        <Button
          onClick={() => {
            setPosition(position + 1);
            handleClose();
          }}
          variant="outlined"
        >
          Далі
        </Button>
      </Stack>
    </>
  );
};

export default Test1;
