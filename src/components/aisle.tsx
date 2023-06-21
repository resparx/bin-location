import React, { useContext } from "react";
import { warehouses } from "@/data";
import { Box, Fade, Typography } from "@mui/material";
import { AppContext } from "@/context";
import { useRouter } from "next/router";
import Image from "next/image";

const Aisle = () => {
  const { activeType, activeIndex, updateContext } =
    useContext<any>(AppContext);
  const active = activeType === "ZONE";
  const { push, query }: any = useRouter();
  const aisles: any =
    warehouses[parseInt(query["warehouse"])]?.zones[parseInt(query["zone"])]
      ?.aisles;

      // MGasOeZ
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
      {aisles?.map((item: any, index: number) => {
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
            onClick={()=>{
                updateContext({
                    activeType: 'AISLE',
                    activeIndex: index
                  });
                push({
                    query: {
                        warehouse: query.warehouse,
                        zone: query.zone,
                        aisle: index
                    }
                  })
            }}
          >
            <Box
                sx={{
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="MGasOeZ.png"
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

export default Aisle;
