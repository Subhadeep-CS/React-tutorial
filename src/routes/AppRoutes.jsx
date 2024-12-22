import { Routes,Route } from "react-router-dom"
import Home from "../Pages/Home"
import Layout from "../Layout"
import Longer from "../Pages/Longer"
const AppRoutes=()=>{
    return(
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/longer" element={<Longer/>}></Route>
            </Routes>
        </Layout>
    )
}

export default AppRoutes