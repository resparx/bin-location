import React, { useContext } from "react";
import { warehouses } from "@/data";
import { Box, Fade, Typography } from "@mui/material";
import { AppContext } from "@/context";
import { useRouter } from "next/router";
import Image from "next/image";

const Shelf = () => {
  const { activeType, activeIndex, updateContext } =
    useContext<any>(AppContext);
  const active = activeType === "RACK";
  const { push, query }: any = useRouter();
  console.log("shelf");
  const shelfs: any =
    warehouses[parseInt(query["warehouse"])]?.zones[parseInt(query["zone"])]
      ?.aisles[parseInt(query["aisle"])]?.racks[parseInt(query["rack"])]
      ?.shelfs;

      //
  return (
    <Fade
      in={active}
      timeout={500}
      style={{
        transitionDelay: `${active ? 500 : 0}ms`,
      }}
      unmountOnExit
    >
      <Box
        sx={{
          display: active ? "flex" : "none",
        }}
      >
        {shelfs?.map((item: any, index: number) => {
          return (
            <Box
              key={`warehouse-${index}`}
              sx={{
                padding: "20px",
                cursor: "pointer",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() => {
                updateContext({
                  activeType: "SHELF",
                  activeIndex: index,
                });
                push({
                  query: {
                    warehouse: query.warehouse,
                    zone: query.zone,
                    aisle: query.aisle,
                    rack: query.rack,
                    shelf: index,
                  },
                });
              }}
            >
               <Box
                sx={{
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="W7nHpMr.png"
                  alt="warehouse"
                  height={100}
                  width={180}
                />
              </Box>
              <Typography
                sx={{
                  color: "grey",
                  marginTop: '30px'
                }}
              >
                {item?.name}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Fade>
  );
};

export default Shelf;
