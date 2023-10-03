import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Words } from '../app/types';

type Props = {
  data: Words;
};

const TableMine = ({ data }: Props) => {
  function createData(en: string, ua: string, transcription: string) {
    return { en, ua, transcription };
  }
  const rowsData = data.map((el) => createData(el.en, el.ua, el.transcription || ''));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Англійська</TableCell>
            <TableCell>Українська</TableCell>
            <TableCell>Транскрипція</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsData.map((row) => (
            <TableRow key={row.en} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.en}
              </TableCell>
              <TableCell>{row.transcription}</TableCell>
              <TableCell>{row.ua}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableMine;
