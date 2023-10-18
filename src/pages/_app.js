import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
// import Header from '@components/Header';
import Main from '@components/Main';
import { ThemeProvider } from "next-themes";

function MyApp() {
  return (
    <>
      <ThemeProvider attribute='class'>
        <Main />
        {/* <Header /> */}
      </ThemeProvider>
    </>
  );
}


export default MyApp;