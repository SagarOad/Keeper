import React, { useState } from "react";
import Data from "../CardData";

const TodoForm = () => {
 
  return (
    <div className="">
      <div className="border-4 drop-shadow-md bg-white w-[450px] mt-5 py-5 px-6">
        <form id="form">
          <div class="mb-6">
            <label
              for="para"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Write your task
            </label>
            <input
              type="text"
              id="para"
              name="para"
              placeholder="Type here"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            class="text-white bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;