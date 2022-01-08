import React, { Component } from "react";
import Nav from "../Navbar";

export default class Billing extends Component {
 

  render(){

    return (
         <div>
             <Nav />
             <br />
             <h3 className="text-center mb-1  mt-0 ">Energy Meter</h3>
            
             <div className="container  mb-0  mt-1">
 
                 <table className="table table-striped table-bordered table-hover ">
                     <thead className="thead-dark">
                         <tr>
                             <th>Meter ID</th>
                             <th>Home</th>
                             <th>EnergyConsuption</th>
                             <th>BuildingType</th>
                             {/* <th>HomeNumber</th>
                             <th>Street</th>
                             <th>District</th> */}
                         </tr>
                     </thead>
                     <tbody>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                         {/* <td></td>
                         <td></td>
                         <td></td> */}
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
