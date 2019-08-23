import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/






const panes = [

    {
        menuItem: 'Home',
        render: () => <Tab.Pane attached={false}><NavLink to="/">Click here to go Home</NavLink></Tab.Pane>,
      },
    {
      menuItem: 'Characters',
      render: () => <Tab.Pane attached={false}> <NavLink to="/characters">Click here to view Characters</NavLink>  </Tab.Pane>,
    },
    {
      menuItem: 'Episodes',
      render: () => <Tab.Pane attached={false}> <NavLink to="/episodes">Click here to view Episodes</NavLink></Tab.Pane>,
    },
    {
      menuItem: 'Locations',
      render: () => <Tab.Pane attached={false}><NavLink to="/locations">Click here to view Locations</NavLink></Tab.Pane>,
    },
   
  ]
  
  const TabExampleText = () => <Tab menu={{ text: true }} panes={panes} />
  
  export default TabExampleText












// export default function TabNav() {


    

//   return (
//     <div>
//       <div className="App">
        

//         <NavLink to="/">Welcome</NavLink> 
//         <div>
//         <NavLink to="/characters">Characters</NavLink>        </div>
//         <div>
//         <NavLink to="/episodes">Episodes</NavLink>
        
//         </div>
//         <div>
//         <NavLink to="/locations">Locations</NavLink>
          
//         </div>
//       </div>
//     </div>
//   );
// };
