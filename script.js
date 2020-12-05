var parties=[
  "Front Ludowy",
  "Front Prawicowy",
  "Inicjatywa Narodowa",
  "Koalicja Centrum",
  "Liberalna Europa",
  "Ludowe Stronnictwo Demokratyczne",
  "Narodowa Akcja Robotnicza",
  "Nowoczesna Partia Libertariańska",
  "Paleo> Libertarianie",
  "Partia Technokratyczna",
  "Pokolenie",
  "Ruch Nowej Polski",
  "Unia Liberalna"
];

var questions=[
  "Służba zdrowia powinna być publiczna",
  "Pensje lekarzy powinny zostać podwyższone",
  "500+ powinno zostać ograniczone lub zlikwidowane",
  "Państwo powinno wspierać budowę mieszkań",
  "ZUS powinien zostać zlikwidowany",
  "Powinniśmy dążyć do równych emerytur (emerytura obywatelska)",
  "Wiek emerytalny powinien zostać podwyższony",
  "Pensja minimalna powinna zostać znacznie podwyższona",
  "Kwota wolna powinna zostać podwyższona",
  "Bogaci płacą obecnie zbyt niskie podatki",
  "Podatki w Polsce są zbyt wysokie",
  "Duże firmy powinny zostać dodatkowo opodatkowane",
  "Osoby LGBT powinny mieć prawo do związków partnerskich",
  "Osoby LGBT powinny mieć prawo do małżeństw i adopcji",
  "Prawo aborcyjne powinno zostać zliberalizowane",
  "Legalizacja niektórych narkotyków to dobry pomysł",
  "Wpływ kościoła na państwo powinien zostać zmniejszony",
  "Mowa nienawiści powinna być surowiej karana",
  "Polska powinna najszybciej jak to możliwe odejść od węgla",
  "Powinniśmy zbudować elektrownie atomową w Polsce",
  "Prezydent powinien mieć większe kompetencje",
  "Senat powinien zostać zlikwidowany",
  "W wyborach do Sejmu powinny obowiązywać jednomandatowe okręgi wyborcze",
  "Należy poszerzyć kompetencje samorządów",
  "Powinniśmy opuścić Unię Europejską",
  "Głównymi partnerami wojskowymi Polski powinny pozostać NATO i USA",
  "Wydatki na wojsko powinny zostać zwiększone"
];
var answers=[];
var partyAnswers=[
  ["TAK","TAK","NIE","TAK","NIE","TAK","NIE","TAK","NEUTRALNIE/INACZEJ","TAK","NIE","TAK","TAK","TAK","TAK","TAK","TAK","TAK","TAK","TAK","NIE","NIE","TAK","TAK","NIE","NIE","NIE"],
  ["NEUTRALNIE/INACZEJ","TAK","TAK","NIE","NEUTRALNIE/INACZEJ","NIE","NIE","NIE","TAK","TAK","TAK","NIE","NIE","NIE","NIE","TAK","TAK","NIE","TAK","TAK","TAK","NIE","TAK","NIE","NIE","NEUTRALNIE/INACZEJ","TAK"],
  ["NIE","NEUTRALNIE/INACZEJ","TAK","TAK","TAK","NIE","NIE","TAK","TAK","NIE","TAK","TAK","TAK","NIE","NIE","TAK","NIE","TAK","NIE","TAK","TAK","NIE","NIE","TAK","TAK","NIE","TAK"],
  ["TAK","TAK","TAK","NEUTRALNIE/INACZEJ","NEUTRALNIE/INACZEJ","TAK","NIE","NIE","TAK","NEUTRALNIE/INACZEJ","TAK","TAK","TAK","NEUTRALNIE/INACZEJ","NEUTRALNIE/INACZEJ","TAK","TAK","NIE","NEUTRALNIE/INACZEJ","TAK","TAK","TAK","TAK","NEUTRALNIE/INACZEJ","NIE","TAK","NEUTRALNIE/INACZEJ"],
  ["NEUTRALNIE/INACZEJ","NIE","TAK","NIE","TAK","NIE","TAK","NIE","TAK","NIE","TAK","NIE","TAK","TAK","TAK","TAK","TAK","NIE","TAK","TAK","TAK","NEUTRALNIE/INACZEJ","NIE","TAK","NIE","NEUTRALNIE/INACZEJ","NIE"],
  ["TAK","TAK","NEUTRALNIE/INACZEJ","TAK","NIE","TAK","NIE","NEUTRALNIE/INACZEJ","TAK","NIE","TAK","NIE","TAK","NEUTRALNIE/INACZEJ","NEUTRALNIE/INACZEJ","TAK","TAK","NIE","BRAK","BRAK","NIE","NIE","NEUTRALNIE/INACZEJ","TAK","NIE","TAK","TAK"],
  ["BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK"],
  ["NEUTRALNIE/INACZEJ","TAK","TAK","NIE","TAK","NIE","NIE","NIE","TAK","NIE","TAK","NIE","TAK","TAK","TAK","TAK","TAK","NIE","TAK","TAK","TAK","NIE","NIE","TAK","NIE","NEUTRALNIE/INACZEJ","TAK"],
  ["NIE","NEUTRALNIE/INACZEJ","TAK","NIE","TAK","NIE","NEUTRALNIE/INACZEJ","NIE","TAK","NIE","TAK","NIE","NEUTRALNIE/INACZEJ","NEUTRALNIE/INACZEJ","NEUTRALNIE/INACZEJ","TAK","NEUTRALNIE/INACZEJ","NIE","NIE","TAK","TAK","NIE","NIE","TAK","NEUTRALNIE/INACZEJ","NEUTRALNIE/INACZEJ","TAK"],
  ["NEUTRALNIE/INACZEJ","TAK","TAK","TAK","NEUTRALNIE/INACZEJ","TAK","TAK","NIE","TAK","TAK","TAK","TAK","TAK","NIE","NIE","TAK","TAK","TAK","TAK","TAK","NIE","NIE","NEUTRALNIE/INACZEJ","TAK","NIE","TAK","TAK"],
  ["TAK","TAK","NIE","TAK","NIE","TAK","NIE","TAK","NIE","TAK","NIE","TAK","TAK","TAK","TAK","TAK","TAK","TAK","TAK","TAK","NIE","NIE","NIE","TAK","NIE","NIE","TAK"],
  ["TAK","TAK","TAK","NIE","TAK","NIE","NIE","NIE","TAK","NIE","TAK","TAK","TAK","TAK","TAK","NIE","TAK","TAK","TAK","TAK","NIE","NIE","NIE","NIE","NIE","TAK","TAK"],
  ["NEUTRALNIE/INACZEJ","TAK","TAK","NEUTRALNIE/INACZEJ","NEUTRALNIE/INACZEJ","NEUTRALNIE/INACZEJ","TAK","NIE","TAK","NIE","TAK","NIE","TAK","TAK","TAK","TAK","NEUTRALNIE/INACZEJ","NIE","TAK","TAK","NEUTRALNIE/INACZEJ","NIE","NIE","TAK","NIE","TAK","NEUTRALNIE/INACZEJ"]
];

