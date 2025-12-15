//////// DO NOT EDIT BELOW THIS LINE ////////////////
/////////////////////////////////////////////////////

let
	Admin = ["Fowlkes", "Lynch", "Woodham", "Stahl", "Peter"],
	CTE = ["Alphonse", "Donahue", "Santana", "Vaduva", "Woods", "Shams", "Urena"],
	History = ["McQuilkin", "Amell", "Hablenko", "Schmidt", "Headlem", "Lucas", "Smith"],
	Counselor = ["Grant", "Weaver"],
	Maths = ["Freck", , "Ventimiglia"],
	Gym = ["Banta", "Proper", "Moll", "Murray"],
	Dean = ["Frazier", "Vaduva", "Mollison"],
	Language = ["Levystone", "Ortiz", "Stratman", "Vaduva", "Streeter", "Weaver"],
	Science = ["Koelsch", "Willet", "Lagana", "Fonrose"],
	English = ["Brown", "DelValle", "Duran", "Griszell", "King", "Fonrose", "Constant"],
	Office = ["Verley"],
	Support = ["Kabir", "Minto"],
	SSC = ["Stephine"];



//////// DO NOT EDIT ABOVE THIS LINE ////////////////
/////////////////////////////////////////////////////

Admin.splice(3);
Admin.shift();
Admin.shift();
Admin.push("Drysdale","Simpkins");

Office.shift();
Office.push("Martinez", "Tirado", "Valentin", "Swing");

Counselor.splice(0);
Counselor.push("Molina");

let Guidance = [];
Guidance.push("Cooper", "Desroches");

CTE.splice(1,4);
CTE.pop();
CTE.push("Frazer", "Pelzer", "Pierre", "Ramsawak", "Gomez", "Rahimi", "Sullivan" 
);

History.splice(0,1);
History.splice(1,1);
History.splice(1,1);
History.push("Urena");

Maths.pop();
Maths.push("Koelsch", "Minto", "Forth", "Wong");

Gym.splice(1);
Gym.push("Mcalary");

Dean.splice(1,1);

Language.splice(0,5);
Language.push("Nowakowski", "Vallejo");

Science.splice(0);
Science.push("Davies", "Lynch", "Simpkins", "Boswell");

English.splice(4);
English.splice(0,3);
English.push("Grant", "Gomez", "Tavares");

Support.push("Slater", "Sherman", "Rodriguez", "Steele", "David", "Howell", "Valentin", "Jorge", "Belgrave");

let Paraprofessional = [];
Paraprofessional.push("Shephard", "Ward", "Alabsi", "Colter", "Camila", "Shand", "Ahad", "Nicholson", "J. Grant", "Belton", "Damari");

SSC.splice(0);
SSC.push("Guzman");

let Interns = [];
Interns.push("Krishe", "Rachael")

Admin.sort();
CTE.sort();
History.sort();
Counselor.sort();
Maths.sort();
Gym.sort();
Dean.sort();
Language.sort();
Science.sort();
English.sort();
Office.sort();
Support.sort();
SSC.sort();


////////// MAKE YOUR UPDATES WITHIN THIS SECTION //// 










/////////////////////////////////////////////////////
//////// DO NOT EDIT BELOW THIS LINE ////////////////
/////////////////////////////////////////////////////

const STAFF = [Admin, Office, Counselor, Guidance, CTE, History, Maths, Gym, Dean, Language, Science, English, Support, SSC, Interns, Paraprofessional];

e("table").innerHTML = createTableCotents();