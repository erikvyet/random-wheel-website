import { Box, Container, List, ListItem, ListItemButton, Stack } from "@mui/material";
import { People, Redeem } from '@mui/icons-material';
import { Outlet } from "react-router-dom";

function AdminLayout() {
    const menuItems = [
        { label: "Participants", url: "/admin/participant", icon: <People className="size-5!"/> },
        { label: "Prizes", url: "/admin/prize", icon: <Redeem className="size-5!"/> }
    ];

    return (
        <Container className="min-h-screen h-screen max-h-max p-0!" maxWidth={false}>
            <Stack className="size-full" direction={"row"}>
                <Box className="flex-1/5 h-full grow-0 shrink-0 bg-zinc-900 border-r border-zinc-700">
                    <List className="size-full" disablePadding>
                        {menuItems.map((item, index) =>
                            <ListItem className="border-b border-zinc-700" disablePadding key={index}>
                                <ListItemButton className="text-zinc-100! gap-3 hover:bg-zinc-800!" href={item.url}>
                                    {item.icon}
                                    {item.label}
                                </ListItemButton>
                            </ListItem>
                        )}
                    </List>
                </Box>
                <Box className="flex-4/5 h-full grow-0 shrink-0">
                    <Outlet/>
                </Box>
            </Stack>
        </Container>
    );
}

export default AdminLayout;