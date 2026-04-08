const container = document.getElementById('table-body');

const DistrictFilter = document.getElementById('district-filter');
const TypeFilter = document.getElementById('type-filter');
const searchInput = document.getElementById('search-constituencies');


let currentPage = 1;
let rowsPerPage = 10;
let fullData = [];
let totalPages = 0;
let filteredData = [];

function renderConstituencies(data) {
    fullData = data;
    filteredData = data;
    totalPages = Math.ceil(fullData.length / rowsPerPage);
    displayPage();
}


function displayPage(){
    container.innerHTML = ""; 

    if(filteredData.length===0){
        container.innerHTML = `<tr><td colspan=5>No result found </td></tr>`;
        document.getElementById('page-info').innerHTML = 'page 0 of 0';
        return;
    }
    let rows = "";

    let start = (currentPage - 1)* rowsPerPage;
    let end = start + rowsPerPage;

    let paginatedData = filteredData.slice(start,end);

    paginatedData.forEach(constituency => {
        const candidates = constituency.candidates.length
            ? constituency.candidates.join(", ")
            : "No candidates";

        rows += `
            <tr>
                <td>${constituency.constituency}</td>
                <td>${constituency.district}</td>
                <td>${constituency.type}</td>
                <td>${constituency.voters.toLocaleString()}</td>
                <td>${candidates}</td>
            </tr>`;
    });

    container.innerHTML = rows;

    document.getElementById('page-info').innerHTML = `page ${currentPage} of ${totalPages}`

    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nxtBtn').disabled = currentPage === totalPages;
}




function ApplyFilter() {

    const selectedDistrict = DistrictFilter.value;
    const selectedType = TypeFilter.value;
    const query = searchInput.value.toLowerCase().trim();

    filteredData = fullData.filter( constituency =>{

    const constituencyName = constituency.constituency.toLowerCase();
    const districtName = constituency.district.toLowerCase();
    const candidates = constituency.candidates.join(", ").toLowerCase();

    const isExactMatch =
        constituencyName === query ||
        districtName === query ||
        candidates === query;

    const isPartialMatch =
        constituencyName.includes(query) ||
        districtName.includes(query) ||
        candidates.includes(query);

    return (
        (selectedDistrict === 'All' || selectedDistrict === constituency.district) &&
        (selectedType === 'All' || selectedType === constituency.type) &&
        (query === "" || isExactMatch || isPartialMatch)
    );
    })

    currentPage=1;
    totalPages = Math.ceil(filteredData.length/rowsPerPage);

    console.log(selectedDistrict);
    displayPage();
}
    
DistrictFilter.addEventListener("change",ApplyFilter);
TypeFilter.addEventListener("change", ApplyFilter);
searchInput.addEventListener("input",ApplyFilter);


function previousPage(){
    if(currentPage > 1){
        currentPage--;
        displayPage();
    }
}

function nextPage(){
    if(currentPage < totalPages){
        currentPage++;
        displayPage();
    }
}

function exportData(){
    exportDataToCsv(filteredData);
}

function exportDataToCsv(filteredData, filename = "table-data.csv"){
    let csv = [];

    const headers = ["constituency", "district", "type", "voters", "candidates"];
    csv.push(headers.join(","));

    filteredData.forEach(item => {
        let row = headers.map(key => {
            console.log(key);
            let value = item[key] ?? "";
            value = value.toString().replace(/"/g, '""');
            return `"${value}"`;
        });
        csv.push(row.join(","));
    });

    const csvString = csv.join("\n");

    const blob = new Blob([csvString], {type: "text/csv"});
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
}
renderConstituencies(constituencies);

