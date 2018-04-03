window.addEventListener('load', iniciar);


function calulo() {


var media, n1, n2, n3 ;

n1= prompt ("Informe a primeira nota: ") ;
n1= eval (n1) ;

n2= prompt ("Informe a segunda nota: ") ;
n2= eval (n2) ; 

n3= prompt ("Informe a terceira nota: ") ; 
n3= eval (n3) ;

media = (n1 + n2 + n3)/3 ; 

if ( media >= 6 ) {
document.write ("Aprovado");

} else {

if ( media =< 5 ) {
document.write ("Reprovado");

} else {

document.write ("Recuperação");
}}

}



var dia = obterDiaDaSemana(0);
console.log(dia);

console.log(somarElementos(1, 100));
console.log(somarElementos(2, 2000));
console.log(somarElementos(5, 6));
console.log(somarElementos(10, 5));

function obterDiaDaSemana(dia) {
  var diaSemana = "";
  switch(dia) {
    case 0: diaSemana = "Domingo";       break;
    case 1: diaSemana = "Segunda-feira"; break;
    case 2: diaSemana = "Terça-feira";   break;
    case 3: diaSemana = "Quarta-feira";  break;
    case 4: diaSemana = "Quinta-feira";  break;
    case 5: diaSemana = "Sexta-feira";   break;
    case 6: diaSemana = "Sábado";        break;
    default: diaSemana = "Dia inválido";
  }
  return diaSemana;
}

function somarElementos(de, ate) {
  var soma = 0;
  for(var i = de; i <= ate; i++)
    soma += i;
  return soma;
}







