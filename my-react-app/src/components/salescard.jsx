import React from 'react';
import '../css/app.css';


const SalesCard = () => {
    return (
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col mt-0">
                        <h5 class="card-title">Sales</h5>
                    </div>

                    <div class="col-auto">
                        <div class="stat text-primary">
                            <i class="align-middle" data-feather="truck"></i>
                        </div>
                    </div>
                </div>
                <h1 class="mt-1 mb-3">2.382</h1>
                <div class="mb-0">
                    <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right"></i> -3.65% </span>
                    <span class="text-muted">Since last week</span>
                </div>
            </div>
        </div>
    );
};

export default SalesCard;
