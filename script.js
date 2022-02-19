// Lorsque j'appuie sur mon lien ALORS autres liens apparaissent
// détecter quand j'appuie sur mon lien
// y ajouter ma fonction

const menuDeroulant = document.querySelector(".menuDeroulant");
const article = document.querySelector(".article");

article.addEventListener("click", ()=>{
    menuDeroulant.classList.toggle("menuDeroulantCache");
});

//sinon faire ça si l'onglet est un lien qui emmène vers toutes les collections
// nftCol.addEventListener("mouseover", () =>{
//     onglet.classList.add("ongletBlock");
// })
// nftCol.addEventListener("mouseout", () =>{
//     onglet.classList.remove("ongletBlock");
// })
