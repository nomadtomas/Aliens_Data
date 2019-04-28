// from data.js
var tableData = data;

const submit = d3.select("#filter-btn")

submit.on("click", function (){

    d3.event.preventDefault()
    
    const inptValDate = d3.select("#datetime").property("value")
    const inptValCity = d3.select("#city").property("value").toLowerCase()
    const inptValState = d3.select("#state").property("value").toLowerCase()
    const inptValCountry = d3.select("#country").property("value").toLowerCase()
    const inptValShape = d3.select("#shape").property("value").toLowerCase()
     
    const tbody = d3.select("tbody")
    tbody.html("")

    var inptFilter={}

    if (inptValDate !== ""){
        inptFilter["datetime"]=inptValDate
    }
    if (inptValCity !== ""){
        inptFilter["city"]=inptValCity
    }
    if (inptValState !== ""){
        inptFilter["state"]=inptValState
    }
    if (inptValCountry !== ""){
        inptFilter["country"]=inptValCountry
    }
    if (inptValShape !== ""){
        inptFilter["shape"]=inptValShape
    }

     const ufoData = tableData.filter(val =>{
        
        for ( var key in inptFilter) {
            if (val[key] === undefined ||  val[key] != inptFilter[key])
                return false
            }
                return true
          })

      ufoData.forEach(val => {
          const row = tbody.append('tr')
          for (key in val){
              row.append('td').text(val[key])
          }
    })   
}) 
