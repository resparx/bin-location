import React, { useContext } from "react";
import { warehouses } from "@/data";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import { AppContext } from "@/context";

const Levels = ({ items = [] }: { items: any }) => {
  const { updateContext } = useContext<any>(AppContext)
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {items.map((item: any, index: number) => {
        return (
          <Link
            underline="hover"
            color="inherit"
            onClick={() => {
              
            }}
          >
            {item.name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default Levels;