var partyLongAnswers=[
  [],
  ["Model Singapurski",,,,"Dobrowolny ZUS",,,,,,,,,,,,,,,,,,,,,"NATO tak, USA nie",],
  [],
  ["Służba zdrowia w Polsce powinna być publiczna, co nie oznacza, że nie należy jej reformować i wprowadzać również tam prywatnej inicjatywy.","Owszem, ale priorytetowo potraktujemy zawód pielęgniarki, które zarabiają zdecydowanie za mało jak na swoją pracę, a także postaramy się pomóc lekarzom-stażystom.","Powinno zostać zreformowane w kierunku pierwotnym, gdy było tylko na drugie dziecko wzwyż.",
  "Państwo może pomagać młodym ludziom w znalezieniu swojego kąta, czy proponować ludziom mieszkania socjalne, ale posunięcie się do narodowej firmy budującej mieszkanka to poważny krok, do którego nie jesteśmy w zupełności przekonani, lecz otwarci na sugestie i inicjatywy.","ZUS powinien zostać zreformowany w kierunku wypłacania obywatelom emerytur obywatelskich, które byłyby na poziomie godnego minimum, dzięki czemu ludzie nie musieli by oddawać ze swoich pensji tyle pieniędzy do tej instytucji, a ona sama znacząco by się uszczupliła.","Biorąc pod uwagę problemy demograficzne jest to jedyne rozwiązanie by zapewnić obywatelom zabezpieczenie socjalne i nie doprowadzić do upadku wielu firm i ograniczenia pensji obywatelom Rzeczpospolitej.","Powinien pozostać tak jak jest, a w realiach emerytury obywatelskiej granice wieku przechodzenia na emeryturę mogłyby się poluźnić.",
  "Jako centryści jesteśmy za mechanizmem pensji minimalnej, ale gwałtowny jej wzrost, jak wiele gwałtownych zmian w gospodarce nie przyniesie korzyści.","Na początek do godnego minimum 12000 złotych, a potem regularnie podwyższana w zależności od sytuacji ekonomicznej kraju.","Z jednej strony obowiązuje podatek progresywny, a z drugiej strony podsumowując wszystkie obłożenia podatkowe i socjalne można powiedzieć, że w Polsce mamy do czynienia z podatkami regresywnymi. Nie jesteśmy partią, która popiera znaczące zwiększanie opodatkowania, ale nasz system podatkowy wymaga zmian również w tym zakresie.","Tak i trzeba to zmienić, lecz nie wywracać wszystkiego do góry nogami.","Największe firmy działające na terenach Polski nie powinny korzystać ze stref ekonomicznych i niskich stawek CIT, a polskie firmy z męczącej biurokracji. Rozważymy podwyższenie tego podatku dla najpotężniejszych gigantów.","To powinno w Polsce zostać już dawno zrobione i my obiecujemy to zrobić.",
  "Tak dużą zmianę społeczną chcemy rozstrzygnąć w drodze referendum z wynikiem obligatoryjnym dla Sejmu RP.","Takie samo rozwiązanie jak w przypadku małżeństw homoseksualnych.","W naszym programie jest wypisana lista narkotyków, które zalegalizujemy, więc popieramy ten postulat w 100%.","Owszem, głównie przez mniejsze zaangażowanie państwowych przedstawicieli w kontakty z dostojeństwem duchownym. Doceniamy rolę Kościoła Katolickiego w polskiej historii, ale dążymy do świeckiego państwa poprzez przyjazny, ale również zdrowy rozdział.","Jesteśmy przeciwnikami ograniczania wolności słowa.","Chcemy neutralności klimatycznej, ale nie morderczym kosztem, więc zmiany te muszą zostać przeprowadzone powoli i przemyślanie.","Atom to podstawa osiągnięcia neutralności klimatycznej.","Prezydent powinien przestać być rezydentem Pałacu Prezydenckiego, a powinien zostać realną władzą wykonawczą na wzór francuski, co jest zawarte w naszym programie.",
  "Jesteśmy zwolennikami ograniczenia administracji państwowej, w tym Senatu żartobliwie określanym 'izbą zadumy', aczkolwiek w tym temacie jesteśmy otwarci do dyskusji w przypadku innych konstruktywnych propozycji.","Tak, ale w systemie mieszanym, gdzie połowa mandatów pochodzi z JOW-ów by dać szansę listom lokalnym, a połowa z drogi proporcjonalnej by dać szansę mniejszym komitetom.","Nie mamy w tej sprawie jaśnie określonego stanowiska. Wspieramy dobrych lokalnych gospodarzy, ale wspieramy również pewną centralizację państwa. Oczywiście, można przenieść część kompetencji na samorządy, ale jest to pole do bardzo wyczerpującej dyskusji, którą mamy nadzieję uda się podjąć w parlamencie.",
  "Nie, gdyż uderza to w nasze podstawowe interesy.","Nie chcemy realizacji amerykańskiej polityki zagranicznej przez NATO, ale pragniemy z Sojuszem Północnoatlantyckim i USA współpracy na polu militarnym w celu wzmocnienia naszej obronności.","2% PKB wydawane obecnie wystarczą."],
  ["Wprowadzenie systemu holenderskiego"],
  [],
  [],
  ["Model mieszany",,"Zlikwidowane",,,"Powinniśmy dążyć do braku państwowych emerytur",,"Zlikwidowana","Docelowo likwidacja podatku dochodowego",,,,,,,"Legalizacja wszystkich narkotyków to dobry pomysł",,,,,,,,"Państwo federalne",,"NATO tak, USA nie",],
  ["Nie. Służbę zdrowia należy sprywatyzować całkowicie, albo przekształcić ją w hybrydę w której obywatel dobrowolnie wpłaca część pieniędzy na konto, i z tego konta pobierane są środki na leczenie. Oczywiście wielkość wpłaty nie będzie takiej samej wielkości w przypadku każego obywatela. Obywatel powinien być oceniany pod względem wieku, historii zdrowotnej (historii zabiegów, szczepień i operacji.) Nasza partia proponuje zmodyfikowany system singapurski, w przeciwieństwie do którego wpłacając pieniądze na służbę zdrowia nie wpłacamy jej przy okazji na niepotrzebne rzeczy typu mieszkanie.",
  "Zakładając, że pozostajemy przy obecnym systemie, należy zwiększyć wydatki na służbę zdrowia, i przyłożyć szczególną uwagę do tego by nie kształcić lekarzy w Polsce którzy później wyjadą za granicę zarabiać jako specjaliści medycyny. Należy wprowadzić rozwiązanie które zachęci młodych polskich lekarzy do pozostania w ich ojczystym kraju.",
  "Zlikwidowane.","Nie. Nie wiem jak można popierać taki postulat widząc jak wyglądają bloki budowane przez prywatnych inwestorów.","Płacenie składek ZUS powinno być dobrowolne, a cały system ubezpieczeń (również tych system emerytalny) należy sprywatyzować.","Nie. System emerytalny należy sprywatyzować.",
  "Jeśli wypłatą emerytur zajmą się prywatne firmy ubezpieczeniowe to każda z nich zawierając umowę z obywatelem ustali sobie z nim w jakim wieku obywatel przejdzie na emeryturę.",
  "Wiele zawodów jest łatwiejszych do wykonywania od innych zawodów, ale w obu dziś obowiązuje ta sama stawka minimalna. Dlaczego? Jest to niesprawiedliwe dla wszystkich, i faworyzuje się w ten sposób najprostsze i najlżejsze zawody. Najlepiej gdyby pensja minimalna została zlikwidowana. Coś na wzór pensji minimalnej wytworzy się kiedy pracodawcy i pracownicy zaczną ustalać między sobą umowy w których każdy z zawodów zostanie oceniony subiektywnie przez obie strony. Jeśli pracownikowi nie będzie odpowiadała stawka, to poszuka innego pracodawcy, a jeśli pracodawca nie znajdzie pracownika chętnego podjęcia się pracy za ustaloną przez pracodawcę stawkę, to pracodawca będzie zmuszony zwiększyć wielkość wynagrodzenia.",
  "Proste, że tak. Najlepiej gdyby zlikwidowano kwotę wolną i gdyby nikt nie płacił tak głupiego podatku.","Podatki powinny być jednoliniowe. Każdy powinien płacić podatki takiej samej wielkości które skalowałyby się procentowo tak samo niezależnie od obywatela. Nie można wymagać od kogoś by płacił większe podatki tylko dlatego, że zarabia więcej.",
  "Są za wysokie, i jest ich zbyt dużo.","Nie. Jeśli zachęcimy duże firmy do inwestycji w Polsce poprzez zmniejszenie podatków, to coraz więcej firm się do nas przeniesie i więcej z nich będzie płaciło tutaj podatki, a przecież kilometrów kwadratowych starczy dla każdego, prawda?",
  "Nie powinno być związków partnerskich tak samo jak nie powinno być małżeństw państwowych. Nikt nie powinien mieć prawa (a zwłaszcza urzędnik!) by interesować się tym z kim sypiamy i kogo wybraliśmy sobie za partnera życiowego.","W Polsce będac homoseksualistą można adoptować dziecko. Samotny facet lub samotna kobieta mogą adopotować dziecko i wychowywać je z osobą tej samej płci, tyle że w dokumentach ta druga osoba nie widnieje jako rodzic lub opiekun. Adopcja LGBT może być nie-fair w stosunku do dziecka które zwyczajnie może nie chcieć mieć dwóch mam lub dwóch tatusiów. Z perspektywy państwa dziecko ma wtedy 1 opiekuna. Zresztą, często poruszany jest ten temat, a nikt nie lubi wspominać o tym że w krajach gdzie adopcja przez pary homoseksualnye jest legalna wciąż występuje ten sam problem co w przypadku osób heteroseksualnych - mało kto chce adpotować dziecko które przekroczyło 3 rok życia! Nie powinno być małżeństw państwowych, i nie ma czegoś takiego jak związek małżeński osób homoseksualnych. Osoby takie nie mogą zawrzeć małżeństwa bo z definicji wynika że małżeństwo to związek kobiety i mężczyzny.",
  "Ja osobiście uważam, że dopóki za aborcję nie płaci państwo to powinno zostać zliberalizowane, bo tracimy na tym my, a zarabia Słowacja. Natomiast jako partia jesteśmy za przywróceniem kompromisu aborcyjnego.","Legalizacja wszystkich narkotyków to dobry pomysł. Ale każdy narkotyk sprzedawany w sklepach powinien mieć na sobie nadrukowaną etykietę która powie nam czym właściwie jest ten produkt i jaki jest jego skład.",
  "Kościół nie ma bezpośredniego wpływu na państwo. Na państwo wpływ ma demokracja, a w Polsce demokratycznie głosują głównie katolicy.","Nie. Dopóki ktoś nie kłamie nie powinien być karany za jakiekolwiek słowa.",
  "Dlaczego? Czemu mamy marnować potencjał węgla jeśli reszta świata wykorzystuje węgiel. Proszę zajrzeć do statystyk i sprawdzić kto używa najwięcej węgla. Niemcy, którzy produkują 1/4 wszystkich europejskich zanieczyszczeń (23%)!","Oczywiście, że tak. Ma to mnóstwo pozytywnych zastosowań, a poza tym możemy na tym sporo zarobić jako państwo."
,,,,,"Powinniśmy ją opuścić albo zmusić do przeprowadzenia zmian które zatrzymają tą okropną machinę! UE powinna standaryzować znaki drogowe, pozwalać na wolną wymianę dóbr i usług, a nie decydować za nas o tym  co powinniśmy robić we własnym państwie!",
"Głównymi partnerami Polski powinny być państwa które w danym momencie mają najwięcej do powiedzenia w naszym regionie i na świecie. Proszę pamiętać że państwa nie zawierają ze sobą przyjaźni, tylko sojusze strategiczne.","Tak. Powinniśmy przedewszystkim powołać armię zawodową, zadbać o kondycję i wyszkolenie żołnierzy (proszę spojrzeć na przeciętnego generała w USA i w Polsce, przecież u nich wygląda on jak ex-sportowiec, a u nas co drugi wygląda jak Janusz z memów). Należy też zatrzymać proces tworzenia się 'armii za biurkiem'."],
  ["System mieszany",,,,"Dobrowolny ZUS dla przedsiębiorców",,,,,,,,,,,,,,,,,,"Pojedynczy głos przechodni",,,,],
  [],
  [],
  ["Służba zdrowia powinna być finansowana za pomocą bonów, lecz część zabiegów powinna być dokonywana prywatnie",,,"Państwo powinno udzielać kredytów mieszkaniowych bez oprocentowania","ZUS powinien zostać zreformowany, aby zapewnić minimalną emeryturę osobom w skrajnej biedzie, do czego obowiązkowy byłby dodatkowy prywatny fundusz dla osób pracujących",,,,,,,,,,,,"Taki wpływ realnie obecnie nie istnieje i jest napompowany przez antyklerykalną propagandę",,,,"Preferujemy zastąpić prezydenta Kanclerzem, który łączył by obowiązki premiera i prezydenta. Prezydent obecnie jest instytucją sprzeczną z trójpodziałem władzy",,,,,,"Powinniśmy się dostosować do wymogów NATO i pieniądze wydawać na bezpieczeństwo, także poprzeć amerykańskie bazy na naszym Terytorium"]
]

