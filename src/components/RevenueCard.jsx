import { Box, Card, CircularProgress, Typography } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CurrencyRupee, KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const RevenueCard = () => {
    return (
        <Card variant="elevation" sx={{ padding: "1rem", }}>
            <Box flexDirection="column" display="flex" gap={3}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography color="black">Total Revenue</Typography>
                    <MoreVertIcon />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                    <CircularProgress variant="determinate" size="7rem" value={70} />
                    <Typography color="black">Total sales made today</Typography>
                    <Typography color="black" sx={{ display: "flex", alignItems: "center" }}><CurrencyRupee /> 500</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
                    <Typography color="black" align="center">Previous transactions is processing. Last payments may not be included</Typography>
                    <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Box>
                            <Typography color="black" align="center">Target</Typography>
                            <Typography color="red" align="center" sx={{ display: "flex", alignItems: "center" }}><KeyboardArrowDown /> 500</Typography>
                        </Box>
                        <Box>
                            <Typography color="black" align="center">Last Week</Typography>
                            <Typography color="green" align="center" sx={{ display: "flex", alignItems: "center" }}><KeyboardArrowUp /> 300</Typography>
                        </Box>
                        <Box>
                            <Typography color="black" align="center">Last Month</Typography>
                            <Typography color="red" align="center" sx={{ display: "flex", alignItems: "center" }}><KeyboardArrowDown /> 400</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Card>
    )
}

export default RevenueCard