import React from 'react'
import myapp from './myapp.css'
import avatar from '../cat.jpg'
// import {Con1,Con2} from '../components/a'
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
        },
        {
        sothich: 'Dam me',
        content: 'Coder',
        cate: '',
        }
    ];
    
export default function App(props) {
    // const showromlist=(like)=>{
    //     return like.map(item=>(
    //         <div className="item-content">
    //             <h3>{item.sothich}</h3>
    //             <p>{item.content}</p>
    //         </div>
    //     ))
    const showromlist=like.map((item) => {
        return(
            <div className="item-container">
                <div className="item-content">
                <h3>{item.sothich}</h3>
                <p>{item.cate}</p>    
                <p>{item.content}</p>  
                </div>
            </div>
    );
    });
    return(
       
        <div className="layout">
            <div className="layout_left">
                <div className="avatar">
                   <img src={avatar}/>
                </div>
                <div className="intro_bassic">
                   <h2>Hello ....</h2>
                   <h3>My name is Bii</h3>
                </div>
            </div>
            <div className="layout_right">
                <div className="intro"> 
                   <h3>Introducing Yourself self</h3>
                   <h3>Introducing Yourself self</h3>
                </div>
                <div className="line">
                    <div className="line-center"></div>
                    <div className="circle left"></div>
                    <div className="circle right"></div>
                </div>
                <div className="textbox-container">
                    {/* <div className="item-container"> */}
                        {/* <div className="item-content">
                            <h3>Text title</h3>
                            <p></p>
                        </div> */}
                        {showromlist}
                    {/* </div> */}
                    {/* <div className="item-container">
                        <div className="item-content">
                            <h3>Text title</h3>
                            <p></p>
                        </div>
                    </div>
                    <div className="item-container">
                        <div className="item-content">
                            <h3>Text title</h3>
                            <p></p>
                            
                        </div>
                    </div>
                    <div className="item-container">
                        <div className="item-content">
                            <h3>Text title</h3>
                            <p></p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