var results= new Map();
var questionID=0;

function removeTable()
{
    let table = document.getElementsByTagName("table")[0];
    if(table) table.parentNode.removeChild(table);
}

function createCell(row, content){
    let text = document.createTextNode(content);
    let cell = row.insertCell(row.cells.length);
    cell.appendChild(text);
}

function createAnswerCell(row, content){
  createCell(row,content);
  let cell = row.cells[row.cells.length-1];
  cell.style.fontWeight = "bold";

  if(cell.innerText=="TAK") cell.style.color="green";
  if(cell.innerText=="BRAK") cell.style.color="black";
  if(cell.innerText=="NIE") cell.style.color="red";
}

function createButtonCell(row, party)
{
  let cell = row.insertCell(row.cells.length);
  let button = document.createElement('button');
  button.textContent = "Zobacz odpowiedzi komitetu";
  button.setAttribute("onClick", `Javascript: displayPartyAnswers(${party});`);
  cell.appendChild(button);
}

function createTestButtonCell(row, party, question)
{
  let cell = row.insertCell(row.cells.length);
  let button = document.createElement('button');
  button.textContent = "Pokaż wyjaśnienie";
  button.setAttribute("onClick", `Javascript: displayLongAnswer(${party},${question});`);
  cell.appendChild(button);
}

