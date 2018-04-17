import React from 'react';
import UlContainer from './ul/ul_container';
import FooterContainer from './footer_container';
import DetailsContainer from './details_container';
import HeaderContainer from './header_container';

const App = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-5">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <HeaderContainer />
          </div>
          <div className="panel-body" id="main-body">
            <UlContainer />
          </div>
          <div className="panel-footer">
            <FooterContainer />
          </div>
        </div>
      </div>
      {/* <div className="col-md-2"></div> */}
      <div className="col-md-7" id="details">
        <DetailsContainer />
      </div>
    </div>
  </div>
);

export default App;
