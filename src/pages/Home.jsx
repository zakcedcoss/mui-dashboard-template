import { Box, Grid, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import RevenueCard from "../components/RevenueCard"
import RevenueChart from "../components/RevenueChart"
import Widget from "../components/Widget"

const Home = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column" }} gap={3}>
            <Typography variant='h4' gutterBottom>Home</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Widget type="users" />
                <Widget type="orders" />
                <Widget type="earnings" />
                <Widget type="balance" />
            </Box>
            <Box gap={2} sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexWrap: "wrap" }}>
                <Box sx={{ flex: 1.5 }}>
                    <RevenueCard />
                </Box>
                <Box sx={{ flex: 2.5 }}>
                    <RevenueChart title="Last 6 months revenue" />
                </Box>
            </Box>
        </Box>
    )
}

export default Home