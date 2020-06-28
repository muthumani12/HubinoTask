import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ChatBar from './ChatBar';
import SpinBar from './SpinBar';

type CombinedProps = RouteComponentProps<{}>;

  class Slide extends React.Component<CombinedProps> {

  render() {
    return (
    <div>
      <div className="row mt-4 mar-left">
        <div className="col-lg-3 col-6">
          <div className="small-box firstslide-color sld-hight">
            <div className="inner">
              <h3 className="font-left">2050</h3>

              <p className="font-slide">Total Orders</p>
            </div>
            <div className="icon">
              <i className="ion ion-bag img-top"></i>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box Secondslide-color sld-hight">
            <div className="inner">
              <h3 className="font-left">3250</h3>

              <p className="font-slide">Total Expenses</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars img-top"></i>
            </div>
          </div>
        </div>


        <div className="col-lg-3 col-6">
          <div className="small-box thirdslide-color sld-hight">
            <div className="inner">
              <h3 className="font-left">87.5%</h3>

              <p className="font-slide">Total Revenue</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph img-top"></i>
            </div>
          </div>
        </div>


        <div className="col-lg-3 col-6">
          <div className="small-box fourthslide-color sld-hight">
            <div className="inner">
              <h3 className="font-left">250</h3>

              <p className="font-slide">New User</p>
            </div>
            <div className="icon">
              <i className="ion ion-person-add img-top"></i>
            </div>
          </div>
        </div>
      </div>
      <div>
          <SpinBar/>
          <ChatBar/>
          </div>
      </div>

    );
  }
}
export default Slide ;
