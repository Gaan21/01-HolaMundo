console.log ('Inicio de programa');


setTimeout(() => {
    console.log('Primer timeot')

}, 3000);

setTimeout(() => {
    console.log('Segundo timeot')
    
}, 0);

setTimeout(() => {
    console.log('Tercer timeot')
    
}, 0);


console.log ('Fin de programa');

//Son instrucciones no bloqueantes. Se ejecutan todas a la vez. Hay una explicacion en el curso de Udemy.