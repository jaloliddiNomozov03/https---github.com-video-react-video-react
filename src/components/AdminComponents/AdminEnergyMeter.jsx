import React, { Component } from "react";
import Nav from "../Navbar";
import axios from "axios";

class PopUp extends Component {
    constructor(props) {
      super(props);
      this.state = {
          homes:{},
          value:'',
          home: null,
          energyconsuption:null,
      };
    }
    componentDidMount(){
        this.getHome();
    }
     
    handleChange=(event)=>{
        this.setState({
            energyconsuption: event.target.value,
        })
        console.log(event.target.value);
    }
    onChangeEnergy = e => {
        console.log(e.target.value);
        this.setState({ energyconsuption: e.target.value });
    }

    handleChangeHome=(event)=>{
        this.setState({
            home: event.target.value,
        })
        console.log(event.target.value);
    }
    getHome=()=>{
        var apiBaseUrl = "http://localhost:8080/api/home/getAll";
       
        
        var token = window.localStorage.getItem("token");
        console.log(token);

        var headers = {
            // 'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`
        }

        // var apiBaseUrl = "http://localhost:8080/api/energymeter/save

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
    render() {
        

      return (
        <div
          style={{
            position: "absolute",
            inset: "0",
            background: "rgba(0, 0, 0, .5)",
            display: "flex",
          }}
          className="justify-content-center align-items-center"
        >
          <div
            className="overflow-hidden bg-white w-100 m-auto"
            style={{ maxWidth: "35rem" }}
          >
            {/* <h2 className="text-white bg-primary text-center py-2">
            Payment
            </h2> */}
  
            <div className="container p-2 overflow-hidden">
              <div
                className="w-100 bg-white py-3 text-center rounded"
                style={{ boxShadow: "0 2px 5px 0 rgba(0, 0, 0, .5)" }}
              >
               Create Energy Meter:
              </div>
              <div className="row px-3 mt-2">
        
                <div className="col-7 pl-4">
                  <form className="py-2 border mt-2 rounded px-3 bg-white">
                  <select onChange={this.handleChange} class="form-select form-select-lg mb-" aria-label="Default select example">
                    <option value="Residential">For Residential</option>
                    <option value="Institutional">For Institutional</option>
                    </select>

                    <div className="col-10 pl-4">
                    <div className="form-group">
                      <label htmlFor="" className="form-label form-select-lg mb-">
                      
                      </label>
                      <hr />
                    
                      <select class="form-select " onChange={this.handleChangeHome} aria-label="select">
                        {
                            Array.isArray(this.state.homes)?this.state.homes.map((home,key)=>(
                                <option selected value={home.id}>{home.homeCode}, {home.homeNumber}</option>
                            )):''
                        }
                    
                    </select>
                     
                    </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Energy Consumption
                      </label>
                      <input onChange={this.onChangeEnergy}
                      
                        type="number"
                        // name="abc"
                        // id="abc"
                        // className="form-control"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <button className="btn btn-primary d-block py-1 w-100 mt-3" onClick={this.props.closePopup}>Done</button>
            </div>
  
         
          </div>
        </div>
      );
    }
  }
  

export default class AdminEnergyMeter extends Component {
 
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
      }
    
      closePopup() {
        this.setState({ isOpen: false });
      }
    

  render(){
      

    return (
         <div>
             <Nav />
             <br />
             <h3 className="text-center mb-1  mt-0 ">Energy Meter</h3>
            
             <div className="container  mb-0  mt-1">
 
                 <table className="table table-striped table-bordered table-hover ">
                     <thead className="thead-dark">

                     <button
                  type="Submit"
                  className="btn btn-warning"
                  onClick={() => this.setState({ isOpen: true })}> Add </button>
                         <tr>
                             <th>Meter ID</th>
                             <th>Home</th>
                             <th>EnergyConsuption</th>
                             <th>BuildingType</th>
                             <th>Action</th>
                             {/* <td> */}
                             {/* <button style={{ marginLeft: "10px" }} onClick={() => this.deletePayment(AdminEnergyMeter.id)} className="btn btn-danger">Delete </button> */}
                            {/* </td> */}
                           
                             
                            
                         </tr>
                     </thead>
                     <tbody>

              <td>
                {/* <button
                  type="Submit"
                  className="btn btn-warning"
                  onClick={() => this.setState({ isOpen: true })}> Add </button> */}
              </td>  
                     </tbody>
                 </table>
             </div>
            

            {this.state.isOpen && <PopUp closePopup={() => this.closePopup()} />}
            
         </div>
         
     )
 }
 
}

















//  <table className="table table-striped table-bordered table-hover ">
// <thead className="thead-dark">
//     <tr>
//         <th>Meter ID</th>
//         <th>Home</th>
//         <th>Amount Energy Consumption</th>
//          <th>Current Reading</th>
//            can we use gridview to divide equally as you said before for tables yes

        
//         <th>Month</th>
//         <th>Status</th>
//         <th>View Bill</th>
//         <th>Sum</th>
//         <th>Payment</th> 
//     </tr>
// </thead>
// <tbody>
//     <td></td>
//     <td></td>
//      <td></td>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td></td> 
//     {
//         // filterBills.map(
//         //     bill =>
//         //         <tr key={bill.id}>
//         //             <td>{bill.id}</td>
//         //             <td >{this.dateFormatHandler(bill.startDate)}</td>
//         //             <td>{this.dateFormatHandler(bill.endDate)}</td>
//         //             <td>{bill.month}</td>
//         //             <td>{bill.paymentStatus}</td>
//         //             <td><button className="btn btn-info" style={{ marginLeft: "12px" }} onClick={() => this.viewBill(bill.id)} title="View Bill"><RiBillLine size='1.3rem'>View Bill</RiBillLine></button></td>

//         //             {(bill.paymentStatus === "Unpaid") ? (
//         //                 <td><button className="btn btn-warning" style={{ marginLeft: "12px" }} onClick={() => this.payment(bill.id)} title="Pay Bill"><BsCreditCard size='1.3rem'>Pay</BsCreditCard></button></td>) : (
//         //                 <td>
//         //                     <button className="btn btn-success" disabled style={{ opacity: 0.65, cursor: 'not-allowed', marginLeft: "12px" }} title="Payment Successful!"><BsCreditCard size='1.3rem'>Pay</BsCreditCard></button></td>
//         //             )}                                        </tr>
//         // )
//     }
// </tbody>
// </table> 
