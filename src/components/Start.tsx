import { Box, Button, Stack, Typography } from '@mui/material';
import AttachmentIcon from '@mui/icons-material/Attachment';

type Props = {
  dataStart: { text: string[]; img: string };
  setStart: (par: boolean) => void;
};

const Start = ({ dataStart, setStart }: Props) => {
  return (
    <>
      <Box sx={{ margin: '0 auto', height: '300px', width: '300px' }}>
        <img
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
          src={`img/${dataStart.img}`}
          alt=""
        />
      </Box>
      {dataStart.text.map((e) => (
        <Typography key={e}>
          <AttachmentIcon />
          {e}
        </Typography>
      ))}
      <Stack sx={{}}>
        <Button onClick={() => setStart(true)} variant="outlined">
          Start
        </Button>
      </Stack>
    </>
  );
};

export default Start;
