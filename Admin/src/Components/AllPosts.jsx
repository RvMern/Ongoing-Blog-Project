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
  Typography,
} from "@mui/material";

const AllPosts = () => {
  return (
    <Box className="h-screen p-12 lg:p-20 text-white lg:m-custom-ml-15">
      <Table className="border-2 border-collapse">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ textAlign: "center", fontWeight: 900 }}
              className="border-2"
            >
              Post ID
            </TableCell>
            <TableCell
              sx={{ textAlign: "center", fontWeight: 900 }}
              className="border-2"
            >
              Post Title
            </TableCell>
            <TableCell
              sx={{ textAlign: "center", fontWeight: 900 }}
              className="border-2"
            >
              Post Category
            </TableCell>
            <TableCell
              sx={{ textAlign: "center", fontWeight: 900 }}
              className="border-2"
            >
              Edit
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell sx={{ textAlign: "center" }}>
              jsahfahf1312jssj;d
            </TableCell>
            <TableCell sx={{ textAlign: "center" }} className="border-2">
              Best Anime To Watch in 2024
            </TableCell>
            <TableCell sx={{ textAlign: "center" }} className="border-2">
              Latest
            </TableCell>
            <TableCell sx={{ textAlign: "center" }} className="border-2">
              <Button sx={{mx:1}}>Update</Button>
              <Button sx={{mx:1}}>Delete</Button>
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </Box>
  );
};

export default AllPosts;
