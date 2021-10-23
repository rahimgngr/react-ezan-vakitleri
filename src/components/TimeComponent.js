import { useTime } from "../contexts/TimeContext";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TimeComponent() {
  const { times } = useTime();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Miladi Tarih</TableCell>
            <TableCell>Hicri Tarih</TableCell>
            <TableCell>Ayın Şekli</TableCell>
            <TableCell align="right">İmsak</TableCell>
            <TableCell align="right">Güneş</TableCell>
            <TableCell align="right">Öğle</TableCell>
            <TableCell align="right">İkindi</TableCell>
            <TableCell align="right">Akşam</TableCell>
            <TableCell align="right">Yatsı</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {times.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: "25px",
                  height: "3px",
                },
              }}
            >
              <TableCell
                component="th"
                scope="row"
                style={{ width: "250px", height: "10px" }}
              >
                {row.MiladiTarihUzun}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                style={{ width: "200px", height: "10px" }}
              >
                {row.HicriTarihUzun}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                style={{ width: "150px", height: "10px" }}
              >
                <img src={`${row.AyinSekliURL}`} alt="new" />
              </TableCell>
              <TableCell align="right">{row.Imsak}</TableCell>
              <TableCell align="right">{row.Gunes}</TableCell>
              <TableCell align="right">{row.Ogle}</TableCell>
              <TableCell align="right">{row.Ikindi}</TableCell>
              <TableCell align="right">{row.Aksam}</TableCell>
              <TableCell align="right">{row.Yatsi}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
