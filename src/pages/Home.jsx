import { Box, Typography } from "@mui/material"
import Widget from "../components/Widget"

const Home = () => {
    return (
        <>
            <Typography variant='h4' gutterBottom>Home</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Widget type="users" />
                <Widget type="orders" />
                <Widget type="earnings" />
                <Widget type="balance" />
            </Box>
        </>
    )
}

export default Home