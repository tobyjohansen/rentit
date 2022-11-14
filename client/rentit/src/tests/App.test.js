import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MainGrid from "../components/allCarsComponents/MainGrid";

//FIRST TEST WITH JEST

test("Testing if word bil is present in MainGrid and should return true as it is", () => {
  render(
    <BrowserRouter>
      <MainGrid />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/bil/i);
  expect(linkElement).toBeInTheDocument();
});

/* KRAV MVP

Systemet genererer ID
Utleier må legge inn price
Utleier må legge inn brand
Utleier må legge inn model
Utleier skal kunne legge inn type
Utleier skal kunne legge inn year
Utleier må legge inn location
Utleier må legge inn availability
Utleier skal kunne legge inn km_limit
Utleier skal kunne legge inn fuel
Utleier må legge inn gear
Utleier skal kunne legge inn extras
Utleier skal kunne legge inn regnummer
Utleier skal kunne legge inn price_per_km_after_limit
Utleier skal kunne slette bil ved å velge bil-ID
Utleier skal kunne endre bil ved å velge bil-ID
Ved å skrive pris, elimineres de dyrere prisene
Bruker trykker på knapp, og får beskjed om at bil er bekreftet
Stub: det som skjer videre er å velge leieperiode og klikke bekreft
Bruker trykker på knapp, og får beskjed om at leieforhold er avsluttet
*/

// UNIT TESTS (ALL COMPONENTS)

// INTEGRATION TESTS (COMPONENTS WORKING TOGETHER)

// END TO END TESTS (COMPLETE SCNERARIOS)
