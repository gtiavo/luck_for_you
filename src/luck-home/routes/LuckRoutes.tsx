import { Route, Routes } from "react-router-dom"
import { LuckPage } from "../pages/LuckPage"

export const LuckRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<LuckPage />} />

    </Routes>
  )
}
