import { useState } from "react";

import UserProfile  from "./components/UserProfile";

import './App.css';



const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer'
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer'
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer'
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer'
  }
]



function App() {
  

const [searchInput,onChangeSearchInputValue] = useState("")

const [userList, updateList] = useState(initialUserDetailsList)

  
    const onChangeSearchInput = (event) => onChangeSearchInputValue(event.target.value);

    
    const searchResults = userList.filter(each=>
     each.name.toLowerCase().includes(searchInput.toLowerCase())
    )
   

    const deleteUser = id =>{
const filterList = searchResults.filter(
  each=> each.uniqueNo !== id

  
)

updateList(filterList)

    }

    return (
      <div className="app-container App-header">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          value={searchInput}
          className="inputEle"
          onChange={onChangeSearchInput}
        />
        {
          searchResults.length!==0 ?(
            <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser = {deleteUser}
            />
          ))}
        </ul>
          ):(<>
          <img src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png" className="imageEle" alt="nothing"/>
<h1>Nothing to show here</h1>
          </>)
        }
      </div>
    )
  }




export default App;
