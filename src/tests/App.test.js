import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import mockData from "./mockData";
import App from "../App";
import userEvent from "@testing-library/user-event";

const PLANET_NAME_BESPIN = /bespin/i;
const PLANET_NAME_ENDOR = /endor/i;
const PLANET_NAME_HOTH = /hoth/i;
const PLANET_NAME_YAVIN = /yavin/i;
const PLANET_NAME_CORUSCANT = /coruscant/i;

describe("testes Star Wars planet database", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("verifica se todos elementos são renderizados corretamente", async () => {
    const mock = jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    render(<App />);

    expect(mock).toHaveBeenCalledTimes(1);

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

    // const filterTextInput = screen.getByRole('textbox', {  name: /filter/i});
    // const columnFilterSelect = screen.getByRole('combobox', {  name: /coluna/i})
    // const compareSelect = screen.getByRole('combobox', {  name: /comparador/i})
    // const filterValueInput = screen.getByRole('spinbutton', {  name: /valor/i})
    // const filterBtn = screen.getByRole('button', {  name: /filtrar/i})
    // const orderSelect = screen.getByRole('combobox', {  name: /ordenar/i})
    // const ascendingRadio = screen.getByRole('radio', { name: /crescente/i})
    // const descendingRadio = screen.getByRole('radio', { name: /decrescente/i})
    // const orderBtn = screen.getByRole('button', {  name: /ordenar/i})

    const inputsArray = [
      screen.getByRole("textbox", { name: /filter/i }),
      screen.getByRole("combobox", { name: /coluna/i }),
      screen.getByRole("combobox", { name: /comparador/i }),
      screen.getByRole("spinbutton", { name: /valor/i }),
      screen.getByRole("button", { name: /filtrar/i }),
      screen.getByRole("combobox", { name: /ordenar/i }),
      screen.getByRole("radio", { name: /crescente/i }),
      screen.getByRole("radio", { name: /decrescente/i }),
      screen.getByRole("button", { name: /ordenar/i }),
    ];

    inputsArray.forEach((input) => {
      expect(input).toBeInTheDocument();
    });
  });
  test("verifica se o filtro de texto funciona corretamente", async () => {
    const mock = jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    render(<App />);

    expect(mock).toHaveBeenCalledTimes(1);

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

    const filterTextInput = screen.getByRole("textbox", { name: /filter/i });
    userEvent.type(filterTextInput, "al");

    const filteredTableRows = screen.getAllByRole("row");
    expect(filteredTableRows).toHaveLength(2);

    const PLANET_NAME = /alderaan/i;

    const filteredPlanet = screen.getByRole("cell", { name: PLANET_NAME });
    expect(filteredPlanet).toBeInTheDocument();

    userEvent.clear(filterTextInput);
    const tableRows = screen.getAllByRole("row");
    expect(tableRows).toHaveLength(11);
  });

  test("verifica se os filtros funcionam corretamente", async () => {
    const mock = jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    render(<App />);

    expect(mock).toHaveBeenCalledTimes(1);

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

    const columnFilterSelect = screen.getByRole("combobox", {
      name: /coluna/i,
    });
    const compareSelect = screen.getByRole("combobox", { name: /comparador/i });
    const filterValueInput = screen.getByRole("spinbutton", { name: /valor/i });
    const filterBtn = screen.getByRole("button", { name: /filtrar/i });

    userEvent.selectOptions(columnFilterSelect, "rotation_period");
    userEvent.selectOptions(compareSelect, "menor que");
    userEvent.type(filterValueInput, "20");
    userEvent.click(filterBtn);

    const filteredTableRows = screen.getAllByRole("row");
    expect(filteredTableRows).toHaveLength(3);

    const filteredPlanetBespin = screen.getByRole("cell", {
      name: PLANET_NAME_BESPIN,
    });
    expect(filteredPlanetBespin).toBeInTheDocument();
    const filteredPlanetEndor = screen.getByRole("cell", {
      name: PLANET_NAME_ENDOR,
    });
    expect(filteredPlanetEndor).toBeInTheDocument();

    userEvent.selectOptions(columnFilterSelect, "orbital_period");
    userEvent.selectOptions(compareSelect, "maior que");
    userEvent.type(filterValueInput, "500");
    userEvent.click(filterBtn);

    const filteredTableRows2 = screen.getAllByRole("row");
    expect(filteredTableRows2).toHaveLength(2);

    expect(filteredPlanetBespin).toBeInTheDocument();
    expect(filteredPlanetEndor).not.toBeInTheDocument();

    const rotationPeriodFilter = screen.getByTestId("rotation_period");
    userEvent.click(rotationPeriodFilter);

    const filteredTableRows3 = screen.getAllByRole("row");
    expect(filteredTableRows3).toHaveLength(4);

    expect(filteredPlanetBespin).toBeInTheDocument();
    const filteredPlanetHoth = screen.getByRole("cell", {
      name: PLANET_NAME_HOTH,
    });
    expect(filteredPlanetHoth).toBeInTheDocument();
    const filteredPlanetYavin = screen.getByRole("cell", {
      name: PLANET_NAME_YAVIN,
    });
    expect(filteredPlanetYavin).toBeInTheDocument();

    const clearFiltersBtn = screen.getByRole("button", {
      name: /limpar filtros/i,
    });
    userEvent.click(clearFiltersBtn);

    const tableRows = screen.getAllByRole("row");
    expect(tableRows).toHaveLength(11);
  });

  test("verifica se os filtros de ordenação funcionam corretamente", async () => {
    const mock = jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    render(<App />);

    expect(mock).toHaveBeenCalledTimes(1);

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

    const orderSelect = screen.getByRole("combobox", { name: /ordenar/i });
    userEvent.selectOptions(orderSelect, "surface_water");

    const ascendingRadio = screen.getByRole("radio", { name: /crescente/i });
    userEvent.click(ascendingRadio);

    const orderBtn = screen.getByRole("button", { name: /ordenar/i });
    userEvent.click(orderBtn);

    const orderedTableRows1 = screen.getAllByRole("row");
    expect(orderedTableRows1).toHaveLength(11);

    const firstOrderedItem = screen.getByRole("row", {
      name: PLANET_NAME_BESPIN,
    });
    expect(orderedTableRows1.at(1)).toEqual(firstOrderedItem);

    const lastOrderedItem = screen.getByRole("row", {
      name: PLANET_NAME_CORUSCANT,
    });
    expect(orderedTableRows1.at(-1)).toEqual(lastOrderedItem);

    const descendingRadio = screen.getByRole("radio", { name: /decrescente/i });
    userEvent.selectOptions(orderSelect, "surface_water");
    userEvent.click(descendingRadio);
    userEvent.click(orderBtn);

    const orderedTableRows2 = screen.getAllByRole("row");
    expect(orderedTableRows2).toHaveLength(11);

    const firstOrderedItem2 = screen.getByRole("row", {
      name: PLANET_NAME_HOTH,
    });
    // expect(orderedTableRows2.at(1)).toEqual(firstOrderedItem2);

    const lastOrderedItem2 = screen.getByRole("row", {
      name: PLANET_NAME_CORUSCANT,
    });
    expect(orderedTableRows2.at(-1)).toEqual(lastOrderedItem2);
  });
});
