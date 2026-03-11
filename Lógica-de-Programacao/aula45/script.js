// try {
//    // É executado quando não há erros
// } catch (erro) {
//    // É executado quando há erros
// } finally {
//    // Sempre é executado
// }


// try {
//    // console.log(a)
//    console.log('Abri um arquivo');
//    console.log('Manipulei o arquivo e gerou erro');
//    console.log('Fechei o arquivo');

//    try {
//       console.log(b);
//    } catch (e) {
//       console.log('Deu erro');
//    } finally {
//       console.log('Também sou finnaly.');
//    }

// } catch (erro) {
//    console.log('Tratando o erro');
// } finally {
//    console.log('FINALLY: Eu sempre sou executado');
// }


function retornaHora(data) {
   if (data && !(data instanceof Date)) {
      throw new TypeError('Esperando instância de Date.');
   }
   if (!data) {
      data = new Date();
   }

   return data.toLocaleTimeString('pt-BR', {

   });
}

try {
   const data = new Date('01/01/1970 12:58:12')
   const hora = retornaHora();
   console.log(hora);
} catch(erro) {
   // Tratar erro
   console.log(erro)
} finally {
   console.log('Tenha um Bom Dia!');
}