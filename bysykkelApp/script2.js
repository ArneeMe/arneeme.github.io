const cycleText = document.querySelector("#cycleText");
const httpStatus = new XMLHttpRequest();
const urlStatus = 'https://gbfs.urbansharing.com/bergenbysykkel.no/station_status.json';
const httpInfo = new XMLHttpRequest();
const urlInfo = ' https://gbfs.urbansharing.com/bergenbysykkel.no/station_information.json'

let shouldRun = true;
let shouldRunHere = true;
let toBeReversed = false;
let nameId = {};
let results = [];
let maxNumberOfBikesAvailable = 30;

httpInfo.open("GET", urlInfo);
httpInfo.send();

httpInfo.onreadystatechange = function () {
    if((httpInfo.responseText != 0) && (shouldRun)) {
        let stationsInfo = (JSON.parse(httpInfo.responseText)).data.stations;
        for (let station of stationsInfo){
            nameId[station.station_id] = station.name
        }
        run();
        shouldRun = false;
    }
};

function run() {
    httpStatus.open("GET", urlStatus);
    httpStatus.send();
    httpStatus.onreadystatechange = function () {
        if ((httpStatus.responseText != 0) && shouldRunHere){
            let response = JSON.parse(httpStatus.responseText).data.stations;
            for (let station of response) {
                if(results.some(row => row.includes(nameId[station.station_id]))) {
                    console.log("This is duplicate:" + nameId[station.station_id]);
                }else {
                    results.push([station.num_bikes_available, nameId[station.station_id]]);
                }


            }
            sizeSort();
            updateHtml();
            shouldRunHere = false;
            setInterval(update(),10000);
        }
    }
}
function updateHtml() {
    let returnString = "";
    console.log(results)

    for (let result of results){
        returnString += `<li>Det er ${result[0]} ledige sykler på ${result[1]} </li>`
    }
    cycleText.innerHTML = returnString
}

function sizeSort() {
    let copyResults = results;
    let sortedList = [];
    for (let j = 0; j < maxNumberOfBikesAvailable; j++) {
        for (let i = 0; i < copyResults.length; i++) {
            if (copyResults[i][0] === j) {
                sortedList.push(copyResults[i])
            }
        }
    }
    if(toBeReversed){
        sortedList.reverse();
        toBeReversed = false;
    }
    else{
        toBeReversed = true;
    }
    results = sortedList;
    shouldRunHereAgain = false;
    updateHtml();
}

function update() {
    console.log(1);
    shouldRun = true;
    shouldRunHere = true;
    httpInfo.open("GET", urlInfo);
  //  httpInfo.send();
}
