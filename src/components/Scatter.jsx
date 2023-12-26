import * as d3 from "d3";
import { useEffect, useState } from "react";
// import data from './data/data2.csv';

const Scatter = () => {

  let data = [{
    "DecimalChronologicalAge": 23.31 ,
    "OMICmAge": 24.31 
  },{
    "DecimalChronologicalAge": 33.45 ,
    "OMICmAge": 35.31 
  },{
    "DecimalChronologicalAge": 60.31 ,
    "OMICmAge": 61.31 
  }
  ];

  const [scatterData, setScatterData] = useState("");

  // console.log(getData());

  // d3.csv(d, function(data) { console.log(data); });
  
  // DecimalChronologicalAge
  let x = "DecimalChronologicalAge";
  // OMICmAge
  let y = "OMICmAge";

  const width = 700;
  const height = 300;

  const svg = d3.select("body").append("svg") //grabs body and appends an svg
      .attr("width", width)
      .attr("height", height);

  const xScale = d3.scaleLinear()
      .domain([0, 100])
      .range([0 , width]) //scope of data going out / pixels 
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale));
  
  const yScale = d3.scaleLinear()
      .domain([0, 100])
      .range([0, height])
  svg.append("g")
      .call(d3.axisLeft(yScale));

  setScatterData(data);

  useEffect(() => {
    const circle = svg.selectAll('.ufoCircle') //select all elements with class ufoCircle. (There currently are none)
        .data(scatterData) //attach the data
        .enter()
        .append('circle') //aopend one circle for each data point. There are 11 data points, so there will be 11 circles
        .attr('class', 'ufoCircle') //give each circle class ufoCircle
        .attr('r', 3) //assign radius
        // Position the circles based on their x and y attributes. 
        // .attr("cx", function(d) { return xScale(d["DecimalChronologicalAge"]); })
        // .attr("cy", function(d) { return yScale(d["OMICmAge"]); });
        .attr("cx", function(d) { return xScale(d.DecimalChronologicalAge); })
        .attr("cy", function(d) { return yScale(d.OMICmAge); });
  }, []);

};



export default Scatter;