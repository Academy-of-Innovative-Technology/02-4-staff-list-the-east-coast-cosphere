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
Admin.push("Drysdale","Simpkins")

Office.shift();
Office.push("Gardner", "Martinez", "Tirado", "Valentin");

Counselor.splice(0);
Counselor.push("Cooper", "Desroches", "Molina")

CTE.splice(1,4)
CTE.pop()
CTE.push("Frazer", "Pelzer", "Pierre", "Ramsawak")
















////////// MAKE YOUR UPDATES WITHIN THIS SECTION //// 










/////////////////////////////////////////////////////
//////// DO NOT EDIT BELOW THIS LINE ////////////////
/////////////////////////////////////////////////////

const STAFF = [Admin, Office, Counselor, CTE, History, Maths, Gym, Dean, Language, Science, English, Support, SSC];

e("table").innerHTML = createTableCotents();