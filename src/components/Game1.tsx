import { useEffect, useState } from 'react';
import { Chip, Grid, Stack } from '@mui/material';
import { Words } from '../app/types';

type Props = {
  data: Words;
  setCanNext: (el: boolean) => void;
};

const Game1 = ({ data, setCanNext }: Props) => {
  const [wordsUa, setWordsUa] = useState(data.map((el) => el.ua).sort(() => Math.random() - 0.5));
  const [wordsEn, setWordsEn] = useState(data.map((el) => el.en).sort(() => Math.random() - 0.5));
  const [wordUa, setWordUa] = useState('');
  const [wordEn, setWordEn] = useState('');

  useEffect(() => {
    setCanNext(true);
  }, []);

  const handleClickUa = (word: string) => {
    const keyWord = data.find((el) => el.ua === word);
    if (keyWord?.en === wordEn) {
      setWordsUa((words) => words.filter((el) => el !== keyWord.ua));
      setWordsEn((words) => words.filter((el) => el !== keyWord.en));
    } else {
      setWordUa(word);
    }
    if (wordsUa.length <= 1 || wordsEn.length <= 1) {
      setCanNext(false);
    }
  };
  const handleClickEn = (word: string) => {
    const keyWord = data.find((el) => el.en === word);
    if (keyWord?.ua === wordUa) {
      setWordsUa((words) => words.filter((el) => el !== keyWord.ua));
      setWordsEn((words) => words.filter((el) => el !== keyWord.en));
    } else {
      setWordEn(word);
    }
    if (wordsUa.length <= 1 || wordsEn.length <= 1) {
      setCanNext(false);
    }
  };
  return (
    <Grid container>
      <Grid item xs={6} md={6}>
        <Stack direction="column" spacing={1} p={1}>
          {wordsUa.map((el) => (
            <Chip
              color={el === wordUa ? 'primary' : 'default'}
              key={el}
              label={el}
              variant="outlined"
              onClick={() => handleClickUa(el)}
            />
          ))}
        </Stack>
      </Grid>
      <Grid item xs={6} md={6}>
        <Stack direction="column" spacing={1} p={1}>
          {wordsEn.map((el) => (
            <Chip
              color={el === wordEn ? 'primary' : 'default'}
              key={el}
              label={el}
              variant="outlined"
              onClick={() => handleClickEn(el)}
            />
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Game1;
