import { render, screen } from "@testing-library/react"
import RestaurantCard, { withpromotedLabel } from "../RestaurantCard";
import MOCK_DATA from '../mocks/RestaurentCardMack.json'
import "@testing-library/jest-dom"

test('should render restaurentCard component with prop data', () => {
render(<RestaurantCard resData={MOCK_DATA}/>)

const name = screen.getByText("Pizza Hut");
expect(name).toBeInTheDocument();

})
// withpromotedLabel(RestaurantCard)

// test("Should render Restarent card component with Promoted label",()=>{
   
//   render(<withpromotedLabel/>);
//   const lablewithPromoted = screen.getByText("₹350 for two");
//   expect(lablewithPromoted).toBeInTheDocument();
// })

test('Should render Restaurant card component with Promoted label', () => {
    // Render the component with the promoted prop
    render(<RestaurantCard resData={MOCK_DATA} />);  
    // Check for the Promoted label
    const promotedLabel = screen.getByText('₹350 for two');
    expect(promotedLabel).toBeInTheDocument();
  
    // Check for the ₹350 for two text
    // const priceLabel = screen.getByText('₹350 for two');
    // expect(priceLabel).toBeInTheDocument();
});