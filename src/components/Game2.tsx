import { useEffect, useState } from 'react';
import {
  Chip,
  Grid,
  Stack,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Words } from '../app/types';

type Props = {
  data: Words;
  setCanNext: (el: boolean) => void;
};

const Game2 = ({ data, setCanNext }: Props) => {
  const [itemData, setItemData] = useState(
    data.map((el) => ({ img: el.img, en: el.en })).sort(() => Math.random() - 0.5)
  );
  const [wordsEn, setWordsEn] = useState(
    data
      .map((el) => el.en)
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.ceil(data.length / 2))
  );
  useEffect(() => {
    setCanNext(true);
  }, []);
  const handleClickImg = (word: string) => {
    if (wordsEn.includes(word)) {
      setItemData((words) => words.filter((el) => el.en !== word));
      setWordsEn((words) => words.filter((el) => el !== word));
    }
    if (itemData.length <= 1 || wordsEn.length <= 1) {
      setCanNext(false);
    }
  };

  return (
    <Grid container>
      <Grid item xs={6} md={6}>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem onClick={() => handleClickImg(item.en)} key={item.en}>
              <img
                style={{ objectFit: 'cover', height: '100%' }}
                srcSet={`img/suitcase/${item.img}`}
                src={`img/suitcase/${item.img}`}
                alt={item.en}
                loading="lazy"
              />
              <ImageListItemBar
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.en}`}
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid item xs={6} md={6}>
        <Stack direction="column" spacing={1} p={1}>
          {wordsEn.map((el) => (
            <Chip key={el} label={el} variant="outlined" />
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Game2;
