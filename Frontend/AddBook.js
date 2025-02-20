import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Container, Typography, Paper } from "@mui/material";
import { addBook } from "../redux/slices/bookSlice";

const AddBook = () => {
  const dispatch = useDispatch();
  const [bookData, setBookData] = useState({ title: "", author: "", publishedDate: "" });

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(bookData));
    setBookData({ title: "", author: "", publishedDate: "" });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h5" gutterBottom>
          Add a New Book
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={bookData.title}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Author"
            name="author"
            value={bookData.author}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Published Date"
            name="publishedDate"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={bookData.publishedDate}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 10 }}>
            Add Book
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AddBook;