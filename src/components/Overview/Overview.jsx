import React from 'react';
import {CircularProgress } from '@material-ui/core';
import './Overview.css';
import ReactTimeAgo from 'react-time-ago';
import CountUp from 'react-countup';




const Overview = ( {data} ) => {
    if(!data.cases){
        return (
            <div className="overview-page">
            <div className="card-container">
                <div className="card infected">
                    <svg 
                        aria-hidden="true" focusable="false" data-prefix="fas" data-icon="procedures" className="svg-inline--fa fa-procedures fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M528 224H272c-8.8 0-16 7.2-16 16v144H64V144c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h512v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V336c0-61.9-50.1-112-112-112zM136 96h126.1l27.6 55.2c5.9 11.8 22.7 11.8 28.6 0L368 51.8 390.1 96H512c8.8 0 16-7.2 16-16s-7.2-16-16-16H409.9L382.3 8.8C376.4-3 359.6-3 353.7 8.8L304 108.2l-19.9-39.8c-1.4-2.7-4.1-4.4-7.2-4.4H136c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm24 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z"></path></svg>
                    <div className="card-text">
                        <h3>Confirmed cases</h3>
                        <CircularProgress color="secondary" xs={12} md={3} justify="center"/>
                    </div>
                </div>
                <div className="card recovered">
                    <svg
                        aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heartbeat" className="svg-inline--fa fa-heartbeat fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"></path></svg>
                    <div className="card-text">
                        <h3>Recovered cases</h3>
                        <CircularProgress color="secondary" xs={12} md={3} justify="center"/>
                    </div>
                </div>
                <div className="card deaths">
                    <svg 
                        aria-hidden="true" focusable="false" data-prefix="fas" data-icon="skull-crossbones" className="svg-inline--fa fa-skull-crossbones fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
                    </svg>
                    <div className="card-text">
                        <h3>Fatal cases</h3>
                        <CircularProgress color="secondary" xs={12} md={3} justify="center"/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    return(
        
        <div className="overview-page">
            <div className="card-container">
                <div className="card infected">
                    <svg 
                        aria-hidden="true" focusable="false" data-prefix="fas" data-icon="procedures" className="svg-inline--fa fa-procedures fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M528 224H272c-8.8 0-16 7.2-16 16v144H64V144c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h512v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V336c0-61.9-50.1-112-112-112zM136 96h126.1l27.6 55.2c5.9 11.8 22.7 11.8 28.6 0L368 51.8 390.1 96H512c8.8 0 16-7.2 16-16s-7.2-16-16-16H409.9L382.3 8.8C376.4-3 359.6-3 353.7 8.8L304 108.2l-19.9-39.8c-1.4-2.7-4.1-4.4-7.2-4.4H136c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm24 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z"></path></svg>
                    <div className="card-text">
                        <h3>Confirmed  cases</h3>
                        <div className="cases"> <CountUp start = {0} end = {data.cases} duration = {3} separator = ','/></div>
                        <div className="cases-increase">
                            +<CountUp start = {0} end = {data.todayCases} duration = {3} separator = ','/>
                        </div>
                        <div className="update-date">Last update <ReactTimeAgo date={data.updated} locale="en-US"/></div>
                    </div>
                </div>
                <div className="card recovered">
                    <svg
                        aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heartbeat" className="svg-inline--fa fa-heartbeat fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"></path></svg>
                    <div className="card-text">
                        <h3>Recovered cases</h3>
                        <div className="cases"> <CountUp start = {0} end = {data.recovered} duration = {3} separator = ','/></div>
                        <div className="cases-increase">
                            +<CountUp start = {0} end = {data.todayRecovered} duration = {3} separator = ','/>
                        </div>
                        <div className="update-date">Last update <ReactTimeAgo date={data.updated} locale="en-US"/></div>
                    </div>
                </div>
                <div className="card deaths">
                    <svg 
                        aria-hidden="true" focusable="false" data-prefix="fas" data-icon="skull-crossbones" className="svg-inline--fa fa-skull-crossbones fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
                    </svg>
                    <div className="card-text">
                        <h3>Fatal cases</h3>
                        <div className="cases"> <CountUp start = {0} end = {data.deaths} duration = {3} separator = ','/></div>
                        <div className="cases-increase">
                            +<CountUp start = {0} end = {data.todayDeaths} duration = {3} separator = ','/>
                        </div>
                        <div className="update-date">Last update <ReactTimeAgo date={data.updated} locale="en-US"/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;