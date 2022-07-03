import { addSecret } from "@/actions/secret";
import { useState } from "react";
// ACTIONS
// HELPERS
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SecretForm = ({ objects = [], setObjects }) => {
	const [submitButtonText, setButtonText] = useState(`Submit`); // Done
	const [validated, setValidated] = useState(false);
	const [, setError] = useState(false);

	const [secretData, setSecretData] = useState({
		age: 0,
		sex: `other`,
		text: ``,
		nsfw: false,
	});

	const { age, sex, text, nsfw } = secretData;

	const sendSecret = async (e) => {
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		}
		e.preventDefault();
		setValidated(true);
		await addSecret(secretData)()
			.then((result) => {
				setObjects([result.data, ...objects]);
				setButtonText(`Submitted`);
				resetForm();
			})
			.catch((err) => {
				setError(err);
			});
	};

	const handleChange = (name) => (e) => {
		setSecretData({ ...secretData, [name]: e.target.value });
	};

	const resetForm = () => {
		setSecretData({
			age: 0,
			sex: `other`,
			text: ``,
			nsfw: false,
		});
	};

	return (
		<>
			<h1 className="display-1 text-center">Secrets</h1>
			<hr />
			<Form
				className={`form row`}
				noValidate
				validated={validated}
				onSubmit={sendSecret}
			>
				<div className="form-group col-md-4">
					<Form.Label htmlFor={`age`}>Age:</Form.Label>
					<Form.Control
						type="number"
						name="age"
						id="age"
						placeholder="Age"
						min={1}
						max={100}
						value={age && Math.max(0, age)}
						onChange={handleChange("age")}
						required
					/>
				</div>
				<div className="form-group col-md-4">
					<Form.Label htmlFor={`sex`}>Sex:</Form.Label>
					<Form.Control
						as={`select`}
						aria-label={`sex`}
						aria-describedby={`sex-text`}
						name={`sex`}
						id={`sex`}
						value={sex}
						onChange={handleChange("sex")}
						required
					>
						<option value={`male`}>Male</option>
						<option value={`female`}>Female</option>
						<option value={`other`}>Other</option>
					</Form.Control>
				</div>
				<div className="form-group col-md-4">
					<Form.Label htmlFor={`nsfw`}>NSFW:</Form.Label>
					<Form.Control
						as={`select`}
						aria-label={`nsfw`}
						aria-describedby={`nsfw-text`}
						name={`nsfw`}
						id={`nsfw`}
						value={nsfw}
						onChange={handleChange("nsfw")}
						required
					>
						<option value={`true`}>True</option>
						<option value={`false`}>False</option>
					</Form.Control>
				</div>
				<div className="form-group col-md-12">
					<Form.Label htmlFor={`text`}>Message:</Form.Label>
					<Form.Control
						as={`textarea`}
						name={`text`}
						cols={`30`}
						rows={`3`}
						placeholder={`Here goes the message`}
						id={`text`}
						value={text}
						onChange={handleChange("text")}
						required
					/>
				</div>

				<div className="mt-3">
					<Button
						type={`submit`}
						variant={`dark`}
						size={`sm`}
						disabled={text.length > 0 ? !true : !false}
						className={`float-start`}
					>
						{submitButtonText}
					</Button>
					<Button
						type={`reset`}
						variant={`secondary`}
						size={`sm`}
						className={`float-end`}
						onClick={resetForm}
					>
						Reset
					</Button>
				</div>
			</Form>
			<div className="clearfix" />
			<hr />
		</>
	);
};

export default SecretForm;
