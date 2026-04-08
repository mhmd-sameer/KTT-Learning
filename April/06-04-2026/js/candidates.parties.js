

const container = document.getElementById('candidates-card');
const searchbar = document.getElementById('search-candidates');

function renderCandidates(data) {
  container.innerHTML = '';

  if(data.length===0){
    container.innerHTML = `
    <div class="main-tab">
    <div class="data-no-found">
      No data found
    <div>
    </div>
    `
  }
    data.forEach(candidate => {
    const card = `
        <div class="grid">
        <div class="grid-top">
            
            <div class="candidate-logo" style="background-color: ${candidate.color}; color: white;">
            <p>${candidate.initials}</p>
            </div>

            <div class="candidate-title">
            <p><b>${candidate.name}</b></p>
            
            <p class="candidate-party" style="border-color: ${candidate.color}; color: ${candidate.color};">
                ${candidate.party}
            </p>
            </div>

        </div>

        <div class="grid-body">
            <p><b>Constituency :</b> ${candidate.constituency}</p>
            <p><b>Age :</b> ${candidate.age} years old</p>
            <p><b>Education :</b> ${candidate.education}</p>
            <p><b>Gender : </b>${candidate.gender}</p>
        </div>

        <div>
            <p>${candidate.city}</p>
        </div>
        </div>
    `;

    container.insertAdjacentHTML('beforeend', card);
    });
}




const partyFilter = document.getElementById("parties-filter");
const genderFilter = document.getElementById("gender-filter");


function filterCandidates() {
  const selectedParty = partyFilter.value;
  const selectedGender = genderFilter.value;
  const query = searchbar.value.toLowerCase().trim();
  

    console.log(selectedGender);
    console.log(selectedParty);

  const filtered = candidates.filter(candidate => {
    const candidateName = candidate.name.toLowerCase();
    const candidateConstituency = candidate.constituency.toLowerCase();

    return (
      (selectedParty === "All" || candidate.party === selectedParty) &&
      (selectedGender === "All" || candidate.gender === selectedGender) &&
      (query ==="" || candidateName.includes(query) || candidateConstituency.includes(query))
    );
  });
  
  console.log(filtered);
  renderCandidates(filtered);
}

partyFilter.addEventListener("change", filterCandidates);
genderFilter.addEventListener("change", filterCandidates);
searchbar.addEventListener("input",filterCandidates);

filterCandidates();