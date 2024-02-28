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