const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for loop
for(let i = 0; i < companies.length; i++){
    console.log(companies[i]);
}


  //forEach -> iterates over elements in an array and executes a provided function once for each element.

companies.forEach((company) => { //you can pass company, index, companies(entire array)
    console.log(company);
    console.log(company.name);
});

//filter

//Using for loop
let canDrink =[];
for(let i = 0; i < ages.length; i++){
    // console.log(ages[i]); //to print the entire array
    if(ages[i] >= 21){
        canDrink.push(ages[i]);
    }
}

console.log(canDrink);

//with filter now
// const adult = ages.filter(age => {
//       if(age >= 21) {
//         return true
//       }
// });

const adult = ages.filter(age => age >= 21);
console.log(adult);

//filter retail companies
const retailCompanies = companies.filter(company => company.category === 'Retail');

console.log(retailCompanies);

//Companies from the 80's
const oldCompanies = companies.filter(old => (old.start > 1980 && old.start < 1990) );

console.log(oldCompanies);

//filter companies that lasted 10 years

const tenYearCompany = companies.filter(tenYears => (tenYears.end - tenYears.start >= 10));
console.log(tenYearCompany);


//map -> You can create new array from a current array
//create an array of company names

const companyNames = companies.map(companyName => companyName.name);
console.log(companyNames);

//map company names and their start and end years
const companyInfo = companies.map(info => `${info.name} [${info.start} - ${info.end}]`);
console.log(companyInfo);

//map ages and their squareroot
const ageSquared = ages.map(square => Math.pow(square,2));
console.log(ageSquared);

//adding two maps
const ageProbability = ages.map(square => Math.pow(square,2)).map(age => age * 2 + 5);
console.log(ageProbability);

//sort
const sortedCompanies = companies.sort((company1, company2) => {
    if(company1.start > company2.start){
        return 1;
    }
    else{
        return -1;
    }
});
console.log(sortedCompanies);

//shorthand
const companiesSorted = companies.sort((a,b) => (a.start > b.start ? 1 : -1));
console.log(companiesSorted);

//sort ages
const sortedAges = ages.sort((a,b) => (a-b));
console.log(sortedAges);

//in descending order
const ageDescending = ages.sort((a,b) => (b-a));
console.log(ageDescending);

//reduce -> accumulates array elements into a single value using a provided function.

//adding ages together

//using for loop

let ageSum = 0;
for(let i = 0; i < ages.length; i++){
    ageSum += ages[i];
}
console.log(ageSum);

//using reduce
const ageTotal = ages.reduce((total, age) => total + age, 0);
console.log(ageTotal);

//total years for all companies
const totalYears = companies.reduce((total, range) => total + (range.end - range.start),0);
console.log(totalYears);

//combining methods
const combined = ages
    .map(age => age *2)
    .filter(age => age >=40)
    .sort((a,b) => a - b)
    .reduce((total, age) => total + age, 0)
console.log(combined);
