import { Route, Routes } from "react-router-dom"
import { PortafolioPage } from '../page/PortafolioPage.jsx'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="portafolio" element={<PortafolioPage/>} />
            <Route path="*" element={<PortafolioPage/>} />
        </Routes>
    </>
  )
}
