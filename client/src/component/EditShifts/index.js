// import React, { Component, Fragment } from "react";
// import { Typography, TextField, Button, Card } from '@material-ui/core';
// import API from '../../utils/API';

// const styles = {
//     Card: {
//         marginTop: 30,
//         height: 540,
//         overflowY: 'scroll'
//     }
// }

// class EditShifts extends Component {

//     state = {
//         employees: []
//     }

//     componentDidMount() {
//         this.loadEmployees();
//     }

//     loadEmployees = () => {
//         console.log(this.props.authUser.uid)
//         API.getEmployee(this.props.authUser.uid)
//             .then(res =>
//                 this.setState({ employees: res.data })
//             ).catch(err => console.log(err));
//     }

//     render() {
//         console.log(this.state.employees)
//         return (
//             <Fragment>
//                 <div style={styles.Card}>
//                     <h1>Edit Shifts</h1>
//                     <Card variant="outlined">
//                         {employees.map((employee, index) => (
//                             <div style={{ overflow: "auto", padding: 10 }}>
//                                 <p>Name: {firstName}</p>
//                                 <p>Position: {employee.position}</p>
//                                 <p>Email: {employee.email}</p>
//                                 <p></p>
//                             </div>
//                         ))}
//                     </Card>
//                 </div>
//             </Fragment>
//         )
//     }
// }

// export default EditShifts;