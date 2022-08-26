import { Button, Form, Input, Modal, Select } from "antd";
import React from "react";

const { Option } = Select;

class AddBeerModal extends React.Component {
	formRef = React.createRef();
	state = {
		visible: false,
	};

	onFinish = (values) => {
		const url = "api/v1/characters/";
		fetch(url, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		})
			.then((data) => {
				if (data.ok) {
					this.handleCancel();

					return data.json();
				}
				throw new Error("Network error.");
			})
			.then(() => {
				this.props.reloadCharacters();
			})
			.catch((err) => console.error("Error: " + err));
	};

	showModal = () => {
		this.setState({
			visible: true,
		});
	};

	handleCancel = () => {
		this.setState({
			visible: false,
		});
	};

	render() {
		return (
			<>
				<Button type="primary" onClick={this.showModal}>
					Create New +
				</Button>

				<Modal
					title="Add New Character ..."
					visible={this.state.visible}
					onCancel={this.handleCancel}
					footer={null}
				>
					<Form ref={this.formRef} layout="vertical" onFinish={this.onFinish}>
						<Form.Item
							name="name"
							label="Name"
							rules={[
								{ required: true, message: "Please input your character's name!" },
							]}
						>
							<Input placeholder="Input your character's name" />
						</Form.Item>

						<Form.Item
							name="movie"
							label="Movie"
							rules={[
								{ required: true, message: "Please input your character's movie!" },
							]}
						>
							<Input placeholder="Input your character's movie!" />
						</Form.Item>

						<Form.Item
							name="powers"
							label="Powers"
							rules={[
								{
									required: true,
									message: "Please input your character's powers!",
								},
							]}
						>
							<Select
								showSearch
								placeholder="Select your character's powers"
								optionFilterProp="children"
								style={{ width: "100%" }}
							>
								<Option value="Invisibility">Invisibility</Option>
								<Option value=" Strength"> Strength</Option>
								<Option value="Speed">Speed</Option>
								<Option value="Manipulator">Manipulator</Option>
								
							</Select>
						</Form.Item>

						<Form.Item
							name="age"
							label="Age"
							rules={[
								{ required: true, message: "Please input the age!" },
							]}
						>
							<Input type="number" placeholder="How old is your character?" />
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Modal>
			</>
		);
	}
}

export default AddCharacterModal;