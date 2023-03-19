import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";

import { useProductsContext } from "../../hooks";
import { RemoveProduct } from "./RemoveProduct";
import styles from "./cart.module.scss";

const columns = ["Item", "Price", "Quantity", "Total", "Remove"];

export const CartTable = () => {
  const { cartProducts, setCartProducts } = useProductsContext();
  const [skip, setSkip] = useState(0);
  const [paginatedProducts, setPaginatedProducts] = useState(
    cartProducts.slice(skip, 6)
  );

  const handlePagination = (e) => {
    const updatedSkip = (e - 1) * 6;
    setSkip(updatedSkip);
    setPaginatedProducts(cartProducts.slice(updatedSkip, updatedSkip + 6));
  };

  const handleChangeQuantity = (isAdd, product) => {
    const index = cartProducts.findIndex((ele) => ele.id === product.id);
    cartProducts[index] = {
      ...cartProducts[index],
      quantity: isAdd ? product.quantity + 1 : product.quantity - 1,
    };

    setCartProducts([...cartProducts]);
  };

  useEffect(() => {
    setPaginatedProducts(cartProducts.slice(skip, skip + 6));
  }, [cartProducts, skip]);

  return (
    <div>
      {cartProducts.length ? (
        <Box>
          <TableContainer component={Paper} sx={{ marginBottom: "8px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {columns.map((col) => (
                    <TableCell align="center"> {col}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedProducts.map((product) => (
                  <TableRow
                    key={product.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <div className={styles.itemWrapper}>
                        <img alt={"Product"} src={product.img} />

                        {product.name}
                      </div>
                    </TableCell>
                    <TableCell align="center">{`${product.price}$`}</TableCell>
                    <TableCell align="right">
                      <div className={styles.quantityWrapper}>
                        <Fab
                          color="primary"
                          aria-label="add"
                          disabled={product.quantity < 2}
                          sx={{ height: "30px", width: "30px" }}
                          onClick={() => handleChangeQuantity(false, product)}
                        >
                          <RemoveIcon />
                        </Fab>
                        <div className={styles.quantity}>
                          {product.quantity}
                        </div>
                        <Fab
                          color="primary"
                          aria-label="add"
                          sx={{ height: "30px", width: "30px" }}
                          onClick={() => handleChangeQuantity(true, product)}
                        >
                          <AddIcon />
                        </Fab>
                      </div>
                    </TableCell>
                    <TableCell align="center">{`${
                      product.price * product.quantity
                    }$`}</TableCell>
                    <TableCell align="center">
                      <RemoveProduct
                        id={product.id}
                        quantity={product.quantity}
                        name={product.name}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {cartProducts.length > 6 && (
            <Pagination
              hideNextButton
              hidePrevButton
              color="primary"
              count={
                Math.floor(cartProducts.length / 6) +
                (cartProducts.length % 6 ? 1 : 0)
              }
              onChange={(_e, page) => handlePagination(page)}
            />
          )}
        </Box>
      ) : (
        <Typography variant="h4">Your cart is empty</Typography>
      )}
    </div>
  );
};
