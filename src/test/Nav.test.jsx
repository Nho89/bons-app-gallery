<<<<<<< HEAD
/* import {render, screen} from "@testing-library/react";
import Nav from "../components/Nav";
import { expect } from "vitest";
import { MemoryRouter } from "react-router";
import { beforeEach } from "node:test";


describe("NavTesting",() =>{

    beforeEach(() =>{
        render(<MemoryRouter><Nav/></MemoryRouter>);
    })

    test("when render Nav Añadir-button should appear",() => {
        const buttonCardDetail = screen.getByText(/Mis bonsáis/i);
        expect(buttonCardDetail).toBeDefined();
    });
}); */
=======
import { beforeEach, test } from "vitest";
import {expect} from "vitest"
import {render, screen} from "@testing-library/react"
import Nav from "../components/nav/Nav"
import { MemoryRouter } from "react-router-dom";

describe("Nav testing",  () =>{
    beforeEach(()=>{
        render(
        <MemoryRouter>
            <Nav/>
        </MemoryRouter>
        )
    })

    test("should render 'Añadir' text", ()=>{
        const nav = screen.getByText(/Añadir/i);
        expect(nav).toBeDefined();
    });
    test("should render 'Mis bonsáis' text", ()=>{
        const nav = screen.getByText(/Mis bonsáis/i);
        expect(nav).toBeDefined();
    });
    test("should render 'Anotaciones' text", ()=>{
        const nav = screen.getByText(/Anotaciones/i);
        expect(nav).toBeDefined();
    });
    test("should render logo image", ()=>{
        const logoImage = screen.getByRole('img', { name: /logo/i });
        expect(logoImage).toBeDefined();
    })

})
>>>>>>> 67ba8cea1984e64cbc47260be55c49edf5563d67
