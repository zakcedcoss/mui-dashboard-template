import { Box, Card, CardContent, Link, Typography } from "@mui/material"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { PeopleAlt } from "@mui/icons-material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Widget = ({ type }) => {

    const data = {
        users: {
            title: "USERS",
            percent: 10,
            n: 100,
            isMoney: false,
            link: "#",
            icon: <PeopleAlt />
        },
        orders: {
            title: "ORDERS",
            percent: 20,
            n: 100,
            isMoney: false,
            link: "#",
            icon: <ShoppingCartIcon />
        },
        earnings: {
            title: "EARNINGS",
            percent: 10,
            n: 100,
            isMoney: true,
            link: "#",
            icon: <CurrencyRupeeIcon />
        },
        balance: {
            title: "BALANCE",
            percent: 10,
            n: 100,
            isMoney: true,
            link: "#",
            icon: <AccountBalanceWalletIcon />
        }
    }

    return (
        <Card variant="outlined" sx={{ width: "30%", maxWidth: "250px" }}>
            <CardContent >
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography color="black">{data[type].title}</Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <KeyboardArrowUpIcon color="success" />
                        <Typography sx={{ color: "green", textAlign: "center" }}>{data["users"].percent} %</Typography>
                    </Box>
                </Box>
            </CardContent>
            <CardContent>
                <Typography variant="h5">{data[type].isMoney && "$"} {data[type].n}</Typography>
            </CardContent>
            <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Link href={data[type].link}>View all</Link>
                    {data[type].icon}
                </Box>
            </CardContent>
        </Card>
    )
}

export default Widget