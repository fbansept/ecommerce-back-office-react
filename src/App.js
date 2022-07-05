import './App.css';
import Header from './Header/Header';
import SideMenu from './SideMenu/SideMenu';

function App() {
  return (
    <>
      <Header></Header>
      <div className='main'>
        <SideMenu></SideMenu>
        <div className='content'>

        </div>
      </div>
    </>
  );
}

export default App;
