import React, { Component } from 'react';

class CardInfo extends Component {

  render() {

    return (
        <>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">Total traffic</h5>
                <span class="h2 font-weight-bold mb-0">350,897</span>
              </div>
              <div class="col-auto">
                <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                  <i class="ni ni-active-40"></i>
                </div>
              </div>
            </div>
            <p class="mt-3 mb-0 text-sm">
              <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
              <span class="text-nowrap">Since last month</span>
            </p>
          </div>
        </>
    )
  }
}


export default CardInfo;