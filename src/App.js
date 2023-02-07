import React, { Component } from 'react';
import Data from './Data.js';

class App extends Component {
  showModal = (eData) => {
    //console.log("mouse over")
    //console.log(eData)
    let empInfo = "Name : "+eData.name+"\nAge : "+eData.age+"\nDate of Birth : "+eData.DOB+"\nSalary : "+eData.salary+"\nDesignation : "+eData.designation+"\ndepartment : "+eData.department
    alert(empInfo)

  };

  render() {
    return (
      <> {
        Data.Employees.map((emp) => {
          return (

            <div
              key={emp.id}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <h3 onMouseOver={() => this.showModal(emp)} >
                {emp.name}
              </h3>
              <img src={emp.imageProfile} height={200} width={200} />
              <p>{emp.designation} </p>
            </div>

          )
        })
      }
      </>
    );
  }
}

export default App;