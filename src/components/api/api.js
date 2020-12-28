import axios from "axios"

const instance = axios.create({
	baseURL: "https://fast-bayou-33505.herokuapp.com/api/v1/"
})

export const OrderApi = {
	sendOrder(payload) {
		return instance.post("orders/order/create/", payload).then(response => response)
	}
}

export const FeedbackApi = {
	sendFeedback(message) {
		return instance.post("orders/order/create/", {email: "twodandv@gmail.com", name: "feedback", order_type: "feedback", message}).then(response => response)
	}
}