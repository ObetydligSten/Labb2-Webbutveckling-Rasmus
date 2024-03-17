function checkOverlapAndChangeColor(
    element2Id, element3Id, element1Id, element4Id, element5Id) {
    // Hämta referens till navbar och det andra elementet
    let navbar = document.getElementById('navbar');
    let element2 = document.getElementById(element2Id);
    let element3 = document.getElementById(element3Id);
    let element1 = document.getElementById(element1Id);
    let element4 = document.getElementById(element4Id);
    let element5 = document.getElementById(element5Id);



    if (!navbar || !element2) {
        console.error("Ett eller båda elementen finns inte.");
        return;
    }

    // Hämta storlek och position för navbar och det andra elementet
    let navbarRect = navbar.getBoundingClientRect();
    let element1Rect = element1.getBoundingClientRect();
    let element2Rect = element2.getBoundingClientRect();
    let element3Rect = element3.getBoundingClientRect();
    let element4Rect = element4.getBoundingClientRect();
    let element5Rect = element5.getBoundingClientRect();



    // Kontrollera om de två elementen överlappar varandra både horisontellt och vertikalt
    let isOverlapping1 = !(navbarRect.right < element1Rect.left ||
                        navbarRect.left > element1Rect.right ||
                        navbarRect.bottom < element1Rect.top ||
                        navbarRect.top > element1Rect.bottom)
                        ;
    let isOverlapping2 = !(navbarRect.right < element2Rect.left ||
                        navbarRect.left > element2Rect.right ||
                        navbarRect.bottom < element2Rect.top ||
                        navbarRect.top > element2Rect.bottom
                        );
    let isOverlapping3 = !(navbarRect.right < element3Rect.left ||
                        navbarRect.left > element3Rect.right ||
                        navbarRect.bottom < element3Rect.top ||
                        navbarRect.top > element3Rect.bottom
                        );
    let isOverlapping4 = !(navbarRect.right < element4Rect.left ||
                            navbarRect.left > element4Rect.right ||
                            navbarRect.bottom < element4Rect.top ||
                            navbarRect.top > element4Rect.bottom
                            );
    let isOverlapping5 = !(navbarRect.right < element5Rect.left ||
                            navbarRect.left > element5Rect.right ||
                            navbarRect.bottom < element5Rect.top ||
                            navbarRect.top > element5Rect.bottom
                            );

    // Ändra bakgrundsfärgen på navbar om elementen överlappar varandra
    if (isOverlapping1) {
        navbar.style.transition = 'background-color 0.5s ease';
        navbar.style.backgroundColor = 'midnightblue'; 
        // console.log('Overlapping1', window.getComputedStyle(navbar).getPropertyValue('background-color'));
    } 
    else if (isOverlapping2) {
        navbar.style.transition = 'background-color 0.5s ease';
        navbar.style.backgroundColor = '#222'; 
        // console.log('Overlapping1', window.getComputedStyle(navbar).getPropertyValue('background-color'));
    } 
    else if (isOverlapping3) {
        navbar.style.transition = 'background-color 0.5s ease';
        navbar.style.backgroundColor = 'rgb(102, 0, 102)'; 
        // console.log('Overlapping2', window.getComputedStyle(navbar).getPropertyValue('background-color'));
    }
    else if (isOverlapping4) {
        navbar.style.transition = 'background-color 0.5s ease';
        navbar.style.backgroundColor = '#333'; 
        // console.log('Overlapping2', window.getComputedStyle(navbar).getPropertyValue('background-color'));
    }
    else if (isOverlapping5) {
        navbar.style.transition = 'background-color 0.5s ease';
        navbar.style.backgroundColor = '#333'; 
        // console.log('Overlapping2', window.getComputedStyle(navbar).getPropertyValue('background-color'));
    }
    else {
        // Återställ till standard bakgrundsfärg om elementen inte längre överlappar
        navbar.style.transition = 'background-color 0.5s ease';
        navbar.style.backgroundColor = '';
    }
}

// Lyssna på händelsen när sidan scrollas och kör checkOverlapAndChangeColor-funktionen för de två angivna elementen
window.onscroll = function(){
    checkOverlapAndChangeColor('bild', 'Rubrik', 'content', 'project', 'project2');
    // checkOverlapAndChangeColor('Rubrik');
}
