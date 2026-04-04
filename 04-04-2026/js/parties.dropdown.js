


const container = document.querySelector(".grid-container");

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


document.addEventListener('DOMContentLoaded', ()=>{
    const dropdown  = document.getElementById('alliance-filter');

    console.log(dropdown);

    dropdown.addEventListener('change',()=>{
        const selected = dropdown.value;
        console.log("Inside dropdown");
        console.log(selected);

        if(selected === 'All'){
            renderParties(parties);
        }
        else{
            const filtered = parties.filter(
                p => p.alliance===selected
            );
            renderParties(filtered);
        }
    })
    renderParties(parties);
})

