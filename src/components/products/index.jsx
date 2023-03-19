import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";

import { useProductsContext } from "../../hooks";
import { ProductCard } from "./productCard";
import styles from "./products.module.scss";

export const Products = () => {
  const { products } = useProductsContext();
  const [paginatedProducts, setPaginatedProducts] = useState([]);

  useEffect(() => {
    setPaginatedProducts(products.slice(0, 6));
  }, [products]);

  const handlePagination = (e) => {
    const skip = (e - 1) * 6;
    setPaginatedProducts(products.slice(skip, skip + 6));
  };

  return (
    <div>
      <div className={styles.productsContainer}>
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {paginatedProducts.map(({ id, title, price, thumbnail }, index) => (
            <Grid item xs={2} sm={4} md={4} key={`${title}-${index}`}>
              <ProductCard id={id} name={title} price={price} img={thumbnail} />
            </Grid>
          ))}
        </Grid>
      </div>
      {!!products.length && (
        <Pagination
          hideNextButton
          hidePrevButton
          count={5}
          color="primary"
          onChange={(_e, page) => handlePagination(page)}
        />
      )}
    </div>
  );
};
