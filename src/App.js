import "./App.css";
import Avatar from "./components/Avatar";

function App() {
  return (
    <div className="App">
      <Avatar
        image="https://img.freepik.com/premium-photo/cute-baby-panda-bear-with-big-eyes-3d-rendering-cartoon-illustration_691560-4917.jpg"
        userName="Destroyer3000"
        userEmail="destroyer@gmail.com"
        userAge={15}
      />
      <Avatar
        image="https://img.freepik.com/premium-photo/blue-mouse-with-big-eyes-sits-wooden-floor_664644-2885.jpg"
        userName="Mouser"
        userEmail="mouser@gmail.com"
        userAge={9}
      />
      <Avatar
        image="https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/cle4tlguw0001ml08of3bzzlu_1/public"
        userName="Big Ears"
        userEmail="elephen@gmail.com"
        userAge={11}
      />
    </div>
  );
}

export default App;
