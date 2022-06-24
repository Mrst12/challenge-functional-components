import css from './App.module.css';
import NavBarSimple from './components/NavBarSimple';
import Sidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';
import Content from './components/Content';
import ContentHooks from './components/ContentHooks';
import ContentAPI from './components/ContentAPI';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here 
      <NavBarSimple />*/}
      <Sidebar />
      <NavBarForm />
      {/*<Content />*/}
      {/*<ContentHooks />*/}
      <ContentAPI />
    </div>
  );
}

export default App;