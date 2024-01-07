import { Image } from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import { LaunchList } from './components/LaunchList';
import { LaunchDetails } from './components/LaunchDetails';
import { RocketDetails } from './components/RocketDetails';
import logo from './assets/logo_spacex.png';


export function App() {
  return (
    <>
      <a href="/">
        <Image m={4} src={logo} width={300} alt="spacex logo" />
      </a>

      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
        <Route path="rockets/:rocketId" element={ <RocketDetails />} />
      </Routes>
    </>
  )
}

