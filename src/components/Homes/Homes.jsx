import React, { Component } from 'react';
import Nav from '../Navbar';
import axios from 'axios';
import HomeService from '../../services/HomeService';




export default class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            address: '',
            costumer: null,
            homes:[],
        }
    }
    
   
    componentDidUpdate(){

    }
    componentDidMount() {
        this.getHomes();

    }

    getHomes(){
        var apiBaseUrl = "http://localhost:8080/api/home/getHomesWithCurrentUser";
        var token = window.localStorage.getItem("token");
        console.log(token);

        var headers = {
            // 'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`
        }



        axios.get(apiBaseUrl, { headers: headers }).then((response) =>{
            if(response&&response.data){
                console.log(response);
                this.setState({
                    homes: response.data
                });
            }
        }).catch(function (error) {
            //console.log(error);
            alert(error)

        });
    }

    handleClick() {
        console.log("clicked")
    }

    


render(){

   return (
        <div>
            <Nav />
            <br />
            <h3 className="text-center mb-0  mt-0 ">Home</h3>
           
            <div className="container  mb-0  mt-1">

                <table className="table table-striped table-bordered table-hover ">
                    <thead className="thead-dark">
                        <tr>
                            <th>№</th>
                            <th>CardNumber</th>
                            <th>HomeCode</th>
                            <th>HomeNumber</th>
                            <th>Street</th>
                            <th>District</th>
                            <th>BuildingType</th>
                        </tr>
                    </thead>
                    <tbody>
                       

{
                        Array.isArray(this.state.homes)?this.state.homes.map((home, key)=>(
                            <tr key={key}>
                                <td>{key+1}</td>
                                <td>{home.cardNumber}</td>
                                <td>{home.homeCode}</td>
                                <td>{home.homeNumber}</td>
                                <td>{home.street}</td>
                                <td>{home.district}</td>
                                <td>{home.buildingType}</td>
                            </tr>
                        )):''
                            }
                    </tbody>
                </table>
            </div>
        </div>
    )
}


    
}






   

