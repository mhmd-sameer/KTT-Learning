

const container = document.getElementById("parties-card");

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

const searchbar = document.getElementById('parties-search-bar');

function searchbarFilter() {
    const text = searchbar.value.toLowerCase();

    const filtered = parties.filter(party =>
        party
    )
}


const allianceFilter = document.getElementById("alliance-filter");

function filterParties(){
    const selectedAlliance = allianceFilter.value;

    const filtered = parties.filter(
        p => p.alliance === selectedAlliance
    );
    renderParties(filtered);
}

renderParties(parties);

document.addEventListener("change",filterParties);


