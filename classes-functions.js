
//Question 1

class Movie{
    constructor(title, studio, rating = "PG" ){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getDetails(){
        console.log(`
        Title : ${this.title}
        Studio : ${this.studio}
        Rating : ${this.rating}
        `)
    }
    getPG(movielist){
        return movielist.filter(movie => movie.rating === "PG");
    }
}
const result = new Movie("Casino Royale", "Eon Production", "PG-13");
console.log(result);
result.getDetails();

// Question 2

class Circle {
    constructor(radius, color) {
      this.radius = radius || 1.0;
      this.color = color || "red";
    }
  
    getRadius() {
      return this.radius;
    }
  
    setRadius(radius) {
      this.radius = radius;
    }
  
    getColor() {
      return this.color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    toString() {
      return `Circle[radius=${this.radius},color=${this.color}]`;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  
  const circle1 = new Circle(); 
  console.log("Radius:", circle1.getRadius());
  console.log("Color:", circle1.getColor());
  console.log("Area:", circle1.getArea());
  console.log("Circumference:", circle1.getCircumference());
  
 
  
// Question 3

class Person{
    constructor(name, age, education, dob, place){
        this.name = name;
        this.age = age;
        this.education = education;
        this.dob = dob;
        this.place = place;
    }
    getPersonDetails(){
        console.log(`
        Name : ${this.name}
        Age : ${this.age}
        Education : ${this.education}
        Date of Birth : ${this.dob}
        Place : ${this.place}
        `)
    }
}
const details = new Person("Manoj", 20, "BCA", "26-06-2003", "Hosur");
console.log(details);
details.getPersonDetails();

//Question 3
const d = 15;
class UberPrice{
    constructor(ratePerKM){
        this.ratePerKM = ratePerKM;
    }
    calcPrice(distanceinKM){
        return distanceinKM * this.ratePerKM;
    }
}

const calc = new UberPrice(2);
const price = calc.calcPrice(d);
console.log(price);





