import { useState } from "react";
import { dogsData } from "./data";
import { v1 as generateUniqueID } from "uuid";
import DogDetails from "./DogDetails";

console.log(dogsData)


function App() {

  const [dogs, setDogs] = useState(dogsData);

  function updateDogAttendance(dogId) {
  // Copy the dogs array so that the copy can be updated
  const dogArray = [...dogs];
  // Find the dog with the matching id number's array position
  const index = dogArray.findIndex((dog) => dogId === dog.id);
  // Access the dog's present property and update the value
  // By using ! it will toggle the value of present
  dogArray[index].present = !dogArray[index].present;
  // Put the updated array into setDogs to update the dogs array
  setDogs(dogArray);
  }

  function addDog() {
  const rover = {
    id: generateUniqueID(),
    name: "Rover",
    present: false,
    grade: "100",
    notes: "The goodest new dog",
  };
  setDogs([...dogs, rover]);
  }

  function removeDog(dogID) {
    // use the filter method to remove any dogs that have a matching id
    const filteredDogArray = dogs.filter((dog) => dog.id !== dogID);
    // set the dogs array to the new array that will not have the removed dog
    setDogs(filteredDogArray);
  }

  return (
    <div className="App">
      <header>
        <h1> Bark and Bowl Doggy Day Care</h1>
        <h2>{new Date().toDateString()}</h2>
      </header>
      <aside></aside>
      <main>
      <button onClick={addDog}>Add a new dog</button>
      <ul>
          {dogs.map((dog) => {
            return (
              <li key={dog.id}>
                <span onClick={() => updateDogAttendance(dog.id)} style={ dog.present ? { textDecoration: "none" }: { textDecoration: "line-through" }}>
                {dog.name}{" "}
                </span>
                <button onClick={() => removeDog(dog.id)}>remove</button>
                <DogDetails dog={dog} />
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
