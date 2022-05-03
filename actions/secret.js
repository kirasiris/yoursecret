import { toast } from "react-toastify";
import api from "../helpers/api";

export const getSecrets = (params) => async (dispatch) => {
	try {
		const res = await api.get(`/extras/secrets${params}`);

		return res.data;
	} catch (err) {
		// const error = err.response.data.message;
		const error = err?.response?.data?.error?.errors;
		const errors = err?.response?.data?.errors;

		if (error) {
			// dispatch(setAlert(error, 'danger'));
			error &&
				Object.entries(error).map(([, value]) => toast.error(value.message));
		}

		if (errors) {
			errors.forEach((error) => toast.error(error.msg));
		}

		toast.error(err?.response?.statusText);
		return { msg: err?.response?.statusText, status: err?.response?.status };
	}
};

export const addSecret = (formData) => async (dispatch) => {
	try {
		const res = await api.post(`/extras/secrets`, formData);
		toast.success("Secret added");
		return res.data;
	} catch (err) {
		// const error = err.response.data.message;
		const error = err?.response?.data?.error?.errors;
		const errors = err?.response?.data?.errors;

		if (error) {
			// dispatch(setAlert(error, 'danger'));
			error &&
				Object.entries(error).map(([, value]) => toast.error(value.message));
		}

		if (errors) {
			errors.forEach((error) => toast.error(error.msg));
		}

		toast.error(err?.response?.statusText);
		return { msg: err?.response?.statusText, status: err?.response?.status };
	}
};

// @desc     Like a secret
// @route    PUT /api/v1/extras/secrets/:id/like
// @access   Private
// @status   DONE
export const addLike = (id) => async (dispatch) => {
	try {
		const res = await api.put(`/extras/secrets/${id}/like`);

		toast.success("Secret liked");
		return {
			id,
			likes: res.data,
		};
	} catch (err) {
		// const error = err.response.data.message;
		const error = err?.response?.data?.error?.errors;
		const errors = err?.response?.data?.errors;

		if (error) {
			// dispatch(setAlert(error, 'danger'));
			error &&
				Object.entries(error).map(([, value]) => toast.error(value.message));
		}

		if (errors) {
			errors.forEach((error) => toast.error(error.msg));
		}

		toast.error(err?.response?.statusText);
		return { msg: err?.response?.statusText, status: err?.response?.status };
	}
};

// @desc     Dislike a secret
// @route    PUT /api/v1/extras/secrets/:id/dislike
// @access   Private
// @status   DONE
export const removeLike = (id) => async (dispatch) => {
	try {
		const res = await api.put(`/extras/secrets/${id}/dislike`);

		toast.success("Secret unliked");
		return {
			id,
			likes: res.data,
		};
	} catch (err) {
		// const error = err.response.data.message;
		const error = err?.response?.data?.error?.errors;
		const errors = err?.response?.data?.errors;

		if (error) {
			// dispatch(setAlert(error, 'danger'));
			error &&
				Object.entries(error).map(([, value]) => toast.error(value.message));
		}

		if (errors) {
			errors.forEach((error) => toast.error(error.msg));
		}

		toast.error(err?.response?.statusText);
		return { msg: err?.response?.statusText, status: err?.response?.status };
	}
};
