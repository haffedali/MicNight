// import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
// import PersonIcon from '@material-ui/icons/Person';
// import MyLocationIcon from '@material-ui/icons/MyLocation';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// class Footer extends Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             value:0
//         }

//         this.handleChange = (event) => {
//             this.setState({
//                 value: event
//             })
//         }
//     }

    

//     render(){
//         return(
//             <div>
//             <BottomNavigation
//                 value={"event"}
//                 onChange={(event, newValue) => {
//                     this.handleChange(newValue);
//                 }}
//                 showLabels
//             >
//                 <BottomNavigationAction value="nearby" label="Nearby" icon={<SearchIcon />} />
//                 <BottomNavigationAction value="event" label="Mic" icon={<MyLocationIcon />} />
//                 <BottomNavigationAction value="me" label="Me" icon={<PersonIcon />} />
//             </BottomNavigation>
//             </div>
//         )

//     }
// }

// export default Footer;