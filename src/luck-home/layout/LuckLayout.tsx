import { Box } from "@mui/material"
import { Footer, SideBar } from "../components"

export const LuckLayout = ({children}:any) => {
  return (
   <>
      <Box sx={{ flexGrow: 1 }}>
         <SideBar />
      <Box 
         component='main'
         sx={{flexGrow: 1, p:3}}
      >
         {children}
      </Box>
      <Footer />
      </Box>
   </>
  )
}
