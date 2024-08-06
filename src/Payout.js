import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
export default function Payout() {
    return(
        <>
        <Menu />
        <main id="main" class="main">
    <div class="d-flex justify-content-between align-items-center mb-2">
        <h3> <i class="fa-solid fa-sim-card"></i> Payout</h3>
      <Link title="Add Lectures" to="/AddPayout">  <button class="btn btn-primary mt-lg-5">
            <i class="fas fa-plus m"></i> Payout
        </button>
      </Link>
    </div>
    <div class="table-responsive mb-4">
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Teacher Id</th>
                    <th>Order Date</th>
                    <th>Remarks</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>07-01-2024</td>
                    <td>Pending Payment</td>
                    <td>07-01-2024</td>
                    <td>07-07-2024</td>
                     <td> 
                      <Link title="Delete payout" to="/DeletePayment"><i class="fa fa-trash fa-2x"></i></Link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</main>
        </>
    )
}    