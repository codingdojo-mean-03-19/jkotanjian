class Bike {
    constructor(public price: number, public max_speed: number, public miles: number = 0) {
    }
    displayInfo() {
        console.log(`Price: ${this.price}, Max Speed: ${this.max_speed}, Miles: ${this.miles}`);
    }    
    ride() {
      this.miles += 10;
      console.log("Riding");
      return this;
    }
    reverse() {
      if (this.miles >= 5) {
          this.miles -= 5;
          console.log("Reversing");
          return this;
      }
      else {
          console.log("You need to ride more before you can reverse");
          return this;
      }
    }
}    
let bike1 = new Bike(250, 60);
let bike2 = new Bike(100, 45);
let bike3 = new Bike(600, 65);
bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().displayInfo();