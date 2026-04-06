const container = document.getElementById('table-body');

let currentPage = 1;
let rowsPerPage = 10;
let fullData = [];
let totalPages = 0;

function renderConstituencies(data) {
    fullData = data;
    totalPages = Math.ceil(fullData.length / rowsPerPage);

    displayPage();
}


function displayPage(){
    container.innerHTML = ""; 

    let rows = "";

    console.log(currentPage);
    let start = (currentPage - 1)* rowsPerPage;
    let end = start + rowsPerPage;

    let paginatedData = fullData.slice(start,end);

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


const DistrictFilter = document.getElementById('district-filter');
const TypeFilter = document.getElementById('type-filter');

function filterDistrict() {

    const selectedDistrict = DistrictFilter.value;
    const selectedType = TypeFilter.value;

    const filtered = constituencies.filter( constituency =>{
        return(
            (selectedDistrict === 'All' || selectedDistrict === constituency.district) &&
            (selectedType === 'All' || selectedType === constituency.type)
        );
    })

    console.log(selectedDistrict);
    renderConstituencies(filtered);
}

document.addEventListener("change",filterDistrict);
document.addEventListener("change", filterDistrict);


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


renderConstituencies(constituencies);

