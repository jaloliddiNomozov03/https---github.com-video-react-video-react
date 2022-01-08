// import dateFormat from 'dateformat';
import React, { Component } from "react";
// import { BsCreditCard } from "react-icons/bs";
// import { RiBillLine } from "react-icons/ri";
// import { Link } from 'react-router-dom';
import { Input } from "reactstrap";
import Nav from "../Navbar";
import CloseButton from 'react-bootstrap/CloseButton'

class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
    
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
          <h2 className="text-white bg-primary text-center py-2">
          Payment
          </h2>
          <CloseButton />

          <div className="container p-2 overflow-hidden">
            <div
              className="w-100 bg-white py-3 text-center rounded"
              style={{ boxShadow: "0 2px 5px 0 rgba(0, 0, 0, .5)" }}
            >
             Total Bill:
            </div>
            <div className="row px-3 mt-2">
              <div className="col-5 py-2 border mt-2 rounded px-3">
                <div className="py-1 px-4 d-block w-100 bg-success rounded text-white">
                  Cash Payment
                </div>
                <div className="py-1 px-4 d-block w-100 bg-success rounded text-white mt-1">
                Payment by Card
                </div>
               
              </div>
              <div className="col-7 pl-2">
                <form className="py-2 border mt-2 rounded px-3 bg-white">
                  <div className="form-group">
                    <label htmlFor="" className="form-input-label">
                      Cash
                    </label>
                    <input
                      type="number"
                      name="abc"
                      id="abc"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="" className="form-label">
                    Card
                    </label>
                    <input
                      type="number"
                      name="abc"
                      id="abc"
                      className="form-control" 
                      
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="" className="form-label">
                      Input 3
                    </label>
                    <input
                      type="number"
                      name="abc"
                      id="abc"
                      className="form-control"
                    />
                  </div>
                </form>
              </div>
            </div>
            <button className="btn btn-primary d-block py-1 w-100 mt-3" onClick={this.props.closePopup}>Send</button>
          </div>

       
        </div>
      </div>
    );
  }
}

export default class Billing extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  closePopup() {
    this.setState({ isOpen: false });
  }



render() {
    return (
      <div>
        <Nav />
        <br />
        <h3 className="text-center mb-0  mt-0 ">YOUR BILLS</h3>
        <div className="container  mb-0  mt-0">
          <table className="table table-striped table-bordered table-hover ">
            <thead className="thead-dark">
              <tr>
                <th>Bill ID</th>
                <th>Previous Reading</th>
                <th>Current Reading</th>
                <th>Month</th>
                <th>Status</th>
                <th>Amount Energy Consumption</th>
                <th>View Bill</th>
                <th>Sum</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Input
                  onChange={this.onChangeSearchMonth}
                  placeholder="&#xF002;  Enter Month"
                />{" "}
              </td>
              <td>
                <Input
                  onChange={this.onChangeSearchStatus}
                  placeholder="&#xF002; Paid/Unpaid "
                />{" "}
              </td>
              <td></td>
              <td></td>
              <td></td>

              <td>
                <button
                  type="Submit"
                  className="btn btn-warning"
                  onClick={() => this.setState({ isOpen: true })}
                >
                  Pay
                </button>
              </td>
              {
                // filterBills.map(
                //     bill =>
                //         <tr key={bill.id}>
                //             <td>{bill.id}</td>
                //             <td >{this.dateFormatHandler(bill.startDate)}</td>
                //             <td>{this.dateFormatHandler(bill.endDate)}</td>
                //             <td>{bill.month}</td>
                //             <td>{bill.paymentStatus}</td>
                //             <td><button className="btn btn-info" style={{ marginLeft: "12px" }} onClick={() => this.viewBill(bill.id)} title="View Bill"><RiBillLine size='1.3rem'>View Bill</RiBillLine></button></td>
                //             {(bill.paymentStatus === "Unpaid") ? (
                //                 <td><button className="btn btn-warning" style={{ marginLeft: "12px" }} onClick={() => this.payment(bill.id)} title="Pay Bill"><BsCreditCard size='1.3rem'>Pay</BsCreditCard></button></td>) : (
                //                 <td>
                //                     <button className="btn btn-success" disabled style={{ opacity: 0.65, cursor: 'not-allowed', marginLeft: "12px" }} title="Payment Successful!"><BsCreditCard size='1.3rem'>Pay</BsCreditCard></button></td>
                //             )}                                        </tr>
                // )
              }
            </tbody>
          </table>
        </div>

        {this.state.isOpen && <PopUp closePopup={() => this.closePopup()} />}
      </div>
    );
  }
}