import { beforeEach, test } from "vitest";
import {expect} from "vitest"
import {render, screen} from "@testing-library/react"
import Footer from "../components/footer/Footer"

describe("footer testing",  () =>{
    beforeEach(()=>{
        render(
            <Footer/>
        )
    })

    test("should render copyright text", ()=>{
        const footer = screen.getByText(/@Copyright 2024 BonsApp Gallery · Todos los derechos reservados/i);
        expect(footer).toBeDefined();
    })
    
})
