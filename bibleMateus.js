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

enviarScript(`Evangelho Segundo Mateus

CAPÍTULO 1

1 Livro da geração de Jesus Cristo, filho de Davi, filho de Abraão. 
2 Abraão gerou a Isaque; e Isaque gerou a Jacó; e Jacó gerou a Judá e a seus irmãos. 
3 E Judá gerou de Tamar a Perez e a Zerá; e Perez gerou a Esrom, e Esrom gerou a Arão. 
4 E Arão gerou a Aminadabe; e Aminadabe gerou a Naassom; e Naassom gerou a Salmom. 
5 E Salmom gerou de Raabe a Boaz; e Boaz gerou de Rute a Obede; e Obede gerou a Jessé. 
6 E Jessé gerou ao rei Davi; e o rei Davi gerou a Salomão da que [fora mulher] de Urias. 
|fn:  N4 omite "o rei"
7 E Salomão gerou a Roboão; e Roboão gerou a Abias; e Abias gerou a Asa. 
8 E Asa gerou a Josafá; e Josafá gerou a Jorão; e Jorão gerou a Uzias. 
9 E Uzias gerou a Jotão; e Jotão gerou a Acaz; e Acaz gerou a Ezequias. 
10 E Ezequias gerou a Manassés; e Manassés gerou a Amom; e Amom gerou a Josias. 
11 E Josias gerou a Jeconias, e a seus irmãos no [tempo do] exílio babilônico. 
12 E depois do exílio babilônico Jeconias gerou a Salatiel; e Salatiel gerou a Zorobabel. 
13 E Zorobabel gerou a Abiúde; e Abiúde gerou a Eliaquim; e Eliaquim gerou a Azor. 
14 E Azor gerou a Sadoque; e Sadoque gerou a Aquim; e Aquim gerou a Eliúde. 
15 E Eliúde gerou a Eleazar; e Eleazar gerou a Matã; e Matã gerou a Jacó. 
16 E Jacó gerou a José, o marido de Maria, da qual nasceu Jesus, chamado o Cristo. 
17 De maneira que todas as gerações desde Abraão até Davi são catorze gerações; e desde Davi até o exílio babilônico catorze gerações; e desde o exílio babilônico até Cristo catorze gerações. 
18 E o nascimento de Jesus Cristo foi assim: estando sua mãe Maria desposada com José, antes que se ajuntassem, ela foi achada grávida do Espírito Santo. 
19 Então José, seu marido, sendo justo, e não querendo a expor à infâmia, pensou em deixá-la secretamente. 
20 E ele, pretendendo isto, eis que um anjo do Senhor lhe apareceu em sonho, dizendo: José, filho de Davi, não temas receber Maria, tua mulher, porque o que nela está concebido é do Espírito Santo. 
21 E ela dará à luz um filho, e tu chamarás seu nome Jesus; porque ele salvará seu povo de seus pecados. 
|fn:  Jesus significa “O SENHOR salva”
22 E tudo isto aconteceu para que se cumprisse o que foi dito pelo Senhor por meio do profeta, que disse: 
23 Eis que a virgem conceberá, e dará à luz um filho, e chamarão seu nome Emanuel, que traduzido é: Deus conosco. 
|fn:  Ref. - Isaías 7:14
24 E despertando José do sonho, fez como o anjo do Senhor tinha lhe mandado, e recebeu sua mulher. 
25 E ele não a conheceu [intimamente] , até que ela deu à luz o filho dela, o primogênito, e lhe pôs por nome JESUS.
|fn:  TR, RP: o filho dela, o primogênito - N4: um filho

CAPÍTULO 2

1 E sendo Jesus já nascido em Belém da Judeia, nos dias do rei Herodes, eis que vieram uns magos do oriente a Jerusalém, 
2 Dizendo: Onde está o Rei nascido dos Judeus? Porque vimos sua estrela no oriente, e viemos para adorá-lo. 
|fn:  no oriente – trad.alt. quando ela surgiu – também no v. 9
3 E o rei Herodes, ao ouvir [isto] , ficou perturbado, e com ele toda Jerusalém. 
4 E tendo reunido todos os chefes dos sacerdotes e escribas do povo, perguntou-lhes onde o Cristo havia de nascer. 
5 E eles lhe disseram: Em Belém da Judeia, porque assim está escrito pelo profeta: 
6 E tu Belém, terra de Judá, de maneira nenhuma és a menor entre as lideranças de Judá, porque de ti sairá o Guia que apascentará meu povo Israel. 
|fn:  Ref. Miqueias 5:2
7 Então Herodes, chamando secretamente os magos, perguntou-lhes com precisão sobre o tempo em que a estrela havia aparecido. 
8 E enviando-os a Belém, disse: Ide, e investigai cuidadosamente pelo menino; e quando o achardes, avisai-me, para que também eu venha e o adore. 
9 Depois de ouvirem o rei, eles foram embora. E eis que a estrela que tinham visto no oriente ia adiante deles, até que ela chegou, e ficou parada sobre onde o menino estava. 
10 E eles, vendo a estrela, jubilaram muito com grande alegria. 
11 E entrando na casa, acharam o menino com sua mãe Maria, e prostrando-se o adoraram. E abrindo seus tesouros, ofereceram-lhe presentes: ouro, incenso, e mirra. 
12 E sendo por divina revelação avisados em sonho que não voltassem a Herodes, partiram para sua terra por outro caminho. 
13 E tendo eles partido, eis que um anjo do Senhor apareceu a José em sonho, dizendo: Levanta-te, toma o menino e sua mãe, e foge para o Egito; e fica lá até que eu te diga, porque Herodes buscará o menino para o matar. 
14 Então ele se despertou, tomou o menino e sua mãe de noite, e foi para o Egito; 
15 E esteve lá até a morte de Herodes, para que se cumprisse o que foi dito pelo Senhor por meio do profeta, que disse: Do Egito chamei o meu Filho. 
|fn:  Ref. Oseias 11:1
16 Então Herodes, ao ver que tinha sido enganado pelos magos, irou-se muito, e mandou matar todos os meninos em Belém e em todos os limites de sua região, [da idade] de dois anos e abaixo, conforme o tempo que tinha perguntado com precisão dos magos. 
17 Então se cumpriu o que foi dito pelo profeta Jeremias, que disse: 
18 Uma voz se ouviu em Ramá, lamentação, choro, e grande pranto; Raquel chorava por seus filhos, e não quis ser consolada, pois já não existem. 
|fn:  N4 omite "lamentação" |fn:  Ref. Jeremias 31:15
19 Mas depois de Herodes ter morrido, eis que um anjo do Senhor apareceu no Egito a José em sonho, 
20 Dizendo: Levanta-te, toma o menino e sua mãe, e vai para a terra de Israel, porque já morreram os que procuravam a morte do menino. 
21 Então ele se levantou, tomou o menino e sua mãe, e veio para a terra de Israel. 
22 Porém ao ouvir que Arquelau reinava na Judeia em lugar de seu pai Herodes, ele teve medo de ir para lá; mas avisado por divina revelação em sonho, foi para a região da Galileia, 
23 E veio a habitar na cidade chamada Nazaré, para que se cumprisse o que foi dito pelos profetas, que: Ele será chamado de Nazareno.

CAPÍTULO 3

1 E naqueles dias veio João Batista, pregando no deserto da Judeia, 
2 E dizendo: Arrependei-vos, porque perto está o Reino dos céus. 
3 Porque este é aquele que foi declarado pelo profeta Isaías, que disse: Voz do que clama no deserto: “Preparai o caminho do Senhor; endireitai suas veredas”. 
|fn:  Ref. Isaías 40:3
4 Este João tinha sua roupa de pelos de camelo e um cinto de couro ao redor de sua cintura, e seu alimento era gafanhotos e mel silvestre. 
5 Então vinham até ele [moradores] de Jerusalém, de toda a Judeia, e de toda a região próxima do Jordão; 
6 E eram por ele batizados no Jordão,TR, RP:Jordão - N4: rio Jordão confessando os seus pecados. 
7 Mas quando ele viu muitos dos fariseus e dos saduceus que vinham ao seu batismo, disse-lhes: Ninhada de víboras! Quem vos ensinou a fugir da ira futura? 
|fn:  N4 omite "seu"
8 Dai, pois, frutos condizentes com o arrependimento. 
|fn:  RP, TR contêm "fruto condizente" |fn:  arrependimento não é somente um pesar ou remorso pelo pecado, mas sim uma mudança de atitude, abandonando o que é errado
9 E não imagineis, dizendo em vós mesmos: “Temos por pai a Abraão”, porque eu vos digo que até destas pedras Deus pode fazer surgir filhos a Abraão. 
10 E agora mesmo o machado está posto à raiz das árvores; portanto toda árvore que não dá bom fruto é cortada e lançada ao fogo. 
|fn:  N4 omite "mesmo"
11 Realmente eu vos batizo com água para arrependimento, mas aquele que vem após mim é mais poderoso do que eu; suas sandálias não sou digno de levar. Ele vos batizará com o Espírito Santo e com fogoRP omite "e com fogo". 
12 Ele tem sua pá na mão; limpará sua eira, e recolherá seu trigo no celeiro; mas queimará a palha com fogo que nunca se apaga. 
13 Então Jesus veio da Galileia ao Jordão até João para ser por ele batizado. 
14 Mas João lhe impedia, dizendo: Eu preciso ser batizado por ti, e tu vens a mim? 
|fn:  N4 omite "João"
15 Porém Jesus lhe respondeu: Permite por agora, porque assim nos convém cumprir toda a justiça. Então ele o permitiu. 
16 E tendo Jesus sido batizado, subiu logo da água. E eis que os céus se lhe abriram, e ele viu o Espírito de Deus descendo como uma pomba, vindo sobre ele. 
|fn:  N4 omite "lhe"
17 E eis uma voz dos céus, dizendo: Este é o meu Filho amado, em quem me agrado.

CAPÍTULO 4

1 Então Jesus foi levado pelo Espírito ao deserto para ser tentado pelo diabo. 
2 E depois de jejuar quarenta dias e quarenta noites, teve fome. 
3 E o tentador se aproximou dele, e disse: Se tu és o Filho de Deus, dize que estas pedras se tornem pães. 
|fn:  TR, RP: aproximou-se dele, e disse - N4: aproximou-se, e disse-lhe
4 Mas [Jesus] respondeu: Está escrito: Não só de pão viverá o ser humano, mas de toda palavra que sai da boca de Deus. 
|fn:  Ref. Deuteronômio 8:3
5 Então o diabo o levou consigo à santa cidade, e o pôs sobre o ponto mais alto do Templo, 
6 E disse-lhe: Se tu és o Filho de Deus, lança-te abaixo, porque está escrito que: Mandará a seus anjos acerca de ti, e te tomarão pelas mãos, para que nunca com teu pé tropeces em pedra alguma. 
|fn:  Ref. Salmos 91:11,12
7 Jesus lhe disse: Também está escrito: Não tentarás o Senhor teu Deus. 
|fn:  tentarás – ou: Não testarás o Senhor teu Deus |fn:  Ref. Deuteronômio 6:16
8 Outra vez o diabo o levou consigo a um monte muito alto, e lhe mostrou todos os reinos do mundo, e a glória deles, 
9 E disse-lhe: Tudo isto te darei se, prostrado, me adorares. 
10 Então Jesus disse: Vai embora, Satanás! Porque está escrito: Ao Senhor teu Deus adorarás, e só a ele cultuarás. 
|fn:  TR, N4: Vai embora - RP: Vai para trás |fn:  Ref. Deuteronômio 6:13
11 Então o diabo o deixou; e eis que chegaram anjos, e o serviram. 
12 Mas quando Jesus ouviu que João estava preso, voltou para a Galileia. 
|fn:  N4 omite "Jesus"
13 E deixando Nazaré, veio a morar em Cafarnaum, [cidade] marítima, nos limites de Zebulom e Naftali, 
14 Para que se cumprisse o que foi anunciado pelo profeta Isaías, que disse: 
15 A terra de Zebulom e a terra de Naftali, caminho do mar, além do Jordão, a Galileia dos gentios; 
16 O povo sentado em trevas viu uma grande luz; aos sentados em região e sombra da morte, a luz lhes apareceu. 
|fn:  Ref. Isaías 9:1
17 Desde então Jesus começou a pregar e a dizer: Arrependei-vos, porque perto está o Reino dos céus. 
18 Enquanto Jesus andava junto ao mar da Galileia, viu dois irmãos: Simão, chamado Pedro, e seu irmão André, lançarem a rede ao mar, porque eram pescadores. 
|fn:  RP, N4 omitem "Jesus"
19 E disse-lhes: Vinde após mim, e eu vos farei pescadores de gente. 
20 Então eles logo deixaram as redes e o seguiram. 
21 E passando dali, viu outros dois irmãos: Tiago, [filho] de Zebedeu, e seu irmão João, em um barco, com seu pai Zebedeu, que estavam consertando suas redes; e ele os chamou. 
22 E eles logo deixaram o barco e seu pai, e o seguiram. 
23 E Jesus rodeava toda a Galileia, ensinando em suas sinagogas, pregando o Evangelho do Reino, e curando toda enfermidade e toda doença no povo. 
|fn:  N4 omite "Jesus"
24 Sua fama corria por toda a Síria, e traziam-lhe todos que sofriam de algum mal, tendo diversas enfermidades e tormentos, e os endemoninhados, epiléticos, e paralíticos; e ele os curava. 
25 E muitas multidões da Galileia, de Decápolis, de Jerusalém, da Judeia, e dalém do Jordão o seguiam.

CAPÍTULO 5

1 E quando [Jesus] viu as multidões, subiu a um monte; e sentando-se, achegaram-se a ele os seus discípulos. 
2 Então ele abriu sua boca e lhes ensinou, dizendo: 
3 Benditos são os humildes de espírito, porque deles é o Reino dos céus. 
|fn:  Neste contexto, os benditos, ou bem-aventurados, são as pessoas que têm ou terão motivos de se alegrarem por causa de uma bênção recebida, ainda que não necessariamente estejam contentes no momento |fn:  humildes ou pobres de espírito são as pessoas que estão aflitas e reconhecem que dependem de Deus para suas necessidades – Isaías 57:15; 66:2
4 Benditos são os que choram, porque eles serão consolados. 
5 Benditos são os mansos, porque eles herdarão a terra. 
6 Benditos são os que têm fome e sede de justiça, porque eles serão saciados. 
7 Benditos são os misericordiosos, porque eles alcançarão misericórdia. 
8 Benditos são os limpos de coração, porque eles verão a Deus. 
9 Benditos são os pacíficos, porque eles serão chamados filhos de Deus. 
10 Benditos são os que sofrem perseguição por causa da justiça, porque deles é o Reino dos céus. 
11 Benditos sois vós, quando vos insultarem, perseguirem, e mentirem, falando contra vós todo mal por minha causa. 
12 Jubilai e alegrai-vos, porque grande é vossa recompensa nos céus; pois assim perseguiram aos profetas que foram antes de vós. 
13 Vós sois o sal da terra; mas se o sal perder seu sabor, com que se salgará? Para nada mais presta, a não ser para se lançar fora, e ser pisado pelas pessoas. 
14 Vós sois a luz do mundo; não se pode esconder uma cidade fundada sobre o monte; 
15 Nem se acende a lâmpada para se pôr debaixo de um cesto, mas sim na luminária, e ilumina a todos quantos estão na casa. 
16 Assim brilhe vossa luz diante das pessoas, para que vejam vossas boas obras, e glorifiquem ao vosso Pai, que está nos céus. 
17 Não penseis que vim para revogar a Lei ou os Profetas; não vim para revogar, mas sim para cumprir. 
18 Porque em verdade vos digo que, até que o céu e a terra passem, nem um jota nem um til passará da Lei até que tudo aconteça. 
|fn:  jota é uma adaptação da letra grega “iota”
19 Portanto qualquer um que desobedecer a um destes menores mandamentos, e assim ensinar às pessoas, será chamado o menor no Reino dos céus; porém qualquer que [os] cumprir e ensinar, esse será chamado grande no Reino dos céus. 
20 Porque eu vos digo que se a vossa justiça não for maior que a dos escribas e dos fariseus, de maneira nenhuma entrareis no Reino dos céus. 
21 Ouvistes o que foi dito aos antigos: “Não cometerás homicídio”; “mas qualquer um que cometer homicídio será réu do julgamento”. 
|fn:  homicídio - Ref. Êxodo 20:13
22 Porém eu vos digo que qualquer um que se irar contra seu irmão sem razão será réu do julgamento. E qualquer um que disser a seu irmão: “Idiota!” será réu do tribunal. E qualquer que [lhe] disser: “Louco!” será réu do fogo do inferno. 
|fn:  N4 omite "sem razão" |fn:  tribunal – Ou “sinédrio”, o tribunal dos israelitas |fn:  idiota – significado provável da palavra aramaica às vezes transliterada “raca”
23 Portanto, se trouxeres tua oferta ao altar, e ali te lembrares que teu irmão tem algo contra ti, 
24 Deixa ali tua oferta diante do altar e vai primeiro reconciliar-te com teu irmão, e então vem oferecer a tua oferta. 
25 Faze acordo depressa com teu adversário, enquanto estás com ele no caminho, para não acontecer que o adversário te entregue ao juiz, e o juiz te entregue ao oficial, e te lancem na prisão. 
|fn:  N4 omite "te entregue"
26 Em verdade te digo que não sairás dali enquanto não pagares a última moeda. 
|fn:  moeda – Ou: quadrante, uma moeda de pequeno valor
27 Ouvistes o que foi dito aos antigos: “Não adulterarás”. 
|fn:  RP, N4 omite "aos antigos" |fn:  Ref. Êxodo 20:14; Deuteronômio 5:18
28 Porém eu vos digo que qualquer um que olhar para uma mulher para a cobiçar, em seu coração já adulterou com ela. 
29 Se o teu olho direito te faz pecar, arranca-o e lança-o de ti; porque é melhor para ti que um dos teus membros se perca do que o teu corpo todo seja lançado no inferno. 
30 E se a tua mão direita te faz pecar, corta-a e lança-a de ti; porque é melhor para ti que um dos teus membros se perca do que o teu corpo todo seja lançado no inferno. 
|fn:  TR, RP: seja lançado no - N4: vá ao
31 Também foi dito: “Qualquer um que se divorciar sua mulher, dê a ela carta de separação”. 
|fn:  Ref. Deuteronômio 24:1
32 Porém eu vos digo que qualquer um que se divorciar de sua mulher, a menos que seja por causa de pecado sexual, faz com que ela adultere; e qualquer um que se casar com a divorciada comete adultério. 
33 Também ouvistes que foi dito aos antigos: “Não jurarás falsamente”, “mas cumprirás ao Senhor os teus juramentos”. 
|fn:  Ref. Levítico 19:12; Números 30:2
34 Porém eu vos digo que de maneira nenhuma jureis; nem pelo céu, porque é o trono de Deus; 
35 Nem pela terra, porque é o suporte de seus pés; nem por Jerusalém, porque é a cidade do grande Rei. 
36 Nem por tua cabeça jurarás, pois nem sequer um cabelo podes tornar branco ou preto. 
37 Mas seja vosso falar: “sim”, “sim”, “não”, “não”; porque o que disso passa procede do maligno. 
38 Ouvistes o que foi dito: “Olho por olho, e dente por dente”. 
|fn:  Ref. Êxodo 21:24; Levítico 24:20; Deuteronômio 19:21
39 Mas eu vos digo que não resistais a quem for mau; em vez disso, a qualquer um que te bater à tua face direita, mostra-lhe também a outra. 
|fn:  RP omite "tua"
40 E ao que quiser disputar contigo, e te tomar tua túnica, deixa-lhe também a capa. 
41 E se qualquer um te obrigar a caminhar uma milha, vai com ele duas. 
42 Dá a quem te pedir; e não te desvies de quem quiser de ti tomar emprestado. 
43 Ouvistes o que foi dito: “Amarás teu próximo”, e “odiarás teu inimigo”. 
|fn:  Ref. Levítico 19:18
44 Porém eu vos digo: amai vossos inimigos, bendizei os que vos maldizem, fazei bem aos que vos odeiam, e orai pelos que vos maltratam e vos perseguem, 
|fn:  N4 omite "bendizei os que vos maldizem, fazei bem aos que vos odeiam" |fn:  N4 omite "vos maltratam e"
45 Para que sejais filhos de vosso Pai que está nos céus; porque ele faz seu sol sair sobre maus e bons, e chover sobre justos e injustos. 
46 Pois se amardes os que vos amam, que recompensa tereis? Não fazem os cobradores de impostos também o mesmo? 
47 E se saudardes somente os vossos irmãos, o que fazeis de mais? Não fazem os cobradores de impostos também assim? 
|fn:  TR, N4: irmãos - RP: amigos |fn:  TR, RP: cobradores de impostos - N4: gentios
48 Portanto, sede vós perfeitos, assim como vosso Pai que está nos céus é perfeito.
|fn:  TR, RP: que está nos céus - N4:celestial

CAPÍTULO 6

1 Ficai atentos para que não façais vossa esmola diante das pessoas a fim de que sejais vistos por elas; de outra maneira não tereis recompensa de vosso Pai que está nos céus. 
|fn:  TR, RP: esmola - N4: boa ação (lit. "justiça")
2 Portanto, quando fizeres esmola, não faças tocar trombeta diante de ti, como fazem os hipócritas nas sinagogas e nas ruas, para serem honrados pelas pessoas; em verdade vos digo que já receberam sua recompensa. 
3 Mas quando tu fizeres esmola, não saiba tua mão esquerda o que faz a tua direita; 
4 Para que a tua esmola seja em segredo, e teu Pai, que vê em segredo, ele te recompensará em público. 
|fn:  N4 omite "em público"
5 E quando orares, não sejas como os hipócritas; porque eles amam orar em pé nas sinagogas e nas esquinas das ruas para serem vistos pelas pessoas. Em verdade vos digo que já receberam sua recompensa. 
6 Porém tu, quando orares, entra em teu quarto, fecha tua porta, e ora a teu Pai, que está em segredo; e teu Pai, que vê em segredo, ele te recompensará em público. 
|fn:  N4 omite "em público"
7 E quando orardes, não façais repetições inúteis como os gentios, que pensam que por muito falarem serão ouvidos. 
8 Não sejais, pois, semelhantes a eles; porque vosso Pai sabe o que necessitais, antes que vós peçais a ele. 
9 Vós, portanto, orareis assim: Pai nosso, que estás nos céus, santificado seja o teu nome. 
10 Venha o teu Reino. Seja feita a tua vontade, tanto na terra, assim como no céu. 
11 O pão nosso de cada dia nos dá hoje. 
12 E perdoa-nos nossas dívidas, assim como nós também perdoamos aos nossos devedores. 
13 E não nos conduzas à tentação, mas livra-nos do mal; porque teu é o Reino, o poder, e a glória, para sempre, Amém. 
|fn:  N4 omite: porque teu (...) Amém
14 Porque se perdoardes às pessoas suas ofensas, vosso Pai celestial também vos perdoará; 
15 Mas se não perdoardes às pessoas suas ofensas , também vosso Pai não vos perdoará vossas ofensas. 
|fn:  N4 omite: suas ofensas
16 E quando jejuardes, não vos mostreis tristonhos, como os hipócritas; porque eles desfiguram seus rostos, para parecerem aos outros que jejuam. Em verdade vos digo que eles já receberam sua recompensa. 
17 Porém tu, quando jejuares, unge a tua cabeça e lava o teu rosto, 
18 Para não pareceres às pessoas que jejuas, mas sim ao teu Pai, que está em segredo; e teu Pai, que vê em segredo, ele te recompensará em público . 
|fn:  RP, N4 não contêm "em público"
19 Não ajunteis para vós tesouros na terra, onde e a traça e a ferrugem gastam, e onde os ladrões invadem e roubam; 
20 Mas ajuntai para vós tesouros no céu, onde nem a traça nem a ferrugem gastam, e onde os ladrões não invadem nem roubam. 
21 Porque onde estiver o vosso tesouro, ali estará também o vosso coração. 
|fn:  N4 contém: teu tesouro, (...) teu coração
22 A lâmpada do corpo é o olho; portanto, se o teu olho for puro, todo o teu corpo será luminoso. 
23 Porém se o teu olho for maligno, todo o teu corpo estará em trevas. Assim, se a luz que há em ti são trevas, como são grandes [essas] trevas! 
24 Ninguém pode servir a dois senhores; pois ou odiará um e amará outro; ou se apegará a um, e desprezará o outro. Não podeis servir a Deus e às riquezas. 
|fn:  riquezas – lit. “Mamom”, a personificação dos bens materiais e da ganância
25 Por isso vos digo: não andeis ansiosos por vossa vida, sobre o que haveis de comer, ou que haveis de beber; nem por vosso corpo, sobre com que vos haveis de vestir. Não é a vida mais que o alimento, e o corpo [mais] que a roupa? 
26 Olhai para as aves do céu, que não semeiam, nem ceifam, nem ajuntam em celeiros; e contudo vosso Pai celestial as alimenta. Não sois vós muito mais importantes que elas? 
27 E qual de vós poderá, por sua ansiedade, acrescentar um côvado à sua estatura? 
|fn:  estatura – ou: qual de vós poderá, por sua ansiedade, alongar um pouco sua vida?
28 E por que andais ansiosos pela roupa? Prestai atenção aos lírios do campo, como crescem; eles nem trabalham nem fiam. 
29 E eu vos digo que nem mesmo Salomão, em toda a sua glória, se vestiu como um deles. 
30 Se Deus veste desta maneira a erva do campo, que hoje existe, e amanhã é lançada no forno, não [vestirá] ele muito mais a vós, que tendes pouca fé? 
31 Não andeis, pois, ansiosos, dizendo: “Que comeremos?” Ou “Que beberemos?” Ou “Com que nos vestiremos?” 
32 Porque os gentios buscam todas estas coisas, e vosso Pai celestial sabe que necessitais destas coisas, todas elas. 
33 Mas buscai primeiramente o Reino de Deus e a sua justiça, e todas estas coisas vos serão acrescentadas. 
|fn:  N4 omite "de Deus"
34 Não andeis, pois, ansiosos pelo dia de amanhã, porque o amanhã cuidará de si mesmo. Basta a cada dia o seu mal.

CAPÍTULO 7

1 Não julgueis, para que não sejais julgados. 
2 Porque com o juízo que julgardes sereis julgados; e com a medida que medirdes vos medirão de volta. 
|fn:  RP, N4 omitem: de volta
3 Ora, por que vês o cisco que está no olho de teu irmão e não enxergas a trave que está em teu próprio olho? 
4 Ou como dirás a teu irmão: “Deixa-me tirar o cisco do teu olho”, se eis que há uma trave em teu próprio olho? 
5 Hipócrita! Tira primeiro a trave do teu olho, e então verás claramente para tirar o cisco do olho de teu irmão. 
6 Não deis o que é santo aos cães, nem lanceis vossas pérolas diante dos porcos, para não acontecer de as pisarem com os pés e, virando-se, vos despedacem. 
7 Pedi, e vos será dado; buscai, e achareis; batei, e vos será aberto; 
8 Pois qualquer um que pede recebe; e quem busca acha; e ao que bate lhe é aberto. 
9 E quem há dentre vós que, se seu filho pedir pão, lhe dará uma pedra? 
10 E se pedir peixe, lhe dará uma serpente? 
11 Ora, se vós, ainda que sejais maus, sabeis dar bons presentes a vossos filhos, quanto mais o vosso Pai, que está nos céus, dará coisas boas aos que lhe pedirem! 
12 Portanto tudo o que quiserdes que os outros vos façam, fazei-lhes vós também assim; porque esta é a Lei e os Profetas. 
13 Entrai pela porta estreita; porque larga é a porta, e espaçoso o caminho que leva à perdição; e muitos são os que por ela entram. 
14 Porque estreita é a porta, e apertado o caminho que leva à vida; e são poucos os que a acham. 
|fn:  TR, N4: Porque - RP: Como é estreita
15 Tende cuidado, porém, com os falsos profetas, que vêm a vós com roupa de ovelhas, mas por dentro são lobos vorazes. 
|fn:  N4 omite "porém"
16 Vós os conhecereis pelos seus frutos. Por acaso se colhem uvas dos espinheiros, ou figos dos abrolhos? 
17 Assim toda boa árvore dá bons frutos, mas a arvore má dá frutos maus. 
18 A boa árvore não pode dar frutos maus, nem a árvore má dar bons frutos. 
19 Toda árvore que não dá bom fruto é cortada e lançada ao fogo. 
20 Portanto vós os conhecereis pelos seus frutos. 
21 Não é qualquer um que me diz: “Senhor, Senhor” que entrará no Reino dos céus; mas sim aquele que faz a vontade do meu Pai que está nos céus. 
22 Muitos me dirão naquele dia: “Senhor, Senhor! Não profetizamos em teu nome? E em teu nome não expulsamos os demônios? E em teu nome não fizemos muitas maravilhas?” 
23 Então claramente lhes direi: “Nunca vos conheci. Afastai-vos de mim, transgressores!” ) 
|fn:  transgressores – lit. praticantes de transgressão (ou maldade
24 Portanto todo o que ouve estas minhas palavras e as pratica, eu o compararei ao homem prudente, que construiu sua casa sobre a rocha. 
|fn:  TR, RP: eu o compararei - N4: será comparado
25 E a chuva desceu, correntezas vieram, ventos sopraram, e atingiram aquela casa; e ela não caiu, porque estava fundada sobre a rocha. 
26 Porém todo o que ouve estas minhas palavras e não as pratica, eu o compararei ao homem tolo, que construiu sua casa sobre a areia. 
27 E a chuva desceu, correntezas vieram, ventos sopraram, e atingiram aquela casa; e ela caiu, e sua queda foi grande. 
28 E aconteceu que, quando Jesus terminou estas palavras, as multidões estavam admiradas de sua doutrina, 
29 porque ele os ensinava como tendo autoridade, e não como os escribas.
|fn:  N4 contém "seus escribas"

CAPÍTULO 8

1 Quando ele desceu do monte, muitas multidões o seguiram. 
2 E eis que um leproso veio e prostrou-se diante dele, dizendo: Senhor, se quiseres, podes me limpar. 
3 Jesus estendeu a mão e o tocou, dizendo: Quero, sê limpo. E logo ele ficou limpo de sua lepra. 
|fn:  N4 omite "Jesus"
4 Então Jesus lhe disse: Tem o cuidado de dizeres a ninguém; mas vai mostrar-te ao sacerdote, e oferece a oferta que Moisés ordenou, para que lhes haja testemunho. 
5 Quando Jesus entrou em Cafarnaum, veio a ele um centurião, rogando-lhe, 
|fn:  RP, N4 omitem "Jesus"
6 E dizendo: Senhor, o meu servo jaz em casa, paralítico, e gravemente atormentado. 
7 E Jesus lhe disse: Eu irei, e o curarei. 
|fn:  N4 omite "Jesus"
8 E o centurião respondeu: Senhor, não sou digno de que entres sob meu telhado; mas dize somente uma palavra, e o meu servo sarará. 
9 Pois eu também sou homem debaixo de autoridade, e tenho debaixo de meu comando soldados; e digo a este: “Vai”, e ele vai; e ao outro: “Vem”, e vem; e a meu servo: “Faze isto”, e ele faz. 
10 Quando Jesus ouviu [isto] , maravilhou-se, e disse aos que o seguiam: Em verdade vos digo que nem mesmo em Israel encontrei tanta fé.TR, RP: nem mesmo em Israel encontrei tanta fé - N4: ninguém em Israel achei com tanta fé 
11 Mas eu vos digo que muitos virão do oriente e do ocidente, e se sentarão à mesa com Abraão, Isaque, e Jacó, no Reino dos céus. 
12 Os filhos do reino, porém, serão lançados nas trevas de fora; ali haverá pranto e ranger de dentes. 
13 Então Jesus disse ao centurião: Vai, e assim como creste, a ti seja feito. E naquela mesma hora o servo dele foi sarado. 
|fn:  N4 omite "dele"
14 E quando Jesus veio à casa de Pedro, viu a sogra dele, deitada e com febre. 
15 Ele tocou a mão dela, e a febre a deixou. Então ela se levantou e começou a servi-los. 
|fn:  RP, N4 contêm "servi-lo"
16 Quando chegou o anoitecer, trouxeram-lhe muitos endemoninhados. Ele expulsou-lhes os espíritos com a palavra, e curou todos os que estavam doentes, 
17 Para que se cumprisse o que havia sido dito pelo profeta Isaías, que disse: Ele tomou sobre si as nossas enfermidades, e levou as nossas doenças. 
|fn:  Ref. Isaías 53:4
18 E Jesus, ao ver muitas multidões ao redor de si, mandou que passassem para a outra margem. 
|fn:  TR, RP: muitas multidões - N4: uma multidão
19 Então um escriba se aproximou, e disse-lhe: Mestre, eu te seguirei aonde quer que fores. 
20 Jesus lhe respondeu: As raposas têm covis, e as aves do céu ninhos; mas o Filho do homem não tem onde recostar a cabeça. 
21 E outro dos seus discípulos lhe disse: Senhor, permite-me ir primeiro enterrar meu pai. 
|fn:  N4 omite "seus"
22 Porém Jesus lhe disse: Segue-me, e deixa aos mortos enterrarem seus mortos. 
23 Então ele entrou no barco, e seus discípulos o seguiram. 
24 E eis que se levantou no mar uma tormenta tão grande que o barco era coberto pelas ondas; porém ele dormia. 
25 E seus discípulos se aproximaram para acordá-lo, dizendo: Senhor, salva-nos! Estamos sendo destruídos! 
|fn:  TR: "seus discípulos" - RP: "os discípulos" - N4 omite
26 E ele lhes respondeu: Por que temeis, [homens] de pouca fé? Então ele se levantou e repreendeu os ventos e o mar. E houve grande calmaria. 
27 E aqueles homens se maravilharam, dizendo: Quem é este, que até os ventos e o mar lhe obedecem? 
28 E quando chegou à outra margem, à terra dos gergesenos, vieram-lhe ao encontro dois endemoninhados que tinham saído dos sepulcros. Eles eram tão ferozes que ninguém podia passar por aquele caminho. 
|fn:  TR, RP: gergesenos - N4: gadarenos
29 E eis que gritaram, dizendo: Que temos contigo, Jesus, Filho de Deus? Vieste aqui nos atormentar antes do tempo? 
|fn:  N4 omite "Jesus"
30 Enquanto isso longe deles estava uma manada de muitos porcos pastando. 
31 E os demônios rogaram-lhe, dizendo: Se nos expulsares, permite-nos entrar naquela manada de porcos. 
|fn:  TR, RP: permite-nos - N4: manda-nos
32 E ele lhes disse: Ide. Então eles saíram, e entraram na manada de porcos; e eis que toda aquela manada de porcos se lançou de um precipício ao mar, e morreram nas águas. 
|fn:  TR, RP: na manada de porcos - N4: nos porcos |fn:  N4 omite "de porcos"
33 E os que cuidavam dos porcos fugiram; e ao chegarem à cidade, anunciaram todas [estas] coisas, inclusive o que [havia acontecido] aos endemoninhados. 
34 E eis que toda aquela cidade saiu ao encontro de Jesus; e quando o viram, rogaram-lhe que se retirasse do território deles.

CAPÍTULO 9

1 Então ele entrou no barco, passou para a outra margem, e veio à sua própria cidade. 
2 E eis que lhe trouxeram um paralítico, deitado em um leito. Quando Jesus viu a fé deles, disse ao paralítico: Tem bom ânimo, filho! Teus pecados são perdoados. 
3 E eis que alguns dos escribas disseram entre si: Ele blasfema. 
4 Mas Jesus, vendo seus pensamentos, disse: Por que pensais o mal em vossos corações? 
5 Pois o que é mais fácil? Dizer: “Teus pecados são perdoados”, ou dizer: “Levanta-te, e anda”? 
|fn:  TR, RP: são - N4: foram
6 Ora, para que saibais que o Filho do homem tem autoridade na terra para perdoar pecados, (Ele, então, disse ao paralítico): Levanta-te, toma o teu leito, e vai para tua casa. 
7 E este se levantou e foi para sua casa. 
8 Quando as multidões viram [isto] , ficaram maravilhadas, e glorificaram a Deus, que tinha dado tal autoridade aos homens. 
|fn:  TR, RP: ficaram maravilhadas - N4: temeram
9 E Jesus, ao passar dali, viu um homem sentado na coletoria de impostos, chamado Mateus; e disse-lhe: Segue-me. Então este se levantou e o seguiu. 
10 E aconteceu que, enquanto [Jesus] estava reclinado à mesa na casa [de Mateus] , eis que muitos cobradores de impostos e pecadores vieram e se reclinaram à mesa juntamente com Jesus e seus discípulos. 
|fn:  reclinar-se à mesa – i.e., ter uma refeição
11 E quando os fariseus viram [isto] , perguntaram aos seus discípulos: Por que o vosso Mestre come com cobradores de impostos e pecadores? 
12 Porém Jesus ouviu, e respondeu-lhes: Os que têm saúde não precisam de médico, mas sim os que estão doentes. 
|fn:  N4 omite "Jesus" |fn:  N4: respondeu-lhes
13 Mas ide aprender o que significa: “Quero misericórdia, e não sacrifício”. Porque eu não vim chamar os justos, mas sim os pecadores, ao arrependimento. 
|fn:  Ref. Oseías 6:6 |fn:  N4 omite "ao arrependimento"
14 Então os discípulos de João vieram a ele, e perguntaram: Por que nós e os fariseus jejuamos muitas vezes, mas os teus discípulos não jejuam? 
|fn:  N4 omite "muitas vezes"
15 E Jesus lhes respondeu: Podem, por acaso, os convidados do casamento andar tristes enquanto o noivo está com eles? Mas dias virão, quando o noivo lhes for tirado, e então jejuarão. 
|fn:  convidados do casamento – lit. filhos da câmara nupcial
16 E ninguém põe remendo de pano novo em roupa velha; porque tal remendo rasga a roupa, e o rompimento se torna pior. 
17 Nem põem vinho novo em odres velhos; pois senão os odres se rompem, o vinho se derrama, e os odres se perdem; mas põem o vinho novo em odres novos, e ambos juntamente se conservam. 
|fn:  odre – recipiente para líquidos de couro. Os odres novos podiam inchar com o resultado da fermentação do vinho novo. Os odres velhos já tinham perdido a capacidade de se esticarem, e por isso não servem para se pôr vinho novo
18 Enquanto ele lhes dizia estas coisas, eis que um chefe [de sinagoga] veio prostrar-se diante dele, e disse: Minha filha faleceu ainda agora; mas vem, e põe tua mão sobre ela, e ela viverá. 
19 Então Jesus se levantou e o seguiu com seus discípulos. 
20 (Eis, porém, que uma mulher enferma de um fluxo de sangue havia doze anos veio por detrás [dele] , e tocou a borda de sua roupa; 
21 Porque dizia consigo mesma: Se eu tão-somente tocar a roupa dele, serei curada. 
22 Jesus se virou e a viu. Então disse: Tem bom ânimo, filha, a tua fé te sarou. E desde aquela hora a mulher ficou com saúde.) 
23 Quando Jesus chegou à casa daquele chefe, viu os tocadores de flauta e a multidão que fazia alvoroço, 
24 E disse-lhes: Retirai-vos, porque a menina não está morta, mas sim dormindo. E riram dele. 
|fn:  N4 omite "lhes"
25 Mas quando a multidão foi expulsa, ele entrou, pegou a mão dela, e a menina se levantou. 
26 E esta notícia se espalhou por toda aquela terra. 
27 E saindo Jesus dali, dois cegos o seguiram, gritando: Tem compaixão de nós, Filho de Davi! 
28 E quando ele entrou em casa, os cegos vieram a ele. Jesus lhes perguntou: Credes que posso fazer isto? Eles lhe responderam: Sim, Senhor. 
29 Então tocou os olhos deles, dizendo: Seja feito convosco conforme a vossa fé. 
30 E os olhos deles se abriram. Então Jesus os advertiu severamente, dizendo: Tende o cuidado de que ninguém saiba disso. 
31 Porém eles saíram e divulgaram a notícia acerca dele por toda aquela terra. 
32 Enquanto eles saíam, eis que lhe trouxeram um homem mudo e endemoninhado. 
33 Quando o demônio foi expulso, o mudo passou a falar. Então as multidões ficaram maravilhadas, e disseram: Nunca se viu algo assim em Israel! 
34 Mas os fariseus diziam: É pelo chefe dos demônios que ele expulsa os demônios. 
35 Jesus percorria todas as cidades e aldeias, ensinando em suas sinagogas, pregando o Evangelho do Reino, e curando toda enfermidade e toda doença entre o povo. 
|fn:  N4 omite "entre o povo"
36 Quando ele viu as multidões, teve compaixão delas, porque andavam cansadas e desamparadas, como ovelhas que não têm pastor. 
|fn:  TR: cansadas - RP, N4: afligidas
37 Então disse aos seus discípulos: Em verdade a colheita é grande, porém os trabalhadores são poucos. 
38 Portanto rogai ao Senhor da colheita que envie trabalhadores à sua colheita.

CAPÍTULO 10

1 Jesus] chamou a si os seus doze discípulos, e deu-lhes poder sobre os espíritos imundos, para os expulsarem, e curarem toda enfermidade e toda doença. 
2 E os nomes dos doze apóstolos são estes: o primeiro, Simão, chamado Pedro, e seu irmão André; Tiago, [filho] de Zebedeu, e seu irmão João; 
3 Filipe e Bartolomeu; Tomé, e Mateus o coletor de impostos; Tiago, [filho] de Alfeu; e Lebeu, por sobrenome Tadeu; 
|fn:  N4 omite "Lebeu, por sobrenome
4 Simão o zeloso, e Judas Iscariotes, o mesmo que o traiu. (ou “zelote”) - tradicionalmente “cananeu” 
|fn:  zeloso |fn:  traiu – lit. entregou
5 Jesus enviou estes doze, e lhes mandou, dizendo: Não ireis pelo caminho dos gentios, nem entrareis em cidade de samaritanos. 
6 Em vez disso, ide às ovelhas perdidas da casa de Israel. 
7 E quando fordes, proclamai, dizendo: “Perto está o Reino dos céus”. 
8 Curai os doentes, limpai os leprosos, ressuscitai os mortos, expulsai os demônios; recebestes de graça, dai de graça. 
|fn:  RP omite "ressuscitai os mortos", enquanto que N4 põe este texto antes de "limpai os leprosos"
9 Não possuais ouro, nem prata, nem cobre em vossos cintos; 
10 Nem bolsas para o caminho, nem duas túnicas, nem sandálias, nem bordão [extra] ; pois o trabalhador é digno de seu alimento. 
11 E em qualquer cidade ou aldeia que entrardes, informai-vos de quem nela seja digno, e ficai ali até que saiais. 
12 E quando entrardes na casa, saudai-a. 
13 Se a casa for digna, venha sobre ela a vossa paz; mas se ela não for digna, volte para vós a vossa paz. 
14 E quem quer que não vos receber, nem ouvir vossas palavras, quando sairdes daquela casa ou cidade, sacudi o pó de vossos pés. 
15 Em verdade vos digo que no dia do julgamento mais tolerável será para a região de Sodoma e Gomorra do que para aquela cidade. 
16 Eis que eu vos envio como ovelhas em meio de lobos; portanto, sede prudentes como as serpentes e inofensivos como pombas. 
17 Porém tende cuidado com as pessoas; porque vos entregarão em tribunais, e vos açoitarão em suas sinagogas; 
18 E até perante governadores e reis sereis levados por causa de mim, para que haja testemunho a eles e aos gentios. 
19 Mas quando vos entregarem, não estejais ansiosos de como ou que falareis; porque naquela mesma hora vos será dado o que deveis falar. 
20 Porque não sois vós os que falais, mas sim o Espírito do vosso Pai que fala em vós. 
21 E irmão entregará irmão à morte, e pai ao filho; e filhos se levantarão contra os pais, e os matarão. 
22 E sereis odiados por todos por causa de meu nome; mas aquele que perseverar até o fim, esse será salvo. 
23 Quando, então, vos perseguirem nesta cidade, fugi para outra; porque em verdade vos digo que não acabareis de [percorrer] as cidades de Israel, até que venha o Filho do homem. 
24 O discípulo não é superior ao mestre, nem o servo superior ao seu senhor. 
25 Seja suficiente ao discípulo ser como o seu mestre, e ao servo como o seu senhor; se ao chefe da casa chamaram de Belzebu, quanto mais aos membros de sua casa? 
26 Portanto, não os temais; porque nada há encoberto que não se revelará, [nada] oculto que não se saberá. 
27 O que eu vos digo em trevas, dizei na luz; e o que ouvis ao ouvido, proclamai sobre os telhados. 
28 E não temais os que matam o corpo, mas não podem matar a alma; temei mais aquele que pode destruir tanto a alma como o corpo no inferno. 
29 Não se vendem dois pardais por uma pequena moeda? Mas nem um deles cairá em terra contra a vontade de vosso Pai. 
|fn:  contra a vontade de – lit. sem
30 E até os cabelos de vossas cabeças estão todos contados. 
31 Assim, não tenhais medo; mais valeis vós que muitos pardais. 
32 Portanto, todo aquele que me der reconhecimento diante das pessoas, também eu o reconhecerei diante de meu Pai, que está nos céus. 
33 Porém qualquer um que me negar diante das pessoas, também eu o negarei diante de meu Pai, que está nos céus. 
34 Não penseis que vim trazer paz à terra. Não vim trazer paz, mas sim espada. 
35 Porque eu vim pôr em discórdia “o homem contra seu pai, a filha contra sua mãe, e a nora contra sua sogra. 
36 E os inimigos do homem serão os de sua própria casa”. 
|fn:  Ref. Miqueias 7:6
37 Quem ama pai ou mãe mais que a mim não é digno de mim; e quem ama filho ou filha mais que a mim não é digno de mim; 
38 E quem não toma sua cruz e segue após mim não é digno de mim. 
39 Quem achar sua vida a perderá; e quem, por causa de mim, perder sua vida, a achará. 
40 Quem vos recebe, recebe a mim; e quem me recebe, recebe aquele que me enviou. 
41 Quem recebe um profeta por reconhecê-lo como profeta receberá recompensa de profeta; e quem recebe um justo por reconhecê-lo como justo receberá recompensa de justo. 
|fn:  por reconhecê-lo como - lit. em nome de – também v. 42
42 E qualquer um que der ainda que somente um copo de [água] fria a um destes pequenos por reconhecê-lo como discípulo, em verdade vos digo que de maneira nenhuma perderá sua recompensa.

CAPÍTULO 11

1 Quando Jesus acabou de dar as ordens aos seus doze discípulos, partiu dali para ensinar e para pregar em suas cidades. 
2 E João, ao ouvir na prisão as obras de Cristo, enviou [-lhe] dois de seus discípulos, 
|fn:  TR, RP: dois de - N4:por
3 Perguntando-lhe: És tu aquele que havia de vir, ou esperamos outro? 
4 Jesus lhes respondeu: Ide anunciar a João as coisas que ouvis e vedes: 
5 Os cegos veem, e os mancos andam; os leprosos são limpos, e os surdos ouvem; os mortos são ressuscitados, e aos pobres é anunciado o Evangelho; 
6 E bendito é aquele que não deixar de crer em mim. 
|fn:  bendito – ou “bem-aventurado” |fn:  deixar de crer – tradicionalmente “escandalizar-se”
7 Depois que eles se foram, Jesus começou a dizer às multidões acerca de João: Que saístes ao deserto para ver? Uma cana que se move pelo vento? 
8 Mas que saístes para ver? Um homem vestido com roupas delicadas? Eis que os que usam roupas delicadas estão nas casas dos reis. 
|fn:  N4 omite "roupas"
9 Mas que saístes para ver? Um profeta? Sim, eu vos digo, e muito mais que um profeta; 
10 Porque este é aquele sobre o qual está escrito: “Eis que diante de tua face envio o meu mensageiro, que preparará o teu caminho diante de ti.” 
|fn:  N4 omite "Porque" |fn:  Ref. Malaquias 3:1
11 Em verdade vos digo que, dentre os nascidos de mulheres, não se levantou [outro] maior que João Batista; porém o menor no Reino dos céus é maior que ele. 
12 E desde os dias de João Batista até agora, o Reino dos céus é forçado, e os que usam de força o tomam. 
|fn:  tomam – ou se apoderam dele
13 Porque todos os profetas e a Lei profetizaram até João. 
14 E se estais dispostos a aceitar, este é o Elias que havia de vir. 
15 Quem tem ouvidos para ouvir, ouça. 
|fn:  N4 omite "para ouvir"
16 Mas com quem compararei esta geração? Semelhante é às crianças que se sentam nas praças, e chamam aos seus colegas, 
|fn:  TR, RP: e chamam aos seus colegas - N4: que chamam aos outros
17 E dizem: “Tocamos flauta para vós, mas não dançastes; cantamos lamentações para vós, mas não chorastes.” 
|fn:  N4 omite "para vós"
18 Porque veio João, sem comer nem beber, e dizem: “Ele tem demônio.” 
19 Veio o Filho do homem, que come e bebe, e dizem: “Eis aqui um homem comilão e beberrão, amigo de cobradores de impostos e pecadores!” Mas a sabedoria prova-se justa por meio de seus filhos. 
|fn:  TR, RP: seus filhos - N4: suas obras
20 Então ele começou a acusar as cidades em que a maioria de seus milagres haviam sido feitos, por não terem se arrependido: 
21 Ai de ti Corazim! Ai de ti Betsaida! Porque se em Tiro e em Sídon tivessem sido feitos os milagres que em vós foram feitos, há muito tempo teriam se arrependido com saco e com cinza! 
22 Porém eu vos digo que mais tolerável será para Tiro e Sídon, no dia do juízo, que para vós. 
23 E tu, Cafarnaum, que estás exaltada até o céu, ao mundo dos mortos serás derrubada! Pois se em Sodoma tivessem sido feitos os milagres que foram feitos em ti, ela teria permanecido até hoje. 
|fn:  TR, RP:que estás exaltada até o céu - N4: estarás tu exaltada até o céu?
24 Porém eu vos digo que mais tolerável será para os da região de Sodoma, no dia de juízo, que para ti. 
25 Naquele tempo Jesus pronunciou: Graças te dou, Pai, Senhor do céu e da terra, porque escondeste estas coisas aos sábios e entendidos, e as revelaste às crianças. 
26 Sim, Pai, porque assim foi agradável a ti. 
27 Todas as coisas me foram entregues pelo meu Pai; e ninguém conhece o Filho, a não ser o Pai; nem ninguém conhece o Pai, a não ser o Filho, e a quem o Filho [o] quiser revelar. 
28 Vinde a mim todos vós que estais cansados e sobrecarregados, e eu vos farei descansar. 
29 Tomai sobre vós o meu jugo e aprendei de mim, porque sou manso e humilde de coração; e encontrareis descanso para as vossas almas. 
30 Pois o meu jugo é suave, e minha carga é leve.

CAPÍTULO 12

1 Naquele tempo Jesus estava indo pelas plantações de cereais no sábado. Seus discípulos tinham fome, e começaram a arrancar espigas e a comer. 
2 Quando os fariseus viram, disseram-lhe: Eis que os teus discípulos fazem o que não é lícito fazer no sábado. 
3 Ele, porém, lhes disse: Não lestes o que Davi fez quando teve fome, ele e os que com ele estavam, 
4 Como ele entrou na casa de Deus, e comeu os pães da proposição, que a ele não era lícito comer, nem também aos que com ele estavam, a não ser somente aos sacerdotes? 
|fn:  TR, RP: comeu - N4: comeram |fn:  Os pães da proposição eram oferecidos a Deus semanalmente no templo, e depois eram comidos pelos sacerdotes – Levítico 24:5-9; Êxodo 25:30
5 Ou não lestes na Lei que, nos sábados, os sacerdotes no Templo profanam o sábado, sem se tornarem culpados? 
6 Eu, porém, vos digo que o maior que o Tempo está aqui. 
7 Mas se vós soubésseis o que significa: “Quero misericórdia, e não sacrifício”, não condenaríeis os inocentes. 
|fn:  Ref. Oseias 6:6
8 Porque o Filho do homem é Senhor até do sábado. 
|fn:  RP, N4 omitem "até"
9 E partindo dali, [Jesus] entrou na sinagoga deles. 
10 E eis que havia ali um homem que tinha uma mão definhada; e eles, a fim de o acusarem, perguntaram-lhe: É lícito curar nos sábados? 
11 E ele lhes respondeu: Qual de vós será a pessoa que, caso tenha uma ovelha, e se a tal cair em uma cova no sábado, não usará de sua força para a levantar? 
12 Ora, quanto mais vale um ser humano que uma ovelha! Assim, pois, é lícito fazer o bem nos sábados. 
13 Então disse para aquele homem: Estende a tua mão. E ele a estendeu, e foi-lhe restaurada, sã como a outra. 
14 Então os fariseus saíram e se reuniram para planejar contra ele, como o matariam. 
15 Mas Jesus, sabendo disso, retirou-se dali. Muitas multidões o seguiram, e ele curou todos. 
|fn:  TR, RP: Muitas multidões - N4: Muitos
16 E ele lhes ordenava que não o tornassem conhecido; 
17 Para que se cumprisse o que foi dito pelo profeta Isaías: 
18 Eis aqui meu servo a quem escolhi, meu amado em quem minha alma se agrada; sobre ele porei o meu Espírito, e ele anunciará justiça às nações. 
19 Ele não fará brigas, nem gritará; ninguém ouvirá sua voz pelas ruas. 
20 A cana esmagada ele não despedaçará, o pavio que fumega ele não apagará, até que conduza a justiça à vitória. 
21 E em seu nome as nações esperarão. 
|fn:  Ref. Isaías 42:1-4
22 Então lhe trouxeram um endemoninhado cego e mudo; e ele o curou de tal maneira que o cego e mudo passou a falar e a ver. 
|fn:  N4 omite "cego e"
23 E todas as multidões se admiravam e diziam: Não é este o Filho de Davi? 
24 Mas quando os fariseus ouviam isso, diziam: Ele não expulsa os demônios, a não ser por Belzebu, o chefe dos demônios. 
25 Porém Jesus, entendendo os pensamentos deles, disse-lhes: Todo reino dividido contra si mesmo é destruído; e toda cidade ou casa dividida contra si mesma não permanecerá. 
|fn:  N4 omite "Jesus"
26 Ora, se Satanás expulsa a Satanás, contra si mesmo está dividido; como, pois, permanecerá o seu reino? 
27 E se eu expulso os demônios por Belzebu, então por quem vossos filhos os expulsam? Portanto, eles mesmos serão vossos juízes. 
|fn:  vossos filhos – i.e., vossos discípulos
28 Mas se eu pelo Espírito de Deus expulso os demônios, logo o Reino de Deus já chegou sobre vos. 
29 Ou como pode alguém entrar na casa do valente, e saquear seus bens, sem primeiro amarrar ao valente? Depois disso saqueará sua casa. 
30 Quem não é comigo é contra mim; e quem não ajunta comigo, espalha. 
31 Por isso eu vos digo: todo pecado e blasfêmia serão perdoados aos seres humanos; mas a blasfêmia contra o Espírito não será perdoada aos seres humanos. 
|fn:  N4 omite "aos seres humanos"
32 E qualquer um que falar palavra contra o Filho do homem lhe será perdoado; mas qualquer um que falar contra o Espírito Santo, não lhe será perdoado, nem na era presente, nem na futura. 
33 Ou fazei a árvore boa, e seu fruto bom; ou fazei a árvore má, e seu fruto mau; pois pelo fruto se conhece a árvore. 
34 Ninhada de víboras, como podeis vós falar boas coisas, sendo maus? Pois a boca fala do que o coração tem de sobra. 
35 A pessoa boa tira coisas boas do bom tesouro do coração, e a pessoa má tira coisas más do tesouro mau. 
|fn:  RP, N4 omitem "do coração"
36 Eu, porém, vos digo que de toda palavra imprudente que as pessoas falarem, dela prestarão contas no dia do juízo. 
|fn:  imprudente – ou inútil
37 Porque por tuas palavras serás justificado, e por tuas palavras serás condenado. 
|fn:  justificado – ou absolvido
38 Então responderam uns dos escribas e dos fariseus, dizendo: Mestre, queremos ver de ti algum sinal. 
39 Mas ele lhes deu a seguinte resposta: Uma geração má e adúltera pede sinal; mas não lhe será dado, exceto o sinal do profeta Jonas. 
40 Porque assim como Jonas esteve três dias e três noites no ventre da baleia, assim também o Filho do homem estará três dias e três noites no coração da terra. 
|fn:  baleia – ou “animal marinho”
41 Os de Nínive se levantarão no Juízo com esta geração, e a condenarão; porque se arrependeram com a pregação de Jonas. E eis aqui quem é maior que Jonas. 
42 A rainha do sul se levantará no Juízo com esta geração, e a condenará; porque veio dos confins da terra para ouvir a sabedoria de Salomão. E eis aqui quem é maior que Salomão. 
43 Quando o espírito imundo sai de alguém, anda por lugares secos buscando repouso, e não o acha. 
44 Então diz: “Voltarei para minha casa de onde saí”. E quando chega, a encontra desocupada, varrida, e adornada. 
45 Então vai, e toma consigo outros sete espíritos piores que ele; eles entram, e moram ali; e a última [condição] de tal pessoa se torna pior que a primeira. Assim também acontecerá com esta geração má. 
46 Enquanto ele ainda estava falando às multidões, eis que sua mãe e seus irmãos estavam fora, querendo falar com ele. 
47 E alguém lhe disse: Eis que tua mãe e teus irmãos estão fora, querendo falar contigo. 
48 Porém ele disse em resposta ao que o avisou: Quem é minha mãe? E quem são meus irmãos? 
49 Então estendeu sua mão sobre seus discípulos, e disse: Eis aqui minha mãe e meus irmãos; 
50 Pois qualquer um que fizer a vontade do meu Pai, que está nos céus, esse é meu irmão, e irmã, e mãe.

CAPÍTULO 13

1 Naquele dia, Jesus saiu de casa e se sentou junto ao mar. 
2 E ajuntaram-se perto dele tantas multidões, de maneira que ele entrou num barco e se sentou; e toda a multidão ficou na praia, 
3 E ele lhes falou muitas coisas por parábolas. Ele disse: Eis que o semeador saiu a semear. 
4 E enquanto semeava, caiu parte [das sementes] junto ao caminho, e vieram as aves e a comeram. 
5 E outra [parte] caiu entre pedras, onde não havia muita terra, e logo nasceu, porque não tinha terra funda. 
6 Mas quando o sol surgiu, queimou-se; e por não ter raiz, secou-se. 
7 E outra [parte] caiu entre espinhos, e os espinhos cresceram e a sufocaram. 
8 E outra [parte] caiu em boa terra, e rendeu fruto: um a cem, outro a sessenta, e outro a trinta. 
|fn:  cem, sessenta, trinta – isto é, produz cem, sessenta ou trinta vezes mais que o que foi semeado
9 Quem tem ouvidos para ouvir, ouça. 
|fn:  N4 omite "para ouvir"
10 Então os discípulos se aproximaram, e lhe perguntaram: Por que falas a eles por parábolas? 
11 E ele lhes respondeu: Porque a vós é dado saber os mistérios do Reino dos céus, mas a eles não é dado. 
|fn:  N4 omite "lhes"
12 Pois a quem tem, lhe será dado, e terá em abundância; mas a quem não tem, até aquilo que tem lhe será tirado. 
13 Por isso falo a eles por parábolas; porque vendo, não veem; e ouvindo, não ouvem, nem entendem. 
14 Assim neles se cumpre a profecia de Isaías, que diz: De fato ouvireis, mas não entendereis; De fato vereis, mas não enxergareis. 
15 Porque o coração deste povo está insensível; Com seus ouvidos dificilmente ouvem, e seus olhos fecharam; A fim de não haver que seus olhos vejam, seus ouvidos ouçam, Seus corações entendam, e se arrependam, E eu os cure. 
|fn:  Ref. Isaías 6:9-10
16 Mas benditos são os vossos olhos, porque veem; e os vossos ouvidos, porque ouvem. 
|fn:  benditos – ou “bem-aventurados”
17 Pois em verdade vos digo que muitos profetas e justos desejaram ver o que vós vedes, mas não viram; e [desejaram] ouvir o que vós ouvis, mas não ouviram. 
18 Portanto, ouvi vós a parábola do semeador: 
19 Quando alguém ouve a palavra do Reino e não a entende, o maligno vem e arranca o que foi semeado em seu coração; este é o que foi semeado junto ao caminho. 
20 E o que foi semeado entre as pedras é o que ouve a palavra, e logo a recebe com alegria, 
21 mas não tem raiz em si mesmo. Em vez disso, dura um pouco, mas quando vem a aflição ou a perseguição pela palavra, logo se tornam infiéis. 
|fn:  tornam infiéis – tradicionalmente “escandalizam-se”
22 E o que foi semeado entre os espinhos é o que ouve a palavra, mas a ansiedade com o tempo presente e a sedução das riquezas sufocam a palavra, e fica sem dar fruto. 
23 Mas o que foi semeado em boa terra, este é o que ouve e entende a palavra, e o que dá e produz fruto, um a cem, outro a sessenta, e outro a trinta. 
24 E ele lhes declarou outra parábola, dizendo: O Reino dos céus é semelhante a um homem que semeia boa semente em seu campo, 
25 Mas, enquanto as pessoas dormiam, o inimigo dele veio, semeou joio entre o trigo, e foi embora. 
26 E, quando a erva cresceu e produziu fruto, então apareceu também o joio. 
27 Então os servos do dono da propriedade chegaram, e lhe perguntaram: “Senhor, não semeaste boa semente no teu campo? De onde, pois, veio o joio?” 
28 E ele lhes respondeu: “Um inimigo fez isto”. Em seguida, os servos lhe perguntaram: “Queres, pois, que vamos e o tiremos?” 
29 Ele, porém, lhes respondeu: “Não, para não haver que, enquanto tirais o joio, arranqueis com ele também o trigo. 
30 Deixai-os crescer ambos juntos até a colheita; e no tempo da colheita direi aos que colhem: ‘Recolhei primeiro o joio, e amarrai-o em molhos, para o queimarem; mas ao trigo ajuntai no meu celeiro’.” 
31 Ele lhes propôs outra parábola: O Reino dos céus é semelhante a um grão de mostarda que alguém tomou e semeou no seu campo. 
32 De fato, dentre todas as sementes, esta é a menor. Mas quando cresce, é a maior das hortaliças; e se torna [tamanha] árvore, que as aves do céu vêm e se aninham em seus ramos. 
33 Ele lhes disse outra parábola: O Reino dos céus é semelhante ao fermento que uma mulher tomou e misturou em três medidas de farinha, ) até que tudo ficasse fermentado. 
|fn:  três medidas de farinha – equiv. Cerca de 40 litros (1 medida de farinha era aproximadamente 13 litros
34 Tudo isto Jesus falou por parábolas às multidões. Sem parábolas ele não lhes falava, 
35 para que se cumprisse o que foi falado pelo profeta, que disse: Abrirei a minha boca em parábolas; Pronunciarei coisas escondidas desde a fundação do mundo. 
|fn:  N4 omite "do mundo" |fn:  Ref. Salmos 78:2
36 Então Jesus despediu as multidões, e foi para casa. Seus discípulos se aproximaram dele, e disseram: Explica-nos a parábola do joio do campo. 
|fn:  N4 omite "Jesus"
37 E ele lhes respondeu: O que semeia a boa semente é o Filho do homem. 
|fn:  N4 omite "lhes"
38 E o campo é o mundo; e a boa semente, estes são os filhos do Reino; e o joio são os filhos do maligno. 
39 E o inimigo, que o semeou, é o diabo; e a colheita é o fim da era; e os que colhem são os anjos. 
|fn:  fim da era – tradicionalmente “fim do mundo”, mas a palavra grega se refere ao período de tempo
40 Portanto, como o joio é colhido e queimado no fogo, assim também será no fim desta era. 
|fn:  TR, RP: desta - N4: da
41 O Filho do homem enviará seus anjos, e eles recolherão do seu Reino todas as causas do pecado, assim como os que praticam injustiça, 
|fn:  causas do pecado – tradicionalmente “escândalos”
42 e os lançarão na fornalha de fogo. Ali haverá choro e ranger de dentes. 
43 Então os justos brilharão como o sol, no Reino de seu Pai. Quem tem ouvidos para ouvir, ouça. 
|fn:  N4 omite "para ouvir"
44 O Reino dos céus também é semelhante a um tesouro escondido num campo, que um homem, depois de achá-lo, escondeu. Então, em sua alegria, vai, vende tudo quanto tem, e compra aquele campo. 
|fn:  N4 omite "também"
45 O Reino dos céus também é semelhante é a um homem negociante, que buscava boas pérolas. 
46 Quando este achou uma pérola de grande valor, foi, vendeu tudo quanto tinha, e a comprou. 
47 O Reino dos céus também é semelhante a uma rede lançada ao mar, que colhe toda espécie [de peixes] . 
48 E quando está cheia, [os pescadores] puxam-na à praia, sentam-se, e recolhem os bons em cestos, mas os ruins lançam fora. 
49 Assim será ao fim da era; os anjos sairão, e separarão dentre os justos os maus, 
50 e os lançarão na fornalha de fogo. Ali haverá choro e ranger de dentes. 
51 E Jesus lhes perguntou: Entendestes todas estas coisas? Eles lhe responderam: Sim, Senhor. 
|fn:  N4 omite "E Jesus lhes perguntou" |fn:  N4 omite "Senhor"
52 E ele lhes disse: Portanto todo escriba que se tornou discípulo no Reino dos céus é semelhante a um chefe de casa, que do seu tesouro tira coisas novas e velhas. 
53 E aconteceu que, quando Jesus acabou essas parábolas, retirou-se dali. 
54 E vindo à sua terra, ensinava-os na sinagoga deles, de tal maneira que ficavam admirados, e diziam: De onde [vêm] a este tal sabedoria, e os milagres? 
55 Não é este o filho do carpinteiro? E não se chama sua mãe Maria, e seus irmãos Tiago, José, Simão, e Judas? 
56 Não estão todas as suas irmãs conosco? Ora, de onde [vem] a este tudo isto? 
57 E se ofenderam por causa dele. Mas Jesus lhes disse: Não há profeta sem honra, a não ser em sua terra, e em sua casa. 
|fn:  ofenderam – tradicionalmente : escandalizaram
58 E não fez ali muitos milagres por causa da incredulidade deles.

CAPÍTULO 14

1 Naquele tempo Herodes, o tetrarca, ouviu relato a respeito de Jesus, 
2 e disse aos seus servos: Este é João Batista; ele ressuscitou dos mortos, e por isso os milagres operam nele. 
3 Porque Herodes havia prendido a João, acorrentado-o, e posto na prisão, por causa de Herodias, mulher do seu irmão Filipe; 
|fn:  acorrentado – ou: amarrado
4 pois João lhe dizia: Não te lícito que a tenhas. 
5 Herodes] queria matá-lo, mas tinha medo do povo, pois o consideravam profeta. 
6 Porém, enquanto era celebrado o aniversário de Herodes, a filha de Herodias dançou no meio [das pessoas] , e agradou a Herodes. 
|fn:  TR, RP: enquanto era celebrado - N4: quando chegou
7 Por isso prometeu a ela dar tudo o que pedisse. 
8 E ela, tendo sido induzida por sua mãe, disse: Dá-me aqui num prato a cabeça de João Batista. 
9 E o rei se entristeceu; mas devido ao juramento, e aos que estavam presentes, ordenou que isso fosse concedido. 
10 Então mandou degolarem João na prisão. 
11 Sua cabeça foi trazida num prato, e dada à garota, e ela a levou à sua mãe. 
12 E seus discípulos vieram, tomaram o corpo, e o enterraram; e foram avisar a Jesus. 
13 Depois de Jesus ouvir, retirou-se dali num barco, a um lugar deserto, sozinho; mas assim que as multidões ouviram acerca disso, seguiram-no a pé das cidades. 
14 Quando Jesus saiu, viu uma grande multidão. Ele se compadeceu deles, e curou dentre eles os enfermos. 
15 E chegando o entardecer, os seus discípulos se aproximaram dele, e disseram: O lugar é deserto, e já é tarde. [] Despede as multidões, para irem às aldeias, e comprarem para si de comer. 
|fn:  N4 omite "seus" |fn:  já é tarde – lit. a hora já se passou
16 Mas Jesus lhes respondeu: Eles não precisam ir. Vós mesmos, dai-lhes de comer. 
17 E eles lhe disseram: Nada temos aqui além de cinco pães e dois peixes. 
18 Então disse: Trazei-os aqui a mim. 
19 Ele mandou às multidões que se sentassem sobre a grama. Então tomou os cinco pães e os dois peixes, levantou os olhos ao céu, e [os] abençoou. Em seguida partiu os pães, deu-os aos discípulos, e os discípulos às multidões. 
20 E todos comeram, e se fartaram. E do que sobrou dos pedaços levantaram doze cestos cheios. 
21 E os que comeram foram quase cinco mil homens, sem contar as mulheres e as crianças. 
22 E logo Jesus mandou os seus discípulos entrarem no barco, e que fossem adiante dele para a outra margem, enquanto ele despedia as multidões. 
|fn:  N4 omite "Jesus" |fn:  RP, N4 omitem "seus"
23 Depois de despedir as multidões, subiu ao monte, à parte, para orar. Tendo chegado a noite, ele estava ali sozinho. 
24 E o barco já estava no meio do mar, atormentado pelas ondas, porque o vento era contrário. 
|fn:  TR, RP: no meio do mar - N4: a vários estádios de distância da terra
25 Mas à quarta vigília da noite Jesus foi até eles, andando sobre o mar. 
|fn:  vigília – cada noite era dividida em quatro vigílias, de igual duração. Portanto a quarta vigília é, aproximadamente, das 3 horas da madrugada até o amanhecer |fn:  N4 omite "Jesus"
26 Quando os discípulos o viram andar sobre o mar, apavoraram-se, dizendo: É um fantasma! E gritaram de medo. 
27 Mas Jesus logo lhes falou, dizendo: Tende coragem! Sou eu, não tenhais medo. 
28 E Pedro lhe respondeu, dizendo: Senhor, se és tu, manda-me vir a ti sobre as águas. 
29 E ele disse: Vem. Então Pedro desceu do barco e andou sobre as águas, para virTR, RP: para vir - N4: e foi a Jesus. 
30 Mas quando viu o vento forte, teve medo; e começando a afundar, gritou: Senhor, salva-me! 
|fn:  N4 omite "forte"
31 Imediatamente Jesus estendeu a mão, segurou-o, e disse-lhe: [Homem] de pouca fé, por que duvidaste? 
32 E quando subiram no barco, o vento se aquietou. 
33 Então os que estavam no barco vieram e o adoraram, dizendo: Verdadeiramente tu és o Filho de Deus. 
34 E havendo passado para a outra margem, chegaram à terra de Genesaré. 
35 E quando os homens daquele lugar o reconheceram, deram aviso por toda aquela região ao redor, e lhe trouxeram todos os que estavam enfermos. 
36 E rogavam-lhe que tão somente tocassem a borda de sua roupa; e todos os que tocavam ficaram curados.
|fn:  borda – ou: franja |fn:  roupa – ou: capa

CAPÍTULO 15

1 Então [alguns] escribas e fariseus de Jerusalém se aproximaram de Jesus, e perguntaram: 
|fn:  N4:fariseus e escribas
2 Por que os teus discípulos transgridem a tradição dos anciãos? Pois não lavam suas mãos quando comem pão. 
3 Porém ele lhes respondeu: E vós, por que transgredis o mandamento de Deus por vossa tradição? 
4 Pois Deus mandou, dizendo: Honra ao teu pai e à [tua] mãe; e quem maldisser ao pai ou à mãe seja sentenciado à morte. 
|fn:  TR,RP: mandou, dizendo - N4: disse |fn:  RP, N4 omitem "teu" |fn:  Ref. Êxodo 21:17, Levítico 20:9
5 Mas vós dizeis: “Qualquer um que disser ao pai ou à mãe: ‘Todo o proveito que terias de mim é oferta exclusiva [para Deus] ’, não [precisa] honrar seu pai ou à sua mãe”. 
6 E [assim] invalidastes o mandamento de Deus por vossa tradição. 
|fn:  TR, RP: o mandamento - N4: a palavra
7 Hipócritas! Isaías bem profetizou sobre vós, dizendo: 
8 Este povo com sua boca se aproxima de mim, e com os lábios me honra; mas o seu coração está longe de mim. 
|fn:  N4 omite "com sua boca se aproxima de mim, e"
9 Em vão, porém, me veneram, ensinando doutrinas que são regras humanas. 
|fn:  Ref. Isaías 29:13
10 Assim chamou a multidão para si, e disse-lhes: Ouvi e entendei. 
11 Não é o que entra na boca que contamina o ser humano; mas sim o que sai da boca, isso contamina o ser humano. 
12 Então os seus discípulos se aproximaram dele, e lhe perguntaram: Tu sabes que os fariseus se ofenderam quando ouviram esta palavra? 
|fn:  N4 omite "seus"
13 Mas ele respondeu: Toda planta que meu Pai celestial não plantou será arrancada pela raiz. 
14 Deixai-os, são guias cegos de cegos. E se o cego guiar [outro] cego, ambos cairão na cova. 
15 E Pedro lhe disse: Explica-nos esta parábola. 
|fn:  TR, RP: esta - N4: a
16 Porém Jesus disse: Até vós ainda estais sem entender? 
|fn:  N4 omite "Jesus"
17 Não percebeis ainda que tudo o que entra na boca vai ao ventre, mas [depois] é lançado na privada? 
|fn:  N4 omite "ainda"
18 Porém as coisas que saem da boca procedem do coração; e elas contaminam o ser humano. 
19 Pois do coração procedem maus pensamentos, mortes, adultérios, pecados sexuais, furtos, falsos testemunhos, blasfêmias. 
20 Estas coisas são as que contaminam o ser humano; mas comer sem lavar as mãos não contamina o ser humano. 
21 E, tendo Jesus partido dali, foi para as partes de Tiro e de Sídon. 
22 E eis que uma mulher Cananeia, que tinha saído daquela região, clamou-lhe: Senhor, Filho de Davi, tem misericórdia de mim! Minha filha está miseravelmente endemoninhada. 
|fn:  N4 omite "-lhe"
23 Mas ele não lhe respondeu palavra. Então seus discípulos se aproximaram dele, e rogaram-lhe, dizendo: Manda-a embora, porque ela está gritando atrás de nós. 
24 E ele respondeu: Não fui enviado para ninguém além das ovelhas perdidas da casa de Israel. 
|fn:  Não fui enviado para ninguém além das ovelhas perdidas – lit. Não fui enviado, a não ser para as ovelhas perdidas
25 Então ela veio e se prostrou diante dele, dizendo: Senhor, socorre-me. 
26 Mas ele respondeu: Não é bom tomar o pão dos filhos e lançá-lo aos cachorrinhos. 
27 Ela, porém, disse: Sim, Senhor. Porém os cachorrinhos também comem, das migalhas que caem da mesa dos seus senhores. 
28 Então Jesus lhe respondeu: Ó mulher, grande [é] a tua fé. A ti seja feito como tu queres. E desde aquela hora sua filha ficou curada. 
29 E tendo Jesus partido dali, veio ao mar da Galileia. Ele subiu a um monte, e ali se sentou. 
30 E vieram a ele muitas multidões, que tinham consigo mancos, cegos, mudos, aleijados, e muitos outros; e os lançaram aos pés de Jesus, e ele os curou. 
|fn:  N4 põe "aleijados" antes de "cegos"
31 Desta maneira, as multidões se maravilhavam quando viam os mudos falarem, os aleijados ficarem sãos, os mancos andarem, e os cegos verem; então glorificaram ao Deus de Israel. 
32 Jesus chamou a si os seus discípulos, e disse: Estou compadecido com a multidão, porque já há três dias que estão comigo, e não têm o que comer. E não quero os deixar ir em jejum, para que não desmaiem no caminho. 
33 E os seus discípulos lhe responderam: De onde conseguiremos tantos pães no deserto, para saciar tão grande multidão? 
|fn:  N4 omite "seus"
34 Jesus lhes perguntou: Quantos pães tendes? E eles disseram: Sete; e uns poucos peixinhos. 
35 Então mandou as multidões que se sentassem pelo chão. 
36 Tomou os sete pães e os peixes, deu graças e os partiu. Em seguida, ele os deu aos seus discípulos, e os discípulos à multidão. 
|fn:  N4 omite "seus" |fn:  N4: às multidões
37 E todos comeram e se saciaram; e levantaram dos pedaços que sobraram sete cestos cheios. 
38 E foram os que comeram quatro mil homens, sem contar as mulheres e as crianças. 
39 Depois de despedir as multidões, [Jesus] entrou em um barco, e veio à região de Magdala.
|fn:  TR, RP: Magdala - N4: Magadã

CAPÍTULO 16

1 Então os fariseus e os saduceus se aproximaram dele e, a fim de tentá-lo, pediram-lhe que lhes mostrasse algum sinal do céu. 
2 Mas ele lhes respondeu: Quando chega a tarde, dizeis: “ [Haverá] tempo bom, pois o céu está vermelho”. 
3 E pela manhã: “Hoje [haverá] tempestade, pois o céu está de um vermelho sombrio”. Hipócritas! Vós bem sabeis distinguir a aparência do céu, mas os sinais dos tempos não podeis? 
|fn:  N4 omite "Hipócritas!"
4 Uma geração má e adúltera pede um sinal; mas nenhum sinal lhe será dado, a não ser o sinal do profeta Jonas. Então os deixou, e foi embora 
|fn:  TR, RP: do profeta - N4: de
5 E quando os seus discípulos vieram para a outra margem, esqueceram-se de tomar pão. 
|fn:  N4 omite "seus"
6 E Jesus lhes disse: Ficai atentos, e tende cuidado com o fermento dos fariseus e saduceus. 
7 E eles argumentaram entre si, dizendo: É porque não tomamos pão. 
8 Jesus percebeu, e disse-lhes: Por que estais argumentando entre vós mesmos, ó [homens] de pouca fé, que não tomastes pão? 
|fn:  N4 omite "-lhes" |fn:  TR, RP: tomastes - N4: tendes
9 Ainda não entendeis, nem vos lembrais dos cinco pães dos cinco mil, e quantos cestos levantastes? 
10 Nem dos sete pães dos quatro mil, e quantos cestos levantastes? 
11 Como não entendeis que não foi pelo pão que eu vos disse para tomardes cuidado com o fermento dos fariseus e saduceus? 
|fn:  TR, RP: disse para tomardes cuidado (...) saduceus? - N4: disse? Mas tomai cuidado (...) saduceus.
12 Então entenderam que ele não havia dito que tomassem cuidado com o fermento de pão, mas sim com a doutrina dos fariseus e saduceus. 
|fn:  N4: dos pães
13 E tendo Jesus vindo às partes da Cesareia de Filipe, perguntou aos seus discípulos: Quem as pessoas dizem que eu, o Filho do homem, sou? 
|fn:  TR, RP: eu, o Filho do homem, sou - N4: o Filho do homem é
14 E eles responderam: Alguns João Batista, outros Elias, e outros Jeremias ou algum dos profetas. 
15 Ele lhes disse: E vós, quem dizeis que eu sou? 
16 E Simão Pedro respondeu: Tu és o Cristo, o Filho do Deus vivo! 
17 E Jesus lhe replicou: Bendito és tu, Simão, filho de Jonas; pois não foi carne e sangue que o revelou a ti, mas sim meu Pai, que [está] nos céus. 
|fn:  Bendito – ou: bem-aventurado |fn:  filho de Jonas – lit. Bar-Jonas
18 E eu também te digo que tu és Pedro, e sobre esta pedra edificarei a minha igreja; e as portas do mundo dos mortos não prevalecerão contra ela. 
19 E a ti darei as chaves do Reino dos céus; e tudo o que ligares na terra terá sido ligado nos céus; e tudo o que desligares na terra terá sido desligado nos céus. 
|fn:  N4 omite "E" |fn:  terá sido ligado – ou: será ligado – no grego, as duas formas verbais são idênticas |fn:  terá sido desligado – ou: será desligado
20 Então mandou aos seus discípulos que a ninguém dissessem que ele era Jesus, o Cristo. 
|fn:  N4 omite "seus" |fn:  N4 omite "Jesus"
21 Desde então Jesus começou a mostrar a seus discípulos que ele tinha que ir a Jerusalém, e sofrer muito pelos anciãos, pelos chefes dos sacerdotes, e pelos escribas, e ser morto, e ser ressuscitado ao terceiro dia. 
|fn:  N4: Jesus Cristo
22 E Pedro o tomou à parte, e começou a repreendê-lo, dizendo: Misericórdia de ti, Senhor! De maneira nenhuma isso te aconteça. 
23 Mas ele se virou, e disse a Pedro: Para trás de mim, Satanás! Tu és um obstáculo, porque não compreendes as coisas de Deus, mas sim as humanas. 
24 Então Jesus disse a seus discípulos: Se alguém quiser vir após mim, negue-se a si mesmo, tome sobre si a sua cruz, e siga-me. 
25 Pois qualquer um que quiser salvar a sua vida a perderá; porém qualquer um que por causa de mim perder a sua vida, [este] a achará. 
26 Pois que proveito há para alguém, se ganhar o mundo todo, mas perder a sua alma? Ou que dará alguém em resgate da sua alma? 
|fn:  N4: haverá
27 Pois o Filho do homem virá na glória do seu Pai com os seus anjos, e então recompensará a cada um segundo as suas obras. 
28 Em verdade vos digo, que há alguns, dos que aqui estão, que não experimentarão a morte, até que vejam o Filho do homem vir em seu Reino.

CAPÍTULO 17

1 Seis dias depois, Jesus tomou consigo Pedro, Tiago, e seu irmão João, e os levou a sós a um monte alto. 
2 Então transfigurou-se diante deles; seu rosto brilhou como o sol, e suas roupas se tornaram brancas como a luz. 
3 E eis que lhes apareceram Moisés e Elias, falando com ele. 
4 Pedro, então, disse a Jesus: Senhor, bom é para nós estarmos aqui. Se queres, façamos aqui três tendas: uma para ti, uma para Moisés, e uma para Elias. 
|fn:  N4: farei |fn:  tendas – ou: tabernáculos
5 Enquanto ele ainda estava falando, eis que uma nuvem brilhante os cobriu. E eis que uma voz da nuvem disse: Este é o meu Filho amado, em quem me agrado; a ele ouvi. 
6 Quando os discípulos ouviram, caíram sobre seus rostos, e tiveram muito medo. 
7 Jesus se aproximou deles, tocou-os, e disse: Levantai-vos, e não tenhais medo. 
8 E quando eles levantaram seus olhos, não viram a ninguém, a não ser a Jesus somente. 
9 E enquanto desciam do monte, Jesus lhes disse a seguinte ordem: Não conteis a visão a ninguém, até que o Filho do homem seja ressuscitado dos mortos. 
10 E os seus discípulos lhe perguntaram: Por que, então, os escribas dizem que Elias tem que vir primeiro? 
|fn:  N4 omite "seus"
11 Jesus lhesN4 omite "Jesus" e "lhes" respondeu: Em verdade Elias virá primeiro, e restaurará todas as coisas. 
12 Digo-vos, porém, que Elias já veio, mas não o reconheceram. Em vez disso fizeram dele tudo o que quiseram. Assim também o Filho do homem sofrerá por meio deles. 
13 Então os discípulos entenderam que ele lhes falara a respeito de João Batista. 
14 E quando chegaram à multidão, veio a ele um homem, que se ajoelhou diante dele, e disse: 
15 Senhor, tem misericórdia do meu filho, que é epilético, e sofre muito mal; porque cai muitas vezes no fogo, e muitas vezes na água. 
|fn:  epilético – tradicionalmente lunático
16 E eu o trouxe aos teus discípulos, mas não o puderam curar. 
17 Jesus respondeu: Ó geração incrédula e perversa! Até quando estarei convosco? Até quando vos suportarei? Trazei-o a mim aqui. 
18 E Jesus o repreendeu. Então o demônio saiu dele, e o menino sarou desde aquela hora. 
19 Depois os discípulos se aproximaram de Jesus em particular, e perguntaram: Por que nós não o pudemos expulsar? 
20 E Jesus lhes respondeu: Por causa da vossa incredulidade; pois em verdade vos digo, que se tivésseis fé como um grão de mostarda, diríeis a este monte: “Passa-te daqui para lá”, E ele passaria. E nada vos seria impossível. 
|fn:  NA omite "Jesus" |fn:  TR, RP: incredulidade - N4: pouca fé
21 Mas este tipo [de demônio] não sai, a não ser por oração e jejum. 
|fn:  N4 omite todo o versículo 21
22 E enquanto eles estavam na Galileia, Jesus lhes disse: O Filho do homem será entregue em mãos de homens. 
|fn:  N4:reuniam-se
23 E o matarão, e ele será ressuscitado ao terceiro dia. E eles se entristeceram muito. 
24 E quando entraram em Cafarnaum, os cobradores da taxa de duas dracmas vieram a Pedro, e perguntaram: Vosso mestre não paga as duas dracmas? 
|fn:  taxa de duas dracmas – essa taxa era uma contribuição que os homens judeus faziam para financiar o Templo de Jerusalém. Uma dracma é equivalente a um denário, que era o pagamento de um dia de trabalho braçal
25 Ele respondeu: Sim. Quando ele entrou em casa, Jesus o antecipou, dizendo: Que te parece, Simão? De quem os reis da terra cobram tributos ou taxas? Dos seus filhos, ou dos outros? 
|fn:  outros: ou “estrangeiros”
26 Pedro lhe respondeu: Dos outros. Jesus lhe disse: Logo, os filhos são livres de pagar. 
|fn:  N4 omite "lhe"
27 Mas para não os ofendermos, vai ao mar, e lança o anzol. Toma o primeiro peixe que subir, e quando lhe abrir a boca, acharás uma moeda de quatro dracmas. Toma-a, e dá a eles por mim e por ti.

CAPÍTULO 18

1 Naquela hora os discípulos se aproximaram de Jesus, e perguntaram: Ora, quem é o maior no Reino dos céus? 
2 Então Jesus chamou a si uma criança, e a pôs no meio deles, 
3 e disse: Em verdade vos digo, que se vós não converterdes, e fordes como crianças, de maneira nenhuma entrareis no Reino dos céus. 
4 Assim, qualquer um que for humilde como esta criança, este é o maior no reino dos céus. 
5 E qualquer um que receber a uma criança como esta em meu nome, recebe a mim. 
6 Mas qualquer um que conduzir ao escândalo a um destes pequeninos que creem em mim, melhor lhe fora que uma grande pedra de moinho lhe fosse pendurada ao pescoço, e se afundasse no fundo do mar. 
7 Ai do mundo por causa dos escândalos! Pois é necessário que os escândalos venham, mas ai daquela pessoa por quem o escândalo vem! 
|fn:  TR, RP: daquela - N4: da
8 Portanto, se a tua mão ou o teu pé te conduz ao escândalo, corta-os, e lança-os de ti; melhor te é entrar manco ou aleijado na vida do que, tendo duas mãos ou dois pés, ser lançado no fogo eterno. 
|fn:  conduz ao escândalo – i.e. faz pecar. Também no v. 9 |fn:  N4 inverte a ordem de "aleijado" e "manco"
9 E se o teu olho te conduz ao escândalo, arranca-o, e lança-o de ti. Melhor te é entrar com um olho na vida do que, tendo dois olhos, ser lançado no inferno de fogo. 
10 Olhai para que não desprezeis a algum destes pequeninos; porque eu vos digo que os seus anjos nos céus sempre veem a face do meu Pai, que [está] nos céus. 
11 Pois o Filho do homem veio para salvar o que havia se perdido. 
|fn:  N4 omite todo o versículo 11
12 Que vos parece? Se alguém tivesse cem ovelhas, e uma delas se desviasse, por acaso não iria ele pelos montes, deixando as noventa e nove, em busca da desviada? 
13 E se acontecesse de achá-la, em verdade vos digo que ele se alegra mais daquela, do que das noventa e nove que se não desviaram. 
14 Da mesma maneira, não é da vontade do vosso Pai, que [está] nos céus, que um sequer destes pequeninos se perca. 
15 Porém, se teu irmão pecar contra ti, vai repreendê-lo entre ti e ele só; se te ouvir, ganhaste o teu irmão. 
|fn:  N4 omite "contra ti"
16 Mas se não ouvir, toma ainda contigo um ou dois, para que toda palavra se confirme pela boca de duas ou três testemunhas. 
|fn:  Ref. Deuteronômio 19:15
17 E se não lhes der ouvidos, comunica à igreja; e se também não der ouvidos à igreja, considera-o como gentio e cobrador de impostos. 
18 Em verdade vos digo que tudo o que vós ligardes na terra será ligado no céu; e tudo o que desligardes na terra será desligado no céu. 
|fn:  será ligado – ou: terá sido ligado |fn:  será desligado – ou: terá sido desligado
19 E digo-vos também que, se dois de vós concordarem na terra acerca de qualquer coisa que pedirem, isso lhes será feito por meu Pai, que [está] nos céus. 
|fn:  TR: também - RP, N4: também em verdade
20 Pois onde dois ou três estiverem reunidos em meu nome, ali eu estou no meio deles. 
21 Então Pedro aproximou-se dele, e perguntou: Senhor, até quantas vezes meu irmão pecará contra mim, e eu lhe perdoarei? Até sete? 
|fn:  TR, RP: aproximou-se dele, e perguntou - N: aproximou-se, e perguntou-lhe
22 Jesus lhe respondeu: Eu não te digo até sete, mas sim até setenta vezes sete. 
23 Por isso o Reino dos céus é comparável a um certo rei, que quis fazer acerto de contas com os seus servos. 
24 E começando a fazer acerto de contas, foi-lhe apresentado um que lhe devia dez mil talentos. 
25 Como ele não tinha com que pagar, o seu senhor mandou que ele, sua mulher, filhos, e tudo quanto tinha fossem vendidos para se fazer o pagamento. 
26 Então aquele servo caiu e ficou prostrado diante dele, dizendo: “Senhor, tem paciência comigo, e tudo te pagarei”. 
|fn:  N4 omite "Senhor"
27 O senhor daquele servo compadeceu-se dele, então o soltou e lhe perdoou a dívida. 
28 Todavia, depois daquele servo sair, achou um servo, colega seu, que lhe devia cem denários; então o agarrou e o sufocou, dizendo: “Paga-me o que [me] deves!” 
|fn:  denários – uma moeda de prata que valia um dia de trabalho braçal |fn:  N4 omite "-me"
29 Então o seu colega se prostrou diante dos seus pés, e lhe suplicou, dizendo: “Tem paciência comigo, e tudo te pagarei”. 
|fn:  N4 omite "diante dos seus pés"
30 Mas ele não quis. Em vez disso foi lançá-lo na prisão até que pagasse a dívida. 
31 Quando os servos, colegas dele, viram o que se passava, entristeceram-se muito. Então vieram denunciar ao seu senhor tudo o que havia se passado. 
32 Assim o seu senhor o chamou, e lhe disse: “Servo mau! Toda aquela dívida te perdoei, porque me suplicaste. 
33 Não tinhas tu a obrigação de ter tido misericórdia do sevo colega teu, assim como eu tive misericórdia de ti?” 
34 E, enfurecido, o seu senhor o entregou aos torturadores até que pagasse tudo o que lhe devia. 
35 Assim também meu Pai celestial vos fará, se não perdoardes de coração cada um ao seu irmão suas ofensas.
|fn:  N4 omite "suas ofensas"

CAPÍTULO 19

1 E aconteceu que, quando Jesus acabou estas palavras, partiu da Galileia, e veio para a região da Judeia, além do Jordão. 
2 E muitas multidões o seguiram, e ele os curou ali. 
3 Então os fariseus se aproximaram dele e, provando-o, perguntaram-lhe: É lícito ao homem se divorciar da sua mulher por qualquer causa? 
|fn:  N4 omite "os" |fn:  N4 omite "-lhe" |fn:  N4 omite "ao homem"
4 Porém ele lhes respondeu: Não tendes lido que aquele que [os] fez no princípio, macho e fêmea os fez, 
|fn:  N4 omite "lhes" |fn:  N4: criou
5 e disse: Portanto o homem deixará pai e mãe, e se unirá a sua mulher, e os dois serão uma única carne? 
|fn:  Ref. Gênesis 2:24
6 Assim eles já não são mais dois, mas sim uma única carne; portanto, o que Deus juntou, o ser humano não separe. 
7 Eles lhe disseram: Por que, pois, Moisés mandou [lhe] dar carta de separação, e divorciar-se dela? 
|fn:  N4 omite "dela"
8 Jesus] lhes disse: Por causa da dureza dos vossos corações Moisés vos permitiu divorciardes de vossas mulheres; mas no princípio não foi assim. 
9 Porém eu vos digo que qualquer um que se divorciar de sua mulher, a não ser por causa de pecado sexual, e se casar com outra, adultera; e o que se casar com a divorciada [também] adultera. [] 
|fn:  N4 omite "e o que se casar com a divorciada também adultera"
10 Os seus discípulos lhe disseram: Se assim é a condição do homem com a mulher, não convém se casar. 
|fn:  N4 omite "seus"
11 Porém ele lhes disse: Nem todos recebem esta palavra, a não ser aqueles a quem é dado; 
|fn:  quem é dado – i.e., quem é dado o dom ou capacidade de não ter relações sexuais
12 Pois há castrados que nasceram assim do ventre da mãe; e há castrados que foram castrados pelos homens; e há castrados que castraram a si mesmos por causa do Reino dos céus. Quem pode receber [isto] , receba. 
13 Então lhe trouxeram crianças, para que pusesse as mãos sobre elas e orasse, mas os discípulos os repreendiam. 
|fn:  os repreendiam – i.e., repreendiam os que traziam as crianças, e não as crianças
14 Mas Jesus disse: Deixai as crianças, e não as impeçais de vir a mim, porque delas é o Reino dos céus. 
15 Ele pôs as mãos sobre elas, e depois partiu-se dali. 
16 E eis que alguém se aproximou, e perguntou-lhe: Bom Mestre, que bem farei para eu ter a vida eterna? 
|fn:  TR, RP: aproximou, e perguntou-lhe - N4: aproximou-se dele, e perguntou
17 E ele lhe disse: Por que me chamas bom? Ninguém há bom, a não ser um: Deus. Porém se queres entrar na vida, guarda os mandamentos. 
|fn:  TR, RP: Por que me chamas bom? - N4: Por que me perguntas sobre o que é bom? |fn:  TR, RP: Ninguém há bom, a não ser um: Deus - N4: Somente um é bom: Deus
18 Perguntou-lhe ele: Quais? E Jesus respondeu: Não cometerás homicídio, não adulterarás, não furtarás, não darás falso testemunho; 
19 honra ao teu pai e à [tua] mãe; [] e amarás ao teu próximo como a ti mesmo. 
|fn:  TR, RP: ao teu pai e à tua mãe - N4: pai e mãe
20 O rapaz lhe disse: Tenho guardado tudo isso desde a minha juventude. Que me falta ainda? 
|fn:  N4 omite "desde a minha juventude"
21 Disse-lhe Jesus: Se queres ser perfeito, vai, vende o que tens, e dá aos pobres. Assim terás um tesouro no céu. Então vem, segue-me. 
22 Mas quando o rapaz ouviu esta palavra, foi embora triste, porque tinha muitos bens. 
23 Jesus, então, disse aos seus discípulos: Em verdade vos digo que dificilmente o rico entrará no reino dos céus. 
24 Aliás, eu vos digo que é mais fácil um camelo passar pela abertura de uma agulha do que o rico entrar no reino de Deus. 
|fn:  TR, RP: passar - N4: entrar
25 Quando os seus discípulos ouviram [isso] , espantaram-se muito, e disseram: Quem, pois, pode se salvar? 
|fn:  N4 omite "seus"
26 Jesus olhou [para eles] , e lhes respondeu: Para os seres humanos, isto é impossível; mas para Deus tudo é possível. 
27 Então Pedro se pôs a falar, e lhe perguntou: Eis que deixamos tudo, e te seguimos; o que, pois, conseguiremos ter? 
28 E Jesus lhes disse: Em verdade vos digo que vós que me seguistes, na regeneração, quando o Filho do homem se sentar no trono de sua glória, vós também vos sentareis sobre doze tronos, para julgar as doze tribos de Israel. 
29 E qualquer um que houver deixado casas, ou irmãos, ou irmãs, ou pai, ou mãe, ou mulher, ou filhos, ou terras por causa do meu nome, receberá cem vezes tanto, e herdará a vida eterna. 
|fn:  N4 omite "ou mulher" |fn:  TR, RP: cem vezes tanto - N4: muitas vezes mais
30 Porém muitos primeiros serão últimos; e últimos, primeiros.

CAPÍTULO 20

1 Pois o reino dos céus é semelhante a um homem, dono de propriedade, que saiu de madrugada para empregar trabalhadores para a sua vinha. 
2 Ele entrou em acordo com os trabalhadores por um denário ao dia, e os mandou à sua vinha. 
3 E quando saiu perto da hora terceira, viu outros que estavam desocupados na praça. 
|fn:  hora terceira – aproximadamente 9 horas da manhã
4 Então disse-lhes: “Ide vós também à vinha, e vos darei o que for justo”. E eles foram. 
5 Saindo novamente perto da hora sexta e nona, fez o mesmo. 
|fn:  hora sexta e hora nona – aproximadamente meio-dia e 3 horas da tarde
6 E quando saiu perto da décima primeira hora, achou outros que estavam desocupados, [] e lhes perguntou: “Por que estais aqui o dia todo desocupados?” 
|fn:  N4 omite "hora" |fn:  décima primeira hora – aproximadamente 5 horas da tarde |fn:  N4 omite "desocupados", lendo " ali estavam"
7 Eles lhe disseram: “Porque ninguém nos empregou”. Ele lhes respondeu: “Ide vós também à vinha, e recebereis o que for justo”. 
|fn:  N4 omite "e recebereis o que for justo"
8 E chegando o anoitecer, o senhor da vinha disse ao seu mordomo: “Chama aos trabalhadores, e paga-lhes o salário, começando dos últimos, até os primeiros”. 
9 Então vieram os de cerca da hora décima primeira, e receberam um denário cada um. 
10 Quando os primeiros vieram, pensavam que receberiam mais; porém eles também receberam um denário cada um. 
11 Assim, ao receberem, murmuraram contra o chefe de casa, 
12 dizendo: “Estes últimos trabalharam uma única hora, e tu os igualaste conosco, que suportamos a carga e o calor do dia”. 
13 Ele, porém, respondeu a um deles: “Amigo, nada de errado estou fazendo contigo. Não concordaste tu comigo por um denário? 
14 Toma o que é teu, e vai embora; e quero dar a este último tanto quanto a ti. 
15 Acaso não me é lícito fazer do que é meu o que eu quiser? Ou o teu olho é mau, porque eu sou bom?” 
16 Assim os últimos serão primeiros; e os primeiros, últimos; pois muitos são chamados, mas poucos escolhidos. 
|fn:  N4 omite "pois muitos são chamados, mas poucos escolhidos"
17 E enquanto Jesus subia a Jerusalém, tomou consigo os doze discípulos à parte no caminho, e lhes disse: 
|fn:  TR, RP: enquanto Jesus subia - N4: quando Jesus estava para subir |fn:  TR,RP: à parte no caminho, e lhes disse - N4: à parte, e no caminho lhes disse
18 Eis que estamos subindo a Jerusalém, e o Filho do homem será entregue aos chefes dos sacerdotes e aos escribas, e o condenarão à morte. 
19 E o entregarão aos gentios, para que dele escarneçam, e o açoitem, e crucifiquem; mas ao terceiro dia ressuscitará. 
|fn:  TR,RP: ressuscitará - N4: será ressuscitado
20 Então se aproximou dele a mãe dos filhos de Zebedeu, com os seus filhos. Ela o adorou para lhe pedir algo. 
21 E ele lhe perguntou: O que queres? Ela lhe disse: Dá ordem para que estes meus dois filhos se sentem, um à tua direita e outro à tua esquerda, no teu Reino. 
|fn:  Dá ordem – lit. Dize |fn:  TR,RP: "tua direita", "tua esquerda" - N4: "direita", "esquerda"
22 Porém Jesus respondeu: Não sabeis o que pedis. Podeis vós beber o cálice que eu beberei, e ser batizados com o batismo com que eu sou batizado? Eles lhe disseram: Podemos. 
|fn:  N4 omite: "e ser batizados com o batizmo com que eu sou batizado". RP troca "e" por "ou"
23 E ele lhes disse: De fato meu cálice bebereis, e com o batismo com que eu sou batizado sereis batizados; mas sentar-se à minha direita, e à minha esquerda, não me cabe concedê-lo, mas [será] para os que por meu Pai está preparado. 
24 E quando os dez ouviram [isso] , indignaram-se contra os dois irmãos. 
25 Então Jesus os chamou a si, e disse: Vós bem sabeis que os chefes dos gentios os dominam, e os grandes usam de autoridade sobre eles. 
26 Mas não será assim entre vós. Ao contrário, quem quiser se tornar grande entre vós seja o vosso assistente; 
|fn:  TR, RP: será- N4: é |fn:  TR: seja - RP, N4: será
27 e quem quiser ser o primeiro entre vós seja o vosso servo; 
|fn:  TR, RP: seja - N4: será
28 assim como o Filho do homem não veio para ser servido, mas sim para servir, e para dar a sua vida em resgate por muitos. 
29 Quando eles saíram de Jericó, uma grande multidão o seguiu. 
30 E eis que dois cegos assentados junto ao caminho, ao ouvirem que Jesus passava, clamaram: Senhor, Filho de Davi, tem misericórdia de nós! 
31 E a multidão os repreendia, para que se calassem, mas eles clamavam ainda mais: Senhor, Filho de Davi, tem misericórdia de nós! 
32 Então Jesus parou, chamou-os, e perguntou: Que quereis que eu vos faça? 
33 Eles lhe responderam: Senhor, que nossos olhos sejam abertos. 
34 E Jesus, compadecido deles, tocou-lhes os olhos. E logo os olhos deles enxergaram, e o seguiram.

CAPÍTULO 21

1 E quando se aproximaram de Jerusalém, e chegaram a Betfagé, ao monte das Oliveiras, então Jesus mandou dois discípulos, dizendo-lhes: 
|fn:  RP: Betsfagé
2 Ide à aldeia em vossa frente, e logo achareis uma jumenta amarrada, e um jumentinho com ela; desamarra-a, e trazei-os a mim. 
3 E se alguém vos disser algo, direis: “O Senhor precisa deles, mas logo os devolverá”. 
|fn:  devolverá – ou: “O Senhor precisa deles”. E logo ele os deixará ir. O texto grego é ambíguo
4 Ora, tudo isto aconteceu para que se cumprisse o que foi dito pelo profeta, que disse: 
|fn:  N4 omite "tudo"
5 Dizei à filha de Sião: “Eis que o teu rei vem a ti, manso, e sentado sobre um jumento; um jumentinho, filho de uma animal de carga”. 
|fn:  manso – ou humilde |fn:  Ref. Zacarias 9:9
6 Os discípulos foram, e fizeram como Jesus havia lhes mandado; 
7 Então trouxeram a jumenta e o jumentinho, puseram as suas capas sobre eles, e fizeram [-no] montar [] sobre elas. 
|fn:  N4 omite "suas" |fn:  TR: fizeram -no montar - RP, N4: ele montou
8 E uma grande multidão estendia suas roupas pelo caminho, e outros cortavam ramos das árvores, e os espalhavam pelo caminho. 
9 E as multidões que iam adiante, e as que seguiam, clamavam: Hosana ao Filho de Davi! Bendito o que vem no nome do Senhor! Hosana nas alturas! 
|fn:  N4: adiante dele
10 Enquanto ele entrava em Jerusalém, toda a cidade se alvoroçou, perguntando: Quem é este? 
11 E as multidões respondiam: Este é Jesus, o Profeta de Nazaré de Galileia. 
|fn:  TR, RP: Jesus, o Profeta - N4: o Profeta Jesus
12 Jesus entrou no Templo de Deus; então expulsou todos os que estavam vendendo e comprando no Templo, e virou as mesas dos cambistas e as cadeiras dos que vendiam pombas. 
|fn:  N4 omite "de Deus"
13 E disse-lhes: Está escrito: “Minha casa será chamada casa de oração”; mas vós a tornastes em covil de ladrões! 
|fn:  TR, RP: tornastes - N4: tornais |fn:  Ref. Isaías 56:7; Jeremias 7:11
14 E cegos e mancos vieram a ele no Templo, e ele os curou. 
|fn:  RP: mancos e cegos
15 Quando os chefes dos sacerdotes e os escribas viram as maravilhas que ele fazia, e as crianças gritando no Templo: “Hosana ao Filho de Davi!”, eles ficaram indignados. 
16 E perguntaram-lhe: Ouves o que estas [crianças] dizem? E Jesus lhes respondeu: Sim. Nunca lestes: “Da boca das crianças e dos bebês providenciaste o louvor?” 
|fn:  bebês – i.e. dos que mamam |fn:  Ref. Salmos 8:2
17 Então ele os deixou, e saiu da cidade para Betânia, e ali passou a noite. 
18 E pela manhã, enquanto voltava para a cidade, teve fome. 
19 Quando ele viu uma figueira perto do caminho, veio a ela, mas nada nela achou, a não ser somente folhas. E disse-lhe: Nunca de ti nasça fruto, jamais! E imediatamente a figueira se secou. 
20 Os discípulos viram, e ficaram maravilhados, dizendo: Como a figueira se secou de imediato? 
21 Porém Jesus lhes respondeu: Em verdade vos digo: se tiverdes fé, e não duvidardes, vós não somente fareis isto à figueira, mas até se disserdes a este monte: “Levanta-te, e lança-te no mar”, isso se fará. 
22 E tudo o que pedirdes em oração, crendo, recebereis. 
23 Depois de entrar no templo, quando ele estava ensinando, os chefes dos sacerdotes e os anciãos do povo se aproximaram dele, perguntando: Com que autoridade fazes isto? E quem te deu esta autoridade? 
24 Jesus lhes respondeu: Eu também vos farei uma pergunta. Se vós a responderdes a mim, também eu vos responderei com que autoridade faço isto. 
25 De onde era o batismo de João? Do céu, ou dos seres humanos? E eles pensaram entre si mesmos, dizendo: Se dissermos: “Do céu”, ele nos dirá: “Por que, então, não crestes nele? 
26 Mas se dissermos: “Dos seres humanos”, temos medo da multidão, pois todos consideram João como profeta. 
27 Então responderam a Jesus: Não sabemos. E ele lhes disse: Nem eu vos digo com que autoridade faço isto. 
28 Mas que vos parece? Um homem tinha dois filhos. Aproximando-se do primeiro, disse: “Filho, vai hoje trabalhar na minha vinha.” 
29 Porém ele respondeu: “Não quero”; mas depois se arrependeu, e foi. 
30 E, aproximando-se do segundo, disse da mesma maneira. E ele respondeu: “Eu [vou] , senhor”, mas não foi. 
31 Qual dos dois fez a vontade do pai? Eles lhe responderam: O primeiro. Jesus lhes disse: Em verdade vos digo que os cobradores de impostos e as prostitutas estão indo adiante de vós ao Reino de Deus. 
|fn:  Em alguns textos gregos há uma inversão das respostas do primeiro e do segundo filho nos versículos 29 e 30. Consequentemente, a resposta é "o primeiro" em TR e RP, e "o segundo" em N4
32 Pois João veio a vós mesmos no caminho de justiça, mas não crestes nele; enquanto que os cobradores de impostos e as prostitutas nele creram. Vós, porém, mesmo tendo visto [isto] , nem assim vos arrependestes, a fim de nele crer. 
33 Ouvi outra parábola. Havia um homem, dono de uma propriedade. Ele plantou uma vinha, cercou- a, fundou nela um lagar, e construiu uma torre. Depois a arrendou a uns lavradores, e partiu-se para um lugar distante. 
34 Quando chegou o tempo dos frutos, enviou seus servos aos lavradores, para receberem os frutos que a ele pertenciam. 
35 Mas os lavradores tomaram os seus servos, e feriram um, mataram outro, e apedrejaram outro. 
36 Outra vez enviou outros servos, em maior número que os primeiros, mas fizeram-lhes o mesmo. 
37 E por último lhes enviou o seu filho, dizendo: “Respeitarão ao meu filho”. 
38 Mas quando os lavradores viram o filho, disseram entre si: “Este é o herdeiro. Venhamos matá-lo, e tomemos a sua herança”. 
39 Então o agarraram, lançaram-no para fora da vinha, e o mataram. 
40 Ora, quando o senhor da vinha chegar, o que fará com aqueles lavradores? 
41 Eles lhe responderam: Aos maus dará uma morte má, e arrendará a vinha a outros lavradores, que lhe deem os frutos em seus tempos [de colheita] . 
42 Jesus lhes disse: Nunca lestes nas Escrituras: “A pedra que os construtores rejeitaram, essa se tornou cabeça da esquina. Isto foi feito pelo Senhor, e é maravilhoso aos nossos olhos”? 
|fn:  cabeça de esquina – i.e. a pedra angular, a principal da construção |fn:  Ref. Salmos 118:22,23
43 Portanto eu vos digo que o reino de Deus será tirado de vós, e será dado a um povo que produza os frutos dele. 
|fn:  dele – i.e. do reino
44 E quem cair sobre esta pedra será quebrado; mas sobre quem ela cair, ela o tornará em pó. 
45 Quando os chefes dos sacerdotes e os fariseus ouviram estas suas parábolas, entenderam que [Jesus] estava falando deles. 
46 E procuravam prendê-lo, mas temeram as multidões, pois elas o consideravam profeta.

CAPÍTULO 22

1 Então Jesus voltou a lhes falar por parábolas, dizendo: 
2 O reino dos céus é semelhante a um rei que fez uma festa de casamento para o seu filho; 
3 e mandou a seus servos que chamassem os convidados para a festa de casamento, mas não quiseram vir. 
4 Outra vez ele mandou outros servos, dizendo: “Dizei aos convidados: ‘Eis que já preparei meu jantar: meus bois e animais cevados já foram mortos, e tudo está pronto. Vinde à festa de casamento’”. 
5 Porém eles não deram importância e foram embora, um ao seu campo, e outro ao seu comércio; 
6 e outros agarraram os servos dele, e os humilharam e os mataram. 
7 Quando o rei Então enviou os seus exércitos, destruiu aqueles homicidas, e incendiou a cidade deles. 
8 Em seguida, disse aos seus servos: “Certamente a festa de casamento está pronta, porém os convidados não eram dignos. 
9 Ide, pois, às saídas dos caminhos, e convidai à festa de casamento tantos quantos achardes. 
10 Aqueles servos saíram pelos caminhos, e ajuntaram todos quantos acharam, tanto maus como bons; e a festa de casamento se encheu de convidados. 
|fn:  N4: sala da festa
11 Mas quando o rei entrou para ver os convidados, percebeu ali um homem que não estava vestido com roupa adequada para a festa de casamento. 
12 Então lhe perguntou: “Amigo, como entraste aqui sem ter roupa para a festa?” E ele emudeceu. 
13 Então o rei disse aos servos: “Amarrai-o nos pés e nas mãos, tomai-o, e lançai-o nas trevas de fora. Ali haverá pranto e o ranger de dentes”. 
|fn:  N4 omite "tomai-o"
14 Pois muitos são chamados, porém poucos escolhidos. 
15 Então os fariseus foram embora, e se reuniram para tramar como o apanhariam em cilada por algo que dissesse. [] 
|fn:  por algo que dissesse – lit. em alguma palavra
16 Depois lhe enviaram seus discípulos, juntamente com os apoiadores de Herodes, e perguntaram: Mestre, bem sabemos que tu és verdadeiro, e que com verdade ensinas o caminho de Deus, e que não te importas com a opinião de ninguém, porque não dás atenção à aparência humana. 
17 Dize-nos, pois, o que te parece: é lícito dar tributo a César, ou não? 
18 Mas Jesus, entendendo a sua malícia, disse: Por que me tentais, hipócritas? 
|fn:  tentais – ou: testais
19 Mostrai-me a moeda do tributo. E eles lhe trouxeram um denário. 
20 E ele lhes perguntou: De quem é esta imagem, e a inscrição? 
21 Eles lhe responderam: De César. Então ele lhes disse: Dai, pois, a César o que é de César, e a Deus o que é de Deus. 
|fn:  N4 omite "lhe"
22 Quando ouviram isso, eles ficaram admirados; então o deixaram e se retiraram. 
23 Naquele mesmo dia chegaram a ele os saduceus, que dizem não haver ressurreição, e perguntaram-lhe, 
24 dizendo: Mestre, Moisés disse: Se um homem morrer sem ter filhos, seu irmão se casará com sua mulher, e gerará descendência ao seu irmão. 
|fn:  gerará descendência – lit. levantará semente |fn:  Ref. Deuteronômio 25:5
25 Ora, havia entre nós sete irmãos. O primeiro se casou, e depois morreu; e sem ter tido filhos, deixou sua mulher ao seu irmão. 
|fn:  filhos – lit. semente
26 E da mesma maneira também foi com o segundo, o terceiro, até os sete. 
27 Por último, depois de todos, a mulher também morreu. 
|fn:  N4 omite "também"
28 Assim, na ressurreição, a mulher será de qual dos sete? Pois todos a tiveram. 
29 Jesus, porém, lhes respondeu: Errais, por não conhecerdes as Escrituras, nem o poder de Deus. 
30 Porque na ressurreição, nem se tomam, nem se dão em casamento; mas são como os anjos de Deus no céu. 
|fn:  N4 omite "de Deus"
31 E sobre a ressurreição dos mortos, não lestes o que Deus vos falou: 
32 Eu sou o Deus de Abraão, o Deus de Isaque, e o Deus de Jacó? Deus não é Deus dos mortos, mas sim dos vivos! 
|fn:  Ref. Êxodo 3:6 |fn:  TR, RP: Deus não é Deus dos mortos - N4: Deus não é dos mortos
33 Quando as multidões ouviram [isto] , ficaram admiradas de sua doutrina. 
34 E os fariseus, ao ouvirem que ele havia feito os saduceus se calarem, reuniram-se. 
35 E um deles, especialista da Lei, tentando-o, perguntou-lhe: 
36 Mestre, qual é o grande mandamento na Lei? 
37 E Jesus lhe respondeu: Amarás ao Senhor teu Deus com todo o teu coração, com toda a tua alma, e com todo o teu entendimento: 
|fn:  N4 omite "Jesus" |fn:  Ref. Deuteronômio 6:5
38 este é o primeiro e grande mandamento. 
|fn:  N4:grande e primeiro
39 E o segundo, semelhante a este, [é] : Amarás o teu próximo como a ti mesmo. 
|fn:  N4 omite "E" |fn:  Ref. Levítico 19:18
40 Destes dois mandamentos dependem toda a Lei e os Profetas. 
41 E, estando os fariseus reunidos, Jesus lhes perguntou, 
42 dizendo: Que pensais vós acerca do Cristo? De quem ele é filho? Eles lhe responderam: De Davi. 
43 Jesus] lhes disse: Como, pois, Davi, em espírito, o chama Senhor, dizendo: 
44 Disse o Senhor a meu Senhor: “Senta-te à minha direita, até que eu ponha os teus inimigos como estrado de teus pés”. 
|fn:  TR, RP:como estrado - N4: debaixo |fn:  Ref. Salmos 110:1
45 Ora, se Davi o chama Senhor, como é seu filho? 
46 E ninguém podia lhe responder palavra; nem ninguém ousou desde aquele dia a mais lhe perguntar.

CAPÍTULO 23

1 Então Jesus falou às multidões e aos seus discípulos, 
2 dizendo: Os escribas e os fariseus se sentam sobre o assento de Moisés. 
3 Portanto, tudo o que eles vos disserem que guardeis, guardai, e fazei. Mas não façais segundo as suas obras, porque eles dizem e não fazem. 
|fn:  TR, RP: disserem que guardeis, guardai, e fazei - N4: disserem, fazei e guardai
4 Pois eles amarram cargas pesadas e difíceis de levar, e as põem sobre os ombros das pessoas; porém eles nem sequer com o seu dedo as querem mover. 
|fn:  N4 omite "Pois" |fn:  N4 omite "e difíceis de levar" |fn:  N4: eles mesmos
5 E fazem todas as suas obras a fim de serem vistos pelas pessoas: por isso alargam seus filactérios, ) e fazem compridas as franjas de suas roupas. 
|fn:  filactérios – pequenas bolsas com trechos do Antigo Testamento que os judeus usavam nos braços e na testa, especialmente quando oravam (Deuteronômio 6:8 |fn:  N4 omite "de suas roupas"
6 Eles amam os primeiros assentos nas ceias, as primeiras cadeiras nas sinagogas, 
7 as saudações nas praças, e serem chamados: “Rabi, Rabi” pelas pessoas. 
|fn:  N4 omite a repetição de "Rabi"
8 Mas vós, não sejais chamados Rabi, porque o vosso Mestre é um: o Cristo; e todos vós sois irmãos. 
|fn:  N4 omite: "O Cristo"
9 E não chameis a ninguém na terra vosso pai; porque o vosso Pai é um: aquele que está nos céus. 
10 Nem sejais chamados mestres; porque o vosso mestre é um: o Cristo. 
11 Porém o maior de vós será vosso servo. 
12 E o que a si mesmo se exaltar será humilhado; e o que a si mesmo se humilhar será exaltado. 
13 Mas ai de vós, escribas e fariseus, hipócritas! Porque fechais o Reino dos céus em frente das pessoas; pois nem vós entrais, nem permitis a entrada do que estão para entrar. 
14 Ai de vós, escribas e fariseus, hipócritas! Porque devorais as casas das viúvas, e [isso] com pretexto de longas orações; por isso recebereis mais grave condenação. 
|fn:  N4 omite o versículo 14, enquanto que RP inverte o texto com o do versículo 13
15 Ai de vós, escribas e fariseus, hipócritas! Porque rodeais o mar e a terra para fazerdes um prosélito; e quando é feito, vós o tornais filho do inferno duas vezes mais que a vós. 
|fn:  prosélito – pessoa não-israelita que se convertia ao judaísmo
16 Ai de vós, guias cegos, que dizeis: “Qualquer um que jurar pelo templo, nada é; mas qualquer um que jurar pelo ouro do templo, devedor é”. 
17 Tolos e cegos! Pois qual é maior: o ouro, ou o templo que santifica o ouro? 
|fn:  N4: santificou
18 Também [dizeis] : “Qualquer um que jurar pelo altar, nada é; mas quem jurar pela oferta que [está] sobre ele, devedor é”. 
19 Tolos e cegos! Pois qual é maior: a oferta, ou o altar que santifica a oferta? 
|fn:  N4 omite "Tolos e"
20 Portanto, quem jurar pelo altar, jura por ele, e por tudo o que está sobre ele. 
21 E quem jurar pelo templo, jura por ele, e por aquele que nele habita. 
|fn:  RP: habitava
22 E quem jurar pelo Céu, jura pelo trono de Deus, e por aquele que sobre ele está sentado. 
23 Ai de vós, escribas e fariseus, hipócritas! Porque dais o dízimo da hortelã, do endro, e do cominho, e desprezais o que é mais importante da Lei: a justiça, a misericórdia, e a fidelidade; estas coisas devem ser feitas, sem se desprezar as outras. 
|fn:  fidelidade – ou: fé
24 Guias cegos, que coais um mosquito, e engolis um camelo! 
25 Ai de vós, escribas e fariseus, hipócritas! Porque limpais o exterior do copo ou do prato, mas por dentro estão cheios de extorsão e cobiça. 
|fn:  cobiça – ou: falta de moderação |fn:  TR, N4: cobiça - RP: injustiça
26 Fariseu cego! Limpa primeiro o interior do copo e do prato, para que também o exterior deles fique limpo. 
|fn:  N4 omite "e do prato"
27 Ai de vós, escribas e fariseus, hipócritas! Porque sois semelhantes aos sepulcros caiados, que por fora realmente parecem belos, mas por dentro estão cheios de ossos de cadáveres, e de toda imundícia. 
28 Assim também vós, por fora, realmente pareceis justos às pessoas, mas por dentro estais cheios de hipocrisia e de injustiça. 
29 Ai de vós, escribas e fariseus, hipócritas! Porque edificais os sepulcros dos profetas, adornais os monumentos dos justos, 
30 e dizeis: “Se estivéssemos nos dias dos nossos pais, nunca teríamos sido cúmplices deles quando derramaram o sangue dos profetas”. 
|fn:  quando derramaram o sangue – lit. no sangue
31 Assim vós mesmos dais testemunho de que sois filhos dos que mataram os profetas. 
32 Enchei, pois, a medida de vossos pais. ) 
|fn:  Enchei, pois, a medida de vossos pais – i.e. Completai de fazer o que vossos ancestrais começaram, (matando os justos que anunciavam a palavra de Deus, e em especial, matando Cristo
33 Serpentes, ninhada de víboras! Como escapareis da condenação do inferno? 
34 Por isso, eis que eu vos envio profetas, sábios, e escribas; a uns deles matareis e crucificareis, e a [outros] deles açoitareis em vossas sinagogas, e perseguireis de cidade em cidade; 
35 para que venha sobre vós todo o sangue justo que foi derramado sobre a terra, desde o sangue do justo Abel, até o sangue de Zacarias, filho de Baraquias, ao qual matastes entre o templo e o altar. 
36 Em verdade vos digo que tudo isto virá sobre esta geração. 
37 Jerusalém, Jerusalém, que matas os profetas, e apedrejas os que te são enviados! Quantas vezes eu quis ajuntar os teus filhos, como a galinha ajunta os seus pintos debaixo das asas; porém não quisestes! 
38 Eis que vossa casa vos será deixada desolada. 
|fn:  desolada – ou: deserta |fn:  N4 omite "desolada"
39 Pois eu vos digo que a partir de agora não me vereis, até que digais: “Bendito aquele que vem no nome do Senhor”.
|fn:  Ref. Salmos 118:26

CAPÍTULO 24

1 Jesus saiu do templo, e se foi. Então seus discípulos se aproximaram dele para lhe mostrarem os edifícios do complexo do templo. 
2 Mas Jesus lhes disse: Não vedes tudo isto? Em verdade vos digo, que não será deixada aqui pedra sobre pedra, que não seja derrubada. 
3 E, depois de se assentar no monte das Oliveiras, os discípulos se aproximaram dele reservadamente, perguntando: Dize-nos, quando serão estas coisas, e que sinal haverá da tua vinda, e do fim da era? 
|fn:  fim da era – ou: “fim dos tempos”, “fim do mundo”
4 E Jesus lhes respondeu: Permanecei atentos, para que ninguém vos engane. 
5 Porque muitos virão em meu nome, dizendo: “Eu sou o Cristo”, e enganarão a muitos. 
6 E ouvireis de guerras, e de rumores de guerras. Olhai que não vos espanteis; porque é necessário, que tudo [isto] aconteça, mas ainda não é o fim. 
|fn:  N4 omite "tudo"
7 Pois se levantará nação contra nação, e reino contra reino; e haverá fomes, pestilências, e terremotos em diversos lugares. 
|fn:  N4 omite "pestilências"
8 Mas todas estas coisas são o começo das dores. 
9 Então vos entregarão para serdes afligidos, e vos matarão; e sereis odiados por todas as nações, por causa de meu nome. 
10 E muitos se tornarão infiéis; e trairão uns aos outros, e uns aos outros se odiarão. 
11 E muitos falsos profetas se levantarão, e enganarão a muitos. 
12 E, por se multiplicar a injustiça, o amor de muitos se esfriará. 
13 Mas o que perseverar até o fim, esse será salvo. 
14 E este Evangelho do Reino será pregado em todo o mundo, como testemunho a todas as nações, e então virá o fim. 
15 Portanto, quando virdes que a abominação da desolação, dita pelo profeta Daniel, está no lugar santo, (quem lê, entenda), 
16 então os que estiveram na Judeia fujam para os montes; 
17 o que estiver no sobre o telhado não desça para tirar alguma coisa de sua casa; 
|fn:  TR: alguma coisa - RP, N4: as coisas
18 e o que estiver no campo não volte atrás para tomar as suas roupas. 
|fn:  N4: a sua capa
19 Mas ai das grávidas e das que amamentarem naqueles dias! 
20 Orai, porém, para que a vossa fuga não aconteça no inverno, nem no sábado. 
21 Pois haverá então grande aflição, como nunca houve desde o princípio do mundo até agora, nem jamais haverá. 
|fn:  grande aflição: ou “grande tribulação”
22 E se aqueles dias não fossem encurtados, ninguém se salvaria; mas por causa dos escolhidos, aqueles dias serão encurtados. 
|fn:  ninguém – lit. “nenhuma carne” |fn:  se salvaria – i.e. sobreviveria
23 Então, se alguém vos disser: “Olha o Cristo aqui”, ou “ [Olha ele] ali”, não creiais, 
24 pois se levantarão falsos cristos e falsos profetas; e farão tão grandes sinais e prodígios que, se fosse possível, enganariam até os escolhidos. 
25 Eis que eu tenho vos dito com antecedência. 
26 Portanto, se vos disserem: “Eis que ele está no deserto”, não saiais; “Eis que ele está em um recinto”, não creiais. 
27 Porque, assim como o relâmpago, que sai do oriente, e aparece até o ocidente, assim também será a vinda do Filho do homem. 
28 Pois onde estiver o cadáver, ali se ajuntarão os abutres. 
|fn:  N4 omite "Pois"
29 E logo depois da aflição daqueles dias, o sol se escurecerá, a lua não dará o seu brilho, as estrelas cairão do céu, e as forças dos céus se estremecerão. 
|fn:  aflição – ou “tribulação”
30 Então aparecerá no céu o sinal do Filho do homem. Naquela hora todas as tribos da terra lamentarão, e verão ao Filho do homem, que vem sobre as nuvens do céu, com poder e grande glória. 
31 E enviará os seus anjos com grande som de trombeta, e ajuntarão os seus escolhidos desde os quatro ventos, de uma extremidade à outra dos céus. 
|fn:  N4 omite "som de"
32 Aprendei a parábola da figueira: “Quando os seus ramos já ficam verdes, e as folhas brotam, sabeis que o verão [está] perto”. 
33 Assim também vós, quando virdes todas estas coisas, sabei que já está perto, às portas. 
34 Em verdade vos digo que esta geração não passará, até que todas estas coisas aconteçam. 
35 O céu e a terra passarão, mas minhas palavras de maneira nenhuma passarão. 
36 Porém daquele dia e hora, ninguém sabe, nem os anjos do céu, a não ser meu Pai somente. 
|fn:  N4 acrescenta "nem o Filho" - Compare com Marcos 13:32
37 Assim como foram os dias de Noé, assim também será a vinda do Filho do homem. 
38 Pois, assim como nos dias antes do dilúvio comiam, bebiam, casavam, e davam-se em casamento, até o dia em que Noé entrou na arca; 
|fn:  N4: naqueles
39 e não sabiam, até que veio o dilúvio, e levou todos, assim também será a vinda do Filho do homem. 
40 Naquela hora dois estarão no campo; um será tomado, e o outro será deixado. 
41 Duas estarão moendo em um moinho; uma será tomada, e a outra será deixada. 
42 Vigiai, pois, porque não sabeis em que hora o vosso Senhor virá. 
|fn:  N4: dia
43 Porém sabei isto: se o dono de casa soubesse a que hora da noite o ladrão viria, vigiaria, e não deixaria invadir a sua casa. 
|fn:  hora – lit. vigília – a noite era dividida em quatro vigílias, cada uma com cerca de três horas de duração
44 Portanto também vós estai prontos, porque o Filho do homem virá na hora que não esperais. 
45 Pois quem é o servo fiel e prudente, ao qual o seu senhor pôs sobre os seus trabalhadores, para [lhes] dar alimento no tempo devido? 
|fn:  N4 omite "seu"
46 Feliz será aquele servo a quem, quando o seu senhor vier, achar fazendo assim. 
|fn:  Feliz – ou: “bem-aventurado”
47 Em verdade vos digo que ele o porá sobre todos os seus bens. 
48 Porém se aquele servo mau disser em seu coração: “Meu senhor está demorando a chegar”, 
|fn:  N4 omite "a chegar"
49 e começar a espancar os servos companheiros [seus] , e a comer, e a beber com os beberrões, 
|fn:  N4 inclui "seus", sem colchetes
50 o senhor daquele servo chegará num dia que ele não espera, e numa hora que ele não sabe, 
51 e o despedaçará, e porá sua parte com os hipócritas; ali haverá pranto e ranger de dentes.

CAPÍTULO 25

1 Então o Reino dos céus será semelhante a dez virgens, que tomaram suas lâmpadas, e saíram ao encontro do noivo. 
2 E cinco delas eram prudentes, e cinco tolas. 
|fn:  N4 inverte a ordem de "prudentes" e "tolas"
3 As tolas, quando tomaram as suas lâmpadas, não tomaram azeite consigo. 
|fn:  N4 omite "suas"
4 Mas as prudentes tomaram azeite nos seus frascos, com as suas lâmpadas. 
|fn:  N4 omite "seus"
5 O noivo demorou, por isso todas cochilaram e adormeceram. 
6 Mas à meia-noite houve um grito: “Eis que vem o noivo! Ide ao seu encontro!”. 
|fn:  N4 omite "que vem"
7 Então todas aquelas virgens se levantaram, e prepararam suas lâmpadas. 
8 E as tolas disseram às prudentes: “Dai-nos do vosso azeite, porque as nossas lâmpadas estão se apagando”. 
9 Mas as prudentes responderam: “ [Não] , para que não falte a nós e a vós; em vez disso, ide aos vendedores, e comprai para vós mesmas”. 
10 Enquanto elas foram comprar, veio o noivo. As que estavam preparadas entraram com ele à festa do casamento, e fechou-se a porta. 
11 Depois vieram também as outras virgens, dizendo: “Senhor, Senhor, abre-nos!” 
12 Mas ele respondeu: “Em verdade vos digo que não vos conheço”. 
13 Portanto, vigiai, porque não sabeis o dia nem a hora em que o Filho do homem virá. 
|fn:  N4 omite "em que o Filho do homem virá"
14 Pois [é] como um homem, que partindo-se para fora do país, chamou seus servos, e lhes entregou os seus bens. 
15 E a um deu cinco talentos, a outro dois, e ao terceiro um, a cada um conforme a sua habilidade, e logo depois partiu em viagem. 
|fn:  N4 omite "logo"
16 Em seguida, o que havia recebido cinco talentos foi fazer negócios com eles, e obteve outros cinco talentos . 
|fn:  N4: Logo em |fn:  TR,RP: obteve outros cinco talentos - N4: ganhou outros cinco
17 E, semelhantemente, o que [havia recebido] dois ganhou também outros dois. 
18 Mas o que tinha recebido um foi cavar a terra, e escondeu o dinheiro do seu senhor. 
19 Muito tempo depois, o senhor daqueles servos veio, e fez contas com eles. 
20 O que havia recebido cinco talentos chegou lhe trazendo outros cinco talentos, e disse: ”Senhor, cinco talentos me entregaste, eis que ganhei com eles outros cinco talentos”. 
21 E o seu senhor lhe disse: “ [Muito] bem, servo bom e fiel! Sobre o pouco foste fiel, sobre o muito te porei; entra na alegria do teu senhor”. 
22 E chegando-se também o que havia recebido dois talentos, disse: “Senhor, dois talentos me entregaste, eis que ganhei com eles outros dois talentos”. 
|fn:  N4 omite "havia recebido"
23 Seu senhor lhe disse: “ [Muito] bem, servo bom e fiel! Sobre o pouco foste fiel, sobre o muito te porei; entra na alegria do teu senhor”. 
24 Mas, chegando também o que havia recebido um talento, disse: “Senhor, eu te conhecia, que és homem duro, que colhes onde não semeaste, e ajuntas onde não espalhaste; 
25 E eu, atemorizado, fui e escondi o teu talento na terra; eis aqui tens o que é teu”. 
26 Porém seu senhor lhe respondeu: “Servo mau e preguiçoso! Sabias que colho onde não semeei, e ajunto onde não espalhei. 
27 Devias, portanto, ter depositado o meu dinheiro como os banqueiros e, quando eu voltasse, receberia o que é meu com juros. 
28 Por isso, tirai dele o talento, e dai-o ao que tem dez talentos”. 
29 Pois a todo aquele que tiver, lhe será dado, e terá em abundância; porém ao que não tiver, até o que tem lhe será tirado. 
30 “E lançai o servo inútil às trevas de fora (ali haverá pranto e ranger de dentes)”. 
31 E quando o Filho do homem vier em sua glória, e todos os santos anjos com ele, então ele se assentará sobre o trono de sua glória. 
|fn:  N4 omite "santos"
32 E serão ajuntadas diante dele todas as nações, e separará [as pessoas] umas das outras, assim como o pastor separa as ovelhas dos bodes. 
33 E porá as ovelhas à sua direita, porém os bodes à esquerda. 
34 Então o Rei dirá o rei aos que estiverem à sua direita: “Vinde, benditos de meu Pai! Herdai o Reino que está preparado para vós desde a fundação do mundo. 
35 Pois tive fome, e me destes de comer; tive sede, e me destes de beber; fui forasteiro, e me acolhestes; 
36 estive] nu, e me vestistes; [estive] doente, e cuidastes de mim; estive na prisão, e me visitastes”. 
37 Então os justos lhe perguntarão: “Senhor, quando te vimos com fome, e [te] demos de comer, ou com sede, e [te] demos de beber? 
38 E quando te vimos forasteiro, e [te] acolhemos, ou nu, e te vestimos? 
39 E quando te vimos doente, ou na prisão, e viemos te visitar?” 
40 E o Rei lhes responderá: “Em verdade vos digo que, todas as vezes que fizestes a um destes menores dos meus irmãos, fizestes a mim”. 
41 Então dirá também aos que [estiverem] à esquerda: “Apartai-vos de mim, malditos, ao fogo eterno, preparado para o Diabo e os seus anjos. 
42 Pois tive fome, e não me destes de comer; tive sede, e não me destes de beber. 
43 Fui forasteiro, e não me acolhestes; [estive] nu, e não me vestistes; [estive] doente, e na prisão, e não me visitastes. 
44 Então também eles lhe perguntarão: “Senhor, quando te vimos com fome, ou com sede, ou forasteiro, ou nu, ou doente, ou na prisão, e não te servimos?” 
|fn:  RP, N4 omitem "lhe"
45 Então ele lhes responderá, dizendo: “Em verdade vos digo que, todas as vezes que não fizestes a um destes menores, não fizestes a mim”. 
46 E estes irão ao tormento eterno, porém os justos à vida eterna.

CAPÍTULO 26

1 E aconteceu que, quando Jesus terminou todas estas palavras, disse aos seus discípulos: 
2 Vós bem sabeis que daqui a dois dias é a Páscoa, e o Filho do homem será entregue para ser crucificado. 
3 Então os chefes dos sacerdotes, os escribas, e os anciãos do povo se reuniram na casa do sumo sacerdote, que se chamava Caifás. 
|fn:  N4 omite "os escribas"
4 E conversaram a fim de, usando mentira, prenderem Jesus, e [o] matarem. 
|fn:  usando mentira – ou: em segredo
5 Porém diziam: Não na festa, para que não haja tumulto entre o povo. 
6 Enquanto Jesus estava em Betânia, na casa de Simão o leproso, 
7 veio a ele uma mulher com um vaso de alabastro, de óleo perfumado de grande valor, e derramou sobre a cabeça dele, enquanto estava sentado à mesa. 
|fn:  sentado – ou: reclinado
8 E quando os seus discípulos viram, ficaram indignados, dizendo: Para que este desperdício? 
|fn:  N4 omite "seus"
9 Pois esse óleo perfumado podia ter sido vendido por muito, e o dinheiro dado aos pobres. 
|fn:  TR, RP: esse óleo perfumado - N4 - isso
10 Porém Jesus, sabendo [disso] , disse-lhes: Por que perturbais a esta mulher? Ora, ela me fez uma boa obra! 
11 Pois vós sempre tendes os pobres convosco, porém nem sempre me tereis. 
12 Pois ela, ao derramar este óleo perfumado sobre o meu corpo, ela o fez para [preparar] o meu sepultamento. 
13 Em verdade vos digo que, onde quer que este Evangelho em todo o mundo for pregado, também se dirá o que ela fez, para que seja lembrada. 
14 Então um dos doze, chamado Judas Iscariotes, foi aos chefes dos sacerdotes, 
15 e disse: O que quereis me dar, para que eu o entregue a vós? E eles lhe determinaram trinta [moedas] de prata. 
16 E desde então ele buscava oportunidade para o entregar. 
|fn:  entregar – ou: trair
17 E no primeiro [dia da festa] dos pães sem fermento, os discípulos vieram a Jesus lhe perguntar: Onde queres que te preparemos para comer a Páscoa? 
|fn:  N4 omite "lhe"
18 E ele respondeu: Ide à cidade a um tal, e dizei-lhe: “O Mestre diz: ‘Meu tempo está perto. Contigo celebrarei a Páscoa com os meus discípulos’”. 
|fn:  Contigo – i.e. em tua casa
19 Os discípulos fizeram como Jesus havia lhes mandado, e prepararam a Páscoa. 
20 E vindo o anoitecer, ele se assentou à mesa com os doze. 
|fn:  assentou – ou: reclinou
21 E enquanto comiam, disse: Em verdade vos digo que um de vós me trairá. 
|fn:  trairá – ou: entregará – também no v. 23
22 Eles ficaram muito tristes, e cada um deles começou a lhe perguntar: Por acaso sou eu, Senhor? 
|fn:  N4 omite "deles"
23 E ele respondeu: O que mete comigo a mão no prato, esse me trairá. 
24 De fato, o Filho do homem vai assim como dele está escrito; mas ai daquele homem por quem o Filho do homem é traído! Bom seria a tal homem se não houvesse nascido. 
25 E Judas, o que o traía, perguntou: Por acaso sou eu, Rabi? [Jesus] lhe disse: Tu o disseste. 
26 E enquanto comiam, Jesus tomou o pão, abençoou-o, e o partiu. Então o deu aos discípulos, e disse: Tomai, comei; isto é o meu corpo. 
|fn:  TR, N4: abençoou-o - RP: deu graças por aquilo
27 Em seguida tomou o cálice, deu graças, e o deu a eles, dizendo: Bebei dele todos, 
|fn:  N4: um
28 porque este é o meu sangue, o [sangue] do novo testamento, o qual é derramado por muitos, para o perdão de pecados. 
|fn:  N4 omite "novo" - Compare com Lucas 22:20 |fn:  testamento – ou: pacto
29 E eu vos digo que desde agora não beberei deste fruto da vide, até aquele dia, quando convosco o beber, novo, no reino do meu Pai. 
30 E depois de cantarem um hino, saíram para o monte das Oliveiras. 
|fn:  hino – ou: salmo
31 Então Jesus lhes disse: Todos vós vos falhareis em serdes fiéis a mim esta noite; porque está escrito: “Ferirei o pastor, e as ovelhas do rebanho serão dispersas”. 
32 Mas, depois que eu for ressuscitado, irei adiante de vós para a Galileia. 
33 Pedro, porém, respondeu-lhe: Ainda que todos falhem contigo, eu nunca falharei em minha fidelidade. 
|fn:  falharei em minha fidelidade – tradicionalmente: nunca me escandalizarei
34 Jesus lhe disse: Em verdade te digo que, nesta mesma noite, antes do galo cantar, tu me negarás três vezes. 
35 Pedro lhe respondeu: Ainda que eu tenha de morrer contigo, em nenhuma maneira te negarei. E todos os discípulos disseram o mesmo. 
36 Então Jesus veio com eles a um lugar chamado Getsêmani, e disse aos discípulos: Ficai sentados aqui, enquanto eu vou ali orar. 
37 Enquanto trazia consigo Pedro e os dois filhos de Zebedeu, ele começou a se entristecer e a se angustiar muito. 
38 Então lhes disse: Minha alma está completamente triste até a morte. Ficai aqui, e vigiai comigo. 
|fn:  RP: Então Jesus
39 E indo um pouco mais adiante, prostrou-se sobre o seu rosto, orando, e dizendo: Meu Pai, se é possível, passe de mim este cálice; porém, não [seja] como eu quero, mas sim como tu [queres] . 
40 Então voltou aos seus discípulos, e os encontrou dormindo; e disse a Pedro: Então, nem sequer uma hora pudestes vigiar comigo? 
41 Vigiai e orai, para que não entreis em tentação. De fato, o espírito [está] pronto, mas a carne [é] fraca. 
42 Ele foi orar pela segunda vez, dizendo: Meu Pai, se este cálice não pode passar de mim sem que eu o beba, faça-se a tua vontade. 
|fn:  N4 omite "cálice"
43 Quando voltou, achou-os outra vez dormindo, pois os seus olhos estavam pesados. 
|fn:  N4 transpõe "outra vez" para antes de "voltou"
44 Então os deixou, e foi orar pela terceira vez, dizendo as mesmas palavras. 
|fn:  N4: dizendo novamente
45 Depois veio aos seus discípulos, e disse-lhes: Agora dormi e descansai. Eis que chegou a hora em que o Filho do homem é entregue em mãos de pecadores. 
|fn:  N4 omite "seus" |fn:  Agora dormi, e descansai. - Ou: “Ainda dormis, e descansais?”
46 Levantai-vos, vamos! Eis que chegou o que me trai. 
47 Enquanto ele ainda estava falando, eis que veio Judas, um dos doze, e com ele uma grande multidão, com espadas e bastões, da parte dos chefes dos sacerdotes e dos anciãos do povo. 
48 O seu traidor havia lhes dado sinal, dizendo: Aquele a quem eu beijar, é esse. Prendei-o. 
49 Logo ele se aproximou de Jesus, e disse: Felicitações, Rabi! e o beijou. 
50 Jesus, porém, lhe perguntou: Amigo, para que vieste? Então chegaram, agarraram Jesus, e o prenderam. 
|fn:  agarraram Jesus – lit. puseram as mãos em Jesus
51 E eis que um dos que [estavam] com Jesus estendeu a mão, puxou de sua espada, e feriu o servo do sumo sacerdote, cortando-lhe uma orelha. 
52 Jesus, então, lhe disse: Põe de volta tua espada ao seu lugar, pois todos os que pegarem espada, pela espada perecerão. 
|fn:  N4: morrerão
53 Ou, por acaso, pensas tu que eu não posso agora orar ao meu Pai, e ele me daria mais de doze legiões de anjos? 
|fn:  N4 transpõe "agora" para depois de "daria"
54 Como, pois, se cumpririam as Escrituras [que dizem] que assim tem que ser feito? 
55 Naquela hora Jesus disse às multidões: Como a um ladrão saístes com espadas e bastões para me prender? Todo dia eu me sentava convosco, ensinando no templo, e não me prendestes. 
|fn:  N4 omite "convosco"
56 Porém tudo isto aconteceu para que as Escrituras dos profetas se cumpram. Então todos os discípulos o abandonaram, e fugiram. 
57 Os que prenderam Jesus o trouxeram [à casa] de Caifás, o sumo sacerdote, onde os escribas e os anciãos estavam reunidos. 
58 E Pedro o seguia de longe, até o pátio do sumo sacerdote; e entrou, e se assentou com os servos, para ver o fim. 
59 Os chefes dos sacerdotes, os anciãos, e todo o conselho buscavam falso testemunho contra Jesus, para poderem matá-lo, 
|fn:  N4 omite "os anciãos" |fn:  conselho – lit. sinédrio – o conselho ou tribunal para assuntos da religião judaica
60 mas não encontravam. E ainda que muitas falsas testemunhas se apresentavam, [contudo] não encontravam. [] 
|fn:  N4 omite " contudo não encontravam"
61 Mas, por fim, vieram duas falsas testemunhas, que disseram: Este disse: “Posso derrubar o Templo de Deus e reconstruí-lo em três dias”. 
|fn:  N4 omite "falsas testemunhas"
62 Então o sumo sacerdote se levantou, e lhe perguntou: Não respondes nada ao que eles testemunham contra ti? 
63 Porém Jesus ficava calado. Então o sumo sacerdote lhe disse: Ordeno-te pelo Deus vivo que nos digas se tu és o Cristo, o Filho de Deus. 
|fn:  Ordeno-te – lit. conjuro-te, isto é, obrigar alguém a dizer algo sob juramento
64 Jesus lhe disse: Tu o disseste. Porém eu vos digo que, desde agora, vereis o Filho do homem, sentado à direita do Poderoso, e vindo sobre as nuvens do céu. 
|fn:  Poderoso – lit. Poder
65 Então o sumo sacerdote rasgou suas roupas, e disse: Ele blasfemou! Para que necessitamos mais de testemunhas? Eis que agora ouvistes a sua blasfêmia. 
|fn:  N4 omite "sua"
66 Que vos parece? E eles responderam: Culpado de morte ele é. 
67 Então lhe cuspiram no rosto, e lhe deram socos. 
68 Outros lhe deram bofetadas, e diziam: Profetiza-nos, ó Cristo, quem é o que te feriu? 
69 Pedro estava sentado fora no pátio. Uma serva aproximou-se dele, e disse: Também tu estavas com Jesus, o galileu. 
70 Mas ele o negou diante de todos, dizendo: Não sei o que dizes. 
|fn:  RP: todos eles
71 E quando ele saiu em direção à entrada, outra o viu, e disse aos que ali [estavam] : Também este estava com Jesus, o nazareno. 
72 E ele o negou outra vez com um juramento: Não conheço [esse] homem. 
73 Pouco depois, os que ali estavam se aproximaram, e disseram a Pedro: Verdadeiramente também tu és um deles, pois a tua fala te denuncia. 
|fn:  a tua fala – ou: “o teu sotaque”
74 Então ele começou a amaldiçoar e a jurar: Não conheço [esse] homem! E imediatamente o galo cantou. 
75 Então Pedro se lembrou da palavra de Jesus, que lhe dissera: Antes do galo cantar, tu me negarás três vezes. Assim ele saiu, e chorou amargamente.
|fn:  TR, RP: palavra de Jesus, que lhe dissera - N4: palavra que Jesus dissera

CAPÍTULO 27

1 Vinda a manhã, todos os chefes dos sacerdotes e anciãos do povo juntamente se aconselharam contra Jesus, para o matarem. 
2 E o levaram amarrado, e o entregaram a Pôncio Pilatos, o governador. 
|fn:  N4 omite "Pôncio"
3 Então Judas, o que o havia traído, ao ver que [Jesus] já estava condenado, devolveu, sentindo remorso, as trinta [moedas] de prata aos chefes dos sacerdotes e aos anciãos; 
4 e disse: Pequei, traindo sangue inocente. Porém eles disseram: Que nos interessa? Isso é problema teu! [] 
|fn:  Isso é problema teu – lit. Vê isso tu
5 Então ele lançou as [moedas] de prata no templo, saiu, e foi enforcar-se. 
6 Os chefes dos sacerdotes tomaram as [moedas] de prata, e disseram: Não é lícito pô-las no tesouro das ofertas, pois isto é preço de sangue. 
7 Então juntamente se aconselharam, e compraram com elas o campo do oleiro, para ser cemitério dos estrangeiros. 
8 Por isso aquele campo tem sido chamado campo de sangue até hoje. 
9 Assim se cumpriu o que foi dito pelo profeta Jeremias, que disse: Tomaram as trinta [moedas] de prata, preço avaliado pelos filhos de Israel, o qual eles avaliaram; 
10 e as deram pelo campo do oleiro, conforme o que o Senhor me mandou. 
|fn:  Ref. Zacarias 11:12-13; Jeremias 19:1-13; 32:6-9
11 Jesus esteve diante do governador, e o governador lhe perguntou: És tu o Rei dos Judeus? E Jesus lhe respondeu: Tu [o] dizes. 
|fn:  N4 omite "lhe"
12 E, sendo ele foi acusado pelos chefes dos sacerdotes e pelos anciãos, nada respondeu. 
13 Pilatos, então, lhe disse: Não ouves quantas coisas estão testemunhando contra ti? 
14 Mas [Jesus] não lhe respondeu uma só palavra, de maneira que o governador ficou muito maravilhado. 
15 Na festa o governador costuma soltar um preso ao povo, qualquer um que quisessem. 
16 E tinham então um preso bem conhecido, chamado Barrabás. 
17 Quando, pois, se ajuntaram, Pilatos lhes perguntou: Qual quereis que vos solte? Barrabás, ou Jesus, que é chamado Cristo? 
18 Pois ele sabia que foi por inveja que o entregaram. 
19 E, enquanto ele estava sentado no assento de juiz, sua mulher lhe enviou a seguinte mensagem: Nada [faças] com aquele justo, pois hoje sofri muito em sonhos por causa dele. 
20 Mas os chefes dos sacerdotes e os anciãos persuadiram as multidões a pedirem Barrabás, e a exigirem a morte de Jesus. 
21 O governador lhes perguntou: Qual destes dois quereis que vos solte? E responderam: Barrabás! 
22 Pilatos lhes disse: Que, pois, farei de Jesus, que é chamado Cristo? Todos lhe disseram: Seja crucificado! 
|fn:  N4 omite "lhe"
23 E o governador perguntou: Ora, que mal ele fez? Porém gritavam mais: Seja crucificado! 
24 Quando, pois, Pilatos viu que nada adiantava, em vez disso se fazia mais tumulto, ele pegou água, lavou as mãos diante da multidão, e disse: Estou inocente do sangue deste justo. A responsabilidade é vossa. 
|fn:  TR, RP: deste justo - N4 omite "justo", traduzido "dele" |fn:  a responsabilidade é vossa – lit. vós mesmos, vede
25 E todo o povo respondeu: O sangue dele [venha] sobre nós, e sobre os nossos filhos. 
26 Então soltou-lhes Barrabás, enquanto que mandou açoitar Jesus, e o entregou para ser crucificado. 
27 Em seguida, os soldados do governador levaram Jesus consigo ao pretório, ajuntaram-se a ele toda a unidade miltar. 
|fn:  unidade militar – ou: coorte, uma unidade de aproximadamente 500 soldados
28 Eles o despiram e o cobriram com um manto vermelho. 
29 E, depois de tecerem uma coroa de espinhos, puseram-na sobre a sua cabeça, e uma cana em sua mão direita. Em seguida, puseram-se de joelhos diante dele, zombando-o, e diziam: Felicitações, Rei dos Judeus! 
30 E cuspiram nele, tomaram a cana, e deram-lhe golpes na cabeça. 
31 Depois de terem o zombado, despiram-lhe a capa, vestiram-no com suas roupas, e o levaram para crucificar. 
32 Ao saírem, encontraram um homem de Cirene, por nome Simão; e obrigaram-no a levar sua cruz. 
33 E quando chegaram ao lugar chamado Gólgota, que significa “o lugar da caveira”, 
34 deram-lhe de beber vinagre misturado com fel. E, depois de provar, não quis beber. 
|fn:  N4: vinho
35 E havendo-o crucificado, repartiram suas roupas, lançando sortes; para que se cumprisse o que foi dito pelo profeta: Repartiram entre si minhas roupas, e sobre minha túnica lançaram sortes. 
|fn:  RP, N4 omitem: para que se cumprisse o que foi dito pelo profeta: Repartiram entre si minhas roupas, e sobre minha túnica lançaram sortes
36 Então se sentaram, e ali o vigiavam. 
37 E puseram, por cima de sua cabeça, sua acusação escrita: ESTE É JESUS, O REI DOS JUDEUS. 
38 Então foram crucificados com ele dois criminosos, um à direita, e outro à esquerda. 
|fn:  criminosos – ou: ladrões
39 Os que passavam blasfemavam dele, balançando suas cabeças, 
40 e dizendo: Tu, que derrubas o Templo, e em três dias o reconstróis, salva a ti mesmo! Se és Filho de Deus, desce da cruz. 
41 E da mesma maneira também os chefes dos sacerdotes, com os escribas e os anciãos, escarnecendo [dele] , diziam: 
|fn:  RP acrescenta: "e os fariseus"
42 Salvou outros, a si mesmo não pode salvar. Se é Rei de Israel, desça agora da cruz, e creremos nele. 
|fn:  N4 omite "Se", de maneira que se lê "Ele é Rei de Israel" como sarcasmo
43 Confiou em Deus, livre-o agora, se lhe quer bem; pois disse: “Sou Filho de Deus”. 
44 E os ladrões que estavam crucificados com ele também lhe insultavam. 
45 Desde a hora sexta houve trevas sobre toda a terra até a hora nona. 
|fn:  hora sexta – aproximadamente meio-dia |fn:  hora nona – aproximadamente 3 horas da tarde
46 E perto da hora nona, Jesus gritou em alta voz: Eli, Eli, lamá sabactâni?, Isto é: Deus meu, Deus meu, porque me desamparaste? 
|fn:  RP: limá; N4: lemá
47 E alguns dos que ali estavam, quando ouviram, disseram: Ele está chamando Elias. 
48 Logo um deles correu e tomou uma esponja. Então a encheu de vinagre, colocou-a em uma cana, e lhe dava de beber. 
49 Porém os outros disseram: Deixa, vejamos se Elias vem livrá-lo. 
50 Jesus gritou outra vez em alta voz, e entregou o espírito. 
|fn:  espírito – ou: fôlego, i.e. parou de respirar
51 E eis que o véu do Templo se rasgou em dois, de cima até embaixo, a terra tremeu, e as pedras se fenderam. 
52 Os sepulcros se abriram, e muitos corpos de santos que tinham morrido foram ressuscitados. 
|fn:  morrido – lit. dormido
53 E, depois de ressuscitarem, saíram dos sepulcros, vieram à santa cidade, e apareceram a muitos. 
|fn:  santa cidade – i.e. Jerusalém
54 E o centurião, e os que com ele vigiavam Jesus, ao verem o terremoto e as coisas que haviam sucedido, tiveram muito medo, e disseram: Verdadeiramente ele era Filho de Deus. 
55 Muitas mulheres, que desde a Galileia haviam seguido Jesus, e o serviam, estavam ali, olhando de longe. 
56 Entre elas estavam Maria Madalena, e Maria mãe de Tiago e de José, e a mãe dos filhos de Zebedeu. 
57 E chegado o entardecer, veio um homem rico de Arimateia, por nome José, que também era discípulo de Jesus. 
58 Ele chegou a Pilatos, e pediu o corpo de Jesus. Então Pilatos mandou que o corpo [lhe] fosse entregue. 
|fn:  N4 omite "o corpo"
59 José tomou o corpo, e o envolveu em um lençol limpo, de linho fino, 
60 e o pôs em seu sepulcro novo, que tinha escavado numa rocha; em seguida rolou uma grande pedra à porta do sepulcro, e foi embora. 
61 E ali estavam Maria Madalena e a outra Maria, sentadas de frente ao sepulcro. 
62 No dia seguinte, que é o depois da preparação, os chefes dos sacerdotes, e os fariseus se reuniram com Pilatos, 
63 e disseram: Senhor, nos lembramos que aquele enganador, enquanto ainda vivia, disse: “Depois de três dias serei ressuscitado”. 
64 Portanto, manda que o sepulcro esteja em segurança até o terceiro dia, para que não aconteça dos seus discípulos virem de noite, e o furtem, e digam ao povo que ele ressuscitou dos mortos; e [assim] o último engano será pior que o primeiro. 
|fn:  TR, RP: seus discípulos virem de noite - N4: os discípulos virem
65 Pilatos lhes disse: Vós tendes uma guarda. Ide fazer segurança como o entendeis. 
66 E eles se foram, e fizeram segurança no sepulcro com a guarda, selando a pedra.

CAPÍTULO 28

1 No fim do sábado, quando já começava a clarear para o primeiro dia da semana, Maria Madalena, e a outra Maria vieram ver o sepulcro. 
2 E eis que houve um grande terremoto; porque um anjo do Senhor desceu do céu, chegou, e moveu a pedra da entrada, e ficou sentado sobre ela. 
|fn:  N4 omite "da entrada"
3 A aparência dele era como um relâmpago, e sua roupa branca como neve. 
4 E de medo dele os guardas tremeram muito, e ficaram como mortos. 
5 Mas o anjo disse às mulheres: Não vos atemorizeis, pois eu sei que buscais Jesus, o que foi crucificado. 
6 Ele não está aqui, pois já ressuscitou, como ele disse. Vinde ver o lugar onde o Senhor jazia. 
|fn:  N4 omite "o Senhor"
7 Ide depressa dizer aos seus discípulos que ele ressuscitou dos mortos; e eis que vai adiante de vós para a Galileia; ali o vereis. Eis que eu tenho vos dito. 
8 Então elas saíram apressadamente do sepulcro, com temor e grande alegria, e correram para anunciar aos seus discípulos. 
9 E, enquanto elas iam anunciar aos seus discípulos, eis que Jesus veio ao encontro delas, e disse: Saudações. Elas se aproximaram, pegaram os pés dele, e o adoraram. 
|fn:  N4 omite "enquanto elas iam anunciar aos seus discípulos"
10 Jesus, então, lhes disse: Não temais. Ide anunciar aos meus irmãos para eles irem à Galileia, e ali me verão. 
11 Enquanto elas iam, eis que alguns da guarda vieram à cidade, e anunciaram aos chefes dos sacerdotes tudo o que havia acontecido. 
12 Então eles se reuniram com os anciãos, depois de decidirem em conjunto, deram muito dinheiro aos soldados, 
13 dizendo: Falai: “Os discípulos dele vieram de noite, e o furtaram enquanto estávamos dormindo”. 
14 E, se isto for ouvido pelo governador, nós o persuadiremos, e vos manteremos seguros. 
|fn:  N4 omite "o"
15 Eles tomaram o dinheiro e fizeram como foram instruídos. E este dito foi divulgado entre os judeus até hoje. 
16 Os onze discípulos se foram para a Galileia, ao monte onde Jesus tinha lhes ordenado. 
17 E quando o viram, o adoraram; porém alguns duvidaram. 
18 Jesus se aproximou deles, e lhes falou: Todo o poder me é dado no céu e na terra. 
19 Portanto ide, fazei discípulos a todas as nações, batizando-os em nome do Pai, do Filho, e do Espírito Santo, 
|fn:  RP omite "Portanto"
20 ensinando-lhes a guardar todas as coisas que eu vos tenho mandado. E eis que eu estou convosco todos os dias, até o fim dos tempos. Amém.
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)