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
