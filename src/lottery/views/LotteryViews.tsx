import { Card, CardMedia, Grid } from "@mui/material"

export const LotteryViews = () => {
  return (
    <>
      <Grid 
         container
         direction='row'
         justifyContent='space-between'
         alignItems='center' sx={{mb:1}}
         spacing={2}

      >
         <Grid item>
         <Card >
            <CardMedia 
               component='img'
               image="https://media.cdn.eldestapeweb.com/eldestape/112022/1667957552497/provincia.webp?cw=351&ch=410&extw=png"
               alt="foto"
            />
         </Card> 
         </Grid>
        

      </Grid>
    </>
  )
}
