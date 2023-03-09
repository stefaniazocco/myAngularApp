import { Student } from "../models/student";


export const STUDENTS: Array<Student> = [
  new Student({
    nome: "Dario", 
    cognome: "Di Salvo", 
    genere: "M", 
    eta: 28, 
    location: { citta: "Catania", cap: "1234", indirizzo: "wefaw", provincia: "Catania" },
    hobbies: [{ name: "Sport", icon: "medal" }, { name: "Cinema", icon: "film" }, { name: "Libri", icon: "book" }], hasPets: false,
    lingue: [{ name: "Italiano", icon: "pizza-slice" }, { name: "Inglese", icon: "flag-usa" }, { name: "Spagnolo", icon: "sun" }],
    esperienze: [{
      nome: "astronauta",
      descrizione: "nella stazione spaziale",
      inizio: new Date("2015-03-25"),
      fine: new Date("2016-06-25"),
      tags: ["spazio", "stelle"]
    },{
      nome: "jr developer",
      descrizione: "faccio siti meravigliosi",
      inizio: new Date("2015-03-25"),
      fine: new Date("2015-03-25"),
      tags: ["siti", "web", "altro"]
    },]
  }),
  new Student({
    nome: "Giorgio",
    cognome: "Delle Monache",
    genere: "M",
    eta: 24,
    location: { citta: "Vetralla", cap: "1234", indirizzo: "wefaw", provincia: "Catania" },
    hobbies: [{ name: "Calcio", icon: "futbol" }, { name: "Basket", icon: "basketball" }, { name: "Criptovalute", icon: "fa- brands fa - bitcoin" }],
    hasPets: false,
    lingue: [{ name: "Italiano", icon: "pizza-slice" }, { name: "Inglese", icon: "flag-usa" }],
    esperienze: []
  },),
  new Student(

  {
      nome: "Francesco",
      cognome: "Grasso",
      genere: "M",
      eta: 30,
      location: { citta: "Torino", cap: "1234", indirizzo: "wefaw", provincia: "Torino" },
      hobbies: [{ name: "palestra", icon: "fa-duotone fa-dumbbell" }, { name: "Gaming", icon: "gamepad " }, { name: "Cibo", icon: "fas fa- pizza - slice " }],
      hasPets: true,
      lingue: [{ name: "Italiano", icon: "pizza-slice" }, { name: "Inglese", icon: "flag-usa" }],
      esperienze: [{
        nome: "jr developer",
        descrizione: "faccio siti meravigliosi",
        inizio: new Date("2015-03-25"),
        fine: new Date("2015-03-25"),
        tags: ["siti", "web", "altro"]
      },]
  },

  ),
  new Student(
      {
      nome: "Mario",
      cognome: "Sabatini",
      genere: "M",
      eta: 24,
      location: { citta: "Avezzano", cap: "1234", indirizzo: "wefaw", provincia: "Catania" },
      hobbies: [{ name: "Giocare", icon: "gamepad" }, { name: "Suonare", icon: "music" }],
      hasPets: false,
      lingue: [{ name: "italiano", icon: "pizza-slice" }, { name: "inglese", icon: "flag-usa" }],
      esperienze: [{
        nome: "jr developer",
        descrizione: "faccio siti meravigliosi",
        inizio: new Date("2015-03-25"),
        fine: new Date("2015-03-25"),
        tags: ["siti", "web", "altro"]
      },]
  },
  ),
  new Student(
  {
      nome: "Pasquale",
      cognome: "Sabatino",
      genere: "M",
      location: { citta: "Nichelino", cap: "1234", indirizzo: "wefaw", provincia: "Catania" },
      eta: 20,
      hobbies: [{ name: "Gaming", icon: "gamepad" }, { name: "Boxe", icon: "fa- solid fa - boxing - glove" }, { name: "Viaggiare", icon: "plane" }],
      hasPets: true,
      lingue: [{ name: "Italiano", icon: "pizza-slice" }, { name: "Inglese", icon: "flag-usa" }],
      esperienze: [{
        nome: "jr developer",
        descrizione: "faccio siti meravigliosi",
        inizio: new Date("2015-03-25"),
        fine: new Date("2015-03-25"),
        tags: ["siti", "web", "altro"]
      },]
  },
  ),
  new Student(
      {
      nome: "Stefania",
      cognome: "Zocco",
      genere: "F",
      eta: 29,
      location: { citta: "Trieste", cap: "1234", indirizzo: "wefaw", provincia: "Catania" },
      hobbies: [
          { name: "Viaggiare", icon: "plane" },
          { name: "Cucina", icon: "utensils" },
          { name: "Pittura", icon: "palette" },
          { name: "Libri", icon: "book" },
          { name: "Gaming", icon: "gamepad" }],
      hasPets: false,
      lingue: [
          { name: "Italiano", icon: "pizza-slice" },
          { name: "Inglese", icon: "flag-usa" },
          { name: "Cinese", icon: "torii-gate" },
          { name: "Spagnolo", icon: "sun" },
          { name: "Francese", icon: "wine-glass" },
      ],
      esperienze: [{
        nome: "jr developer",
        descrizione: "faccio siti meravigliosi",
        inizio: new Date("2015-03-25"),
        fine: new Date("2015-03-25"),
        tags: ["siti", "web", "altro"]
      },]
  },
  ),
  new Student(
  {
    nome: "Francesco",
    cognome: "Solito",
    genere: "M",
    eta: 23,
    location: { citta: "Gela", cap: "1234", indirizzo: "wefaw", provincia: "Catania" },
    hobbies: [{ name: "tuning", icon: "fa-sharp car-wrench" }, { name: "gaming", icon: "alien-8bit" }],
    hasPets: false,
    lingue: [{ name: "Italiano", icon: "pizza-slice" }, { name: "Inglese", icon: "flag-usa" }],
    esperienze: [{
      nome: "jr developer",
      descrizione: "faccio siti meravigliosi",
      inizio: new Date("2015-03-25"),
      fine: new Date("2015-03-25"),
      tags: ["siti", "web", "altro"]
    },]
  },
  ),
  new Student(
  {
    nome: "Mattia",
    cognome: "Gioia",
    genere: "M",
    eta: 30,
    location: { citta: "Torino", cap: "1234", indirizzo: "wefaw", provincia: "Catania" },
    hobbies: [{ name: "Musica", icon: "music" }, { name: "Cucina", icon: "mortar-pestle" }],
    hasPets: false,
    lingue: [{ name: "Italiano", icon: "pizza-slice" }, { name: "Inglese", icon: "flag-usa" }],
    esperienze: [{
      nome: "jr developer",
      descrizione: "faccio siti meravigliosi",
      inizio: new Date("2015-03-25"),
      fine: new Date("2015-03-25"),
      tags: ["siti", "web", "altro"]
    },]
  },
  ),
  new Student(
  {
    nome: "Lorenzo",
    cognome: "Decandia",
    genere: "M",
    eta: 33,
    location: { citta: "Roma", cap: "1234", indirizzo: "wefaw", provincia: "Catania" },
    hobbies: [{ name: "Gaming", icon: "gamepad" }, { name: "Giardinaggio", icon: "seedling" }],
    hasPets: true,
    lingue: [{ name: "Italiano", icon: "pizza-slice" }, { name: "Inglese", icon: "flag-usa" }],
    esperienze: []
  },
  ),
  new Student(
  {
    nome: "Chiara",
    cognome: "Pala",
    genere: "F",
    eta: 23,
    location: { citta: "Orosei", cap: "1234", indirizzo: "wefaw", provincia: "Catania" },
    hobbies: [{ name: "Viaggiare", icon: "plane" }, { name: "Film", icon: "film" }],
    hasPets: true,
    lingue: [{ name: "Italiano", icon: "pizza-slice" }, { name: "Inglese", icon: "flag-usa" }],
    esperienze: []
  },
  ),
  new Student(
  {
    nome: "Nazario",
    cognome: "De Luca",
    genere: "M",
    eta: 26,
    location: { citta: "San Nicandro Garganico", cap: "1234", indirizzo: "wefaw", provincia: "Catania" },
    hobbies: [{ name: "Musica", icon: "music" }, { name: "Gaming", icon: "gamepad " }, { name: "Viaggi", icon: "plane" }],
    hasPets: false,
    lingue: [{ name: "Italiano", icon: "pizza-slice" }, { name: "Inglese", icon: "flag-usa" }],
    esperienze: []
  },
  ),
  new Student(
      {
    nome: "Andrea",
    cognome: "Sarzi Sartori",
    genere: "M",
    eta: 27,
    location: { citta: "Varese", cap: "1234", indirizzo: "wefaw", provincia: "Varese" },
    hobbies: [{ name: "Musica", icon: "music" }, { name: "Gaming", icon: "gamepad " }, { name: "Cooking", icon: "utensils" }],
    hasPets: true,
    lingue: [{ name: "Italiano", icon: "pizza-slice" }, { name: "Inglese", icon: "flag-usa" }],
    esperienze: []
  },
  ),
  new Student(
  {
    nome: "Dario",
    cognome: "Mucci",
    eta: 24,
    location: { citta: "Roma", cap: "1234", indirizzo: "wefaw", provincia: "Catania" },
    genere: "M",
    lingue: [{ name: "Italiano", icon: "pizza-slice" }, { name: "Inglese", icon: "flag-usa" }],
    hasPets: true,
    hobbies: [{ name: "palestra", icon: "fa-duotone fa-dumbbell" }, { name: "Gaming", icon: "fa-sharp gamepad" }, { name: "leggere", icon: "book" }],
    esperienze: []
  },
  ), 
  new Student(
  {
    nome: "Ali",
    cognome: "Alamfard",
    genere: "M",
    eta: 29,
    location: { citta: "Cagliari", cap: "1234", indirizzo: "wefaw", provincia: "Catania" },
    hobbies: [{ name: "Sport", icon: "medal" }, { name: "Cinema", icon: "film" }, { name: "Musica", icon: "music" }],
    hasPets: false,
    lingue: [{ name: "Italiano", icon: "pizza-slice" }, { name: "Inglese", icon: "flag-usa" }],
    esperienze: []
  },
  ),
  new Student(
  {
    nome: "Michele",
    cognome: "Kusmierz",
    genere: "M",
    eta: 21,
    location: { citta: "Roma", cap: "1234", indirizzo: "wefaw", provincia: "Catania" },
    hobbies: [{ name: "Coding", icon: "plane" }, { name: "Jogging", icon: "film" }],
    hasPets: false,
    lingue: [{ name: "Italiano", icon: "pizza-slice" }, { name: "Inglese", icon: "flag-usa" }, { name: "Polacco", icon: "flag-usa" }],
    esperienze: []
  },
  ),

];
