import React from 'react'
import { render } from 'react-dom';
import './App.css';
import cat from './cat.jpg'
let element = {
  content:{
    title:'Đam mê',
    body :'Coder, Toán học'
  },
  content1:{
    title:'Sở thích',
    body:'Chơi thể thao,đọc truyện'
  },
  content2:{
    title:'Skill',
    body:'Đọc tài liệu tốt, nhạy cảm'
  },
  content3:{
    title:'Tính cách',
    body:'Hòa đồng, hoạt bát'
  }

};
function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="left">
                <div className="img">
                    <img src={cat} alt=""></img>
                </div>
                <div className="your_name">
                      <p>Hello</p>
                      <p>My Name is Bii</p>
                </div>
        </div>
        <div className="right">
            <div className="right__title" >
               <h2>Introducing Yourself Self</h2>
               <h2>Introduction with Text Boxes</h2>
            </div>
            <div className='intro-myself__content__line'>
              <div className='circle left' />
              <div className='line' />
              <div className='circle right' />
            </div>
            <div className="right__content">
              <div className="right__content__right">
                  <p>{element.content.title}</p>
                   {element.content.body}
              </div>
              <div className="right__content__left">
                  <p>{element.content1.title}</p>
                   {element.content1.body}
              </div>
              
            </div>
            <div className="right__content">
                <div className="right__content__right">
                    <p>{element.content2.title}</p>
                     {element.content2.body}
                </div>
                <div className="right__content__left">
                    <p>{element.content3.title}</p>
                     {element.content3.body}
                </div>
            </div>
       </div>
      </div>
    </div>
  );
}

export default App;
