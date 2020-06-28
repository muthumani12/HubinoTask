import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Slide from './Slide';
import SideMenu from './SideMenu';
import NavigateBar from './NavigateBar';


type CombinedProps = RouteComponentProps<{}>;

  class UILanding extends React.Component<CombinedProps> {

  render() {
    return (
    <div>
<NavigateBar/>
<SideMenu/>
  <Slide/>
      </div>
    );
  }
}

export default UILanding ;
