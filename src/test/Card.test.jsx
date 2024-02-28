import { beforeEach, test } from "vitest";
import { expect } from "vitest";
import {render, screen} from "@testing-library/react";
import Card from "../components/card/Card";
import { MemoryRouter } from "react-router";




describe("Card testing",() =>{

    beforeEach(() =>{
        render(<MemoryRouter>
            <Card/>
        </MemoryRouter>)
    });

    test("render Card",() => {
        const buttonCardDetail = screen.getByText(/Detalles/i);
        expect(buttonCardDetail).toBeDefined();
    });
});