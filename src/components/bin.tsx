import React, { useContext } from "react";
import { warehouses } from "@/data";
import { Box, Fade, Typography } from "@mui/material";
import { AppContext } from "@/context";
import { useRouter } from "next/router";
import Image from "next/image";



const Bin = () => {
  const { activeType, activeIndex, updateContext } =
    useContext<any>(AppContext);
  const active = activeType === "SHELF";
  const { push, query }: any = useRouter();
  const bins: any =
    warehouses[parseInt(query["warehouse"])]?.zones[parseInt(query["zone"])]
      ?.aisles[parseInt(query["aisle"])]?.racks[parseInt(query["rack"])]?.shelfs[parseInt(query["shelf"])]?.bins;

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
      {bins?.map((item: any, index: number) => {
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
            // onClick={()=>{
            //     updateContext({
            //         activeType: 'BIN',
            //         activeIndex: index
            //       });
            //       push({
            //         query: {
            //             warehouse: query.warehouse,
            //             zone: query.zone,
            //             aisle: query.aisle,
            //             rack: query.rack,
            //             shelf: query.shelf,
            //             bin: index
            //         }
            //       })
            // }}
          >
            <Box
                sx={{
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="rp34uLF.png"
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
    </Fade>)
}

export default Bin

