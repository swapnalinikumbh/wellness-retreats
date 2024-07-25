import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import Search from "./components/Search/Search";
import RetreatList from "./components/RetreatList/RetreatList";
import Pagination from "./components/Pagination/Pagination";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  const [retreats, setRetreats] = useState([]);
  const [filteredRetreats, setFilteredRetreats] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState({ date: "", type: "" });
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchRetreats();
  }, [page]);

  const fetchRetreats = async () => {
    try {
      const response = await axios.get(
        `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${page}&limit=5`
      );
      setRetreats(response.data);
      setFilteredRetreats(response.data);
    } catch (error) {
      console.error("Error fetching retreats:", error);
    }
  };

  const handleSearch = async (term) => {
    try {
      setSearchTerm(term);
      const response = await axios.get(
        `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?search=${term}`
      );
      setFilteredRetreats(response.data);
    } catch (error) {
      console.error("Error searching retreats:", error);
    }
  };

  const handleFilter = async (filter) => {
    try {
      setFilter(filter);
      let url = `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?`;
      if (filter.date) {
        if (filter.date === "2023-2024") {
          url += `&date_gte=2023-01-01&date_lte=2024-12-31`;
        } else if (filter.date === "2024-2025") {
          url += `&date_gte=2024-01-01&date_lte=2025-12-31`;
        }
      }
      if (filter.type) url += `&type=${filter.type}`;
      const response = await axios.get(url);
      setFilteredRetreats(response.data);
    } catch (error) {
      console.error("Error filtering retreats:", error);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="filter-search-container">
        <Filter onFilter={handleFilter} />
        <div className="search-container">
          <Search onSearch={handleSearch} />
        </div>
      </div>
      <RetreatList retreats={filteredRetreats} />
      <Pagination currentPage={page} onPageChange={setPage} />
      <Footer />
    </div>
  );
};

export default App;
