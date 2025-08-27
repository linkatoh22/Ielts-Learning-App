import styled from "styled-components";


import Box from "@mui/material/Box";
import { ForgetPasswordForm } from "../components/ForgetPasswordPage/ForgetPasswordForm";



export function ForgetPasswordPage() {
    return (

        <Box sx={{
            width: "100%",
            height:"75vh",
            py:5,
            backgroundColor:"var(--grey-100)",
            backgroundAttachment: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
           <ForgetPasswordForm></ForgetPasswordForm>
        </Box>
    
    )
}