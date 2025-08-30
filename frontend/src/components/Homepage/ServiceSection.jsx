import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import PersonIcon from "@mui/icons-material/Person"

const ServicesSection = () => {
  const services = [
    {
      title: "Thi thử IELTS mô phỏng thực tế",
      features: [
        "Thi thử 2 kỹ năng mô phỏng phần mềm thi chính thức",
        "Đề thi chuẩn hóa tổng hợp từ các kỳ thi chính thức",
        "Giao diện thân thiện, thao tác dễ dàng",
      ],
    },
    {
      title: "Luyện đề & ôn tập theo kỹ năng",
      features: [
        
        "Có transcript, lời giải, mẫu bài nghe và đọc",
        "Không giới hạn lượt luyện, cập nhật thường xuyên",
      ],
    },
    {
      title: "Chấm điểm chính xác - nhanh chóng",
      features: [
        "Tự động chấm phần trắc nghiệm, xem điểm ngay",
        "Đề Nghe & Đọc được chấm ngay lập tức",
        "Có nhận xét, sửa bài",
      ],
    }
  ]

  return (
    <Box sx={{ width:"100%",display:"flex",flexDirection:"column", height:"70vh", justifyContent:"center"}}>
    
      {/* Header Section */}
      <Box sx={{ mb: 6,textAlign:"center" }}>
        
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 600,
                color: "#333",
                mb: 2,
              }}
            >
              Dịch vụ của chúng tôi
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#666",
                lineHeight: 1.6,
              }}
            >
              Nền tảng luyện thi IELTS chuyên biệt, hỗ trợ toàn diện luyện tập kỹ năng nghe và đọc giúp bạn cải thiện kỹ năng.
            </Typography>
          
      </Box>

      {/* Services Grid */}
      <Grid container spacing={2} sx={{ alignItems: "stretch" }}>
        {services.map((service, index) => (
          <Grid item size={{ xs: 6, md: 4 }} key={index}>
            <Card
              sx={{
                py:2,
                flex: 1,
                px:2,
                border: "2px solid #e3f2fd",
                height: "100%",       // 👈 ép card full chiều cao
                display: "flex", 
                borderRadius: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "#1976d2",
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 25px rgba(25, 118, 210, 0.15)",
                },
              }}
            >
              <CardContent sx={{ p: 3, display:"flex", flexDirection:"column", gap:1.5, justifyContent:"center" }}>
                <Typography
                  // variant="h4"
                  component="h2"
                  sx={{
                    fontSize:"1.6rem",
                    fontWeight: 600,
                    color: "#1976d2",
                    mb: 2,
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </Typography>

                <List sx={{ p: 0 }}>
                  {service.features.map((feature, featureIndex) => (
                    <ListItem key={featureIndex} sx={{ px: 0, py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleIcon
                          sx={{
                            color: "#4caf50",
                            fontSize: "1.4rem",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        primaryTypographyProps={{
                          fontSize: "1.2rem",
                          lineHeight: 1.4,
                          color: "#555",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    
    </Box>
  )
}

export default ServicesSection
