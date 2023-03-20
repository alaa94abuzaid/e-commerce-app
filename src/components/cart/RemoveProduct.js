import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useProductsContext } from "../../hooks";

export const RemoveProduct = ({ quantity, name, id }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { cartProducts, setCartProducts } = useProductsContext();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? "simple-popover" : undefined;

  const handleRemoveProduct = () => {
    const index = cartProducts.findIndex((ele) => ele.id === id);
    cartProducts.splice(index, 1)
    setCartProducts([...cartProducts])
  }

  return (
    <div>
      <Button aria-describedby={popoverId} onClick={handleClick}>
        <HighlightOffIcon />
      </Button>
      <Popover
        id={popoverId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          {`Are you sure you want to remove ${quantity} quantities of ${name} ?`}{" "}
        </Typography>
        <Button onClick={handleRemoveProduct}>
          Yes
        </Button>
        <Button onClick={handleClose}>
          No
        </Button>
      </Popover>
    </div>
  );
};
