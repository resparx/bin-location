import React, { useContext } from "react";
import { warehouses } from "@/data";
import { Box, Typography } from "@mui/material";
import { AppContext } from "@/context";
import { useRouter } from "next/router";
import Fade from "@mui/material/Fade";
import Image from "next/image";

const WareHouses = () => {
  const { updateContext, activeType, activeIndex } =
    useContext<any>(AppContext);
  const active = activeType === null;
  const { push, query } = useRouter();
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
          gap: "20px",
        }}
      >
        {warehouses.map((item, index: number) => {
          return (
            <Box
              onClick={() => {
                updateContext({
                  activeType: "WAREHOUSE",
                  activeIndex: index,
                });
                push({
                  query: {
                    warehouse: index,
                  },
                });
              }}
              key={`warehouse-${index}`}
              sx={{
                padding: "20px",
                cursor: "pointer",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Box
                sx={{
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="bB9mrUo.png"
                  alt="warehouse"
                  height={240}
                  width={480}
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

export default WareHouses;
