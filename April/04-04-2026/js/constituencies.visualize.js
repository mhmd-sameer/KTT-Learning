const container = document.getElementById('table-body');

function renderConstituencies(data){
    
    data.forEach(constituency =>{
        const row = `
            <tr>
                <td>${constituency.constituency}</td>
                <td>${constituency.district}</td>
                <td>${constituency.type}</td>
                <td>${constituency.voters}</td>
                <td>${constituency.candidates}</td>
            </tr>`

        container.insertAdjacentHTML('beforeend',row);
    })
}



