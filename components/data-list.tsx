"use client";
import React, { useEffect, useState } from "react";

type Props = {};

export default function DataList({}: Props) {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [categoryList, setCategoryList] = useState<any[]>([]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<any>();

  const fetchData = async () => {
    setIsLoading(true);
    const res = await fetch(`https://dummyjson.com/products?limit=1000`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dummy = await res.json();
    setData(dummy.products);
    setIsLoading(false);
  };

  const fetchAllCategoryList = async () => {
    const res = await fetch("https://dummyjson.com/products/category-list", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dummy = await res.json();
    setCategoryList(dummy);
    console.log(dummy, "category list");
  };

  useEffect(() => {
    fetchData();
    fetchAllCategoryList();
  }, [selectedCategory]);

  useEffect(() => {
    let filteringData = data;
    if (selectedCategory) {
      filteringData = filteringData.filter(
        (d: any) => d.category === selectedCategory
      );
    }
    if (rating > 0) {
      filteringData = filteringData.filter((d: any) => d.rating >= rating);
    }
    if (minPrice > 0) {
      filteringData = filteringData.filter((d: any) => d.price >= minPrice);
    }
    if (maxPrice > 0) {
      filteringData = filteringData.filter((d: any) => d.price <= maxPrice);
    }
    setFilteredData(filteringData);
  }, [data, selectedCategory, rating, minPrice, maxPrice]);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      {/* Dropdown for category */}
      <div className="text-black text-2xl font-bold mb-4">Product List</div>
      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      >
        <option value="">Select Category</option>
        {categoryList.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      {/* Rating filter */}
      <div className="mb-4">
        <label className="mr-2">Minimum Rating:</label>
        <input
          type="number"
          max="5"
          step="0.1"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      {/* Price range filter */}
      <div className="mb-4">
        <label className="mr-2">Price Range:</label>
        <input
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded mr-2"
        />
        <input
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Data table */}
      <div className="w-full max-w-6xl mx-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Id</th>
              <th className="px-4 py-2 border-b">Title</th>
              <th className="px-4 py-2 border-b">Category</th>
              <th className="px-4 py-2 border-b">Price</th>
              <th className="px-4 py-2 border-b">Rating</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={5} className="text-center p-4">
                  Loading Data...
                </td>
              </tr>
            ) : (
              filteredData.map((d: any, i: number) => (
                <tr key={i} className="hover:bg-gray-100 text-center">
                  <td className="px-4 py-2 border-b">{d.id}</td>
                  <td className="px-4 py-2 border-b">{d.title}</td>
                  <td className="px-4 py-2 border-b">{d.category}</td>
                  <td className="px-4 py-2 border-b">${d.price}</td>
                  <td className="px-4 py-2 border-b">{d.rating}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
