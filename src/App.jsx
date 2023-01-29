/* eslint-disable no-unused-vars */
import React from "react";
import { AppContainer } from "@components";

const initalData = [
    { id: 198355, name: "Fancy pen", description: "Write in red or blue!", price: 1000 },
    { id: 168031, name: "Bad pen", description: "Barely works, not worth the money", price: 2000 },
    { id: 296110, name: "Fabric softener", description: "From the other leading brand ", price: 1850 },
    { id: 183544, name: "Coffee cup", description: "Dark blue with an ergonomic handle", price: 1600 },
    { id: 174200, name: "Desk chair", description: "Your back will thank you", price: 120000 },
    { id: 203287, name: "Pillow", description: "Soft and cushiony", price: 5000 },
    { id: 107058, name: "Cactus", description: "Some greenery for your home", price: 2000 },
    { id: 226912, name: "Desk lamp", description: "Because who wants a dark office?", price: 6000 }
];

let searchQuery = "";
var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

export default function App() {
    const [filteredData, setFilteredData] = React.useState(initalData);

    return (
        <AppContainer>
            <form onSubmit={(event) => onFormSubmit(setFilteredData, event)}>
                <input onChange={onTextFieldUpdate} type="text" id="inputField" name="InputField" placeholder="Type your search..." />
                <input type="submit" id="searchButton" name="SearchButton" value="Search" />
            </form>

            <table>
                <thead>
                    <td key="name-header">Name</td>
                    <td key="desc-header">Description</td>
                    <td key="price-header">Price</td>
                </thead>

                {filteredData && filteredData.length > 0 ?
                    filteredData.map(
                        element => (
                            <tr key={element.id}>
                                <td>{element.name}</td>
                                <td>{element.description}</td>
                                <td>{formatter.format(element.price / 100)}</td>
                            </tr>
                        )
                    ) : <p>No results found...</p>
                }
            </table>
        </AppContainer>
    );
}

const onFormSubmit = (setFilteredData, event) => {
    event.preventDefault();

    if (searchQuery.length == 0)
        return;

    let newFilteredData = [];
    for (const element of initalData) {
        if (element.name.toLowerCase().includes(searchQuery) || element.description.toLowerCase().includes(searchQuery))
            newFilteredData.push(element);

    }

    setFilteredData(newFilteredData);
};

const onTextFieldUpdate = (event) => {
    searchQuery = event.target.value ? event.target.value.toLowerCase().trim() : "";
};
