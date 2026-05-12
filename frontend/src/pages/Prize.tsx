import { Container } from "@mui/material";
import PrizeWheel from "../components/prize/PrizeWheel";
import type { Segment } from "../interfaces/Segment";

function Prize() {
    const segments: Segment[] = [
        { label: "50K VNĐ", value: 0 },
        { label: "Quà đặc biệt", value: 1 },
        { label: "100k VNĐ", value: 2 },
        { label: "Thêm 1 lần quay", value: 3 },
        { label: "150k VNĐ", value: 4 },
        { label: "Voucher giảm giá 50%", value: 5 },
    ];
    
    return (
        <Container className="min-h-screen h-screen max-h-max place-content-center overflow-hidden" maxWidth={"xl"}>
            <PrizeWheel segments={segments}/>
        </Container>
    );
}

export default Prize;