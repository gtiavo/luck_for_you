import { Route, Routes } from "react-router-dom"
import { LuckRoutes } from "../luck-home/routes/LuckRoutes"

export const Navigation = () => {
  return (
    <Routes>

      <Route path="/*" element={<LuckRoutes />}/>

    </Routes>
  )
}
