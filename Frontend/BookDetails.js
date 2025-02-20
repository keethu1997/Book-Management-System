import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBookDetails } from "../redux/slices/bookSlice";
import { Container, Typography, Paper, CircularProgress } from "@mui/material";

const BookDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { book, loading } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBookDetails(id));
  }, [dispatch, id]);

  return (
    <Container maxWidth="sm">
      {loading ? (
        <CircularProgress />
      ) : (
        <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
          <Typography variant="h4" gutterBottom>
            {book?.title}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {book?.author}
          </Typography>
          <Typography variant="body1" style={{ marginTop: 10 }}>
            Published Date: {book?.publishedDate}
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{ marginTop: 10 }}>
            {book?.description}
          </Typography>
        </Paper>
      )}
    </Container>
  );
};

export default BookDetails;