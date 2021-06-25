import React from 'react'
import {ScrollView,View,Text,Image,StyleSheet} from 'react-native'; 
const styles = StyleSheet.create({
    A:{
        fontSize:21,
        color:"green",
    },
    B:{
        marginBottom:100
    }
  });
const Noidungcuoi = () => {
    return (
        <View>
        <Text style={styles.A}>Bình Dương</Text>

        <Text>Ca 13349-13359, 13361-13368, 13372, 13374 gồm 18 ca liên quan ổ dịch Công ty Housewares - TP. Thuận An, 2 ca liên quan ổ dịch chợ đầu mối Hóc Môn - TP. Hồ Chí Minh, một ca đang điều tra dịch tễ. Kết quả xét nghiệm ngày 20/6 dương tính, họ đang cách ly, điều trị tại Bệnh viện Đa khoa tỉnh Bình Dương.</Text>

        <Text style={styles.A}>Đà Nẵng</Text>
        <Text>Ca 13349-13359, 13361-13368, 13372, 13374 gồm 18 ca liên quan ổ dịch Công ty Housewares - TP. Thuận An, 2 ca liên quan ổ dịch chợ đầu mối Hóc Môn - TP. Hồ Chí Minh, một ca đang điều tra dịch tễ. Kết quả xét nghiệm ngày 20/6 dương tính, họ đang cách ly, điều trị tại Bệnh viện Đa khoa tỉnh Bình Dương.</Text>
         

        <Text style={styles.A}>Hưng Yên</Text>
        <Text>Ca 13376-13377 đang điều tra dịch tễ. Kết quả xét nghiệm ngày 21/6 dương tính, đang cách ly, điều trị tại Bệnh viện Bệnh Nhiệt đới Trung ương cơ sở 2.</Text>
        

        <Text style={styles.A}>Bắc Giang</Text>
        <Text>Ca 13378-13407 ghi nhận tại tỉnh Bắc Giang trong khu cách ly và khu vực đã được phong tỏa, liên quan đến công nhân làm tại các khu công nghiệp. Kết quả xét nghiệm ngày 20-21/6 dương tính.</Text>
        

        <Text style={styles.A}> Bắc Ninh</Text>
        <Text> Ca 13408-13413 gồm một ca là F1 của 8757 đã được cách ly, 3 ca liên quan đến ổ dịch Khu công nghiệp Quế Võ, 2 ca liên quan đến ổ dịch Khu công nghiệp Khắc Niệm. Kết quả xét nghiệm ngày 20/6 dương tính, đang cách ly, điều trị tại Bệnh viện Đa khoa tỉnh Bắc Ninh.</Text>
       

        <Text style={styles.A}>TP HCM</Text>
        <Text style={styles.B}>Ca 13414-13483 gồm 49 ca là các trường hợp F1 đã được cách ly; 14 ca liên quan đến Công ty Trung Sơn, Khu công nghiệp Tân Tạo, quận Bình Tân; 7 ca liên quan đến nhóm truyền giáo Phục hưng.</Text>
        
        </View>
    );
};
export default Noidungcuoi;