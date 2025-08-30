import styled from "styled-components";


import Box from "@mui/material/Box";
import { ChangePasswordForm } from "../components/ForgetPasswordPage/ChangePasswordForm";



export function ChangePasswordPage() {
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
           <ChangePasswordForm></ChangePasswordForm>
        </Box>
    
    )
}