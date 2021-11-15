import React, { Component } from 'react'
import Card from './CardUI';
import img1 from '../assets/hiking.jpg'
import img2 from '../assets/padling.jpg'
import img3 from '../assets/rafting.jpg'
import img4 from '../assets/rockClimbing.jpg'
import img5 from '../assets/wildlife.jpg'
import img6 from '../assets/snow.jpg'
import img7 from '../assets/Arts.jpg'
import img8 from '../assets/swim.jpg'
import img9 from '../assets/astronomy.jpg'



class Cards extends Component {
    render(){
     return (
         <div className="container p-5">
            <div className ="row">
                <div className= "col-md-4">
                   <div className="container p-5">
                    <Card imgsrc={img1} title="Hiking"/>
                   </div>
                 </div> 
                <div className= "col-md-4">
                    <div className="container p-5">
                    <Card imgsrc={img2} title="Padling"/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="container p-5">
                    <Card imgsrc={img3} title="Rafting"/>  
                    </div> 
                </div>
                <div className= "col-md-4">
                    <div className="container p-5">
                    <Card imgsrc={img4}title="Rock Climbing"/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="container p-5">
                    <Card imgsrc={img5}title="WildLife Viewing"/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="container p-5">
                    <Card imgsrc={img6}title="Snow Shoeing"/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="container p-5">
                    <Card imgsrc={img8}title="Swimming"/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="container p-5">
                    <Card imgsrc={img9}title="Astrology"/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="container p-5">
                    <Card imgsrc={img7}title="Arts and Culture"/>
                    </div>
                </div>
            </div>
        </div>
   

     );
     
    }
}

export default Cards;
