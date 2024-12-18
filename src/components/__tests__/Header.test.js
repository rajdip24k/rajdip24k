import { fireEvent, render, screen } from "@testing-library/react"
import { Header } from "../Header"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
// import 

test("should render header compo with a log in button",()=>{
    render(
<BrowserRouter>  
<Provider store={appStore}>  
    <Header/>
    </Provider>
    </BrowserRouter>)
    // When there is multiple buttons and we have to write the test case for specific 1
   const loginButn = screen.getByRole("button", {name : "login"})
   expect(loginButn).toBeInTheDocument();
});


test("should render cart items with 0 items as it initially",()=>{
    render(
<BrowserRouter>  
<Provider store={appStore}>  
    <Header/>
    </Provider>
    </BrowserRouter>)
    // When there is multiple buttons and we have to write the test case for specific 1
   const loginButn = screen.getByText("Cart -(0)")
   expect(loginButn).toBeInTheDocument();
});


test("should render cart items with 0 items as it initially",()=>{
    render(
<BrowserRouter>  
<Provider store={appStore}>  
    <Header/>
    </Provider>
    </BrowserRouter>)
    // When there is multiple buttons and we have to write the test case for specific 1
    // With the help of 
   const loginButn = screen.getByText(/Cart/);
   expect(loginButn).toBeInTheDocument();
});


test("should render login and logout button Onclick event()",()=>{
    render(
<BrowserRouter>  
<Provider store={appStore}>  
    <Header/>
    </Provider>
    </BrowserRouter>)
   const loginButn = screen.getByRole("button", {name : "login"});
   fireEvent.click(loginButn);
   const logOutBtn = screen.getByRole("button", {name : "Logout"})
   expect(logOutBtn).toBeInTheDocument();
});