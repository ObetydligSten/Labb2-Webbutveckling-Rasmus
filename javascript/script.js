async function fetchData(){
    try { 
        const response = await fetch('cvdata.json');
        if (!response.ok) {
            throw new error('Fel vid inhämtning, '+ response.status)
        }
        const data = await response.json();
        displayData(data);
    }
    catch (error){
        console.log("Något gick fel "+ error)
    }
}

function displayData(data){
    const arbete = document.getElementById('arbete');
    data.Arbetslivserfarenhet.forEach(item => {
        const element = document.createElement('div');
        element.innerHTML = `<strong>[${item.Startpunkt} - ${item.Slutpunkt}]<br>
        ${item.Befattning} - ${item.Arbetsgivare}</strong><hr>${item.Uppgift}<br><br>`;
        arbete.appendChild(element);
    });

    const utbildning = document.getElementById('utbildning');
    data.Utbildning.forEach(item => {
        const element = document.createElement('div');
        element.innerHTML = `<strong>[${item.Startpunkt} - ${item.Slutpunkt}]<br>
        ${item.Utbildningsnamn} - ${item.Skola} - ${item.Utbildningstyp}</strong><hr>${item.Beskrivning}<br><br>`;
        utbildning.appendChild(element);    
    });

    const kompetens = document.getElementById('kompetens');
    const ul = document.createElement('ul');
    data.Kompetenser.forEach(item => {
        const element = document.createElement('li');
        element.innerHTML = `${item.Kompetens}`;
        kompetens.appendChild(element); 
        ul.appendChild(element);   
    });
    kompetens.appendChild(ul);

    const körkort = document.getElementById('körkort');
    data.Körkort.forEach(item => {
        const element = document.createElement('div');
        element.innerHTML = `${item.Körkortstyp}`;
        körkort.appendChild(element);    
    });

    const referens = document.getElementById('referenser');
    data.Referenser.forEach(item => {
        const element = document.createElement('div');
        element.innerHTML = `${item.Refnamn} - ${item.Refposition}<br>
        ${item.Refmail}<br>${item.Reftel}`;
        referens.appendChild(element);    
    });
}

window.onload = fetchData;