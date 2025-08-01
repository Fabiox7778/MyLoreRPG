//Atributos do personagem:
let nome = "Arthur Targaryen";
let classe = "Rei Mago"; //Maior classe possivel
let nivel = 10000000000000000000000000000000000000000000000;
let vida = 1000000000000000000000000;
let moedas = 1000000000;
let xp = 1000000000000000000000000000000000000000000000000;


//Atributos da Arma:
const NOMEARMA = "Cumpridor de Promessas"; //Cajado
let DANO_BASE = 1000000000000000000000000000000000000000000000000000000000;
const RARIDADEARMA = "Divino";
const ELEMENTOARMA = "Amaterasu"; //Chama negra que nunca apaga

//Atributos da Armadura:
const NOMEARMADURA = "Drogon";
const DEFESA_BASE = 100000000000000000000000000000000000000000000000;
const RARIDADEARMADURA = "Divino";
const MATERIAL = "Aço Valiriano";

//Aplicação dos operadores 
xp += 150 //do treino
moedas -= 30 //comprou poção
vida += 40 //tomou poção
DANO_BASE *= 2 //Sua arma foi mais encantada

//Cauculo atributos finais:
let ataqueTotal = DANO_BASE + nivel;
let defesaTotal = DEFESA_BASE + (nivel / 2);

//Avaliação de prontidao com operadores lóicos:
let vidaSulficiente = vida >= 70;
let ataqueForte = ataqueTotal >= 60;
let nivelAvancado = nivel >= 10;
let podeenfrentarGuardiao = vidaSulficiente + (ataqueForte || nivelAvancado);

console.log("🧾 LORE DO HERÓI: Arthur Targaryen");
console.log("----------------------------------------");
console.log(`O ${classe} ${nome} de nivel ${nivel}, nasceu em um mundo muito avancado tecnologicamente e onde era comum todos terem magia.`)
console.log(`Porém ele era um mero plebeu na infancia que nao morava na cidade principal que se chamava Techlending.`);
console.log("E infelizmente ele nasceu sem uma das coisas mais estimadas daquele mundo... A MAGIA!!");
console.log("Só que treinava muito e muito todos os dias, um menino gentil e carinhoso.");
console.log(`Em um dia os techdemons chegaram em sua vila, foram quebrando tudo, e quando nao se tinha mais esperança... Um cajado divino, a ${NOMEARMA}, com uma raridade muito antiga e perdida pelos seculos, a ${RARIDADEARMA}, o cajado de dano ${DANO_BASE} desce dos céus nos pés de um enorme dragão, e vem em direção de Arthur.`);
console.log(`Nesse momento ele é envolto de uma armadura magica, a ${NOMEARMADURA}, sobe em seu mais novo dragão e pega o cajado ${NOMEARMA}, somente com o balancar de seu cajado derrota todos os inimigos que ameaçavam sua amada vila.`);
console.log("Assim ele se sente no direito de ajudar todos que passam essas dificildades e faz o objetivo de derrotar o... Rei Demônio, guardião dos infernos e lider de todos os malsweres e demônios.");
console.log(`Vida suficiente? ${vidaSulficiente} | Ataque forte? ${ataqueForte} | Nível avançado? ${nivelAvancado}.`);
console.log("Entâo enquanto envelhece e cresce, cada vez mais forte, crescendo em força exponencialmente. Ele vai derrotando os demonios e malweres");
console.log(`Pode enfrentar o Rei Demônio? ${podeenfrentarGuardiao}. Quando chega, derrota o Rei Demônio com um único golpe e salva o mundo. Sendo declarado o novo rei e guardião do planeta, assim segue em seu papel de guardiao ${nome}.`);
