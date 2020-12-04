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
  ["BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK"],
  ["BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK","BRAK"],
  ["NEUTRALNIE/INACZEJ","TAK","TAK","NIE","TAK","NIE","NIE","NIE","TAK","NIE","TAK","NIE","TAK","TAK","TAK","TAK","TAK","NIE","TAK","TAK","TAK","NIE","NIE","TAK","NIE","NEUTRALNIE/INACZEJ","TAK"],
  ["NIE","NEUTRALNIE/INACZEJ","TAK","NIE","TAK","NIE","NEUTRALNIE/INACZEJ","NIE","TAK","NIE","TAK","NIE","NEUTRALNIE/INACZEJ","NEUTRALNIE/INACZEJ","NEUTRALNIE/INACZEJ","TAK","NEUTRALNIE/INACZEJ","NIE","NIE","TAK","TAK","NIE","NIE","TAK","TAK","NEUTRALNIE/INACZEJ","TAK"],
  ["NEUTRALNIE/INACZEJ","TAK","TAK","TAK","NEUTRALNIE/INACZEJ","TAK","TAK","NIE","TAK","TAK","TAK","TAK","TAK","NIE","NIE","TAK","TAK","TAK","TAK","TAK","NIE","NIE","NEUTRALNIE/INACZEJ","TAK","NIE","TAK","TAK"],
  ["TAK","TAK","NIE","TAK","NIE","TAK","NIE","TAK","NIE","TAK","NIE","TAK","TAK","TAK","TAK","TAK","TAK","TAK","TAK","TAK","NIE","NIE","NIE","TAK","NIE","NIE","TAK"],
  ["TAK","TAK","TAK","NIE","TAK","NIE","NIE","NIE","TAK","NIE","TAK","TAK","TAK","TAK","TAK","NIE","TAK","TAK","TAK","TAK","NIE","NIE","NIE","NIE","NIE","TAK","TAK"],
  ["NEUTRALNIE/INACZEJ","TAK","TAK","NEUTRALNIE/INACZEJ","NEUTRALNIE/INACZEJ","NEUTRALNIE/INACZEJ","TAK","NIE","TAK","NIE","TAK","NIE","TAK","TAK","TAK","TAK","NEUTRALNIE/INACZEJ","NIE","TAK","TAK","NEUTRALNIE/INACZEJ","NIE","NIE","TAK","NIE","TAK","NEUTRALNIE/INACZEJ"]
];

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
  </center>
  `
  questionID=0;
  answers.length=0;
  results.clear();
  startTest();
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
  tableBody.appendChild(firstRow);

  for(question in questions)
  {
    let newRow = document.createElement("tr");
    createCell(newRow, `${questions[question]}`);
    createAnswerCell(newRow, `${answers[question]}`);
    createAnswerCell(newRow, `${partyAnswers[party][question]}`);

    tableBody.appendChild(newRow);
  }

  table.appendChild(tableBody);
  q.appendChild(table);

  document.getElementById('buttons').innerHTML=`<button onclick="displayResults()">Wróć do wyników</button>`;
}

function createButtonCell(row, party)
{
  let cell = row.insertCell(row.cells.length);
  let button = document.createElement('button');
  button.textContent = "Zobacz odpowiedzi komitetu";
  button.setAttribute("onClick", `Javascript: displayPartyAnswers(${party});`);
  cell.appendChild(button);
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
