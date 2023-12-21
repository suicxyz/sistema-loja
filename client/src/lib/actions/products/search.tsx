import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";

import Axios from "@/services/axios";

function SearchProduct() {

	const [productName, setProductName]
		= useState<String | undefined>(undefined);

	const [productGroup, setProductGroup]
		= useState<String | undefined>(undefined);

	const [productType, setProductType]
		= useState<String | undefined>(undefined);

	const [productBrand, setProductBrand]
		= useState<String | undefined>(undefined);


	function handleSearch() {
		Axios.get("/api/products").then((response) => {
			console.log(response)
		});
	}

	return (
		<div>
			<div className="flex items-center gap-2 justify-center">
				<div className="flex-auto relative">
					<input
						type="text"
						id="product"
						name="product"
						placeholder="Pesquise por um produto..."
						className="transition outline-none border border-solid border-neutral-500 rounded-sm bg-neutral-50 text-neutral-500 h-12 pl-10 min-w-full focus:text-neutral-900 focus:border-neutral-900 selected:bg-neutral-150"
					/>
					<FaSearch
						className="absolute top-3.5 left-3 text-neutral-500 text-xl"
					/>
				</div>
				<div className="flex-auto">
					<div className="min-w-full flex items-center gap-2">
						<select className="flex-1 transition outline-none border border-solid border-neutral-500 rounded-sm bg-neutral-50 text-neutral-500 h-12 pl-3 focus:text-neutral-900 focus:border-neutral-900 selected:bg-neutral-150">
							<option disabled selected>Escolha um grupo</option>
							<option>Todos</option>
							<optgroup label="Lorem">
								<option value="1">Ipsum</option>
								<option value="2">Ipsum</option>
								<option value="3">Ipsum</option>
							</optgroup>
							<optgroup label="Lorem">
								<option value="1">Ipsum</option>
								<option value="2">Ipsum</option>
								<option value="3">Ipsum</option>
							</optgroup>
							<optgroup label="Lorem">
								<option value="1">Ipsum</option>
								<option value="2">Ipsum</option>
								<option value="3">Ipsum</option>
							</optgroup>
						</select>
						<select className="flex-1 transition outline-none border border-solid border-neutral-500 rounded-sm bg-neutral-50 text-neutral-500 h-12 pl-3 focus:text-neutral-900 focus:border-neutral-900 selected:bg-neutral-150">
							<option disabled selected>Selecione o tipo</option>
							<option>Todos</option>
							<optgroup label="Lorem">
								<option value="1">Ipsum</option>
								<option value="2">Ipsum</option>
								<option value="3">Ipsum</option>
							</optgroup>
							<optgroup label="Lorem">
								<option value="1">Ipsum</option>
								<option value="2">Ipsum</option>
								<option value="3">Ipsum</option>
							</optgroup>
							<optgroup label="Lorem">
								<option value="1">Ipsum</option>
								<option value="2">Ipsum</option>
								<option value="3">Ipsum</option>
							</optgroup>
						</select>
						<select className="flex-1 transition outline-none border border-solid border-neutral-500 rounded-sm bg-neutral-50 text-neutral-500 h-12 pl-3 focus:text-neutral-900 focus:border-neutral-900 selected:bg-neutral-150">
							<option disabled selected>Selecione a marca</option>
							<option>Todos</option>
							<optgroup label="Lorem">
								<option value="1">Ipsum</option>
								<option value="2">Ipsum</option>
								<option value="3">Ipsum</option>
							</optgroup>
							<optgroup label="Lorem">
								<option value="1">Ipsum</option>
								<option value="2">Ipsum</option>
								<option value="3">Ipsum</option>
							</optgroup>
							<optgroup label="Lorem">
								<option value="1">Ipsum</option>
								<option value="2">Ipsum</option>
								<option value="3">Ipsum</option>
							</optgroup>
						</select>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SearchProduct