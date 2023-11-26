function showMadLib() {
    const inputs = document.getElementById('inputs');
    inputs.style.display = 'none';
    const outputs = document.getElementById('outputs');
    outputs.style.display = 'block';


    let adj1 = document.getElementById("adj1");
    document.getElementById('adj1Out').innerHTML=adj1.value;

    let noun1 = document.getElementById("noun1");
    document.getElementById('noun1Out').innerHTML=noun1.value;

    let verb1 = document.getElementById("verb1");
    document.getElementById('verb1Out').innerHTML=verb1.value;

    let adv1 = document.getElementById("adv1");
    document.getElementById('adv1Out').innerHTML=adv1.value;

    let adj2 = document.getElementById("adj2");
    document.getElementById('adj2Out').innerHTML=adj2.value;

    let noun2 = document.getElementById("noun2");
    document.getElementById('noun2Out').innerHTML=noun2.value;

    let noun3 = document.getElementById("noun3");
    document.getElementById('noun3Out').innerHTML=noun3.value;

    let adj4 = document.getElementById("adj4");
    document.getElementById('adj4Out').innerHTML=adj4.value;

    let verb2 = document.getElementById("verb2");
    document.getElementById('verb2Out').innerHTML=verb2.value;

    let adv2 = document.getElementById("adv2");
    document.getElementById('adv2Out').innerHTML=adv2.value;    

    let verb3 = document.getElementById("verb3");
    document.getElementById('verb3Out').innerHTML=verb3.value;

    let adj5 = document.getElementById("adj5");
    document.getElementById('adj5Out').innerHTML=adj5.value;

}

function showReset() {
    const inputs = document.getElementById('inputs');
    inputs.style.display = 'block';
    const outputs = document.getElementById('outputs');
    outputs.style.display = 'none';
}