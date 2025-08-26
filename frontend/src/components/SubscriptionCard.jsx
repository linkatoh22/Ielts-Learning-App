"use client"
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material"
import { CheckCircle, Stars, AccessTime } from "@mui/icons-material"

const SubscriptionCard = ({type}) => {
  const handlePayment = () => {
    console.log("Thanh toán được kích hoạt")
    // Xử lý logic thanh toán ở đây
  }

  return (
    <Card
      sx={{
        width: "100%",
        margin: "auto",
        borderRadius: 3,
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        overflow: "hidden",
      }}
    >
      <CardContent sx={{ padding: 3 }}>
        {/* Header với icon VIP */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Stars sx={{ color: "#1976d2", mr: 1 }} />
          <Typography variant="h6" sx={{ fontWeight: 600, color: "#1976d2" }}>
            VIP 7 NGÀY
          </Typography>
        </Box>

        {/* Giá */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 3,
            color: "#2c3e50",
          }}
        >
          40.000 <span style={{ fontSize: "0.6em", fontWeight: 400 }}>VND</span>
        </Typography>

        {/* Danh sách tính năng */}
        <List sx={{ py: 0 }}>
          <ListItem sx={{ px: 0, py: 1 }}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <CheckCircle sx={{ color: "#4caf50", fontSize: 20 }} />
            </ListItemIcon>
            <ListItemText
              primary="Truy cập không giới hạn để thi"
              primaryTypographyProps={{
                fontSize: "0.9rem",
                color: "#555",
              }}
            />
          </ListItem>

          <ListItem sx={{ px: 0, py: 1 }}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <CheckCircle sx={{ color: "#4caf50", fontSize: 20 }} />
            </ListItemIcon>
            <ListItemText
              primary="Truy cập không giới hạn lượt thi"
              primaryTypographyProps={{
                fontSize: "0.9rem",
                color: "#555",
              }}
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 2 }} />

        {/* Thời gian */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <AccessTime sx={{ color: "#666", mr: 1, fontSize: 18 }} />
          <Typography variant="body2" sx={{ color: "#666" }}>
            Thời gian:
          </Typography>
          <Typography variant="body2" sx={{ ml: "auto", fontWeight: 600 }}>
            7 ngày
          </Typography>
        </Box>

        {/* Nút thanh toán */}
        <Button
          variant="contained"
          fullWidth
          onClick={handlePayment}
          sx={{
            backgroundColor: "#1976d2",
            color: "white",
            py: 1.5,
            borderRadius: 2,
            fontSize: "1rem",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
        >
          Thanh toán ngay
        </Button>
      </CardContent>
    </Card>
  )
}

export default SubscriptionCard
