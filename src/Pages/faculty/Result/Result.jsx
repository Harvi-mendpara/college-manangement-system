import React from "react";
import WithLayout from "../../../components/common/comfaculty/Sidebar/SideBar";


const Result = () => {
  return(
  <>
    <div className="container-xl px-4 mt-5 " style={{ marginLeft: "268px", textAlign: " start" }}>
        <div className="row">
          <div className="col-xl-14">
            <div className="card mb-3">
              <div className="card-header stunotice" style={{ backgroundColor:"#263159", color: "#f8f9fa", textAlign: "center" }}>Student result </div>
              <div className="card-body d-flex"  >

                <div className="col-md-3">
                  <label className="small mb-1">course :</label>
                  <select class="form-select" aria-label="Default select example">
                    <option value="" disabled selected>Select your course</option>
                    <option value="1">BBA</option>
                    <option value="2">BCA</option>
                    <option value="3">BCOM</option>
                  </select>
                </div>

                <div className="col-md-3">
                  <label className="small mb-1" >Semester :</label>
                  <select class="form-select" aria-label="Default select example" >
                    <option value="" disabled selected>Select your semester</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="1">4</option>
                    <option value="2">5</option>
                    <option value="3">6</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="small mb-1">Division :</label>
                  <select class="form-select" aria-label="Default select example">
                    <option value="" disabled selected>Select your Division</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>

                <div className="searchbtn" style={{ margin :"18px",textAlign: "start"  }}>
                  <a href="" class="btn btn-danger" style={{width:"138px"}} >
                    Search
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="container-xl px-6 mt-5" style={{ marginLeft: "268px", textAlign: " start" }}>
        <div className="row">
          <div className="col-xl-15">
            <div className="card mb-4">
              <div className="card-header stunotice" style={{backgroundColor:"#263159" ,color: "#f8f9fa", textAlign: "center" }}>Student result </div>
              <div className="card-body">
              <div>
       
        
            <div className="container mt-3">
                <div className="row table-responsive mt-4">
                    <table className="table">
                        <thead>
                            <tr className='tbltr'>
                                <th scope="col">Roll No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Course</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Passing marks</th>
                                <th scope="col">Total marks</th>


                            </tr>
                        </thead>
                        <tbody>
                            {/* {data.map((info) => (
                                <tr key={info._id} className='tbltr'>
                                    <td>{info.branchparcelstatus == "Delivered" ? <span style={{ color: 'green', fontWeight: 'bold' }}>{info.referancenumber}</span> : info.referancenumber}</td>
                                    <td>
                                        <button className='staffupdatebtn' onClick={(e) => editstus(e, info._id, info.branchparcelstatus)} >{info.branchparcelstatus == "Received" ? "Delivered" : "UnDelivered"}</button>
                                    </td>
                                    <td>{info.receivername}</td>
                                    <td>{info.receiveraddress}</td>
                                    <td>{info.receivercontactnumber}</td>
                                    <td>{info.receivedate}</td>

                                </tr>
                            ))} */}

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
    )
};

export default WithLayout(Result);
