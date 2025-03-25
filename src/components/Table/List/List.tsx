import React, { useState }  from 'react';
import Card from '../Card/Card';
import { Pagination, Stack, Box } from "@mui/material";

export interface Product {
    id: number;
    name: string;
    description: string;
    category: string;
    quantity: number;
    unit: string;
    imageUrl?: string;
}

interface ProductListProps {
  products: Product[];
}


const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [page, setPage] = useState(1); 
  const itemsPerPage = 9; 

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  console.log(products);
  const paginatedProducts = products.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%", 
      }}
    >
      <Box
        sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "50px",
            padding: "60px",
            marginLeft: { xs: "0", md: "0px" },
            marginBottom: "30px",
            boxSizing: "border-box",
            width: "100%", 
        }}
      >
        {paginatedProducts.map((product) => (
          <Box key={product.id}>
            <Card product={product} />
          </Box>
        ))}
      </Box>

      <Stack spacing={2} alignItems="center">
        <Pagination
          count={Math.ceil(products.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="secondary"
          sx={{
            "& .MuiPaginationItem-root": { color: "#FFFFFF" },
            "& .Mui-selected": {
              color: "#FFFFFF",
              backgroundColor: "#673AB7",
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "#424242",
            },
          }}
        />
      </Stack>
    </Box>
  );
};

export default ProductList;