import './App.css';
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
function App() {
const [modalIsOpen, setModalIsOpen] = useState(false);
const openModal = () => setModalIsOpen(true);
const closeModal = () => setModalIsOpen(false);
const [isAddModalOpen, setAddModalIsOpen] = useState(false);
const openAddModal = () => setAddModalIsOpen(true);
const closeAddModal = () => setAddModalIsOpen(false);
const [users, setUser] = useState([]);
  
  const [productId, setProductId] = useState(null);
  const [productName, setProductName] = useState("");
  const [productOwnerName, setProductOwnerName] = useState("");
  const [developers, setDevelopers] = useState([]);
  const [scrumMasterName, setScrumMasterName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [methodology, setMethodology] = useState("");

  useEffect(() => {
    getUsers();
  }, [])

  function addUser()
  {
    if(!developers||!productName||!productOwnerName||!scrumMasterName||!startDate||!methodology){
      alert("Please fill all the fields")
      return;
    }
    const isValidDate = /^(\d{4})\/(\d{2})\/(\d{2})$/.test(startDate);
    if (!isValidDate) {
      alert('Please enter the start date in yyyy/mm/dd format.');
      return;
    }
    let item={productName,productOwnerName,
      Developers: developers?(Array.isArray(developers) ? developers : developers.split(",").map((name) => name.trim())):[],
      scrumMasterName,startDate,methodology}
      if(developers){
      if (developers.length > 5) {
        alert('The developers array cannot have more than 5 elements.');
        return;
      }
      }
      if (methodology !== 'Agile' && methodology !== 'Waterfall') {
        alert('The methodology must be either Agile or Waterfall !');
        return;
      }
    console.warn("item",JSON.stringify(item))
    fetch(`http://localhost:3000/api/product/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  }).then((result) => {
    result.json().then((resp) => {
      console.warn(resp)
      getUsers();
      closeAddModal();
    })
  })
}

  function getUsers() {
    fetch("http://localhost:3000/api").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
        setProductId(resp.productId);
        setProductName(resp.productName);
        setProductOwnerName(resp.productOwnerName);
        setDevelopers(resp.Developers);
        setScrumMasterName(resp.scrumMasterName);
        setStartDate(resp.startDate);
        setMethodology(resp.methodology);
      })
    })
  }
  function setDevelopersList(value) {
    if (value.length > 4) {
      setDevelopers(value.slice(0, 4));
    } else {
      setDevelopers(value);
    }
  }

  function deleteUser(productId) {
    fetch(`http://localhost:3000/api/product/${productId}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  function selectProduct(id)
  {
    let item=users.find(i=>i.productId===id)
    console.warn(item)
    setProductName(item.productName)
    setProductOwnerName(item.productOwnerName)
    setDevelopers(item.Developers)
    setScrumMasterName(item.scrumMasterName)
    setStartDate(item.startDate)
    setMethodology(item.methodology)
    setProductId(item.productId)

  }
  function updateUser()
  {
    const isValidDate = /^(\d{4})\/(\d{2})\/(\d{2})$/.test(startDate);
    if (!isValidDate) {
      alert('Please enter the start date in yyyy/mm/dd format.');
      return;
    }
    let item={productId,productName,productOwnerName,
      Developers: Array.isArray(developers) ? developers : developers.split(",").map((name) => name.trim()),
      scrumMasterName,startDate,methodology}
      if (developers.length > 5) {
        alert('The developers array cannot have more than 5 elements.');
        return;
      }
      if (methodology !== 'Agile' && methodology !== 'Waterfall') {
        alert('The methodology must be either Agile or Waterfall !');
        return;
      }
    console.warn("item",JSON.stringify(item))
    fetch(`http://localhost:3000/api/product/${productId}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
        closeModal();
      })
    })
  }
  return (
    <div className="App">
        <h1 className="title">IMB PRODUCTS</h1>
      <div style={{ overflow: 'auto' }}>
      <table border="1" style={{ float: 'left' }}>
        <tbody>
          <tr>
            <td>Product Number</td>
            <td>Product Name</td>
            <td>Scrum Master</td>
            <td>Product Owner</td>
            <td>Developer Names</td>
            <td>Start Date yyyy/mm/dd</td>
            <td>Methodology</td>
          </tr>
          {
            users.map((item, i) =>
              <tr key={i}>
                <td>{item.productId}</td>
                <td>{item.productName}</td>
                <td>{item.scrumMasterName}</td>
                <td>{item.productOwnerName}</td>
                <td>{item.Developers ? item.Developers.join(",") : "N/A"}</td>
                <td>{item.startDate}</td>
                <td>{item.methodology}</td> 
                <td><button onClick={() => deleteUser(item.productId)}>Delete</button></td>
                <td><button onClick={() => {selectProduct(item.productId); openModal()}}>Update</button></td>
              </tr>
            )
          }
           <tr>
          <td colSpan="8">Total Products: {users ? users.length :0 }</td>
          <td><button onClick={() => {openAddModal()}}>Add Product</button></td>
        </tr>
        </tbody>
      </table>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}className="Modal">
  <div className="Modal__content">
  <label htmlFor="productName">Product Name:</label><br />
  <input type="text" id="productName" value={productName} onChange={(e)=>{setProductName(e.target.value)}} /><br /><br />
  
  <label htmlFor="scrumMasterName">Scrum Master Name:</label><br />
  <input type="text" id="scrumMasterName" value={scrumMasterName} onChange={(e)=>{setScrumMasterName(e.target.value)}} /><br /><br />
  
  <label htmlFor="productOwnerName">Product Owner Name:</label><br />
  <input type="text" id="productOwnerName" value={productOwnerName} onChange={(e)=>{setProductOwnerName(e.target.value)}} /><br /><br />
  
  <label htmlFor="developersList">Developers:</label><br />
  <input type="text" id="developersList" value={developers ? developers.join(",") : "N/A"} onChange={(e)=>{setDevelopersList(e.target.value ? e.target.value.split(",") : [])}} /><br /><br />
  
  <label htmlFor="startDate">Start Date yyyy/mm/dd:</label><br />
  <input type="text" id="startDate" value={startDate} onChange={(e)=>{setStartDate(e.target.value)}} /><br /><br />
  
  <label htmlFor="methodology">Methodology Agile or Waterfall:</label><br />
  <input type="text" id="methodology" value={methodology} onChange={(e)=>{setMethodology(e.target.value)}} /><br /><br />
        <button onClick={updateUser} >Update Product</button>  
        <button onClick={closeModal} >Close</button>
      </div>
      </Modal>

      <Modal isOpen={isAddModalOpen} onRequestClose={closeModal}className="Modal">
  <div className="Modal__content">
  <label htmlFor="productName">Product Name:</label><br />
    <input type="text" id="productName" value={productName} onChange={(e)=>{setProductName(e.target.value)}} /><br /><br />
    
    <label htmlFor="scrumMasterName">Scrum Master Name:</label><br />
    <input type="text" id="scrumMasterName" value={scrumMasterName} onChange={(e)=>{setScrumMasterName(e.target.value)}} /><br /><br />
    
    <label htmlFor="productOwnerName">Product Owner Name:</label><br />
    <input type="text" id="productOwnerName" value={productOwnerName} onChange={(e)=>{setProductOwnerName(e.target.value)}} /><br /><br />
    
    <label htmlFor="developersList">Developers:</label><br />
    <input type="text" id="developersList" value={developers ? developers.join(",") : " "} onChange={(e)=>{setDevelopersList(e.target.value ? e.target.value.split(",") : [])}} /><br /><br />
    
    <label htmlFor="startDate">Start Date:</label><br />
    <input type="text" id="startDate" value={startDate} onChange={(e)=>{setStartDate(e.target.value)}} /><br /><br />
    
    <label htmlFor="methodology">Methodology:</label><br />
    <input type="text" id="methodology" value={methodology} onChange={(e)=>{setMethodology(e.target.value)}} /><br /><br />
        <button onClick={addUser} >Add Product</button> 
        <button onClick={closeAddModal} >Close</button>   
      </div>
      </Modal>
    </div>
    
  );
  

}
export default App;