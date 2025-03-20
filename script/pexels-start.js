const APIKey = 'PA3kOW0Sflfbq1yPCWPFkA7G25eRlKqJMLlfBbwmLoUxVl73IeV6p4X0'

const mountainsImgURL = 'https://api.pexels.com/v1/search?query=mountains'
const kittenImgURL = 'https://api.pexels.com/v1/search?query=kitten'
const onionsImgURL = 'https://api.pexels.com/v1/search?query=onions'
const imgsHtml = document.querySelectorAll('.card-img-top')
const imgsID = document.querySelectorAll('.text-muted')




//montagne

const getMountainsImgs = function (query) {

    fetch('https://api.pexels.com/v1/search?query=' + query, {
        headers: {
            Authorization: 'PA3kOW0Sflfbq1yPCWPFkA7G25eRlKqJMLlfBbwmLoUxVl73IeV6p4X0'
        }
    })
    .then((response) => {
        if(response.ok){
            return response.json()
        } else {
            throw new Error('errore prima parte, not ok')
        }
    })
    .then((mountains) => {
        console.log('mountains', mountains)
        // è un oggetto contentente un array di 15 oggetti.
        // mountains.photos[i].url oppure .src.small .portrait .medium
        // ora bisogna assegnare ogni singola foto alle card che esistono già

        // document.getElementById("imageid").src="../template/save.png";


        if (!mountains.photos || mountains.photos.length === 0) {
            throw new Error('Nessuna foto disponibile');
        }


        const numImages = Math.min(imgsHtml.length, mountains.photos.length)

        for (let i = 0; i < numImages; i++) {
            const photo = mountains.photos[i]
            
            imgsHtml[i].src = photo.src.large
            imgsID[i].innerText =  photo.id
        }


    })
    .catch((err) => {
        console.log('si è verificato un errore', err)
    })




}

//CIPOLLE
const getCipolleImgs = function (query) {

    fetch('https://api.pexels.com/v1/search?query=' + query, {
        headers: {
            Authorization: 'PA3kOW0Sflfbq1yPCWPFkA7G25eRlKqJMLlfBbwmLoUxVl73IeV6p4X0'
        }
    })
    .then((response) => {
        if(response.ok){
            return response.json()
        } else {
            throw new Error('errore prima parte, not ok')
        }
    })
    .then((mountains) => {
        console.log('mountains', mountains)
        // è un oggetto contentente un array di 15 oggetti.
        // mountains.photos[i].url oppure .src.small .portrait .medium
        // ora bisogna assegnare ogni singola foto alle card che esistono già

        // document.getElementById("imageid").src="../template/save.png";


        if (!mountains.photos || mountains.photos.length === 0) {
            throw new Error('Nessuna foto disponibile');
        }


        const numImages = Math.min(imgsHtml.length, mountains.photos.length)

        for (let i = 0; i < numImages; i++) {
            const photo = mountains.photos[i]
            imgsHtml[i].src = photo.src.large
            imgsID[i].innerText =  photo.id
            
        }


    })
    .catch((err) => {
        console.log('si è verificato un errore', err)
    })




}

// montagne

const loadMountains = document.getElementById('load-button')

loadMountains.addEventListener('click', function(){
    getMountainsImgs('mountains')

})

//cipolle

const loadCipolle = document.getElementById('cipolla-button')

loadCipolle.addEventListener('click', function(){
    getCipolleImgs('onions')

})

// edit - hide buttons

const editBtns = document.querySelectorAll('.edit')

editBtns.forEach(btn => {
    btn.addEventListener('click', function (){
        if(btn.innerText === 'Edit') {
            btn.innerText = 'Hide'
            console.log('funziono')
        } else if (btn.innerText === 'Hide') {
            const card = btn.closest('.card')
            card.classList.add('d-none')
        }
        
    })
})



// 6) Nella sezione principale aggiungi un campo di ricerca. Usa il valore di questo campo per cercare nuove immagini rimpiazzando quelle esistenti.





const customInput = document.getElementById('custom-value')
const customButton = document.getElementById('custom-button')



const loadImgs = function (query) {

    fetch('https://api.pexels.com/v1/search?query=' + query, {
        headers: {
            Authorization: 'PA3kOW0Sflfbq1yPCWPFkA7G25eRlKqJMLlfBbwmLoUxVl73IeV6p4X0'
        }
    })
    .then((response) => {
        if(response.ok){
            return response.json()
        } else {
            throw new Error('errore prima parte, not ok')
        }
    })
    .then((mountains) => {
        console.log('mountains', mountains)
        // è un oggetto contentente un array di 15 oggetti.
        // mountains.photos[i].url oppure .src.small .portrait .medium
        // ora bisogna assegnare ogni singola foto alle card che esistono già

        // document.getElementById("imageid").src="../template/save.png";


        if (!mountains.photos || mountains.photos.length === 0) {
            throw new Error('Nessuna foto disponibile');
        }


        const numImages = Math.min(imgsHtml.length, mountains.photos.length)

        for (let i = 0; i < numImages; i++) {
            const photo = mountains.photos[i]
            
            imgsHtml[i].src = photo.src.large
            imgsID[i].innerText =  photo.id
        }


    })
    .catch((err) => {
        console.log('si è verificato un errore', err)
    })




}


customButton.addEventListener('click', function() {
    loadImgs(customInput.value)
})
// 7) Cliccare l'immagine o il suo nome farà cambiare pagina verso una di dettaglio dell'immagine. Qui dovrai visualizzare immagine, nome artista e linkare la sua pagina personale. Dai la possibilità all'utente di tornare indietro come esercizio fatto giovedì in classe

const getAvgColors = function (query) {

    fetch('https://api.pexels.com/v1/search?query=' + query, {
        headers: {
            Authorization: 'PA3kOW0Sflfbq1yPCWPFkA7G25eRlKqJMLlfBbwmLoUxVl73IeV6p4X0'
        }
    })
    .then((response) => {
        if(response.ok){
            return response.json()
        } else {
            throw new Error('errore prima parte, not ok')
        }
    })
    .then((colors) => {
        console.log('mountains', colors)
        // è un oggetto contentente un array di 15 oggetti.
        // mountains.photos[i].url oppure .src.small .portrait .medium
        // ora bisogna assegnare ogni singola foto alle card che esistono già

        // document.getElementById("imageid").src="../template/save.png";


        if (!colors.photos || colors.photos.length === 0) {
            throw new Error('Nessuna foto disponibile');
        }


        const numImages = Math.min(imgsHtml.length, colors.photos.length)

        for (let i = 0; i < numImages; i++) {
            //const photo = mountains.photos[i]
            const modalBody = document.getElementById('modal-body')
            const avgBG = colors.photos[i].avg_color

            modalBody.style.backgroundColor = avgBG
        }


    })
    .catch((err) => {
        console.log('si è verificato un errore', err)
    })




}


// quando clicchi view, ti apre un modale con l'immagine più grande + avg color
const viewBtns = document.querySelectorAll('.view')

viewBtns.forEach(btn => {
    btn.addEventListener('click', function (e){
        //quando clicco questo la src dll'img cliccata deve andare alla src del modale
        const modalPicture = document.querySelector('.modal-img')
        modalPicture.src = e.target.closest('.card').querySelector('img').src
        getAvgColors('beach')
        
    })
})


// ogni img ha un avg_color, metterla come sfondo al modale






// repo stefano https://github.com/irvelervel/FS0125-U2-W3-D4-HW