function reset()
{
  document.getElementsByTagName("body")[0].innerHTML=`
  <center>
    <div id="header">
      Latarnik wyborczy
    </div>

    <div id="question">
      <h3>Wykonaj krótki test składający się z 27 pytań i dowiedz się do której partii jest ci nabliżej!</h3>
      <h4>Pełna zgodność odpowiedzi z daną partią oznacza 1 punkt, różnica jednej odpowiedzi (np. "TAK" i "NEUTRALNIE") to 0.5 punktu, a zupełna niezgodność ("TAK" i "NIE") to 0 punktów.
      Na końcu otrzymasz wyniki i będziesz mógł zobaczyć odpowiedzi każdego komitetu na wszystkie pytania.</h4>
    </div>

    <div id="buttons">
      <button onclick="startTest()">Rozpocznij test!</button>
    </div>

    <div id="footer">
      <p>Autor: Michał Kostyk</p>
    </div>
  </center>
  `
  questionID=0;
  answers.length=0;
  results.clear();
  //startTest();
}

function startTest()
{
  document.getElementById('buttons').innerHTML=`
  <button onclick="nextQuestion('TAK')">Zgadzam się</button>
  <button onclick="nextQuestion('NEUTRALNIE/INACZEJ')">Neutralnie/inaczej</button>
  <button onclick="nextQuestion('NIE')">Nie zgadzam się</button>`;
  document.getElementById('question').innerHTML=`<h3>${questions[0]}</h3><br><h4>Pytanie 1/27</h4>`;
}

