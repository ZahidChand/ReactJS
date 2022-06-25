import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './Cards'
import SeriesData from "./SeriesData"

ReactDOM.render(

  <>

    <h1 className='heading_style'> My Top Netflix Series </h1>


    {SeriesData.map((curVal) => {

      return (
        <Card key={curVal.id}
          imgsrc={curVal.imgsrc}
          title={curVal.title}
          seriesName={curVal.seriesName}
          seriesLink={curVal.seriesLink} />
      )
    })}

  </>,
  document.getElementById("root")
);

