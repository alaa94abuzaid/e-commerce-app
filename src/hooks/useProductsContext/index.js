import React from "react";

import { ProductsContext } from "../../components";

export const useProductsContext = () => React.useContext(ProductsContext);
