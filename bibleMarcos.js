// Data from: https://sites.google.com/site/biblialivre/arquivos
async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(` Hoje vamos de Marcos para ver se ele perdoa seus pecados!
Evangelho Segundo Marcos

CAPÍTULO 1

1 Princípio do Evangelho de Jesus Cristo, Filho de Deus. 
|fn:  N4 põe entre colchetes "Filho de Deus"
2 Como está escrito nos profetas: Eis que eu envio o meu mensageiro diante de tua face, que preparará o teu caminho diante de ti . 
|fn:  TR, RP: nos profetas - N4: no profeta Isaías |fn:  N4 omite “diante de ti” Malaquias 3:1
3 Voz do que clama no deserto: Preparai o caminho do Senhor, endireitai suas veredas. Isaías 40:3 
4 João veio a batizar no deserto, e a pregar o batismo de arrependimento para perdão dos pecados. 
5 E toda a província da Judeia e os de Jerusalém saíam até ele; e eram todos batizados por ele no rio Jordão, confessando os seus pecados. 
|fn:  N4: todos os de Jerusalém saíam até ele; e eram batizados
6 João se vestia de pelos de camelo, e um cinto de couro em sua cintura; e comia gafanhotos e mel do campo. 
7 Ele pregava assim: Após mim vem aquele que é mais forte do que eu. A ele não sou digno de me abaixar para desatar a tira das suas sandálias. 
8 De fato eu tenho vos batizado com água, porém ele vos batizará com Espírito Santo. 
|fn:  N4 omite “de fato”
9 E aconteceu que, naqueles dias, Jesus de Nazaré da Galileia veio, e foi batizado por João no Jordão. 
10 E assim que saiu da água, viu os céus se abrirem, e o Espírito, que como pomba descia sobre ele. 
11 E veio uma voz dos céus: Tu és meu Filho amado, em quem me agrado. 
|fn:  N4: em ti
12 E logo o Espírito o impeliu ao deserto. 
13 Ele esteve ali no deserto quarenta dias, tentado por Satanás. Ele estava com os animais selvagens, e os anjos o serviam. 
|fn:  N4 omite “ali”
14 Depois que João foi preso, Jesus veio para a Galileia, pregando o Evangelho do Reino de Deus, 
|fn:  N4 omite “do Reino”
15 e dizendo: O tempo se cumpriu, e o Reino de Deus está perto; arrependei-vos, e crede no Evangelho. 
16 E enquanto andava junto ao mar da Galileia, ele viu Simão e seu irmão André, que lançavam uma rede ao mar, porque eram pescadores; 
17 Jesus lhes disse: Vinde após mim, e farei serdes pescadores de gente. 
18 Então logo deixaram suas redes, e o seguiram. 
|fn:  N4 omite “suas”
19 E passando dali um pouco mais adiante, viu Tiago [filho] de Zebedeu, e seu irmão João, que estavam no barco, consertando as redes. 
|fn:  N4 omite “dali”
20 E logo os chamou; então eles deixaram o seu pai Zebedeu no barco com os empregados, foram após ele. 
21 Eles entraram em Cafarnaum; e assim que chegou o sábado, [Jesus] entrou na sinagoga e começou a ensinar. 
22 E ficavam admirados com o seu ensinamento, pois, diferentemente dos escribas, ele os ensinava como quem temautoridade. 
23 E havia na sinagoga deles um homem com um espírito imundo, que gritou, 
|fn:  N4: logo apareceu
24 dizendo: Ah, que temos contigo, Jesus Nazareno? Vieste para nos destruir? Bem sei quem és: o Santo de Deus. 
25 Jesus o repreendeu, dizendo: Cala-te, e sai dele. 
26 E o espírito imundo, provocando convulsão nele, e gritando em alta voz, saiu dele. 
27 Assim todos ficaram admirados, e perguntavam entre si: Que é isto? Que novo ensinamento é este que, com autoridade, ordena até aos espíritos imundos, e eles lhe obedecem? 
|fn:  N4: Que novo ensinamento com autoridade! Ele ordena até aos espíritos imundos, e eles lhe obedecem!
28 E logo sua fama se espalhou por toda a região da Galileia. 
29 Logo depois de saírem da sinagoga, vieram à casa de Simão e de André, com Tiago e João. 
30 A sogra de Simão estava deitada com febre, e logo falaram dela [a Jesus] . 
31 Então ele aproximou-se dela, tomou-a pela mão, e a levantou; logo a febre a deixou, e ela começou a servi-los. 
32 Ao entardecer, quando o sol já se punha, trouxeram-lhe todos os doentes e endemoninhados; 
33 e toda a cidade se juntou à porta. 
34 Ele curou muitos que se achavam mal de diversas enfermidades, e expulsou muitos demônios. Ele não deixava os demônios falarem, porque o conheciam. 
35 De madrugada, ainda escuro, ele se levantou para sair, foi a um lugar deserto, e ali esteve a orar. 
36 Simão e os que estavam com ele o seguiram. 
37 Quando o acharam, disseram-lhe: Todos estão te procurando. 
38 Jesus] lhes respondeu: Vamos para as aldeias vizinhas, para que eu também pregue ali, pois vim para isso. 
39 Ele pregava em suas sinagogas por toda a Galileia, e expulsava os demônios. 
|fn:  N4: foi pregar
40 Um leproso aproximou-se dele, rogando-lhe, pondo-se de joelhos diante dele , e dizendo-lhe: Se quiseres, tu podes limpar-me. 
|fn:  N4 omite “diante dele”
41 E Jesus , movido de compaixão, estendeu a mão, tocou-o, e disse-lhe: Quero; sê limpo. 
42 Quando disse isso, logo a lepra saiu dele, e ficou limpo. 
|fn:  N4 omite “Quando disse isso”
43 Jesus] advertiu-o, e logo o despediu, 
44 dizendo-lhe: Cuidado, não digas nada a ninguém. Mas vai, mostra-te ao Sacerdote, e oferece por teres ficado limpo o que Moisés mandou, para lhes servir de testemunho. 
45 Porém, quando ele saiu, começou a anunciar muitas coisas, e a divulgar a notícia, de maneira que [Jesus] já não podia entrar publicamente na cidade; em vez disso, ficava do lado de fora em lugares desertos, e [pessoas] de todas as partes vinham até ele.

CAPÍTULO 2

1 Dias depois, [Jesus] entrou outra vez em Cafarnaum, e ouviu-se que estava em casa. 
2 Logo juntaram-se tantos, que nem mesmo perto da porta cabiam; e ele lhes falava a palavra. 
|fn:  N4 omite “logo”
3 E vieram a ele uns que traziam um paralítico carregado por quatro. 
|fn:  N4: vieram uns que traziam-lhe
4 Como não podiam se aproximar dele por causa da multidão, descobriram o telhado onde ele estava, fizeram um buraco, e baixaram [por ele] o leito em que jazia o paralítico. 
|fn:  N4: trazer até ele
5 Quando Jesus viu a fé deles, disse ao paralítico: Filho, os teus pecados te são perdoados. 
|fn:  N4: estão
6 E estavam ali sentados alguns escribas, que pensavam em seus corações: 
|fn:  Lit. “indagavam”, “questionavam”
7 Por que este [homem] fala essas blasfêmias? Quem pode perdoar pecados, a não ser somente Deus? 
|fn:  N4: fala assim? Ele está blasfemando!
8 Imediatamente Jesus percebeu em seu espírito que assim pensavam em si mesmos. Então perguntou-lhes: Por que pensais assim em vossos corações? 
|fn:  Lit. “essas coisas”
9 O que é mais fácil? Dizer ao paralítico: “Os teus pecados estão perdoados”, ou dizer, “Levanta-te, toma o teu leito, e anda”? 
10 Mas para que saibais que o Filho do homem tem poder na terra para perdoar pecados, (disse ao paralítico): 
11 A ti eu digo: levanta-te, toma o teu leito, e vai para a tua casa. 
12 E logo ele se levantou, tomou o leito, e saiu na presença de todos, de tal maneira, que todos ficaram admirados, e glorificaram a Deus, dizendo: Nunca vimos algo assim. 
13 Jesus] voltou a sair para o mar; toda a multidão veio até ele, e ele os ensinava. 
14 E enquanto passava, ele viu Levi, [filho] de Alfeu, sentado no posto de coleta de impostos, e disse-lhe: Segue-me. Então [Levi] se levantou e o seguiu. 
15 E aconteceu que enquanto estava sentado à mesa na casa dele, muitos cobradores de impostos e pecadores também estavam também sentados à mesa com Jesus e os seus discípulos; porque eram muitos, e o haviam seguido. 
16 Quando os escribas e os fariseus o viram comer com os cobradores de impostos e pecadores, disseram a seus discípulos: Por que é que ele come e bebe com os cobradores de impostos e os pecadores? 
|fn:  N4: escribas dos fariseus |fn: 
17 Jesus ouviu e lhes respondeu: Os que têm saúde não precisam de médico, mas sim os que estão doentes. Eu não vim para chamar os justos, mas sim os pecadores ao arrependimento. 
|fn:  N4 omite “ao arrependimento”
18 Os discípulos de João e os dos fariseus estavam jejuando; então vieram lhe perguntar: Por que os discípulos de João e os dos fariseus jejuam, e os teus discípulos não jejuam? 
19 Jesus lhes respondeu: Podem os convidados do casamento jejuar enquanto o noivo estiver com eles? Enquanto tiverem o noivo consigo, eles não podem jejuar. 
|fn:  convidados – lit. filhos
20 Mas dias virão, quando o noivo lhes for tirado; e então naqueles dias jejuarão. 
|fn:  N4: naquele dia
21 Ninguém costura remendo de pano novo em roupa velha; senão o remendo novo rompe o velho, e se faz pior rasgo. 
22 E ninguém põe vinho novo em odres velhos; senão o vinho novo rompe os odres, derrama-se o vinho, e os odres se danificam; mas o vinho novo deve ser posto em odres novos. 
|fn:  N4 omite “novo” |fn:  N4: “e o vinho se perde com os odres”
23 E aconteceu que, enquanto [Jesus] passava pelas plantações no sábado, os seus discípulos, andando, começaram a arrancar espigas. 
24 Os fariseus lhe disseram: Olha! Por que estão fazendo o que não é lícito no sábado? 
25 E ele lhes disse: Nunca lestes o que fez Davi, quando teve necessidade e fome, ele e os que com ele estavam? 
26 Como ele entrou na Casa de Deus, quando Abiatar era sumo sacerdote, e comeu os pães da proposição (dos quais não é lícito comer, a não ser aos sacerdotes), e também deu aos que com ele estavam? 
27 Disse-lhes mais: O sábado foi feito por causa do ser humano, não o ser humano por causa do sábado. 
28 Por isso o Filho do homem é Senhor até do sábado.

CAPÍTULO 3

1 Jesus] entrou outra vez na sinagoga; e estava ali um homem que tinha uma mão definhada. 
|fn:  N4: numa
2 E prestavam atenção nele, se o curaria no sábado, para o acusarem. 
3 E [Jesus] disse ao homem que tinha a mão definhada: Levanta-te, e vem para o meio. 
4 E disse-lhes: É lícito no sábado fazer o bem, ou o mal? Salvar uma pessoa, ou matá-la? E mantiveram-se calados. 
5 E olhando ao redor para eles com indignação, sentindo pena da dureza dos seus corações, disse ao homem: Estende a tua mão. E ele estendeu; e sua mão foi restaurada , sã como a outra. 
|fn:  N4 omite “tua” |fn:  N4 omite “sã como a outra”
6 Assim que os fariseus saíram, tiveram reunião com os herodianos contra ele, para combinarem sobre como o matariam. 
7 E Jesus retirou-se com os seus discípulos para o mar; e seguiu-o uma grande multidão da Galileia, da Judeia, 
8 de Jerusalém, da Idumeia, dalém do Jordão, e os das proximidades de Tiro e de Sidom; uma grande multidão, tendo ouvido quão grandes coisas fazia, vieram a ele. 
|fn:  N4 omite “os”
9 E disse aos seus discípulos que um barquinho ficasse continuamente perto dele, por causa das multidões; para que não o apertassem. 
10 Pois havia curado muitos, de maneira que todos quantos tinham algum mal lançavam-se sobre ele a fim de tocá-lo. 
11 E os espíritos imundos, quando o viam, prostravam-se diante dele, e exclamavam: Tu és o Filho de Deus. 
12 Mas [Jesus] os repreendia muito, para que não manifestassem quem ele era. 
13 Ele subiu ao monte, e chamou para si os que quis; então vieram a ele. 
14 E constituiu doze para que estivessem com ele, para enviá-los a pregar, 
15 para que tivessem poder de curar as enfermidades e expulsar os demônios. 
|fn:  N4 omite “curar as enfermidades e”
16 Eram eles: Simão, a quem pôs por nome Pedro; 
17 Tiago [filho] de Zebedeu, e João, irmão de Tiago; e pôs-lhes por nome Boanerges, que significa “filhos do trovão”; 
18 e André, Filipe, Bartolomeu, Mateus, Tomé; Tiago [filho] de Alfeu; Tadeu; Simão o zelote; 
|fn:  Tradicionalmente “cananeu”, mas provavelmente o significado não tenha a ver com Caná ou Canaã
19 e Judas Iscariotes, o que o traiu. 
20 Quando foram para uma casa, outra vez se ajuntou uma multidão, de maneira que nem sequer podiam comer pão. 
|fn:  N4: foi
21 Os seus [familiares] , ao ouvirem isso, saíram para detê-lo, porque diziam: “Ele stá fora de si”. 
22 E os escribas que haviam descido de Jerusalém diziam: Ele tem Belzebu, e é pelo chefe dos demônios que expulsa demônios. 
23 Então [Jesus] os chamou, e lhes disse por parábolas: Como pode Satanás expulsar Satanás? 
24 Se algum reino estiver dividido contra si mesmo, tal reino não pode durar; 
25 e se alguma casa estiver dividida contra si mesma, tal casa não pode durar firme. 
26 E se Satanás se levantar contra si mesmo, e for dividido, não pode durar, mas tem fim. 
27 Ninguém pode roubar os bens do valente, quando se entra na casa dele, se antes não amarrar ao valente; depois disso roubará a sua casa. 
28 Em verdade vos digo que todos os pecados serão perdoados aos filhos dos homens, e todas as blasfêmias com que blasfemarem; 
29 mas quem blasfemar contra o Espírito Santo ficará sem perdão para sempre; em vez disso, é culpado do juízo eterno. 
|fn:  N4: pecado
30 Pois diziam: “Ele tem espírito imundo”. 
31 Então chegaram os seus irmãos e a sua mãe ; e estando de fora, mandaram chamá-lo. 
|fn:  N4 põe “a mãe” antes de “os irmãos”
32 A multidão estava sentada ao redor dele. Então disseram-lhe: Eis que a tua mãe e os teus irmãos estão lá fora a te procurar. 
|fn:  RP, N4 acrescentam “e as tuas irmãs”
33 Ele lhes respondeu: Quem é a minha mãe ou os meus irmãos? 
|fn:  N4: e
34 E, olhando em redor aos que estavam sentados perto dele, disse: Eis aqui minha mãe e meus irmãos. 
35 Pois quem fizer a vontade de Deus, esse é meu irmão, minha irmã, e mãe.
|fn:  N4 omite “Pois” |fn:  N4 omite “minha”

CAPÍTULO 4

1 Jesus] começou outra vez a ensinar junto ao mar, e uma grande multidão se ajuntou a ele, de maneira que ele entrou num barco e ficou sentado no mar; e toda a multidão estava em terra junto ao mar. 
2 E ensinava-lhes muitas coisas por parábolas; e dizia-lhes em seu ensinamento: 
3 Ouvi: eis que o semeador saiu a semear; 
4 E aconteceu que, enquanto semeava, uma [parte das sementes] caiu junto ao caminho, e os pássaros do céu vieram, e a comeram. 
|fn:  RP, N4 omitem “do céu”
5 E outra caiu em pedregulhos, onde não havia muita terra; e logo nasceu, porque não tinha terra profunda. 
6 Mas, quando saiu o sol, queimou-se; e porque não tinha raiz, secou-se. 
7 E outra caiu entre espinhos; e os espinhos cresceram e a sufocaram, e não deu fruto. 
8 Mas outra caiu em boa terra, e deu fruto, que subiu, e cresceu; e um deu trinta, outro sessenta, e outro cem. 
9 E disse-lhes : Quem tem ouvidos para ouvir, ouça. 
|fn:  RP, N4 omitem “lhes”
10 E quando [Jesus] esteve só, os que estavam junto dele, com os doze, perguntaram-lhe acerca da parábola . 
|fn:  N4: das parábolas
11 E respondeu-lhes: A vós é concedido saber o mistério do Reino de Deus; mas aos que são de fora, todas estas coisas se fazem por meio de parábolas; 
|fn:  N4 omite “saber”
12 para que vendo, vejam, e não percebam; e ouvindo, ouçam, e não entendam; para não haver de se converterem, e lhes sejam perdoados os pecados . Isaías 6:9-10 
|fn:  N4 omite “os pecados”
13 E disse-lhes: Não sabeis o significado desta parábola? Como, pois, entendereis todas as parábolas? 
14 O semeador semeia a palavra. 
15 E estes são os de junto ao caminho: nos quais a palavra é semeada; mas depois de a ouvirem, Satanás logo vem, e tira a palavra que foi semeada nos seus corações . 
|fn:  N4: semeada neles
16 E, semelhantemente, estes são os que se semeiam em pedregulhos: os que havendo ouvido a palavra, logo a recebem com alegria. 
17 Mas não têm raiz em si mesmos; em vez disso, são temporários. Depois, quando se levanta a tribulação ou aperseguição por causa da palavra, logo caem. 
18 E estes são os que se semeiam entre espinhos: os que ouvem a palavra; 
|fn:  N4: outros
19 mas as preocupações deste mundo, a sedução das riquezas, e as cobiças por outras coisas, entram, sufocam a palavra, e ela fica sem gerar fruto. 
|fn:  N4: do
20 E estes são os que foram semeados em boa terra: os que ouvem a palavra, recebem-na, e dão fruto, um trinta, e outro sessenta, e outro cem. 
21 E ele lhes disse: Por acaso a lâmpada vem a ser posta debaixo de uma caixa ou sob da cama? Não deve ela ser posta na luminária? 
22 Pois não há nada encoberto que não haja de ser revelado; e nada se faz [para ficar] encoberto, mas sim, para ser vir à luz. 
23 Se alguém tem ouvidos para ouvir, ouça. 
24 E disse-lhes: Prestai atenção ao que ouvis: com a medida que medirdes a vós mesmos se medirá, e será acrescentado a vós que ouvis . 
|fn:  N4 omite “que ouvis”
25 Pois ao que tem, lhe será dado; e ao que não tem, até o que tem lhe será tirado. 
26 E dizia: Assim é o Reino de Deus, como se um homem lançasse semente na terra; 
27 e dormisse, e se levantasse, de noite e de dia, e a semente brotasse, e crescesse, sem que ele saiba como. 
28 Pois a terra de si mesma frutifica, primeiro a erva, depois a espiga, depois o grão cheio na espiga. 
|fn:  N4 omite “Pois”
29 E quando o fruto se mostra pronto, logo mete a foice, pois a colheita chegou. 
30 E dizia: A que assemelharemos o Reino de Deus? Ou com que parábola o compararemos? 
31 Com um grão da mostarda que, quando semeado na terra, é a menor de todas as sementes na terra. 
32 Mas, depois de semeado, cresce, e se torna a maior de todas as hortaliças, e cria grandes ramos, de maneira que os pássaros do céu podem fazer ninhos sob a sua sombra. 
33 E com muitas parábolas como essas [Jesus [lhes falava a palavra, conforme o que podiam ouvir. 
34 E não lhes falava sem parábola; mas aos seus discípulos explicava tudo em particular. 
35 Naquele dia, chegando o entardecer, disse-lhes: Passemos para o outro lado. 
36 Então despediram a multidão, e o levaram consigo assim como estava no barco; mas havia também outros barquinhos com ele. 
|fn:  N4: barcos
37 E levantou-se uma grande tempestade de vento; as ondas atingiam por cima do barco, de maneira que já se enchia. 
38 Jesus] estava na popa dormindo sobre uma almofada. Então despertaram-no, e disseram-lhe: Mestre, não te importas que pereçamos? 
39 Então ele se levantou, repreendeu o vento, e disse ao mar: Cala-te, aquieta-te! E o vento se aquietou, e fez-se grande bonança. 
40 E perguntou-lhes: Por que sois tão covardes? Como não tendes fé? 
41 E ficaram muito atemorizados, e diziam uns aos outros: Quem é este, que até o vento e o mar lhe obedecem?

CAPÍTULO 5

1 E chegaram ao outro lado do mar, à terra dos Gadarenos. 
|fn:  N4: Gerasenos
2 Assim que [Jesus] saiu do barco, veio das sepulturas ao seu encontro um homem com um espírito imundo, 
3 que morava nas sepulturas, e nem mesmo com correntes conseguiam prendê-lo; 
|fn:  N4 acrescenta “mais”
4 pois muitas vezes fora preso com grilhões e correntes; mas as correntes eram por ele feitas em pedaços, os grilhões eram esmigalhados, e ninguém o conseguia controlar. 
5 E sempre dia e noite andava gritando pelos montes e pelas sepulturas, e ferindo-se com pedras. 
|fn:  N4: pelas sepulturas e pelos montes
6 Quando ele viu Jesus de longe, correu e prostrou-se diante dele. 
7 E gritou em alta voz: Que tenho eu contigo Jesus, Filho do Deus Altíssimo? Imploro-te por Deus que não me atormentes. 
8 (Pois [Jesus] havia lhe dito: “Sai deste homem, espírito imundo”.) 
9 Então perguntou-lhe: Qual é o teu nome? E respondeu: Legião é o meu nome, porque somos muitos. 
10 E rogava-lhe muito que não os expulsasse daquela terra. 
11 Havia ali perto dos montes uma grande manada de porcos pastando. 
|fn:  RP,N4: do monte
12 E todos [aqueles] demônios rogaram-lhe, dizendo: Manda-nos para aqueles porcos, para que entremos neles. 
13 Imediatamente Jesus lhes permitiu. Então aqueles espíritos imundos saíram para entrar nos porcos; e a manada lançou-se abaixo no mar; (eram quase dois mil) e afogaram-se no mar. 
|fn:  N4 omite “Imediatamente Jesus”
14 Os que apascentavam os porcos fugiram, e avisaram na cidade e nos campos; e pessoas] foram ver o que havia acontecido. 
|fn:  N4 omite “os porcos”
15 Então aproximaram-se de Jesus, e viram o endemoninhado sentado, vestido, e em sã consciência o que tivera a legião; e ficaram apavorados. 
16 E os que haviam visto contaram-lhes o que acontecera ao endemoninhado, e sobre os porcos. 
17 Então começaram a rogar-lhe que saísse do território deles. 
18 Quando [Jesus] entrava no barco, o que fora endemoninhado rogou-lhe que estivesse com ele. 
19 Jesus se recusou, porém lhe disse: Vai para a tua casa, aos teus, e anuncia-lhes quão grandes coisas o Senhor fez contigo, e [como] teve misericórdia de ti. 
20 Então ele foi embora, e começou a anunciar em Decápolis quão grandes coisas Jesus havia feito com ele; e todos se admiravam. 
21 Depois de Jesus passar outra vez num barco para o outro lado, uma grande multidão se ajuntou a ele; e ele ficou junto ao mar. 
22 E eis que veio um dos líderes de sinagoga, por nome Jairo; e quando o viu, prostrou-se aos seus pés. 
|fn:  N4 omite “eis que”
23 E implorava-lhe muito, dizendo: Minha filhinha está a ponto de morrer. [Rogo-te] que venhas pôr as mãos sobre ela, para que seja curada, e viva. 
24 Jesus] foi com ele. Uma grande multidão o seguia, e o apertavam. 
25 E havia uma certa mulher, que tinha um fluxo de sangue havia doze anos, 
|fn:  N4 omite “certa”
26 que tinha sofrido muito por meio de muitos médicos, e gastado tudo quanto possuía, e nada havia lhe dado bom resultado; ao invés disso, piorava. 
27 Quando ela ouviu falar de Jesus, veio entre a multidão por detrás, e tocou a roupa dele. 
28 Pois dizia: Se tão somente tocar as suas roupas, serei curada. 
29 E imediatamente a fonte do seu sangue parou se secou; e sentiu no corpo que já havia sido curada daquele flagelo. 
30 Jesus logo notou em si o poder que dele havia saído. Então virou-se na multidão, e perguntou: Quem tocou as minhas roupas? 
31 E seus discípulos lhe disseram: Eis que a multidão te aperta, e perguntas: Quem me tocou? 
32 E ele olhava em redor, para ver quem havia lhe feito isso. 
33 Então a mulher temendo, e tremendo, sabendo o que havia sido feito em si, veio, prostrou-se diante dele, e disse-lhe toda a verdade. 
|fn:  N4: “lhe havia sido feito”
34 E ele lhe disse: Filha, a tua fé te salvou. Vai em paz, e estejas curada deste teu flagelo. 
35 Estando ele ainda falando, alguns vieram [da casa] do líder de sinagoga, e disseram: A tua filha já morreu; por que ainda estás incomodando o Mestre? 
36 Mas Jesus, assim que ouviu essa palavra que havia sido falada, disse ao líder de sinagoga: Não temas; crê somente. 
|fn:  N4: “não dando atenção a essa palavra”
37 E não permitiu que ninguém o seguisse, a não ser Pedro, Tiago, e João irmão de Tiago. 
38 Ele chegou à casa do líder de sinagoga, e viu o alvoroço, os que choravam muito e pranteavam. 
|fn:  N4: Eles chegaram
39 E ao entrar, disse-lhes: Por que fazeis alvoroço e chorais? A menina não morreu, mas está dormindo. 
40 E riram dele. Porém ele, depois de pôr todos fora, tomou consigo o pai e a mãe da menina, e os que estavam com ele. Em seguida, entrou onde a menina estava deitada. 
|fn:  N4 omite “deitada”
41 Ele pegou a mão da menina, e lhe disse: “Talita cumi”, (que significa: “Menina, eu te digo, levanta-te”). 
42 E logo a menina se levantou e andou, pois já tinha doze anos de idade. E ficaram grandemente espantados. 
|fn:  N4: logo ficaram
43 E mandou-lhes muito que ninguém o soubesse; e mandou que dessem a ela de comer.

CAPÍTULO 6

1 Jesus] partiu-se dali, veio à sua terra, e seus discípulos o seguiram. 
2 E chegando o sábado, começou a ensinar na sinagoga; e muitos, quando o ouviram, espantavam-se, dizendo: De onde lhe [vem] estas coisas? E que sabedoria é esta que lhe foi dada? E tais maravilhas feitas por suas mãos? 
3 Não é este o carpinteiro, filho de Maria, e irmão de Tiago, de José, de Judas, e de Simão? E não estão aqui as suas irmãs conosco? E ofenderam-se nele. 
4 E Jesus lhes dizia: Todo profeta tem honra, menos em sua terra, entre os parentes, e em sua própria casa. 
|fn:  Lit. “Não há profeta sem honra”
5 Ele não pôde ali fazer milagre algum, a não ser somente, pondo as mãos sobre uns poucos enfermos, os curou.] 
6 E ficou admirado da incredulidade deles. Ele percorreu as aldeias do redor, ensinando. 
7 E chamou a si os doze, e começou a enviar de dois em dois; e deu-lhes poder sobre os espíritos imundos. 
8 E mandou-lhes que não tomassem nada para o caminho, a não ser somente um bordão; nem bolsa, nem pão, nem dinheiro no cinto; 
9 mas que calçassem sandálias, e não se vestissem de duas túnicas. 
10 E dizia-lhes: Onde quer que entrardes em alguma casa, ficai ali até que dali saiais. 
11 E todos os que não vos receberem, nem vos ouvirem, quando sairdes dali, sacudi o pó que estiver debaixo de vossos pés, em testemunho contra eles. Em verdade vos digo, que mais tolerável será a [os de] Sodoma ou Gomorra no dia do juízo, do que a [os d] aquela cidade. [] 
|fn:  N4 omite “Em verdade vos digo (...) a os d aquela cidade"
12 Eles, então, se foram, e pregaram que [as pessoas] se arrependessem. 
13 Eles expulsaram muitos demônios, e a muitos enfermos ungiram com azeite, e os curaram. 
14 O rei Herodes ouviu falar disso (porque o nome de [Jesus] já era notório). E dizia: João Batista ressuscitou dos mortos, e por isso estas maravilhas operam nele. 
|fn:  N4: diziam
15 Outros diziam: É Elias; e outros diziam: É profeta, ou como algum dos profetas. 
|fn:  RP, N4 omitem “ou”
16 Quando, porém, Herodes ouviu falar disso, falou: Ele é João, de quem cortei a cabeça. Ele ressuscitou dos mortos. 
|fn:  N4 omite “dos mortos”
17 Pois o próprio Herodes havia mandado prender João, e acorrentá-lo na prisão, por causa de Herodias, mulher do seu irmão Filipe, porque havia se casado com ela. 
18 Pois João dizia a Herodes: Não te é lícito possuir a mulher do teu irmão. 
19 Assim Herodias o odiava, e queria matá-lo, mas não podia, 
20 pois Herodes temia João, sabendo que era um homem justo e santo, e o estimava. E quando o ouvia, fazia muitas coisas, o ouvia de boa vontade. 
|fn:  TR, RP: fazia muitas coisas - N4: ficava muito perplexo
21 Mas veio um dia oportuno, em que Herodes, no dia do seu aniversário, dava uma ceia aos grandes de sua corte, aos comandantes militares, e aos principais da Galileia. 
22 Então a filha dessa Herodias entrou dançando, e agradou a Herodes e aos que estavam sentados com ele. O rei disse à garota: Pede-me quanto quiseres, que eu darei a ti. 
23 E jurou a ela: Tudo o que me pedirdes te darei, até a metade do meu reino. 
24 Então ela saiu, e perguntou à sua mãe: Que pedirei? E ela respondeu: A cabeça de João Batista. 
25 E entrando ela logo apressadamente ao rei, pediu, dizendo: Quero que imediatamente me dês num prato a cabeça de João Batista. 
26 E o rei entristeceu-se muito; [mas, por causa dos juramentos, e dos que estavam juntamente à mesa, não quis recusar a ela. 
27 Então logo o rei enviou o executor com a ordem de trazer ali sua cabeça. Ele, foi, e o decapitou na prisão. 
28 Em seguida, trouxe a sua cabeça num prato, e o deu à garota; e a garota a deu à sua mãe. 
29 Quando os discípulos dele ouviram isso, vieram, pegaram o seu cadáver, e o puseram num sepulcro. 
30 Os apóstolos juntaram-se [de volta] a Jesus, e contaram-lhe tudo, tanto o que haviam feito, como o que haviam ensinado. 
31 E ele lhes disse: Vinde vós à parte a um lugar deserto, e descansai um pouco; pois havia muitos que iam e vinham, e não tinham tempo para comer. 
32 E foram-se num barco a um lugar deserto à parte. 
33 Mas as multidões os viram ir, e muitos o reconheceram. Então correram para lá a pé de todas as cidades, chegaram antes deles, e vieram para perto dele. 
|fn:  RP, N4 omitem as “multidões” |fn:  N4 omite “e vieram para perto dele”
34 Quando Jesus saiu [do barco] , viu uma grande multidão, e teve compaixão deles porque eram como ovelhas que não têm pastor. Assim, começou a lhes ensinar muitas coisas. 
|fn:  N4 omite “Jesus”
35 E quando já era tarde, os seus discípulos vieram a ele, e disseram: O lugar é deserto, e a hora já é tarde. 
36 Despede-os, para eles irem aos campos e aldeias circunvizinhos, e comprarem pão para si; pois não têm o que comer. 
|fn:  TR,RP: pão para si; pois não têm o que comer - N4: comida
37 Mas ele respondeu: Dai-lhes vós mesmos de comer. E eles lhe responderam: Iremos, e compraremos duzentos denários de pão, para lhes darmos de comer? 
38 E ele lhes disse: Quantos pães tendes? Ide ver. Quando souberam, disseram: Cinco, e dois peixes. 
39 E mandou-lhes que fizessem sentar a todos em grupos sobre a grama verde. 
40 E sentaram-se repartidos de cem em cem, e de cinquenta em cinquenta. 
41 Ele tomous os cinco pães e os dois peixes, levantou os olhos ao céu, abençoou, e partiu os pães, e os deu aos seus discípulos, para que os pusessem diante deles. E os dois peixes repartiu com todos. 
|fn:  N4 omite “seus”
42 Todos comeram e se saciaram. 
43 E dos pedaços de pão e dos peixes levantaram doze cestos cheios. 
44 Os que comeram os pães eram quase cinco mil homens. 
|fn:  RP, N4 omitem “quase”
45 Logo depois, ordenou seus discípulos a subirem no barco, e ir adiante para o outro lado, em Betsaida, enquanto ele despedia a multidão. 
46 E, depois de os despedir, foi ao monte para orar. 
47 Ao anoitecer, o barco estava no meio do mar, e [Jesus] sozinho em terra. 
48 E viu que se cansavam muito remando, porque o vento lhes era contrário. Então, perto da quarta vigília da noite, veio a eles andando sobre o mar, e queria passar por eles. 
49 Mas quando eles o viram andando sobre o mar, pensaram que era uma fantasma, e gritaram, 
50 pois todos o viam, e ficaram perturbados. Então logo falou com eles, dizendo: Tende coragem! Sou eu, não tenhais medo. 
51 E subiu a eles no barco, e o vento se aquietou. Eles ficaram muito espantados e maravilhados entre si, 
|fn:  N4 omite “maravilhados”
52 pois não haviam entendido o que tinha acontecido com os pães, porque o coração deles estava endurecido. 
53 Eles terminaram de atravessar o mar, chegaram à terra de Genesaré, e ali aportaram. 
54 E saindo eles do barco, logo o reconheceram. 
55 Então gente de toda a região em redor veio correndo, e começaram a trazer em camas os doentes, aonde quer que ouviam que ele estava. 
56 E aonde quer que ele entrava, em povoados, cidades, ou aldeias, punham os enfermos nas praças, e rogavam-lhe que ao menos tocassem a borda de sua roupa; e todos os que o tocavam, saravam.

CAPÍTULO 7

1 Reuniram-se com ele os fariseus, e alguns dos escribas, que tinham vindo de Jerusalém. 
2 E, quando viram que alguns dos discípulos dele comiam pão com mãos impuras, isto é, sem lavar, repreendiam-lhes. 
|fn:  N4 omite “repreendiam-lhes”
3 (Pois os fariseus, e todos os judeus, mantendo a tradição dos antigos, se não lavarem bastante as mãos, não comem. 
4 E, quando voltam da rua, se não se lavarem, não comem; e há muitas outras coisas que se encarregam deguardar, [como] lavar os copos, as vasilhas, os utensílios de metal, e os leitos). 
|fn:  N4 omite “e os leitos”
5 Depois os fariseus e os escribas lhe perguntaram: Por que os teus discípulos não andam conforme a tradição dos antigos, em vez de comerem pão com as mãos sem lavar? 
|fn:  TR, RP: sem lavar - N4: impuras
6 E ele lhes respondeu: Bem profetizou Isaías acerca de vós, hipócritas! Como está escrito: Este povo me honra com os lábios, mas o seu coração está longe de mim. 
7 Eles, porém, me honram em vão, ensinando [como] doutrinas mandamentos humanos. Isaías 29:13 
8 Pois vós deixais o mandamento de Deus, e mantendes a tradição humana, [como] lavar as vasilhas e os copos; e fazeis muitas outras coisas semelhantes a estas. [] 
|fn:  N4 omite “Pois” |fn:  N4 omite " como o lavar (...) semelhantes a estas
9 E dizia-lhes: Vós dispensais o mandamento de Deus para guardardes a vossa tradição; 
10 porque Moisés disse: Honra o teu pai, e a tua mãe. E quem maldisser ao pai ou à mãe terá de morrer. 
11 Mas vós dizeis: Se o homem disser ao pai ou à mãe: Tudo o que te puder aproveitar de mim é corbã (isto é, oferta), 
12 então não lhe deixais mais nada fazer por seu pai ou por sua mãe. 
13 Assim dispensais a palavra de Deus por vossa tradição, que vós ordenastes; e [fazeis] muitas coisas semelhantes a estas. 
14 E chamando para si toda a multidão, disse-lhes: Ouvi-me todos, e entendei: 
15 Nada há fora do ser humano que nele entre que o possa contaminar; mas o que dele sai, isso é o que contamina o ser humano. 
16 Se alguém tem ouvidos para ouvir, ouça. 
|fn:  N4 omite todo o versículo 16. Compare com Marcos 4:9,23
17 Quando [Jesus deixou a multidão e entrou em casa, seus discípulos lhe perguntaram sobre a parábola. 
18 E ele lhes disse: Também vós estais assim sem entendimento? Não entendeis que tudo o que de fora entra no ser humano não o pode contaminar? 
19 Pois não entra no seu coração, mas, sim, no ventre, e sai para a privada; portanto, todas as comidas são “limpas”. 
20 E dizia: O que sai do ser humano, isso contamina o ser humano. 
21 Pois é de dentro do coração humano que vêm os maus pensamentos, os adultérios, os pecados sexuais, os homicídios, 
22 os roubos, as ganâncias, as maldades, o engano, a depravação, o olho malicioso, a blasfêmia, a soberba, a insensatez. 
|fn:  N4 muda a ordem para: os pecados sexuais, os roubos, os homicídios, os adultérios
23 Todos estes males procedem de dentro, e contaminam o ser humano. 
24 Jesus] levantou-se dali e foi para a região de Tiro e de Sidom. Ele entrou numa casa, e não queria que ninguém soubesse disso, mas não pôde se esconder. 
|fn:  N4 omite “e de Sidom”
25 Pois uma mulher, cuja filhinha tinha um espírito imundo, assim que ouviu falar dele, veio, e prostrou-se a seus pés. 
|fn:  N4: E logo
26 Esta mulher era grega, de nacionalidade sirofenícia; e rogava-lhe que expulsasse o demônio de sua filha. 
27 Mas Jesus lhe disse: Deixa primeiro que os filhos se fartem; porque não é bom tomar o pão dos filhos, e lançá-lo aos cachorrinhos. 
|fn:  N4 omite “Jesus”
28 Porém ela lhe respondeu: Sim Senhor; mas também os cachorrinhos comem debaixo da mesa, das migalhas dos filhos. 
29 Então ele lhe disse: Por esta palavra, vai, o demônio já saiu da tua filha. 
30 Quando ela chegou à sua casa, encontrou que o demônio já havia saído, e a filha estava deitada sobre a cama. 
|fn:  N4: criança
31 Então [Jesus] voltou a sair da região de Tiro e de Sidom, e veio para o mar da Galilea, por meio da região de Decápolis. 
|fn:  N4: e veio por Sidom
32 E trouxeram-lhe um surdo que dificilmente falava, e rogaram-lhe que pusesse a mão sobre ele. 
33 E tomando-o em separado da multidão, pôs os seus dedos nos ouvidos dele, cuspiu, e tocou-lhe a língua. 
34 Depois, levantando os olhos ao céu, suspirou, e disse: Efatá, (isto é, abre-te). 
35 Imediatamente os ouvidos dele se abriram, e o que prendia sua língua se soltou, e passou a falar bem. 
|fn:  N4 move “imediatamente” para antes de “o que prendia”
36 Jesus] lhes mandou que a ninguém dissessem; porém, quanto mais lhes mandava, mais divulgavam. 
37 E ficavam muito admirados, dizendo: Ele faz tudo bem! Aos surdos faz ouvir, e aos mudos falar.

CAPÍTULO 8

1 Naqueles dias, quando havia uma multidão muito grande chamou os seus discípulos a si, e disse-lhes: 
|fn:  TR, RP: multidão muito grande - N4: de novo uma multidão e não tinham o que comer, Jesus |fn:  N4 omite “Jesus” |fn:  N4 omite “seus”
2 Tenho compaixão da multidão, porque já há três dias que estão comigo, e não têm o que comer. 
3 E seu eu os deixar ir sem comer para suas casas desmaiarão no caminho; porque alguns deles vieram de longe. 
|fn:  N4:e
4 Os seus discípulos lhe responderam: De onde poderá alguém saciar estes de pão aqui no deserto? 
5 Jesus] lhes perguntou: Quantos pães tendes? E eles disseram: Sete. 
6 Então mandou à multidão que se sentassem pelo chão. Em seguida, tomou os sete pães, e tendo dado graças, partiu-os, e os deu a seus discípulos, para que os pusessem diante deles. E eles os puseram diante da multidão. 
7 E tinham uns poucos peixinhos, e havendo dado graças, disse que também os pusessem diante deles. 
8 Eles comeram, e se fartaram; e levantaram, do que sobrou dos pedaços, sete cestos. 
9 Os que comeram eram quase quatro mil. Depois os despediu. 
10 E logo entrou no barco com os seus discípulos, e veio para a região de Dalmanuta. 
11 Os fariseus vieram, e começaram a disputar com ele, pedindo-lhe sinal do céu, para o testar. 
12 E ele, suspirando profundamente em seu espírito, disse: Por que esta geração pede um sinal? Em verdade vos digo, que não se dará sinal a esta geração. 
13 Então os deixou, voltou a entrar no barco , e foi para a outro lado [do mar] . 
|fn:  TR: entrar no barco - RP: entrar num barco - N4 omite “no barco” = embarcar
14 E [os seus discípulos] haviam se esquecido de tomar pão, e nada tinham, a não ser um pão com eles no barco. 
15 E [Jesus] lhes deu a seguinte ordem: Prestai atenção: tende cuidado com o fermento dos fariseus e o fermento de Herodes. 
16 E indagavam-se com os outros , dizendo: É porque não temos pão. 
|fn:  N4: indagavam-se com os outros porque não tinham pão
17 Jesus soube e lhes disse: Por que indagais que não tendes pão? Não percebeis ainda, nem entendeis? Ainda tendes o vosso coração endurecido? 
18 Tendes olhos, e não vedes? Tendes ouvidos, e não ouvis? 
19 E não vos lembrais de, quando parti os cinco pães entre os cinco mil, quantos cestos cheios de pedaços levantastes? Responderam-lhe: Doze. 
20 E quando [parti] os sete entre os quatro mil, quantas cestas cheias de pedaços levantastes? Eles disseram: Sete. 
|fn:  N4 omite “E”
21 Ele lhes perguntou: Como não entendeis? 
22 Então veio a Betsaida. E trouxeram-lhe um cego, e rogaram-lhe que o tocasse. 
23 Ele tomou o cego pela mão e o tirou para fora da aldeia. Depois cuspiu nos olhos dele e, pondo as mãos encima dele, perguntou-lhe se via alguma coisa. 
|fn:  N4: Tu vês alguma coisa?
24 Ele levantou os olhos e disse: Vejo as pessoas; pois vejo como árvores que andam. 
25 Então [Jesus] pôs de novo as mãos sobre os seus olhos, e o fez olhar para cima . Assim ele ficou restabelecido, e passou a ver todos claramente. 
|fn:  TR,RP: o fez olhar para cima N4: ele olhou atentamente
26 Então o mandou para sua casa, dizendo: Não entres na aldeia, nem contes a ninguém da aldeia. 
|fn:  N4 omite “nem contes a ninguém da aldeia”
27 Jesus saiu com os seus discípulos para as aldeias de Cesareia de Filipe; e no caminho perguntou a seus discípulos: Quem as pessoas dizem que eu sou? 
28 Eles responderam: João Batista, e outros, Elias; e outros, algum dos profetas. 
29 E ele lhes perguntou: E vós, quem dizeis que eu sou? Pedro lhe respondeu: Tu és o Cristo. 
30 E lhes ordenou que a ninguém dissessem aquilo dele. 
31 E começou a lhes ensinar que era necessário que o Filho do homem sofresse muito, e fosse rejeitado pelos anciãos e pelos chefes dos sacerdotes e escribas, e que fosse morto, e depois de três dias ressuscitasse. 
32 Ele dizia essa palavra abertamente. Então Pedro o tomou à parte, e começou a repreendê-lo. 
33 Mas [Jesus] virou-se e, olhando para os seus discípulos, repreendeu Pedro, dizendo: Sai de diante de mim, Satanás! Pois tu não compreendes as coisas de Deus, mas sim as humanas. 
34 Então chamou a si a multidão com os seus discípulos, e disse-lhes: Quem quiser vir após mim, negue a si mesmo, tome a sua cruz, e siga-me; 
|fn:  N4: Se algúem |fn:  RP, N4: me seguir
35 pois quem quiser salvar a sua vida, a perderá; mas quem perder a sua vida por causa de mim e do Evangelho, esse a salvará. 
36 Pois que proveito teria alguém, se ganhasse o mundo todo, e perdesse a sua alma? 
37 Ou que daria alguém em resgate de sua alma? 
38 Porque todo aquele que se envergonhar de mim e de minhas palavras nesta geração adúltera e pecadora, também o Filho do homem, quando vier na glória de seu Pai com os santos anjos, envergonhar-se-á dele.

CAPÍTULO 9

1 E disse-lhes também: Em verdade vos digo, que há alguns dos que aqui estão, que não experimentarão a morte, até que vejam o reino de Deus vindo com poder. 
2 Seis dias depois, Jesus tomou consigo Pedro, Tiago, e João, e os levou à parte, sozinhos, para um alto monte ; e transfigurou-se diante deles. 
3 E suas roupas ficaram resplandescentes, muito brancas como a neve , como nenhum lavadeiro na terra seria capaz de branquear. 
|fn:  N4 omite “como a neve”
4 E apareceu-lhes Elias com Moisés, e falavam com Jesus. 
5 Então Pedro disse a Jesus: Mestre, é bom para nós estarmos aqui; façamos três tendas: uma para ti, uma para Moisés, e uma para Elias. 
6 Pois ele não sabia o que dizia, pois estavam assombrados. 
7 Então desceu uma nuvem, que os cobriu com a sua sombra, e veio uma voz da nuvem, que dizia: Este é meu Filho amado; a ele ouvi. 
8 De repente, quando olharam em redor, não viram mais ninguém, a não ser só Jesus com eles. 
9 Enquanto desciam do monte, [Jesus] lhes mandou que a ninguém contassem o que haviam visto, até que o Filho do homem ressuscitasse dos mortos. 
10 E eles guardaram o caso entre si, perguntando uns aos outros o que seria aquilo de “ressuscitar dos mortos”. 
11 Então lhe perguntaram: Por que os Escribas dizem que Elias tem que vir primeiro? 
12 E ele lhes respondeu: De fato Elias vem primeiro, e restaura todas as coisas. Então, como está escrito sobre o Filho do homem tem que sofrer muito, e ser desprezado? 
13 Porém eu vos digo que Elias já veio, e fizeram-lhe tudo o que quiseram, como está escrito sobre ele. 
14 E quando veio aos discípulos, ele viu uma grande multidão ao redor deles; e uns escribas estavam discutindo com eles. 
15 Logo que toda a multidão o viu, ficou admirada. Então correram a ele, e o cumprimentaram. 
16 Jesus] perguntou aos escribas : O que estais discutindo com eles? 
|fn:  N4: lhes perguntou (omite “aos escribas”)
17 E um da multidão respondeu: Mestre, trouxe a ti o meu filho, que tem um espírito mudo. 
|fn:  N4: lhe respondeu
18 E onde quer que o toma, faz-lhe ter convulsões, solta espuma, range os dentes, e vai ficando rígido. Eu disse aos teus discípulos que o expulsassem, mas não conseguiram. 
19 Jesus] lhe respondeu: Ó geração incrédula! Até quando estarei ainda convosco? Até quando vos suportarei? Trazei-o a mim. 
|fn:  N4: lhes
20 Então trouxeram-no a ele. E quando o viu, logo o espírito o fez ter uma convulsão e, caindo em terra, rolava, e espumava. 
21 E perguntou ao seu pai: Quanto tempo há que isto lhe sobreveio? E ele lhe disse: Desde a infância. 
22 E muitas vezes o lançou também no fogo e na água para o destruir. Mas, se podes algo, tem compaixão de nós, e ajuda-nos. 
23 E Jesus lhe disse: Se podes crer, tudo é possível 
|fn:  N4: Se podes? Tudo é possível ao que crê.
24 E logo o pai do menino, clamando, com lágrimas, disse: Creio, Senhor! Ajuda minha incredulidade. 
25 E vendo Jesus que a multidão concorria, repreendeu ao espírito imundo, dizendo-lhe: Espírito mudo e surdo, eu te mando, sai dele, e não entres nele mais! 
26 E clamando, e fazendo-o convulsionar muito, saiu; e ficou [o menino] como morto, de tal maneira que muitos diziam que estava morto. 
27 E tomando-o Jesus pela mão, ergueu-o, e ele se levantou. 
28 E quando entrou em casa, seus discípulos lhe perguntaram à parte: Por que nós não o pudemos expulsar? 
29 E disse-lhes: Este tipo com nada pode sair, a não ser com oração e jejum. 
30 E partidos dali, caminharam pela Galileia, e não queria que alguém o soubesse, 
31 Porque ensinava a seus discípulos, e lhes dizia: O Filho do homem será entregue em mãos dos homens, e o matarão; e [estando] ele morto, ressuscitará ao terceiro dia. 
32 Mas eles não entendiam esta palavra, e temiam lhe perguntar. 
33 E veio a Cafarnaum, e entrando em casa, perguntou-lhes: Que questionais entre vós pelo caminho? 
34 Mas eles se calaram; porque eles haviam discutido uns com os outros pelo caminho, qual [deles seria] o maior. 
35 E sentando-se ele, chamou aos doze, e disse-lhes: Se alguém quiser ser o primeiro, seja o últimos de todos, e servo de todos. 
36 E tomando um menino, ele o pôs no meio deles, e tomando-o entre seus braços, disse-lhes: 
37 Qualquer que em meu nome receber a um dos tais meninos, recebe a mim; e qualquer que me receber, não [somente] recebe a mim, mas [também] ao que me enviou. 
38 E respondeu-lhe João, dizendo: Mestre, temos visto a um, que em teu nome expulsava aos demônios, o qual não nos segue; e nós o proibimos, porque não nos segue. 
39 Porém Jesus disse: Não o proibais; porque ninguém há que faça milagre em meu nome, e logo possa dizer mal de mim. 
40 Porque quem não é contra nós, é por nós. 
41 Porque qualquer que vos der um pequeno vaso de água para beber em meu nome, porque sois de Cristo, em verdade vos digo, que não perderá sua recompensa. 
42 E qualquer que ofender a um destes pequenos que creem em mim, melhor lhe fora que lhe pusesse ao pescoço uma grande pedra de moinho, e que fosse lançado no mar. 
43 E se a tua mão te ofender, corta-a; melhor te é entrar na vida mutilado, do que tendo duas mãos ir ao inferno, ao fogo que nunca se apaga. 
44 Onde seu verme não morre, e o fogo nunca se apaga. 
|fn:  N4 omite todo o versículo 44
45 E se teu pé te ofender, corta-o; melhor te é entrar na vida manco, do que tendo dois pés ser lançado no inferno, no fogo que nunca se apaga. 
|fn:  N não contém: "no fogo que nunca se apaga"
46 Onde seu verme não morre, e o fogo nunca se apaga. 
47 E se teu olho te ofender, lança-o fora; melhor te é entrar no Reino de Deus com um olho, do que tendo dois olhos ser lançado no fogo do inferno. 
48 Onde seu verme não morre, e o fogo nunca se apaga. 
49 Porque cada um será salgado com fogo, e cada sacrifício será salgado com sal. 
|fn:  N4 omite "e cada sacrifício será salgado com sal"
50 O sal é bom; mas se o sal se tornar insípido, com que o temperareis? Tende sal em vós mesmos, e paz uns com os outros.

CAPÍTULO 10

1 E levantando-se dali, foi-se aos limites da Judeia, por dalém do Jordão; e as multidões voltaram a se juntar a ele, e voltou a lhes ensinar, como tinha de costume. 
2 E vindo a ele os fariseus, perguntaram-lhe se era lícito ao homem deixar a [sua] mulher, tentando-o. 
3 Mas respondendo ele, disse-lhes: Que Moisés vos mandou? 
4 E eles disseram: Moisés permitiu escrever carta de divórcio, e deixá-la. 
5 E respondendo Jesus, disse-lhes: Pela dureza de vossos corações ele vos escreveu este mandamento. 
6 Porém desde o princípio da criação, macho e fêmea Deus os fez. 
7 Por isso, deixará o homem a seu pai e a [sua] mãe, e se unirá à sua mulher. 
|fn:  N4 omite "e se unirá à sua mulher". Compare com Gênesis 2:24 e Mateus 19:5
8 E os dois serão uma [só] carne; assim então já não são dois, mas sim uma [só] carne. 
9 Portanto o que Deus juntou, não separe o homem. 
10 E em casa voltaram os discípulos a perguntar-lhe sobre isto mesmo. 
11 E disse-lhes: Qualquer que deixar a sua mulher, e se casar com outra, adultera contra ela. 
12 E se a mulher deixar a seu marido, e se casar com outro, adultera. 
13 E lhe traziam crianças para que ele as tocasse, mas os discípulos repreendiam aos que [as] traziam. 
14 Porém Jesus, vendo, indignou-se, e lhe disse: Deixai vir as crianças a mim, e não as impeçais; porque das tais é o Reino de Deus. 
15 Em verdade vos digo, que qualquer um que não receber o Reino de Deus como criança, em maneira nenhuma nele entrará. 
16 E tomando-as entre seus braços, pondo as mãos sobre elas, ele as abençoou. 
17 E saindo ele ao caminho, um [homem] correu até ele; e pondo-se de joelhos diante dele, perguntou-lhe: Bom Mestre, que farei para herdar a vida eterna? 
18 E Jesus lhe disse: Por que me chamas bom? Ninguém é bom, a não ser um: Deus. 
19 Sabes os mandamentos: Não adulterarás; não matarás; não furtarás; não darás falso testemunho; não serás enganador; hora a teu pai, e a [tua] mãe. 
20 Porém respondendo ele, disse-lhe: Mestre, tudo isto guardei desde minha juventude. 
21 E olhando Jesus para ele, amou-o, e disse-lhe: Uma coisa te falta: vai, vende tudo quanto tens, e dá aos pobres; e terás um tesouro no céu; e vem, segue-me, toma [tua] cruz. 
22 Mas ele, pesaroso desta palavra, foi-se triste; porque tinha muitas propriedades. 
23 Então Jesus olhando ao redor, disse a seus discípulos: Quão dificilmente entrarão os que tem riquezas no Reino de Deus! 
24 E os discípulos se espantaram destas suas palavras; mas Jesus, voltando a responder, disse-lhes: Filhos, como é difícil aos que confiam em riquezas entrar no Reino de Deus! 
|fn:  N4 omite "aos que confiam em riquezas
25 Mais fácil é passar um camelo pelo olho de uma agulha, do que entrar o rico no Reino de Deus. 
26 E eles se espantavam ainda mais, dizendo uns para os outros: Quem pois poderá se salvar? 
27 Porém olhando Jesus para eles, disse: Para os seres humanos, é impossível; mas para Deus, não; porque para Deus tudo é possível. 
28 E começou Pedro a dizer-lhe: Eis que nós deixamos tudo, e te seguimos. 
29 E respondendo Jesus, disse: Em verdade vos digo, que não há ninguém que tenha deixado casa, ou irmãos, ou irmãs, ou pai, ou mãe, ou mulher, ou filhos, ou campos, por amor de mim e do Evangelho, 
30 Que não receba cem vezes tanto, agora neste tempo, casas, e irmãos, e irmãs, e mães, e filhos, e campos, com perseguições; e a vida eterna, no tempo que virá. 
31 Porém muitos primeiros serão últimos, e [muitos] últimos, primeiros. 
32 E iam pelo caminho, subindo para Jerusalém; e Jesus ia diante deles, e espantavam-se, e seguiam-no atemorizados. E voltando a tomar consigo aos doze, começou-lhes a dizer as coisas que lhe viriam a acontecer: 
33 Eis que subimos a Jerusalém, e o Filho do homem será entregue aos chefes dos sacerdotes, e aos escribas; e o condenarão à morte, e o entregarão aos gentios. 
34 E escarnecerão dele, e o açoitarão, e cuspirão nele, e o matarão; e ao terceiro dia ressuscitará. 
35 E vieram a ele Tiago e João, filhos de Zebedeu, dizendo: Mestre, queríamos que nos fizesses o que pedirmos. 
36 E ele lhes disse: Que quereis que eu vos faça? 
37 E eles lhe disseram: Concede-nos que em tua glória nos sentemos, um à tua direita, e outro à tua esquerda? 
38 Mas Jesus lhes disse: Não sabeis o que pedis; podeis vós beber o copo que eu bebo, e ser batizados com o batismo com que eu sou batizado? 
39 E eles lhe disseram: Podemos. Porém Jesus lhes disse: Em verdade, o copo que eu bebo, bebereis; e com o batismo com que eu sou batizado, sereis batizados. 
40 Mas sentar-se à minha direita, ou à minha esquerda, não é meu concedê-lo, mas sim, para aqueles a quem está preparado. 
41 E quando os dez ouviram isto, começaram a se irritar contra Tiago e João. 
42 Mas Jesus, chamando-os a si, disse-lhes: Já sabeis que os que são vistos como governadores dos gentios, agem como senhores deles; e os grandes usam de autoridade sobre eles. 
43 Mas entre vós não será assim; antes qualquer que entre vós quiser ser grande, será vosso servidor. 
44 E qualquer que de vós quiser ser o primeiro, será servo de todos. 
45 Porque também não veio o Filho do homem para ser servido, mas para servir, e dar sua vida [em] resgate por muitos. 
46 E vieram a Jericó. E saindo ele, e seus discípulos, e uma grande multidão de Jericó, estava Bartimeu o cego, filho de Timeu, sentado junto ao caminho, mendigando. 
47 E ouvindo que era Jesus o nazareno, começou a clamar, e a dizer: Jesus, Filho de Davi! Tem misericórdia de mim! 
48 E muitos o repreendiam, para que se calasse; mas ele clamava ainda mais: Filho de Davi! Tem misericórdia de mim! 
49 E parando Jesus, disse que o chamassem; e chamaram ao cego, dizendo-lhe: Tem bom ânimo, levanta-te, [ele] te chama. 
50 E lançando ele sua capa, levantou-se, e veio a Jesus. 
51 E respondendo Jesus, disse-lhe: Que queres que [eu] te faça? E o cego lhe disse: Mestre, [quero] que veja. 
52 E Jesus lhe disse: Vai-te; tua fé te salvou. E logo viu; e seguia a Jesus pelo caminho.

CAPÍTULO 11

1 E quando chegaram perto de Jerusalém, em Betfagé e Betânia, ao monte das Oliveiras, [Jesus] mandou dois de seus discípulos, 
2 E disse-lhes: Ide à aldeia, que está em fronte de vós; e logo, nela entrando, achareis um jumentinho atado, sobre o qual ninguém se sentou; soltai-o, e trazei-o. 
3 E se alguém vos disser: Por que fazeis isso?, dizei que: O Senhor precisa dele, e logo o mandará de volta para cá. 
4 E foram, e acharam o jumentinho atado à porta, [do lado de] fora em uma esquina, e o soltaram. 
5 E alguns dos que ali estavam, lhes disseram: Que fazeis, soltando o jumentinho? 
6 Porém eles lhes disseram como Jesus [lhes] tinha mandado, e os deixaram ir. 
7 E trouxeram o jumentinho a Jesus, e lançaram sobre ele suas roupas, e sentou-se sobre ele. 
8 E muitos estendiam suas roupas pelo caminho, e outros cortavam ramos das árvores, e os espalhavam pelo caminho. 
9 E os que iam adiante, e os que seguiam, clamavam: Hosana, bendito o que vem no Nome do Senhor! 
10 Bendito o Reino de nosso Pai Davi, que vem no Nome do Senhor! Hosana nas alturas! 
11 E Jesus entrou em Jerusalém, e no Templo; e havendo visto tudo ao redor, e sendo já tarde, saiu-se para Betânia com os doze. 
12 E no dia seguinte, saindo eles de Betânia, teve fome. 
13 E vendo de longe uma figueira, que tinha folhas, [veio ver] se acharia alguma coisa nela; e chegando a ela, nada achou, a não ser folhas; porque não era tempo de figos. 
14 E respondendo Jesus, disse-lhe: Nunca mais ninguém coma fruto de ti. E seus discípulos ouviram isto . 
15 E vieram a Jerusalém; e entrando Jesus no Templo, começou a expulsar aos que vendiam e compravam no Templo; e revirou as mesas dos cambiadores, e as cadeiras dos que vendiam pombas. 
16 E não consentia que ninguém levasse vaso [algum] pelo Templo. 
17 E ensinava, dizendo-lhes: Não está escrito: Minha casa será chamada casa de oração de todas as nações? Mas vós a tendes feito esconderijo de assaltantes! 
18 E ouviram os escribas, e os chefes dos sacerdotes, e buscavam como o matariam; pois o temiam, porque toda a multidão estava espantada quanto a sua doutrina. 
19 E como já era tarde, [Jesus] saiu fora da cidade. 
20 E passando pela manhã, viram que a figueira estava seca desde as raízes. 
21 E lembrando-se Pedro, disse-lhe: Mestre, eis que a figueira, que amaldiçoaste, se secou. 
22 E respondendo Jesus, disse-lhes: Tende fé em Deus. 
23 Porque em verdade vos digo, que qualquer que disser a este monte: Levanta-te, e lança-te no mar; e não duvidar em seu coração, mas crer que se fará o que diz, tudo o que disser lhe será feito. 
24 Portanto eu vos digo, [que] tudo o que pedirdes orando, crede que recebereis, e vós [o] tereis. 
25 E quando estiverdes orando, perdoai, se tendes alguma coisa contra alguém, para que vosso Pai, que [está] nos céus, vos perdoe vossas ofensas. 
26 Mas se vós não perdoardes, também vosso Pai, que [está] nos céus, não vos perdoará vossas ofensas. 
|fn:  N4 omite todo o versículo. Compare com Mateus 6:15
27 E voltaram para Jerusalém; e andando ele pelo Templo, vieram a ele os chefes dos sacerdotes, e os escribas, e os anciãos. 
28 E disseram-lhe: Com que autoridade fazes estas coisas? E quem te deu esta autoridade, para fazerdes estas coisas? 
29 Mas respondendo Jesus, disse-lhes: Também eu vos perguntarei uma palavra, e respondei-me; e [então] vos direi com que autoridade estas coisas [eu] faço. 
30 O batismo de João era do céu ou dos homens? Respondei-me. 
31 E eles argumentavam entre si, dizendo: Se dissermos do céu, ele [nos] dirá: Por que pois não crestes nele? 
32 Porém se dissermos dos homens, tememos ao povo; porque todos consideravam que João era verdadeiramente profeta. 
33 E respondendo, disseram a Jesus: Não sabemos. E respondendo Jesus, disse-lhes: Também eu não vos direi com que autoridade eu faço estas coisas.

CAPÍTULO 12

1 E começou a lhes dizer por parábolas: Um homem plantou uma vinha, cercou-a, fundou [nela] um esmagador de uvas, edificou uma torre, e a arrendou a uns lavradores; e partiu-se para fora d [aquela] terra. 
2 E chegado o tempo, mandou um servo aos lavradores, para que recebesse dos lavradores do fruto da vinha. 
3 Mas eles tomando-o, feriram [-no] , e mandaram [-no] vazio. 
4 E voltou a mandar-lhes outro servo; e eles. apedrejando-o, feriram-no na cabeça e voltaram a mandá-lo maltratado. 
5 E voltou a mandar outro, ao qual mataram, e [mandou] muitos outros, e a uns feriram, e a outros mataram. 
6 Tendo ele pois ainda um, o seu filho amado, mandou-lhes também por último a este, dizendo: Pelo menos terão respeito a meu filho. 
7 Mas aqueles lavradores disseram entre si: Este é o herdeiro; vinde, [e] o matemos; então a herança será nossa. 
8 E pegando dele, mataram [-no] , e lançaram [-no] fora da vinha. 
9 Que pois fará o senhor da vinha? Ele virá, destruirá aos lavradores, e dará a vinha a outros. 
10 Nem ainda esta escritura tendes lido? A pedra que os edificadores rejeitaram, esta foi feita por cabeça de esquina. 
11 Pelo Senhor foi feito isto, e é maravilhoso em nossos olhos. 
12 E procuravam prendê-lo, mas temiam a multidão; porque entendiam que dizia aquela parábola [referindo-se] a eles; e deixando-o, foram embora. 
13 E mandaram-lhe alguns dos fariseus e dos herodianos, para que o apanhassem em [alguma] palavra. 
14 E eles, vindo, disseram-lhe: Mestre, sabemos que és homem de verdade, e não te interessa [agradar] a ninguém, porque não olhas para a aparência humana, mas com verdade ensinas o caminho de Deus; é lícito pagar tributo a César, ou não? Devemos pagar, ou não devemos? 
15 E ele, entendendo a hipocrisia deles, disse-lhes: Por que me tentais? Trazei-me uma moeda, para que eu [a] veja. 
16 E trouxeram. E disse-lhes: De quem é esta imagem, e a inscrição? E eles lhe disseram: De César. 
17 E Jesus, respondendo, disse-lhes: Dai pois a César o que é de César, e a Deus o que é de Deus. E maravilharam-se dele. 
18 E vieram a ele os saduceus, que dizem que não há ressurreição, e perguntaram-lhe, dizendo: 
19 Mestre, Moisés nos escreveu, que se o irmão de alguém morresse, e deixasse mulher, e não deixasse filhos, que seu irmão tomasse sua mulher, e levantasse semente a seu irmão. 
20 Houve pois sete irmãos, e o primeiro tomou mulher, e morrendo, não deixou semente. 
21 Tomou-a também o segundo, e morreu; e nem este deixou semente; e o terceiro da mesma maneira. 
22 E a tomaram [todos] os sete, e não deixaram semente. Finalmente, depois de todos, morreu também a mulher. 
23 Na ressurreição pois, quando ressuscitarem, de qual destes será a mulher? Porque os sete a tiveram por mulher. 
24 E respondendo Jesus, disse-lhes: Não é por isso que vós errais, por não conhecerdes as Escrituras, nem o poder de Deus? 
25 Porque quando ressuscitarem dos mortos, nem se casarão, nem se darão em casamento; mas serão como os anjos que [estão] nos céus. 
26 E sobre os mortos que ressuscitarão, não tendes lido no livro de Moisés, como Deus lhe falou com a sarça, dizendo: Eu sou o Deus de Abraão, e o Deus de Isaque, e o Deus de Jacó? 
27 Deus não é [Deus] de mortos, mas de vivos. Portanto [vós] errais muito. 
28 E vindo a ele um dos escribas, que os ouvira discutir, sabendo que lhes tinha bem respondido, perguntou-lhe: Qual de todos é o primeiro mandamento? 
29 E Jesus lhe respondeu: O primeiro mandamento de todos os mandamentos [é] : Ouve Israel, o SENHOR nosso Deus é o único Senhor: 
30 Amarás pois ao Senhor teu Deus de todo teu coração, e de toda tua alma, e de todo teu entendimento, e de todas tuas forças; este é o primeiro mandamento. 
31 E o segundo, semelhante [a este] é: Amarás a teu próximo como a ti mesmo; não há outro mandamento maior que estes. 
32 E o Escriba lhe disse: Muito bem, Mestre, com verdade disseste, que há um só Deus, e não há outro além dele. 
33 E [que] amá-lo de todo coração, e de todo entendimento, e de toda a alma, e de todas as forças; e amar ao próximo como a si mesmo é mais que todas as ofertas de queima e sacrifícios. 
34 E Jesus, vendo que ele tinha respondido sabiamente, disse-lhe: Tu não estás longe do Reino de Deus. E ninguém mais ousava lhe perguntar. 
35 E respondendo Jesus, dizia, enquanto ensinava no Templo: Como os escribas dizem que o Cristo é Filho de Davi? 
36 Porque o mesmo Davi disse pelo Espírito Santo: Disse o Senhor a meu Senhor, senta-te à minha direita, até que ponha a teus inimigos por suporte de teus pés. 
37 Pois [se] Davi mesmo o chama [seu] Senhor, como, pois, é seu filho? E a grande multidão o ouvia de boa vontade. 
38 E dizia-lhes em sua doutrina: Tomai cuidado com os escribas, que gostam de andar com roupas compridas, [amam] as saudações nas praças; 
39 E as primeiras cadeiras nas sinagogas, e os primeiros assentos nas ceias. 
40 Que comem as casas das viúvas, e [isso] com pretexto de longa oração. Estes receberão mais grave condenação. 
41 E estando Jesus sentado de frente à arca do tesouro, observava como a multidão lançava dinheiro na arca do tesouro; e muitos ricos lançavam muito. 
42 E vindo uma pobre viúva, lançou dois leptos, que são duas pequenas moedas. 
43 E [Jesus] , chamando a si seus discípulos, disse-lhes: Em verdade vos digo que esta pobre viúva lançou mais que todos os que lançaram na arca do tesouro; 
44 Porque todos lançaram [nela] daquilo que lhes sobra; mas esta de sua pobreza lançou [nela] tudo o que tinha, todo seu sustento.

CAPÍTULO 13

1 E saindo ele do Templo, um de seus discípulos lhe disse: Mestre, olha que pedras, e que edifícios! 
2 E respondendo Jesus, disse-lhe: Vês estes grandes edifícios? Não será deixada pedra sobre pedra, que não seja derrubada. 
3 E sentando-se ele no monte das Oliveiras, de frente ao Templo, perguntaram-lhe à parte Pedro, e Tiago, e João, e André: 
4 Dize-nos, quando serão estas coisas? E que sinal haverá de quando todas estas coisas se acabarão? 
5 E respondendo-lhes Jesus, começou a dizer: Olhai que ninguém vos engane; 
6 Porque virão muitos em meu nome, dizendo: Eu sou o [Cristo] , e enganarão a muitos. 
7 E quando ouvirdes de guerras, e de rumores de guerras, não vos perturbeis; porque [assim] convém acontecer; mas ainda não será o fim. 
8 Porque nação se levantará contra nação, e reino contra reino, e haverá terremotos de lugar em lugar, e haverá fomes, e revoltas. Estes serão princípios de dores. 
9 Mas olhai por vós mesmos; porque vos entregarão em tribunais, e em sinagogas; sereis açoitados, e sereis apresentados ante governadores e reis, por causa de mim, para que lhes haja testemunho. 
10 E primeiramente o Evangelho deve ser pregado entre todas as nações. 
11 Porém, quando vos levarem a entregar, não estejais ansiosos antecipadamente do que deveis dizer, nem o penseis; mas o que naquela hora for dado, isso falai. Porque não sois vós os que falais, mas o Espírito Santo. 
12 E o irmão entregará ao irmão à morte, e o pai ao filho; e os filhos se levantarão contra os pais, e os matarão. 
13 E sereis odiados de todos por amor de meu nome; mas quem perseverar até o fim, esse será salvo. 
14 E quando virdes a abominação da desolação, que foi dita pelo profeta Daniel, estar onde não deve, (quem lê, entenda), então os que estiverem na Judeia, fujam para os montes. 
|fn:  N4 omite "que foi dita pelo profeta Daniel"
15 E o que estiver sobre telhado, não desça para a casa, nem entre para tomar alguma coisa de sua casa. 
16 E o que estiver no campo, não volte atrás, para tomar sua roupa. 
17 Mas ai das grávidas, e das que amamentarem naqueles dias! 
18 Orai, porém, que não aconteça vossa fuga no inverno. 
19 Porque serão aqueles dias de tal aflição, qual nunca foi desde o princípio da criação das coisas, que Deus criou, até agora, nem tão pouco será. 
20 E se o Senhor não encurtasse aqueles dias, nenhuma carne se salvaria; mas por causa dos escolhidos, que escolheu, ele encurtou aqueles dias. 
21 E então se alguém vos disser: Eis aqui está o Cristo; ou vede-o ali está, não creiais nele. 
22 Porque se levantarão falsos cristos, e falsos profetas, e farão sinais e prodígios, para enganar, se fossa possível, até aos escolhidos. 
23 Mas vós tomai cuidado, eis que vos tenho dito tudo antes. 
24 Porém naqueles dias, depois daquela aflição, o sol se escurecerá, e a lua não dará seu brilho. 
25 E as estrelas do céu cairão, e as forças que [estão] nos céus abalarão. 
26 E então verão ao Filho do homem vir nas nuvens, com grande poder e glória. 
27 E então enviará seus anjos, e juntará seus escolhidos dos quatro ventos, desde a extremidade da terra, até a extremidade do céu. 
28 E aprendei a parábola da figueira: Quando já seu ramo se vai fazendo tenro, e brota folhas, bem sabeis que já o verão está perto. 
29 Assim também vós, quando virdes suceder estas coisas, sabei que já está perto às portas. 
30 Em verdade vos digo, que não passará esta geração, até que todas estas coisas aconteçam. 
31 O céu e a terra passarão, mas minhas palavras em maneira nenhuma passarão. 
32 Porém daquele dia e hora ninguém sabe, nem os anjos que estão no céu, nem o Filho, a não ser somente o Pai. 
33 Olhai, vigiai, e orai; porque não sabeis quando será o tempo. 
34 Como o homem que, partindo-se para fora de sua terra, deixou sua casa, e deu autoridade a seus servos, e a cada um seu trabalho, e mandou ao porteiro que vigiasse, 
35 Vigiai pois, porque não sabeis quando virá o Senhor da casa; se à tarde, se à meia-noite, se ao canto do galo, se pela manhã, 
36 Para que não venha de surpresa, e vos ache dormindo. 
37 E as coisas que vos digo, digo a todos: Vigiai.

CAPÍTULO 14

1 E dali a dois dias era a Páscoa, e [a festa dos pães] asmos; e os chefes dos sacerdotes, e os escribas buscavam um meio de prendê-lo através de engano, e [o] matarem. 
2 Diziam, porém: Não na festa, para que não venha a haver tumulto entre o povo. 
3 E estando ele em Betânia, em casa de Simão o Leproso, sentado [à mesa] , veio uma mulher, que tinha um vaso de alabastro, de óleo perfumado de nardo puro, de muito preço, e quebrando o vaso de alabastro, derramou-o sobre a cabeça dele. 
4 E houve alguns que se irritaram em si mesmos [com aquilo] , e disseram: Para que foi feito este desperdício do óleo perfumado? 
5 Porque isto podia ter sido vendido por mais de trezentos dinheiros, e seria dado aos pobres. E reclamavam contra ela. 
6 Porém Jesus disse: Deixai-a; por que a incomodais? Ela tem me feito boa obra. 
7 Porque pobres sempre [os] tendes convosco; e quando quiserdes, podeis lhes fazer bem; porém a mim, nem sempre me tendes. 
8 Esta fez o que podia; se adiantou para ungir meu corpo, para [preparação de minha] sepultura. 
9 Em verdade vos digo, que onde quer que em todo o mundo este Evangelho for pregado, também o que esta fez será dito em sua memória. 
10 E Judas Iscariotes, um dos doze, foi aos chefes dos sacerdotes, para o entregar a eles. 
11 E eles ouvindo, alegraram-se; e prometeram lhe dar dinheiro; e buscava como o entregaria em tempo oportuno. 
12 E o primeiro dia dos [pães] asmos, quando sacrificavam [o cordeiro da] Páscoa, seus discípulos lhe disseram: Onde queres, que vamos preparar para comerdes a Páscoa? 
13 E mandou dois de seus discípulos, e disse-lhes: Ide à cidade, e um homem que leva um cântaro de água vos encontrará, a ele segui. 
14 E onde quer que ele entrar, dizei ao senhor da casa: O Mestre diz: Onde está o cômodo onde comerei Páscoa com meus discípulos? 
15 E ele vos mostrará um grande salão, ornado e preparado; ali preparai [a ceia] para nós. 
16 E seus discípulos saíram, e vieram à cidade, e acharam como lhes tinha dito, e prepararam a Páscoa. 
17 E vinda a tarde, veio com os doze. 
18 E quando se sentaram [à mesa] , e comeram, Jesus disse: Em verdade vos digo, que um de vós, que está comendo comigo, me trairá. 
19 E eles começaram a se entristecer, e a lhe dizer um após outro: Por acaso sou eu? E outro: Por acaso sou eu? 
|fn:  N4 omite: "E outro: Por acaso sou eu?"
20 Porém respondendo ele, disse-lhes: [É] um dos doze, o que está molhando [a mão] comigo no prato. 
21 Em verdade o Filho do homem vai, como está escrito sobre ele; mas ai daquele homem, por quem o Filho do homem é traído; bom lhe fosse ao tal homem não haver nascido. 
22 E comendo eles, tomou Jesus o pão; e bendizendo partiu-o, e deu-lhes, e disse: Tomai, comei, isto é o meu corpo. 
23 E tomando o copo, e dando graças, deu-lhes; e todos beberam dele. 
24 E disse-lhes: Isto é o meu sangue, [o sangue] do novo testamento, que é derramado por muitos. 
|fn:  N4 omite "novo"
25 Em verdade vos digo, que não beberei mais do fruto da vide, até aquele dia, quando o beber novo no Reino de Deus. 
26 E cantando um hino, saíram para o monte das Oliveiras. 
27 E Jesus lhes disse: Todos vós vos ofendereis em mim esta noite ; porque está escrito: Ferirei ao pastor, e as ovelhas serão dispersas. 
|fn:  N4 omite "em mim esta noite"
28 Mas depois de eu haver ressuscitado, irei adiante de vós para a Galileia. 
29 E Pedro lhe disse: Ainda que todos se ofendam, não porém eu. 
30 E disse-lhe Jesus: Em verdade te digo, que hoje, nesta noite, antes que o galo cante duas vezes, me negarás três vezes. 
31 Mas ele muito mais dizia: Ainda que me seja necessário morrer contigo, em maneira nenhuma te negarei. E todos diziam também da mesma maneira. 
32 E vieram ao lugar, cujo nome era Getsêmani, e disse a seus discípulos: Sentai-vos aqui, enquanto eu oro. 
33 E tomou consigo a Pedro, e a Tiago, e a João, e começou a se apavorar, e a angustiar-se em grande maneira. 
34 E disse-lhes: Minha alma totalmente está triste até a morte; ficai-vos aqui, e vigiai. 
35 E indo-se um pouco mais adiante, prostrou-se em terra; e orou, que se fosse possível, passasse dele aquela hora. 
36 E disse: Aba, Pai, todas as coisas te são possíveis; passa de mim este copo; porém não [se faça] o que eu quero, mas sim o que tu [queres] . 
37 Então veio, e os achou dormindo; e disse a Pedro: Simão, estás dormindo? Não podes vigiar uma hora? 
38 Vigiai, e orai, para que não entreis em tentação; o espírito em verdade [está] pronto, mas a carne [é] fraca. 
39 E indo novamente, orou, dizendo as mesmas palavras. 
40 E voltando, achou-os outra vez dormindo; porque seus olhos estavam pesados, e não sabiam o que lhe responder. 
41 E veio a terceira vez, e disse-lhes: Dormi já e descansai. Basta, vinda é a hora. Eis que o Filho do homem é entregue em mãos dos pecadores. 
42 Levantai-vos, vamos; eis que o que me trai está perto. 
43 E logo, falando ele ainda, veio Judas, que era um dos doze, e com ele uma grande multidão, com espadas e bastões, da parte dos chefes dos sacerdotes, e dos escribas, e dos anciãos. 
44 E o que o traía lhes tinha dado um sinal comum, dizendo: Ao que eu beijar, é esse; prendei-o, e levai-o em segurança. 
45 E quando veio, logo foi-se a ele, e disse-lhe: Rabi, Rabi, e o beijou. 
46 E lançaram suas mãos nele, e o prenderam. 
47 E um dos que estavam presentes ali puxando a espada, feriu ao servo do sumo sacerdote, e cortou-lhe a orelha. 
48 E respondendo Jesus, disse-lhes: Como a assaltante, com espadas e bastões, saístes para me prender? 
49 Todo dia convosco estava no Templo ensinando, e não me prendestes; mas [assim se faz] para que as Escrituras se cumpram. 
50 Então, deixando-o, todos fugiram. 
51 E um certo rapaz o seguia, envolto em um lençol sobre o [corpo] nu. E os rapazes o seguraram. 
52 E ele, largando o lençol, fugiu deles nu. 
53 E levaram Jesus ao sumo sacerdote; e juntaram-se a ele todos os chefes dos sacerdotes, e os anciãos, e os escribas. 
54 E Pedro o seguiu de longe até dentro da sala do sumo sacerdote, e estava sentado juntamente com os trabalhadores, e esquentando-se ao fogo. 
55 E os chefes dos sacerdotes, e todo o tribunal buscavam [algum] testemunho contra Jesus, para o matarem, e não [o] achavam. 
56 Porque muitos testemunhavam falsamente contra ele; mas os testemunhos não concordavam entre si. 
57 E levantando-se uns testemunhava falsamente contra ele, dizendo: 
58 Nós o ouvimos dizer: Eu derrubarei este templo feito de mãos, e em três dias edificarei outro, feito sem mãos. 
59 E nem assim era o testemunho deles concordante. 
60 E levantando-se o sumo sacerdote no meio, perguntou a Jesus, dizendo: Não respondes nada? Que testemunham estes contra ti? 
61 Mas ele calava, e nada respondeu. O sumo sacerdote voltou a lhe perguntar, e disse-lhe: Tu és o Cristo, o Filho do [Deus] bendito? 
62 E Jesus disse: Eu sou; e vereis ao Filho do homem sentado à direita do poder [de Deus] , e vir nas nuvens do céu. 
63 E o sumo sacerdote, rasgando suas roupas, disse: Para que mais necessitamos de testemunhas? 
64 Tendes ouvido a blasfêmia; que vos parece? E todos o condenaram por culpado de morte. 
65 E alguns começaram a cuspir nele, e a cobrir-lhe o rosto; e a dar-lhe de socos, e dizer-lhe: Profetiza. E os trabalhadores lhe davam bofetadas. 
66 E estando Pedro embaixo na sala, veio uma das servas do sumo sacerdote; 
67 E vendo a Pedro, que se sentava esquentando, olhou para ele, e disse: Também tu estavas com Jesus o Nazareno. 
68 Mas ele o negou, dizendo: Não [o] conheço, nem sei o que dizes: E saiu-se fora ao alpendre; e cantou o galo. 
69 E a serva vendo-o outra vez, começou a dizer aos que ali estavam: Este é um deles. 
70 Mas ele o negou outra vez. E pouco depois disseram os que ali estavam outra vez a Pedro: Verdadeiramente tu és um deles; pois também és galileu, e a tua fala é semelhante . 
|fn:  N4 omite "e a tua fala é semelhante
71 E ele começou a amaldiçoar e a jurar, [dizendo] : Não conheço a esse homem que dizeis. 
72 E o galo cantou a segunda vez. E Pedro se lembrou da palavra que Jesus lhe tinha dito: Antes que o galo cante duas vezes, tu me negarás três vezes. E retirando-se dali, chorou.

CAPÍTULO 15

1 E logo ao amanhecer, os sumos sacerdotes tiveram conselho com os anciãos, e com os escribas, e com todo o tribunal; e amarrando a Jesus, levaram [-no] e [o] entregaram a Pilatos. 
2 E perguntou-lhe Pilatos: És tu o Rei dos Judeus? E respondendo ele, disse-lhe: Tu o dizes. 
3 E os chefes dos sacerdotes o acusavam de muitas coisas, porém ele nada respondia. 
|fn:  RP, N4 omitem "porém ele nada respondia
4 E outra vez Pilatos lhe perguntou, dizendo: Não respondes nada? Olha quantas [coisas] testemunham contra ti! 
5 Mas Jesus nada mais respondeu; de maneira que Pilatos se maravilhava. 
6 E na festa [Pilatos] lhes soltava um preso, qualquer que eles pedissem. 
7 E havia um chamado Barrabás, preso com [outros] revoltosos, que em uma rebelião tinha cometido uma morte. 
8 E a multidão, dando gritos, começou a pedir [que fizesse] como sempre lhes tinha feito. 
9 E Pilatos lhes respondeu, dizendo: Quereis que vos solte ao Rei dos Judeus? 
10 (Porque ele sabia, que os chefes dos sacerdotes o entregaram por inveja). 
11 Mas os Príncipes dos Sacerdotes agitaram a multidão, para que, ao invés disso, lhes soltasse a Barrabás. 
12 E respondendo Pilatos, disse-lhes outra vez: Que pois quereis que eu faça do que chamais Rei dos Judeus? 
13 E eles voltaram a clamar: Crucifica-o! 
14 Mas Pilatos lhes disse: Pois que mal ele fez? E eles clamavam ainda mais: Crucifica-o! 
15 Mas Pilatos, querendo satisfazer à multidão, soltou-lhes a Barrabás, e entregou a Jesus açoitado, para que fosse crucificado. 
16 E os soldados o levaram para dentro da sala, que é o tribunal; e convocaram toda a tropa. 
17 E o vestiram de vermelho; e tecendo uma coroa de espinhos, puseram-na em sua [cabeça] . 
18 E começaram a saudá-lo, [dizendo] : Alegra-te, Rei dos Judeus! 
19 E feriram sua cabeça com uma cana, e cuspiam nele, e prostrados de joelhos, o adoravam. 
20 E havendo o escarnecido, despiram-lhe a [capa] vermelha, e o vestiram de suas próprias roupas, e o levaram fora, para o crucificarem. 
21 E forçaram a um Simão cireneu, que passava [por ali] , e vinha do campo, o pai de Alexandre e de Rufo, que levasse sua cruz. 
22 E o levaram ao lugar de Gólgota, que traduzido é: o lugar da caveira. 
23 E deram-lhe a beber vinho misturado com mirra; mas ele não [o] tomou. 
24 E havendo o crucificado, repartiram suas roupas, lançando sortes sobre elas, quem levaria cada uma [delas] . 
25 E era a hora terceira, e o crucificaram. 
26 E a descrição de sua causa estava por cima [dele] escrita: O REI DOS JUDEUS. 
27 E crucificaram com ele dois ladrões, um à sua direita, e outro à esquerda. 
28 E cumpriu-se a Escritura que diz: E foi contado com os malfeitores. 
|fn:  N4 omite todo o versículo. Compare com Lucas 22:37 e Isaías 53:12
29 E os que passavam, blasfemavam dele, balançando suas cabeças, e dizendo: Ah! tu que derrubas o templo, e em três dias o edificas; 
30 Salva-te a ti mesmo, e desce da cruz! 
31 E da mesma maneira também os chefes dos sacerdotes, com os escribas, diziam uns para os outros, escarnecendo: Ele salvou a outros, a si mesmo não pode salvar! 
32 Que o Cristo, o Rei de Israel, desça agora da cruz, para que o vejamos, e creiamos! Os que estavam crucificados com ele também o insultavam. 
33 E vinda a hora sexta, foram feitas trevas sobre toda a terra, até a hora nona. 
34 E à hora nona, Jesus exclamou com grande voz, dizendo: ELOÍ, ELOÍ, LAMÁ SABACTÂNI, que traduzido é: Deus meu, Deus meu, por que me desamparaste? 
35 E ouvindo uns dos que ali estavam, diziam: Eis que ele chama a Elias. 
36 E correu um, e encheu de vinagre uma esponja, e pondo-a em uma cana, dava-lhe de beber, dizendo: Deixai, vejamos se Elias virá para tirá-lo. 
37 E Jesus, dando uma grande voz, expirou. 
38 E o véu do Templo se rasgou em dois do alto abaixo. 
39 E o centurião, que estava ali em frente dele, vendo que expirara clamando assim, disse: Verdadeiramente este homem era Filho de Deus. 
40 E também estavam ali [algumas] mulheres olhando de longe, entre as quais estava também Maria Madalena, e Maria (mãe de Tiago o menor e de José), e Salomé. 
41 As quais também, estando ele na Galileia, o seguiam, e o serviam; e outras muitas, que tinham subido com ele a Jerusalém. 
42 E vinda já a tarde, porque era a preparação, que é o dia antes de sábado; 
43 Veio José de Arimateia, honrado membro do conselho, que também esperava o Reino de Deus, e com ousadia foi até Pilatos, e pediu o corpo de Jesus. 
44 E Pilatos se maravilhou de que já fosse morto. E chamando a si ao centurião, perguntou-lhe se era morto já havia muito [tempo] . 
45 E havendo sido explicado pelo centurião, deu o corpo a José. 
46 O qual comprou um lençol fino, e tirando-o [da cruz] , envolveu-o no lençol fino, e o pôs em um sepulcro escavado em uma rocha, e revolveu uma pedra à porta do sepulcro. 
47 E Maria Madalena, e Maria [mãe] de José, olhavam onde o puseram.

CAPÍTULO 16

1 E passado o sábado, Maria Madalena, e Maria [mãe] de Tiago, e Salomé, compraram especiarias, para virem, e o ungirem. 
2 E manhã muito [cedo] , o primeiro dia da semana, vieram ao sepulcro, o sol já saindo. 
3 E diziam umas às outras: Quem nos revolverá a pedra da porta do sepulcro? 
4 Porque era muito grande. E observando, viram que já a pedra estava revolta 
5 E entrando no sepulcro, viram um rapaz sentado à direita, vestido de uma roupa comprida branca; e [elas] se espantaram. 
6 Mas ele lhes disse: Não vos espanteis; buscais a Jesus Nazareno crucificado; ele já ressuscitou; não está aqui; eis aqui o lugar onde o puseram. 
7 Porém ide, dizei a seus discípulos e a Pedro, que ele vos vai adiante para a Galileia; ali o vereis, como ele vos disse. 
8 E elas, saindo apressadamente, fugiram do sepulcro; porque o temor e espanto as tinha tomado; e não diziam nada a ninguém, porque temiam. 
|fn:  N4 não considera autêntico o conteúdo dos versículos 9 ao 20
9 E [Jesus] , tendo ressuscitado pela manhã, [n] o primeiro da semana, apareceu primeiramente a Maria Madalena, da qual tinha expulsado sete demônios. 
10 Esta, tendo indo, anunciou aos que estiveram com ele, os quais estavam tristes e chorando. 
11 E eles, ao ouvirem ouvindo que ele vivia, e [que] tinha sido visto por ela, não creram. 
12 E depois se manifestou em outra forma a dois deles, que iam pelo caminho para o campo. 
13 E estes, indo, anunciaram aos outros; [porém] nem ainda creram nestes [dois] . 
14 Finalmente se manifestou aos onze, estando eles juntamente sentados, e repreendeu [pela] incredulidade e dureza de coração deles, por não terem crido nos que já o tinham visto ressuscitado. 
15 E disse-lhes: Ide por todo o mundo, pregai o Evangelho a toda criatura. 
16 Quem crer e for batizado será salvo; mas quem não crer será condenado. 
17 E estes sinais seguirão aos que crerem: em meu nome expulsarão demônios; falarão novas línguas; 
18 Pegarão serpentes com as mãos; e se beberem alguma coisa mortífera, não lhes fará dano algum; porão as mãos sobre os enfermos, e sararão. 
19 Então o Senhor, depois de ter lhes falado, foi recebido acima no céu, e sentou-se à direita de Deus. 
20 E eles saíram e pregaram por todas as partes, o Senhor operando com eles, e confirmando a palavra com os sinais que se seguiam. Amém
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)