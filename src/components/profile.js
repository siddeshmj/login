import React,{useState, useEffect} from 'react';
import axios from 'axios';

function Profile() {

const [dat, setDat] = useState([]);

const url = 'http://localhost:3000/user';
/*useEffect(() => {
  
fetch(url)
.then((response) => response.json())
.then((json) => setDat(json))
}, [])
*/
useEffect(() => {
    
axios.get('http://localhost:3000/user')
.then((response) => {
    console.log(response.data)
    setDat( response.data)
})
.catch(error => {console.log(error)})
console.log(dat)
},[])

console.log(dat)
          
    return (
        <div>
            
            <ul className="row p-5">
                {dat.map((data,id) =>
                <li className="col" key={id}>
                <div className=" card text-white bg-primary mb-3" style={{'max-width': '18rem'}}>
  <div className="card-header"><h5>Employee {data.id}</h5></div>
  <div className="card-body">
    <p className="card-title">{data.name}</p>
    <p className="card-title">{data.age}</p>
    <p className="card-title">{data.gender}</p>
    <p className="card-title">{data.email}</p>
    <p className="card-title">{data.phoneNo}</p>
    
    </div>
</div></li>
                )}
                    

                </ul>
        </div>
    )
}

export default Profile
