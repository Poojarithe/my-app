import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";


// Updated createData function to match new table columns
function createData(id, firstName, lastName, email, age, city) {
  return { id, firstName, lastName, email, age, city };
}

// Added 20 data entries
const initialRows = [
  createData(1, "John", "Doe", "john.doe@example.com", 28, "New York"),
  createData(2, "Jane", "Doe", "jane.doe@example.com", 32, "Chicago"),
  createData(3, "Alice", "Smith", "alice.smith@example.com", 24, "San Francisco"),
  createData(4, "Bob", "Brown", "bob.brown@example.com", 45, "Miami"),
  createData(5, "Charlie", "Johnson", "charlie.johnson@example.com", 36, "Seattle"),
  createData(6, "Diana", "King", "diana.king@example.com", 29, "Austin"),
  createData(7, "Evan", "Taylor", "evan.taylor@example.com", 41, "Los Angeles"),
  createData(8, "Fiona", "Williams", "fiona.williams@example.com", 33, "Boston"),
  createData(9, "George", "Jones", "george.jones@example.com", 50, "Denver"),
  createData(10, "Hannah", "Garcia", "hannah.garcia@example.com", 38, "Philadelphia"),
  createData(11, "Ivy", "Martinez", "ivy.martinez@example.com", 26, "San Diego"),
  createData(12, "Jack", "Harris", "jack.harris@example.com", 40, "Houston"),
  createData(13, "Kara", "Clark", "kara.clark@example.com", 27, "Orlando"),
  createData(14, "Liam", "Lewis", "liam.lewis@example.com", 31, "Atlanta"),
  createData(15, "Mia", "Walker", "mia.walker@example.com", 35, "Phoenix"),
  createData(16, "Noah", "Scott", "noah.scott@example.com", 22, "Dallas"),
  createData(17, "Olivia", "Young", "olivia.young@example.com", 30, "San Jose"),
  createData(18, "Paul", "Green", "paul.green@example.com", 42, "Indianapolis"),
  createData(19, "Quinn", "Adams", "quinn.adams@example.com", 28, "Columbus"),
  createData(20, "Rita", "Nelson", "rita.nelson@example.com", 34, "San Antonio"),
];

export default function BasicTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(5);
  const [selected, setSelected] = useState([]);
  const [rows, setRows] = useState(initialRows);
  const [openDialog, setOpenDialog] = useState(false);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelected(rows.map((row) => row.id));
    } else {
      setSelected([]);
    }
  };

  const handleSelectClick = (id) => {
    setSelected((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  const handleDelete = () => {
    setRows((prevRows) => prevRows.filter((row) => !selected.includes(row.id)));
    setSelected([]);
    setOpenDialog(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div>
    <header className="BasicTableHeader" >
      Student Data
    </header>
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{ backgroundColor: "#2A303D" }}>
            <TableCell padding="checkbox" style={{ color: "white" }}>
              <Checkbox
                indeterminate={
                  selected.length > 0 && selected.length < rows.length
                }
                checked={rows.length > 0 && selected.length === rows.length}
                onChange={handleSelectAllClick}
              />
            </TableCell>
            <TableCell style={{ color: "white", fontWeight: "bold" }}>ID</TableCell>
            <TableCell style={{ color: "white", fontWeight: "bold" }}>First Name</TableCell>
            <TableCell style={{ color: "white", fontWeight: "bold" }}>Last Name</TableCell>
            <TableCell style={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
            <TableCell style={{ color: "white", fontWeight: "bold" }}>Age</TableCell>
            <TableCell style={{ color: "white", fontWeight: "bold" }}>City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow
                key={row.id}
                selected={selected.includes(row.id)}
                onClick={() => handleSelectClick(row.id)}
                style={{ cursor: "pointer" }}
              >
                <TableCell padding="checkbox">
                  <Checkbox checked={selected.includes(row.id)} />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.city}</TableCell>
              </TableRow>
            ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={7} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div>
          <IconButton
            onClick={() => handleChangePage(page - 1)}
            disabled={page === 0}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            onClick={() => handleChangePage(page + 1)}
            disabled={page >= Math.ceil(rows.length / rowsPerPage) - 1}
          >
            <ArrowForwardIcon />
          </IconButton>
        </div>
        <div style={{ textAlign: "right" }}>
          {`${page * rowsPerPage + 1}-${Math.min(
            (page + 1) * rowsPerPage,
            rows.length
          )} of ${rows.length}`}
        </div>
        <div>
          <IconButton
            color="error"
            onClick={handleOpenDialog}
            disabled={selected.length === 0}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete the selected item(s)?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
    
    </div>
  );
}

 