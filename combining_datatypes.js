// Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = {
    crayons: ['scarlet', 'indigo', 'yellow', 'green']
}

console.log(crayonBox.crayons[2])

// Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

const bottle = {
    cap: {
        material: 'plastic',
        color: 'blue',
        type: 'twist-off'
    }
}

console.log(bottle.cap.material)

// Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

const receipt = [
    { name: 'glasses', price: 20 }, 
    { name: 'shirt', price: 15 },
    { name: 'pants', price: 30 },
    { name: 'wallet', price: 10 },
]

console.log(receipt[2].name)

// Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [
    'tall',
    ['George', 'Diane', 'Bob', 'Shelly'],
    'yellow'
]

console.log(apartmentBuilding[1][2])