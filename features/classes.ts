class Vehicle {
  // protected can be used within this class and classes that extends this class
  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  // private can only be accessed within this class
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();

car.startDrivingProcess();
