// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
// Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML
var tbody = d3.select("tbody");

// D3.js is a JavaScript library used to create interactive visualizations in the browser. 
// The D3.js library allows us to manipulate elements of a webpage in the context of a data set


function buildTable(data) {
    tbody.html("");
    // Basically, this entire line—tbody.html("");—tells JavaScript to use an empty string when creating the table; 
    // in other words, create a blank canvas. This is a standard way to clear data.
    
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
          let cell = row.append("td");
          cell.text(val);
          }
        );
      });
    
    // With this function, we have done the following:
    //     Looped through each object in the array
    //     Appended a row to the HTML table
    //     Added each value from the object into a cell
  }





function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  };

  // Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);