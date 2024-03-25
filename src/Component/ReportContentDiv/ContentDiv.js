// contentDiv.js
import React from 'react';
import '../ReportContentDiv/ContentDiv.css';
import img from '../../img/covid-virus.png';

function ContentDiv(props) {
  return (
    <div className='row'>
      <h1>Global Report</h1>
      <div className='col-12'>
        <div className='col-4 newCase'>
          <img src={img} alt="Covid virus" className='img' /> {/* Add alt attribute with meaningful description */}
          <h2>New Cases</h2>
          <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>
            {props.globalReport.Global ? props.globalReport.Global.NewConfirmed : ''}
          </div>
        </div>

        {/* Repeat similar pattern for other <img> elements */}
      </div>

      <h1>Country Report {props.byCountryData ? props.byCountryData.Country : ''}</h1>
      <div className='col-12'>
        <div className='col-4 CountryCase'>
          <img src={img} alt="Covid virus" className='img' /> {/* Add alt attribute with meaningful description */}
          <h2>New Cases</h2>
          <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>
            {props.byCountryData ? props.byCountryData.NewConfirmed : ''}
          </div>
        </div>

        {/* Repeat similar pattern for other <img> elements */}
      </div>
    </div>
  );
}

export default ContentDiv;
