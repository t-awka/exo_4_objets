let vieille_dame = {
    age: 180000,
    nom:{
        prenom:"Gertrude",
        nom_de_famille:"Cabana"
    },
    moral:"mal",
    objet:"AK-47 Golden edition 1999 Albania #DORIAN",
    parler(){
        switch (this.moral) {
            case "mal":
                alert(`Vous me dérangez et le frappe avec son ${this.objet}`)
                break;
            case "bien":
                alert(`Bonjour, ${vieil_homme.nom}`)
                break;
            default:
                break;
        }
    }
}
let vieil_homme = {
    nom:"ALBERT",
    adoucir(){
        vieille_dame.moral = "bien"
    }
}
vieille_dame.parler()
vieil_homme.adoucir()
vieille_dame.parler()