import {render, screen} from "@testing-library/react";
import Card from "../components/card/Card";
import { beforeEach, describe, expect } from "vitest";


describe("Card testing",() =>{

    beforeEach(() =>{
        render(<Card/>);
    });

    test("render Card",() => {
        const buttonCardDetail = screen.getByText(/Detalles/i);
        expect(buttonCardDetail).toBeDefined();
    });
});