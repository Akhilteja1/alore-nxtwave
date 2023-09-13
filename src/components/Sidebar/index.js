 
import React,{useState} from 'react'

import './index.css'

const Sidebar = () => {

    const [showModal, setShowModal] = useState(false);
     
     



    return(
        <>
        <button className="trigger" onClick={()=>setShowModal(!showModal)}>Click here to trigger the modal!</button>
        {showModal && <div className="show-modal">
        <div className="modal-content">
            <span className="close-button">×</span>
            <form id="myForm"  >
                <h1>Add a segment</h1>
                <div className="mb-3">
                    <br/>
                    <label for="name">Name</label>
                    <br />
                    <input type="text" className="form-control" id="name"   />
                     
                </div>

                <div className="mb-3">
                    <label for="status">Icon</label>
                    <br />
                    <select id="status" className="form-control">
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <br />
                <div className="mb-3">
                    <label for="description">Description</label>
                    <br />
                    <textarea rows="5"></textarea>

                    <p id="nameErrMsg" className="error-message"></p>
                </div>

                <button className="btn btn-primary m-5" type="submit">Save</button>
                <button className="btn btn-primary m-5">Cancel</button>
            </form>

             
        </div>
    
    </div>
}
        
        
        
        
        
        </>
    )
}


     

     

export default Sidebar;