/* eslint-disable */
import React from 'react'
import { render } from 'react-dom';
import './App.css';
import cat from './cat.jpg'


function App() {
  const like = [
    {
      sothich: 'Bong da',
      content: 'Choi rat gioi',
      cate: 'Tien dao',
        },
        {
      sothich: 'Dam me',
      content: 'Coder',
      cate: '',
        }
    ];
    const myName = 'Bii';
    const element = like.map((like,index) => {
      return(
           <div className="right__content__right">
             <p>{like.sothich}</p>
                {like.cate}
                {like.content}
           </div>
      );    
    });
  return (
    <div className="container">
      <div className="content">
        <div className="left">
                <div className="img">
                    <img src={cat} alt=""></img>
                </div>
                <div className="your_name">
                      <p>Hello</p>
                      <p>My Name is {myName}</p>
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
                 {element}
            </div>
       </div>
      </div>
    </div>
  );
}

export default App;
