//1. Створити клас Людина.
//Властивості:
//імʼя;
//стать.
//Методи:
//конструктор, який приймає два параметри: імʼя та стать.

class Human {
    constructor (name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

//2. Створити клас Квартира.
//Властивості:
//конструктор не потрібен;
//масив жителів, який при створенні пустий.
//Методи:
//додати жителя - метод повинен приймати екземпляр класу Людина, 
//та додавати до масиву жителів.

class Apartment {
    residentsArray = [];

    addResident(resident) {
        this.residentsArray.push(resident);
    }

}

//3. Створити клас Будинок.
//Властивості:
//масив квартир, який при створенні пустий;
//максимальна кількість квартир.
//Методи:
//конструктор, який приймає один параметр: 
//максимальну кількість квартир;
//додати квартиру - метод повинен приймати екземпляр класу Квартира, 
//перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, 
//і якщо це так, додати квартиру, 
//в іншому випадку виводить у консоль відповідне повідомлення.

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartmentInHouse) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartmentInHouse);
        } else {
            console.log('This is the maximum number of apartments in this house');
        }
    }
}

//В якості демонстраціїї створити:
//декілька екземплярів класу Людина;
//декілька екземплярів класу Квартира;
//додадити екземпляри класу Людина до екземплярів класу Квартира;
//екземпляр класу Будинок;
//додадити екземпляри класу Квартира до екземплярів класу Будинок.


const human1 = new Human('John', 'male');
const human2 = new Human('Marry', 'female');
const human3 = new Human('Barry', 'male')

const apartment1 = new Apartment();
const apartment2 = new Apartment();

apartment1.addResident(human1);
apartment2.addResident(human2);
apartment2.addResident(human3);

const house = new House(2);

house.addApartment(apartment1);
house.addApartment(apartment2);

console.log(house.apartments);
