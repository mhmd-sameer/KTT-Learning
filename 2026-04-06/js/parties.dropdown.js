

const container = document.getElementById("parties-card");
const searchbar = document.getElementById('parties-search-bar');
const allianceFilter = document.getElementById("alliance-filter");


function renderParties(data){

    console.log(data);
    container.innerHTML = "";

    data.forEach(party => {
    const card = `
        <div class="grid">
            <div class="grid-logo-box">
                <div class="grid-logo" style="background-color: ${party.color}">
                    <p>${party.name}</p>
                </div>
                <div class="alliance">
                    <p>${party.alliance || "Independent"}</p>
                </div>
            </div>

            <div class="party-title">
                <h3>${party.name}</h3>
                <p>${party.fullName}</p>
            </div>

            <div class="party-details">
                <div class="party-details-row">
                    <span>Leader</span>
                    <span class="value">${party.leader}</span>
                </div>
                <div class="party-details-row">
                    <span>Symbol</span>
                    <span class="value">${party.symbol}</span>
                </div>
            </div>

            <div class="seats">
                <span>Seats</span>
                <span style="color: darkblue; font-weight: bold;">
                    ${party.seats}
                </span>
            </div>
        </div>
    `;

    container.insertAdjacentHTML('beforeend',card); 
});
}



function filterParties(){
    const selectedAlliance = allianceFilter.value;
    const query = searchbar.value.toLowerCase().trim();

    const filtered = parties.filter(party =>{

        const name = party.name.toLowerCase();
        const fullName = party.fullName.toLowerCase();
        const leader = party.leader.toLowerCase();

        const matchesSearch =
            query === "" ||
            name.includes(query) ||
            fullName.includes(query) ||
            leader.includes(query);

        const matchesAlliance =
            selectedAlliance === "All" ||
            party.alliance === selectedAlliance;

        return matchesSearch && matchesAlliance;
    });

    renderParties(filtered);
}

allianceFilter.addEventListener("change",filterParties);
searchbar.addEventListener("input",filterParties);

renderParties(parties);



