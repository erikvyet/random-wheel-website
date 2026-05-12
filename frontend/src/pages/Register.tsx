import { Box, Button, Checkbox, Stack, TextField, Typography } from "@mui/material";
import { useState, type ChangeEvent, type MouseEvent } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [checked, setChecked] = useState(false);
    
    const resetInputs = () => { setName(""); setPhone(""); setEmail(""); setChecked(false); }
    const handleNameInputChange = (_event: ChangeEvent<HTMLInputElement>) => setName(_event.target.value);
    const handlePhoneInputChange = (_event: ChangeEvent<HTMLInputElement>) => setPhone(_event.target.value);
    const handleEmailInputChange = (_event: ChangeEvent<HTMLInputElement>) => setEmail(_event.target.value);
    const handleChecked = (_event: ChangeEvent<HTMLInputElement>, checked: boolean) => setChecked(checked);
    const handleRegisterAction = (_event: MouseEvent) => {
        if (!checked) {
            alert("Vui lòng đồng ý với điều khoản của chương trình");
            _event.preventDefault();
            return;
        }
        const encoder = new TextEncoder();
        if (localStorage.getItem(encoder.encode(phone).toString()) !== null) {
            alert("Thông tin đã tồn tại");
            _event.preventDefault();
        }
        else {
            localStorage.setItem(
                encoder.encode(phone).toString(), 
                JSON.stringify({ 
                    id: localStorage.length + 1, 
                    name, 
                    phone, 
                    email, 
                    date: (new Date()).toUTCString() 
                })
            );
        }
        resetInputs();
    };

    return (
        <Stack className="size-full justify-center items-center gap-10">
            <Box className="w-4/5 lg:w-1/4 flex-1/5 grow-0 shrink-0 bg-[url('/src/assets/images/title.png')] bg-center bg-no-repeat bg-contain"/>
            <Stack className="w-4/5 md:w-1/2 lg:w-1/4 gap-3.5">
                <TextField className="bg-white!" variant="outlined" size="small" placeholder="Họ và tên" onChange={handleNameInputChange}/>
                <TextField className="bg-white!" type="tel" variant="outlined" size="small" placeholder="Số điện thoại" onChange={handlePhoneInputChange}/>
                <TextField className="bg-white!" type="email" variant="outlined" size="small" placeholder="Email" onChange={handleEmailInputChange}/>
                <Stack className="justify-center items-center gap-1" direction={"row"}>
                    <Checkbox className="p-0!" disableRipple onChange={handleChecked}/>
                    <Typography className="font-semibold! text-sm! xl:text-lg! 2xl:text-3xl! h-full content-center">
                        Tôi đồng ý với <Link className="underline text-blue-800" to={"/"}>điều khoản sử dụng</Link>
                    </Typography>
                </Stack>
            </Stack>
            <Box className="w-4/5 md:w-1/2 lg:w-1/4 p-0.75! bg-green-300 rounded-full shadow-md shadow-zinc-500">
                <Button href="/questionaire" className="rounded-full! py-1.5! md:py-2! xl:py-2.5! 2xl:py-5! bg-linear-to-t! from-green-700! to-green-500!" variant="contained" fullWidth disableRipple onClick={handleRegisterAction}>
                    <Typography className="font-semibold! text-xl! md:text-2xl! xl:text-3xl! 2xl:text-5xl!">ĐĂNG KÝ</Typography>
                </Button>
            </Box>
        </Stack>
    );
}

export default Register;