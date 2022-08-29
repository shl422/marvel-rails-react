import { Table, message, Popconfirm } from "antd";
import React from "react";
import AddCharacterModal from "./AddCharacterModal";

class Characters extends React.Component {
	columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Movie",
			dataIndex: "movie",
			key: "movie",
		},
		{
			title: "Powers",
			dataIndex: "powers",
			key: "powers",
		},
		{
			title: "Age",
			dataIndex: "age",
			key: "age",
		},
		{
			title: "",
			key: "action",
			render: (_text, record) => (
				<Popconfirm
					title="Are you sure delete this character?"
					onConfirm={() => this.deleteCharacter(record.id)}
					okText="Yes"
					cancelText="No"
				>
					<a href="#" type="danger">
						Delete{" "}
					</a>
				</Popconfirm>
			),
		},
	];

	state = {
		characters: [],
	};

	componentDidMount() {
		this.loadCharacters();
	}

	loadCharacters = () => {
		const url = "api/v1/characters/index";
		fetch(url)
			.then((data) => {
				if (data.ok) {
					return data.json();
				}
				throw new Error("Network error.");
			})
			.then((data) => {
				data.forEach((character) => {
					const newEl = {
						key: character.id,
						id: character.id,
						name: character.name,
						movie: character.movie,
						powers: character.powers,
						age: character.age,
					};

					this.setState((prevState) => ({
						characters: [...prevState.characters, newEl],
					}));
				});
			})
			.catch((err) => message.error("Error: " + err));
	};

	reloadCharacters = () => {
		this.setState({ characters: [] });
		this.loadCharacters();
	};

	deleteBeer = (id) => {
		const url = `api/v1/characters/${id}`;

		fetch(url, {
			method: "delete",
		})
			.then((data) => {
				if (data.ok) {
					this.reloadCharacters();
					return data.json();
				}
				throw new Error("Network error.");
			})
			.catch((err) => message.error("Error: " + err));
	};

	render() {
		return (
			<>
				<Table
					className="table-striped-rows"
					dataSource={this.state.characters}
					columns={this.columns}
					pagination={{ pageSize: 5 }}
				/>

				<AddCharacterModal reloadCharacters={this.reloadCharacters} />
			</>
		);
	}
}

export default Characters;