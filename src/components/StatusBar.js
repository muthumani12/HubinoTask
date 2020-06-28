import React from 'react';
import { RouteComponentProps } from 'react-router-dom';


type CombinedProps = RouteComponentProps<{}>;



  class StatusBar extends React.Component<CombinedProps> {


  render() {
    return (
      <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <ul className="left">
                        <li>
                            <a>
                                <i className="hamburger material-icons hide-on-med-and-up">menu</i>
                            </a>
                        </li>
                    </ul>
                        <form action="" method="post">
                            <div className="input-field">
                                <input id="search" type="search" name="search">
                                <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                                <i className="material-icons">close</i>
                                </input>
                            </div>
                        </form>
                    <ul className="right">
                        <li>
                            <a>
                                <i className="material-icons">notifications_none</i>
                            </a>
                        </li>

                            <ul id="AccountInfo" className="hidden z-depth-5">
                                <li>sdfsdf</li>
                                <li>fghfgh</li>
                                <li>jkjkljkljkl</li>
                                <li>xwcxwcwxcwxc</li>
                            </ul>
                        <li>
                            <a href="">
                                <i className="material-icons">exit_to_app</i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
  }
}



export default StatusBar ;
