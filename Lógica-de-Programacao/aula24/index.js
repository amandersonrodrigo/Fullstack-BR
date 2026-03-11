/*
Entre 0 - 11 - Bom Dia
Entre 12 e 18 - Boa Tarde
Entre 19 e 23 - Boa No ite
*/ 

const hora = 14;

if (hora >= 0 && hora < 12) {
    console.log('Bom Dia!!');
} else if (hora >= 12 && hora < 18) {
    console.log('Boa Tarde!!');
} else if (hora >=18 && hora <= 23) {
    console.log('Boa Noite!!');
} else  {
    console.log('Olá!')
}
