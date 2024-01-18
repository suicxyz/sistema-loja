import React, { useState, useEffect } from "react";
import Link from 'next/link';

import { FaSearch } from "react-icons/fa";

import Axios from "@/services/axios";

function SearchProduct({ user }) {

	async function get(target) {
		const options = [];

		try {
			const result = await Axios.get(`/api/${target}`);

			for(let item of result.data[target]) {
				const { _id, name } = item;
				options.push(item)
			}

			return options;
		} catch (e) {
			if (e) throw e;
		}
	}

	const [types, setTypes] = useState([]);
	const [groups, setGroups] = useState([]);
	const [brands, setBrands] = useState([]);

	const [name, setName] = useState("");
	const [selectedType, setType] = useState(0);
	const [selectedGroup, setGroup] = useState(0);
	const [selectedBrand, setBrand] = useState(0);

	useEffect(() => {
		async function setVariables() {
			setTypes(await get("types"));
			setGroups(await get("groups"));
			setBrands(await get("brands"));
		}
		setVariables();
	});

	const handleNameChange = e => setName(e.target.value);
	const handleTypeChange = e => setType(e.target.value);
	const handleGroupChange = e => setGroup(e.target.value);
	const handleBrandChange = e => setBrand(e.target.value);
	
	function handleSubmit(e) {
		e.preventDefault();
		console.log(e);
	}

	return (
		<div>
			<div className="flex items-center gap-2 justify-center">
				<form className="flex-auto-relative" onSubmit={handleSubmit}>
					<div className="flex-auto relative">
						<input
							type="text"
							id="product"
							name="product"
							onChange={handleNameChange}
							value={name}
							placeholder="Pesquise por um produto..."
							className="transition outline-none border border-solid border-neutral-500 rounded-sm bg-neutral-50 text-neutral-500 h-12 pl-10 min-w-full focus:text-neutral-900 focus:border-neutral-900 selected:bg-neutral-150"
						/>
						<FaSearch
							className="absolute top-3.5 left-3 text-neutral-500 text-xl"
						/>
					</div>
				</form>
				<div className="flex-auto">
					<div className="min-w-full flex items-center gap-2">
						<select
							onChange={handleTypeChange}
							value={selectedType}
							className="flex-1 transition outline-none border border-solid border-neutral-500 rounded-sm bg-neutral-50 text-neutral-500 h-12 px-3 focus:text-neutral-900 focus:border-neutral-900 selected:bg-neutral-150"
							>
							<option value="0" disabled>Selecione o tipo</option>
							<option value="1">Todos</option>
							{types.map(option => (
								<option key={option._id} value={option._id}>
									{option.name}
								</option>
							))}
						</select>
						<select 
							onChange={handleGroupChange}
							value={selectedGroup}
							className="flex-1 transition outline-none border border-solid border-neutral-500 rounded-sm bg-neutral-50 text-neutral-500 h-12 px-3 focus:text-neutral-900 focus:border-neutral-900 selected:bg-neutral-150"
							>
							<option value="0" disabled>Escolha um grupo</option>
							<option value="1">Todos</option>
							{(selectedType == 1 || selectedType == 0) ? 
								groups.map(o => (
									<option key={o._id} value={o._id}>{o.name}</option>
								))
								:
								(groups.map(o => 
									(selectedType == o.type._id)
									? <option key={o._id} value={o._id}>{o.name}</option>
									: <></>
								))
							}
						</select>
						<select
							onChange={handleBrandChange}
							value={selectedBrand}
							className="flex-1 transition outline-none border border-solid border-neutral-500 rounded-sm bg-neutral-50 text-neutral-500 h-12 px-3 focus:text-neutral-900 focus:border-neutral-900 selected:bg-neutral-150"
							>
							<option value="0" disabled>Escolha a marca</option>
							<option value="1">Todas</option>
							{(selectedGroup == 1 || selectedGroup == 0) ?
								brands.map(o => (
									<option key={o._id} value={o._id}>{o.name}</option>
								))
								:
								(brands.map(o => (
									(selectedGroup == o.group._id)
									? <option key={o._id} value={o._id}>{o.name}</option>
									: <></>
								)))}
						</select>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SearchProduct
