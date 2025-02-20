import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/slices/bookSlice";
import { Container, Typography, Grid, Card, CardContent, CircularProgress } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();
  const { books, loading } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Book Management System
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {books.map((book) => (
            <Grid item xs={12} sm={6} md={4} key={book._id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{book.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {book.author}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Home;