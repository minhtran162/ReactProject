import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Component/Person/Person';

class App extends Component{
  render(){
    return(
      <div className = "App">
        <h1>Ứng dụng React đầu tiên</h1>
        <p>Đến từ Trần Ngọc Minh</p>
        <Person hoten='Trần Ngọc Minh' tuoi='25'>
          Sở thích: Chơi game, ăn vặt, ngủ nướng!
        </Person>
      </div>
    );
  }
}
export default App;
