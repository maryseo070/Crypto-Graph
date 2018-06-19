import React from 'react';
import * as d3 from 'd3';
import ReactDOM from 'react-dom';

function getChartSize(el) {
       let width = .9*parseInt(el.style('width'));
       let height = .7*parseInt(width*7/9);

       return  [width,height];
   }

   var AxisX = React.createClass({
     render() {
       var data = this.props.data;
       var margin = this.props.margin;
       var height = this.props.height - margin.top - margin.bottom;
       var width = this.props.width  - margin.left - margin.right;

       var x = d3.time.scale()
         .range([0, width]);

       var xAxis = d3.svg.axis()
         .scale(x)
         .orient("bottom");

       x.domain(d3.extent(data, function(d) { return d.date; }));

       d3.select(".x").attr("transform", "translate(0," + height + ")").call(xAxis);

           return(
             <g className="x axis"></g>
           );
       }
   });

   var AxisY = React.createClass({
       render() {
         var data = this.props.data;
         var margin = this.props.margin;
         var height = this.props.height - margin.top - margin.bottom;
         var width = this.props.width  - margin.left - margin.right;

         var y = d3.scale.linear()
           .range([height, 0]);

         var yAxis = d3.svg.axis()
           .scale(y)
           .orient("left");

         y.domain(d3.extent(data, function(d) { return d.close; }));

         d3.select(".y").call(yAxis)
           .append("text")
             .attr("transform", "rotate(-90)")
             .attr("y", 6)
             .attr("dy", ".71em")
             .style("text-anchor", "end")
             .text("Price ($)");

           return(
             <g className="y axis"></g>
           );
       }
   });

   var Line = React.createClass({
       render() {
         var data = this.props.data;
         var margin = this.props.margin;
         var height = this.props.height - margin.top - margin.bottom;
         var width = this.props.width  - margin.left - margin.right;

         var x = d3.time.scale()
             .range([0, width]);

         var y = d3.scale.linear()
             .range([height, 0]);

         var line = d3.svg.line()
           .x(function(d) { return x(d.date); })
           .y(function(d) { return y(d.close); });

         data.forEach(function(d) {
           x.domain(d3.extent(data, function(d) { return d.date; }));
           y.domain(d3.extent(data, function(d) { return d.close; }));
         });

         var newline = line(data);
         console.log(newline);

         return(
           <path className="line" d={newline}></path>
         );
       }
   });

   var Chart = React.createClass({
     getInitialState: function() {
       return {
         graph: "",
         container: "",
         chartWidth: 0,
         chartHeight: 0,
         x: NaN,
         y: NaN,
         data: [],
         margin: {}
       }
     },
     resize: function(e) {
       const container = this.state.container;
       let chartWidth = getChartSize(container)[0];
       let chartHeight = getChartSize(container)[1];

       this.setState({
         chartWidth: chartWidth,
         chartHeight: chartHeight,
       });

     },
     handleSubmit: function(submittedData) {

       let formatDate = d3.time.format("%d-%b-%y");

       function type(d) {
         d.date = formatDate.parse(d.date);
         d.close = +d.close;
         return d;
       }

       const _this = this;

       d3.tsv(submittedData, type, function(error, data) {
         if (error) throw error;

         _this.setState({
           data: data
         });
       });
     },
     componentDidMount: function() {
       window.addEventListener('resize', this.resize);

       const graph = d3.select("#chart");
       const container = d3.select("#graphic");

       const margin = {top: 20, right: 20, bottom: 30, left: 50};

       var containerBB = container.node().getBoundingClientRect();

       var graphBB = graph.node().getBoundingClientRect();

       let chartWidth = getChartSize(container)[0];
       let chartHeight = getChartSize(container)[1];

       const _this = this;

       let formatDate = d3.time.format("%d-%b-%y");

       function type(d) {
         d.date = formatDate.parse(d.date);
         d.close = +d.close;
         return d;
       }

       d3.tsv("data4.tsv", type, function(error, data) {
         if (error) throw error;

         _this.setState({
           graph: graph,
           container: container,
           chartWidth: chartWidth,
           chartHeight: chartHeight,
           data: data,
           margin: margin
         });
       });
     },
     render() {
         var width = this.state.chartWidth;
         var height = this.state.chartHeight;
         var margin = this.state.margin;
         var data = this.state.data;
         return(
           <div>
             <form>
               <input type="radio" name="data" onChange={this.handleSubmit.bind(null, "data.tsv")}/> 2181 Rows<br />
               <input type="radio" name="data" onChange={this.handleSubmit.bind(null, "data2.tsv")}/> 600 Rows<br />
               <input type="radio" name="data" onChange={this.handleSubmit.bind(null, "data3.tsv")}/> 300 Rows<br />
               <input type="radio" name="data" onChange={this.handleSubmit.bind(null, "data4.tsv")}/> 50 Rows
             </form>
             <div id="chart">
               <svg height={height} width={width} >
                 <g transform="translate(50,20)">
                   <AxisX width={width} height={height} margin={margin} data={data}/>
                   <AxisY width={width} height={height} margin={margin} data={data}/>
                   <Line width={width} height={height} margin={margin} data={data}/>
                 </g>
               </svg>
             </div>
           </div>
         );
     }
   });

   export default Chart;

     document.addEventListener("DOMContentLoaded", () => {
       ReactDOM.render(
         <Chart />,
         document.getElementById('root')
       );
     }
