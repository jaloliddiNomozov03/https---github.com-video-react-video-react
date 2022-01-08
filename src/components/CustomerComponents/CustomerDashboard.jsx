import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import CustomerServices from '../../services/CustomerServices';
import Navbar from '../sidebar/Navbar';
import '../../css/dashboard.css';
import '../../css/Cards.css';
import img from '../../images/home1.jpg';
import img2 from '../../images/home2.jpg';
import img3 from '../../images/home3.jpg';
import img4 from '../../images/home4.jpg';
import img5 from '../../images/home5.jpg';
import img6 from '../../images/home6.jpg';
import CardItem from './CardItem';
import {Col, Row} from "react-bootstrap";

export default class CustomerDashboard extends Component {

   

    handleClick() {
        console.log("clicked")
    }

    render() {
        // const[array] = this.state;
        return (
            <div>
                <Navbar/>
                <br/>
                {/* <h2 className="text-center">YOUR DASHBOARD</h2> */}
                <div className="container">
                </div>
            


                <div className='cards'>
                    <h1> Home's Energy Board</h1>
                    <div className='cards__container'>
                        <div className='cards__wrapper'>
                            <Row>
                                <Col className="p-3" md={6}>
                                    <CardItem
                                        src={img}
                                        text='Save Electrcity Save Earth'
                                        label='Home1'
                                        //path='/billing'
                                        onClickButton={this.handleClick}
                                    />
                                </Col>
                                <Col className="p-3" md={6}>
                                    <CardItem
                                        src={img2}
                                        text='Save Energy Save Life'
                                        label='Home2'
                                        path='/listBills'
                                    />
                                </Col>
                                <Col className="p-3" md={6}>
                                    <CardItem
                                        src={img3}
                                        text='Save Energy for Brigther Future'
                                        label='Home3'
                                        path='/listBills'
                                    />
                                </Col>
                                <Col className="p-3" md={6}>
                                    <CardItem
                                        src={img4}
                                        text='Sustainable & Renewable Energy'
                                        label='Home4'
                                        path='/listBills'
                                    />
                                </Col>
                                <Col className="p-3" md={6}>
                                    <CardItem
                                        src={img5}
                                        text='Solar Energy'
                                        label='Home5'
                                        path='/sign-up'
                                    />
                                </Col>
                                <Col className="p-3" md={6}>
                                    <CardItem
                                        src={img6}
                                        text='Solar Energy'
                                        label='Home6'
                                        path='/sign-up'
                                    />
                                </Col>



                            </Row>
                        </div>
                    </div>
                </div>


            </div>


        )


    }
}


