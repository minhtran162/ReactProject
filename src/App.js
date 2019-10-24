import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Person from './Component/Person/Person';
import SanPham from './Component/SanPham/SanPham';

class App extends Component{
  render(){
    return(
      <div className = "App">
        {/* <h1>Ứng dụng React đầu tiên</h1>
        <p>Đến từ Trần Ngọc Minh</p>
        <Person hoten='Trần Ngọc Minh' tuoi='25'>
          Sở thích: Chơi game, ăn vặt, ngủ nướng!
        </Person> */}
        <SanPham masanpham='001' tensanpham='Nước đóng chai' giasanpham='5000đ'>
          Nước khoáng thiên nhiên đóng chai!
        </SanPham>
        <SanPham masanpham='002' tensanpham='Dao Cạo Râu' giasanpham='15000đ'>
          Dao cạo râu thông minh.
        </SanPham>
        <SanPham masanpham='003' tensanpham='Sữa tươi' giasanpham='8000đ'>
         Sữa tươi có đường
        </SanPham>
        <SanPham masanpham='004' tensanpham='Nước ngọt có gas' giasanpham='10000đ'>
          Nước ngọt có gas vị trà sữa!
        </SanPham>
        <SanPham masanpham='005' tensanpham='USB 16GB' giasanpham='250000đ'>
          USB 3.0 16GB tốc độ cao!
        </SanPham>
      </div>
    );
  }
}
export default App;
