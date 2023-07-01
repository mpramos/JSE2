//! g: buscar el patrón en todo el texto
//! i:no distingue en mayusculas y minusculas

let patron='javascript'
let bandera='gi'
let regEx= new RegExp(patron,bandera)
console.log(regEx);

let reExp=/javascript/gi
console.log(reExp);

//! test
// (): verifica si un string coincide con la expresión regular true false
const str='Evolutech javaScript'
const patron1=/Javascript/i
const resultado1=patron1.test(str)
console.log(resultado1);
//! match
// (): devuelve un arreglo de los valores que coinciden con la expresión regular
const str1='Evolutech javascript'
const patron2=/javascript/g
const resultado2=str1.match(patron2)
console.log(resultado2);
//! serach
//():devuelve una posición del primer valor encontrado o -1
const str2='Evolutech javascript'
const patron3=/Javascript/g
const resultado3=str2.search(patron3)
console.log(resultado3);
//! replace
//():sustituye todos los elementos por lo especificado
const str3='Evolutech Javascript es mi lenguaje favorito.'

cadenaRemplazada=str3.replace(/Javascript|javascript/,'Python')
console.log(cadenaRemplazada);

const txt='%Yo soy%estudiante de evolutech/ y%si termino%con todos mis examenes de Cisco entonces recibiré el certificado'
cadenaRemplazada2=txt.replace(/%/g,'')
console.log(cadenaRemplazada2);

/**
 * []: un conjunto de caracteres
[ac] significa, a o b o c
[az] significa, cualquier letra de la a a la z
[AZ] significa, cualquier caracter de la A a la Z
[0-3] significa, 0 o 1 o 2 o 3
[0-9] significa cualquier número del 0 al 9
[A-Za-z0-9] cualquier carácter que sea de la a a la z, de la A a la Z, del 0 al 9
\: utiliza para escapar caracteres especiales
\d significa: coincidencia donde la cadena contiene dígitos (números del 0 al 9)
\D significa: coincidencia donde la cadena no contiene dígitos
. : cualquier carácter excepto el carácter de nueva línea (\n)
^: comienza con
r'^subcadena', por ejemplo, r'^amor', una oración que comienza con una palabra amor
r'[^abc] significa no a, no b, no c.
$: termina en
r'subcadena$', por ejemplo, r'amor$', la oración termina con una palabra amor
*: cero o más veces
r'[a]*' significa un opcional o puede ocurrir muchas veces.
+: una o más veces
r'[a]+' significa al menos una o más veces
?: cero o una vez
real academia de bellas artes]?' significa cero veces o una vez
\b: delimitador de palabras, coincide con el principio o el final de una palabra
{3}: exactamente 3 caracteres
{3,}: al menos 3 caracteres
{3,8}: de 3 a 8 caracteres
|: Cualquiera o
r'manzana|plátano' significa una manzana o un plátano
(): Captura y grupo
 */
