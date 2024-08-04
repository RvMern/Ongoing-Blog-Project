import React from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";

const AllUsers = () => {
  return (
    <Box className="h-screen p-12 lg:p-20 text-white lg:m-custom-ml-15">
      <Table className="border-2 border-collapse">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ textAlign: "center", fontWeight: 900}}
              className="border-2"
            >
              Username
            </TableCell>
            <TableCell
              sx={{ textAlign: "center", fontWeight: 900}}
              className="border-2"
            >
              Email ID
            </TableCell>
            <TableCell
              sx={{ textAlign: "center", fontWeight: 900}}
              className="border-2"
            >
              Mobile No.
            </TableCell>
            <TableCell
              sx={{ textAlign: "center", fontWeight: 900}}
              className="border-2"
            >
              Edit
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell sx={{textAlign:'center'}}>Rajiv</TableCell>
            <TableCell sx={{textAlign:'center'}} className="border-2">Rajiv123@gmail.com</TableCell>
            <TableCell sx={{textAlign:'center'}} className="border-2">+91 9891234785</TableCell>
            <TableCell sx={{textAlign:'center'}} className="border-2">
              <Button>Delete</Button>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </Box>
  );
};

export default AllUsers;
