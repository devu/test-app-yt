export default function(){

    var terms = ['Ryzen', 'Test', 'Holidays', 'Marvel', 'Music', 'Intel', 'AMD', 'NVidia', 'Forest', 'Sea', 'Grass'];
    var index = Math.floor(Math.random() * terms.length);

    return { 
        term: terms[index]
    }
}