function endTest()
{
  document.getElementById('question').innerHTML="<h3>To już koniec testu, czy chcesz zakończyć?</h3>";
  document.getElementById('buttons').innerHTML=`<button onclick="getResults()">Zakończ test!</button>`;
}

function nextQuestion(answer)
{
  answers[questionID]=answer;

  if(questionID==questions.length-1)
  {
    endTest();
    return;
  }

  questionID++;
  document.getElementById('question').innerHTML=`<h3>${questions[questionID]}</h3><br><h4>Pytanie ${questionID+1}/27</h4>`;
}

function displayPartyAnswers(party)
{
  removeTable();
  document.getElementById('question').innerHTML=`<h3>Odpowiedzi komitetu "${parties[party]}"</h3>`;

  let q = document.getElementById('question');
  let table = document.createElement("table");
  let tableBody = document.createElement("tbody");

  let firstRow = document.createElement("tr");
  createCell(firstRow, "Pytanie:");
  createCell(firstRow, "Twoja odpowiedź:");
  createCell(firstRow, "Odpowiedź komitetu:");
  createCell(firstRow, "");

  tableBody.appendChild(firstRow);

  for(question in questions)
  {
    let newRow = document.createElement("tr");
    createCell(newRow, questions[question]);
    createAnswerCell(newRow, answers[question]);
    createAnswerCell(newRow, partyAnswers[party][question]);

    if(partyLongAnswers[party][question]!=undefined)
    {
        createTestButtonCell(newRow, party, question);
    }
    else
    {
        createCell(newRow,"");
    }

    tableBody.appendChild(newRow);
  }

  table.appendChild(tableBody);
  q.appendChild(table);

  document.getElementById('buttons').innerHTML=`<button onclick="displayResults()">Wróć do wyników</button>`;
}

