import styled from "styled-components";


import {Box,Grid,Card, Typography} from "@mui/material";
// import { ChangePasswordForm } from "../components/ForgetPasswordPage/ChangePasswordForm";
import { fetchGetTraffic,fetchGetLeads } from "../redux/thunk/authThunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import InsightsIcon from '@mui/icons-material/Insights';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { LoadingContainer } from "../components/LoadingContainter";
export function AdminDashboardPage() {
    const dispatch = useDispatch();
    const { loading,traffics,leads} = useSelector(s=>s.auth);

    const formatDate = (dateStr) => {
        const year = dateStr.slice(0, 4);
        const month = dateStr.slice(4, 6);
        const day = dateStr.slice(6, 8);
        return `${day}/${month}/${year}`;
    };
    useEffect(()=>{
        const fetchData = async ()=>{
            await dispatch(fetchGetTraffic());
            await dispatch(fetchGetLeads());

        }
        fetchData()
    },[])

    const dataTraffics = traffics?.map((d) => ({
        ...d,
        date: formatDate(d.date),
        }));

    
    const dataLeads = leads?.map((d) => ({
            ...d,
            date: formatDate(d.date),
            count: Number(d.count), // ép về số
    }));

    const sumTraffics = dataTraffics?.reduce((acc, d) => acc + (d.activeUsers || 0), 0);
    const sumLeads = dataLeads?.reduce((acc, d) => acc + (d.count || 0), 0);
    return (
        <Box sx={{width: "100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:2,py:7}}>

           
            <Box sx={{width: "100%", textAlign:"center"}}>
                <Typography variant="h5" fontWeight={"bold"}>Dashboard Quản Trị</Typography>
                <Typography  variant="h6">Tổng quan hiệu suất và phân tích dữ liệu</Typography>
                    
            </Box>
            
            {
            
                loading?
                <Box sx={{width:"100%",height:"60vh"}}>
                    <LoadingContainer></LoadingContainer>
                </Box>
                :
                <Box sx={{width: "100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:2}}>
                <Grid container spacing={2} sx={{width: "80%",display:"flex",alignItems:"center"}}>
                    <Grid size={4}>
                        <Card 
                            sx={{
                                py:3,
                                flex: 1,
                                px:3,
                                border: "2px solid #e3f2fd",
                                height: "100%", 
                                display: "flex", 
                                borderRadius: 3,
                                transition: "all 0.8s ease",
                                "&:hover": {
                                borderColor: "#1976d2",
                                transform: "translateY(-0.5px)",
                                boxShadow: "0 8px 25px rgba(25, 118, 210, 0.15)",
                                },
                            }}
                        >
                            <Box sx={{width:"100%"}}>
                                <Box sx={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <Typography variant="h6"  >Tổng Traffic Trong Tuần</Typography>
                                    <InsightsIcon color="success" ></InsightsIcon>
                                </Box>
                                <Typography variant="h5" fontWeight={"bold"} mt={2}>{sumTraffics}</Typography>
                            </Box>

                            
                            
                        </Card>
                    </Grid>

                    <Grid size={4}>
                        <Card 
                            sx={{
                                py:3,
                                flex: 1,
                                px:3,
                                border: "2px solid #e3f2fd",
                                height: "100%", 
                                display: "flex", 
                                borderRadius: 3,
                                transition: "all 0.8s ease",
                                "&:hover": {
                                borderColor: "#1976d2",
                                transform: "translateY(-0.5px)",
                                boxShadow: "0 8px 25px rgba(25, 118, 210, 0.15)",
                                },
                            }}
                        >
                            <Box sx={{width:"100%"}}>

                                <Box sx={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <Typography variant="h6" >Lead/Traffics Trong Tuần</Typography>
                                    <BubbleChartIcon color="primary"></BubbleChartIcon>
                                </Box>


                            
                                <Typography variant="h5" fontWeight={"bold"} mt={2}>{sumLeads}</Typography>
                            </Box>
                        </Card>
                    </Grid>


                    <Grid size={4}>
                        <Card 
                            sx={{
                                py:3,
                                flex: 1,
                                px:3,
                                border: "2px solid #e3f2fd",
                                height: "100%", 
                                display: "flex", 
                                borderRadius: 3,
                                transition: "all 0.8s ease",
                                "&:hover": {
                                borderColor: "#1976d2",
                                transform: "translateY(-1px)",
                                boxShadow: "0 8px 25px rgba(25, 118, 210, 0.15)",
                                },
                            }}
                        >
                            <Box sx={{width:"100%"}}>

                                <Box sx={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <Typography variant="h6" >Trung bình Lead/Traffics</Typography>
                                    <SignalCellularAltIcon color="secondary"></SignalCellularAltIcon >
                                </Box>


                                
                                <Typography variant="h5" fontWeight={"bold"} mt={2}>{Math.round(sumLeads/sumTraffics)} (Lead/Traffics)</Typography>
                            </Box>
                        </Card>
                    </Grid>

                </Grid>
                
                <Box sx={{
                    width: "80%",
                    
                    gap:4,
                    
                    backgroundAttachment: "fixed",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                

                    <Box width="50%" >

                        <Card 
                            sx={{
                                py:3,
                                flex: 1,
                                px:3,
                                border: "2px solid #e3f2fd",
                                height: "100%", 
                                display: "flex", 
                                flexDirection:"column",
                                borderRadius: 3,
                                textAlign:"center",
                                transition: "all 0.8s ease",
                                "&:hover": {
                                borderColor: "#1976d2",
                                transform: "translateY(-0.5px)",
                                boxShadow: "0 8px 25px rgba(25, 118, 210, 0.15)",
                                },
                            }}
                        >
                            <Typography fontWeight={"bold"}  variant="h6">🎯 Phân Tích Traffic Theo Tuần</Typography>
                            <ResponsiveContainer width="100%" height={400}>
                                <BarChart data={dataTraffics} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="activeUsers" name="Người dùng tích cực" fill="#8884d8" />
                                    <Bar dataKey="sessions" name="Session" fill="#82ca9d" />
                                    <Bar dataKey="pageViews"  name="Số lượt xem"  fill="#ffc658" />
                                </BarChart>
                            </ResponsiveContainer>
                        </Card>
                    </Box>

                    <Box width="50%" >
                        <Card 
                            sx={{
                                py:3,
                                flex: 1,
                                px:3,
                                border: "2px solid #e3f2fd",
                                height: "100%", 
                                display: "flex", 
                                flexDirection:"column",
                                textAlign:"center",
                                borderRadius: 3,
                                transition: "all 0.8s ease",
                                "&:hover": {
                                borderColor: "#1976d2",
                                transform: "translateY(-0.5px)",
                                boxShadow: "0 8px 25px rgba(25, 118, 210, 0.15)",
                                },
                            }}
                        >
                            <Typography fontWeight={"bold"}  variant="h6"> 📊 Phân Tích Traffic Theo Tuần</Typography>
                            <ResponsiveContainer width="100%" height={400}>
                                <BarChart data={dataLeads} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="count" name="Số Lead" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </Card>
                    </Box>


                </Box>
                </Box>
        
            }
            
        
        
        </Box>
    
    )
}