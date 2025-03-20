const APIKey = 'PA3kOW0Sflfbq1yPCWPFkA7G25eRlKqJMLlfBbwmLoUxVl73IeV6p4X0'

const mountainsImgURL = 'https://api.pexels.com/v1/search?query=mountains'
const kittenImgURL = 'https://api.pexels.com/v1/search?query=kitten'
const onionsImgURL = 'https://api.pexels.com/v1/search?query=onions'
const imgsHtml = document.querySelectorAll('.card-img-top')



// 1) Premere sul bottone "Load Images" caricherà il contenuto delle API nella pagina: //fetch get
// 2) Premere sul bottone "Load Secondary Images" invece dovrà usare una diversa query:https://api.pexels.com/v1/search?query=kittens //fetch get
// 3) Il tasto "Edit" andrà sostituito con un tasto "Hide".
// 4) Quando si preme "Hide", l'intera card dovrebbe scomparire.
// 5) Sostituisci il testo "9 mins" del template delle card con l'id dell'immagine corrispondente. //fetch get specifica?
// 6) Nella sezione principale aggiungi un campo di ricerca. Usa il valore di questo campo per cercare nuove immagini rimpiazzando quelle esistenti.
// 7) Cliccare l'immagine o il suo nome farà cambiare pagina verso una di dettaglio dell'immagine. Qui dovrai visualizzare immagine, nome artista e linkare la sua pagina personale. Dai la possibilità all'utente di tornare indietro
// extras later


const getMountainsImgs = function () {

    fetch(mountainsImgURL, {
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
            imgsHtml[i].src = photo.src.small
        }


    })
    .catch((err) => {
        console.log('si è verificato un errore', err)
    })




}

//CIPOLLE
const getCipolleImgs = function () {

    fetch(onionsImgURL, {
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
            imgsHtml[i].src = photo.src.small
        }


    })
    .catch((err) => {
        console.log('si è verificato un errore', err)
    })




}







const loadMountains = document.getElementById('load-button')

loadMountains.addEventListener('click', function(){
    getMountainsImgs()

})

const loadCipolle = document.getElementById('cipolla-button')

loadCipolle.addEventListener('click', function(){
    getCipolleImgs()

})


const editBtns = document.querySelectorAll('.edit')

editBtns.forEach(btn => {
    btn.addEventListener('click', function (){
        const card = btn.closest('.card')

        if(btn.innerText === 'View') {
            btn.innerText = 'Hide'
            console.log('funziono')
        }
        
    })
})
