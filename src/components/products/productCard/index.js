import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import styles from "./productCard.module.scss";
import { useProductsContext } from "../../../hooks";

export const ProductCard = ({ id, name, price, img }) => {
  const {
    cartProducts,
    setCartProducts,
    favProducts,
    setFavProducts,
  } = useProductsContext();
  const [isAdded, setIsAdded] = useState(
    !!cartProducts.find((element) => element.id === id)
  );
  const [isFav, setIsFav] = useState(
    !!favProducts.find((element) => element === id)
  );

  const handleAddToCart = () => {
    setIsAdded(true);
    setCartProducts([
      ...cartProducts,
      { id, name, price, img, isAdded: true, quantity: 1 },
    ]);
  };

  const handleAddToFav = () => {
    if (isFav) {
      const index = favProducts.findIndex((ele) => ele === id);
      favProducts.splice(index, 1)
      setFavProducts([...favProducts])
    } else {
      setFavProducts([...favProducts, id]);
    }
    setIsFav(!isFav);
  };
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="194" image={img} alt="Paella dish" />
      <CardContent className={styles.contentWrapper}>
        <div className={styles.cardInfo}>
          <Typography className={styles.name} variant="body2" color="text.secondary">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${price}$`}
          </Typography>
        </div>
        <Button
          size="small"
          variant="outlined"
          onClick={handleAddToCart}
          disabled={isAdded}
        >
          {isAdded ? "Added" : " Add to cart"}
        </Button>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          sx={{ color: isFav ? "red" : "gray" }}
          aria-label="add to favorites"
          onClick={handleAddToFav}
        >
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
