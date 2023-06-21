import React, { useContext } from "react";
import { warehouses } from "@/data";
import { Box, Fade, Typography } from "@mui/material";
import { AppContext } from "@/context";
import { useRouter } from "next/router";
import Image from "next/image";

const Rack = () => {
  const { activeType, activeIndex, updateContext } =
    useContext<any>(AppContext);
  const active = activeType === "AISLE";
  const { push, query }: any = useRouter();
  const racks: any =
    warehouses[parseInt(query["warehouse"])]?.zones[parseInt(query["zone"])]
      ?.aisles[parseInt(query["aisle"])]?.racks;
      // stcw34f
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
      {racks?.map((item: any, index: number) => {
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
                activeType: "RACK",
                activeIndex: index,
              });
              push({
                query: {
                  warehouse: query.warehouse,
                  zone: query.zone,
                  aisle: query.aisle,
                  rack: index,
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
                  src="stcw34f.png"
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

export default Rack;
