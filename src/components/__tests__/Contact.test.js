import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us page Test case",()=>{

  test("should render 3rd party link", ()=>{
    render(<Contact/>)

    const linkedElement = screen.getByText("Login");
    expect(linkedElement).toBeInTheDocument();

    expect(linkedElement).toHaveAttribute("href", "https://www.facebook.com/login/");
    expect(linkedElement).toHaveAttribute("target", "_blank")
  })

    test("Should load contact us compo",()=>{
        render(<Contact/>);
         const heading = screen.getByRole("heading");
         expect(heading).toBeInTheDocument();
      })
      
      test("should load button compo",()=>{
        render(<Contact/>);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
      })
      
      test("should load input name inside compo",()=>{
          render(<Contact/>);
          const inputName = screen.getByPlaceholderText("name")
          expect(inputName).toBeInTheDocument();
        })
      
      test("should load two input boxes in compo",()=>{
          render(<Contact/>);
          // Quering
          const inputboxes = screen.getAllByRole("textbox");
          // expect(inputboxes).toBeInTheDocument();
          // console.log("inpiut",inputboxes.length)
          expect(inputboxes.length).toBe(2);
        })
      
      
})