function displayLongAnswer(party, question)
{
  let table = document.getElementsByTagName("table")[0];
  let row = table.insertRow(question+2);
  let cell = row.insertCell(0);

  cell.innerHTML = `<b>${partyLongAnswers[party][question]}</b>`;
  cell.setAttribute('colspan', 4);

  let buttonCell = table.getElementsByTagName("tr")[question+1].getElementsByTagName("td")[3];
  buttonCell.innerHTML=`<button onclick="Javascript: hideLongAnswer(${party},${question});">Ukryj wyjaśnienie</button>`;
}

function hideLongAnswer(party, question)
{
  let row = document.getElementsByTagName("table")[0].getElementsByTagName("tr")[question+2];
  if(row) row.parentNode.removeChild(row);

  let buttonCell = document.getElementsByTagName("table")[0].getElementsByTagName("tr")[question+1].getElementsByTagName("td")[3];
  buttonCell.innerHTML=`<button onclick="Javascript: displayLongAnswer(${party},${question});">Pokaż wyjaśnienie</button>`;
}

function displayResults()
{
  removeTable();
  document.getElementById('question').innerHTML="<h3>Twoje wyniki:</h3>";

  let q = document.getElementById('question');
  let table = document.createElement("table");
  let tableBody = document.createElement("tbody");

  let sorted = new Map([...results].sort((a, b) => a[1] < b[1] ? 1 : -1))

  for (var [party, result] of sorted.entries()){
    let newRow = document.createElement("tr");
    createCell(newRow, `${parties[party]}`);
    let cell = newRow.cells[newRow.cells.length-1];
    cell.style.fontWeight = "bold";

    createCell(newRow, `${result}/${questions.length}`);
    createCell(newRow, `${Math.round(result*100/questions.length)}%`);
    createButtonCell(newRow, party);
    tableBody.appendChild(newRow);

    let footer = document.getElementById("footer");
    if(footer) footer.parentNode.removeChild(footer);
}

  table.appendChild(tableBody);
  q.appendChild(table);

  document.getElementById('buttons').innerHTML=`<button onclick="reset()">Rozpocznij ponownie</button>`;
}

function getResults()
{
  for(party in parties)
  {
    results.set(party, 0);
    for(question in questions)
    {
      let result = results.get(party)
      if(answers[question]==partyAnswers[party][question]) results.set(party, result+1);
      else if((answers[question]=="TAK" && partyAnswers[party][question]=="NIE")||(answers[question]=="NIE" && partyAnswers[party][question]=="TAK") || partyAnswers[party][question]=="BRAK") results.set(party, result);
      else results.set(party, result+0.5);
    }
  }

  displayResults();
}
