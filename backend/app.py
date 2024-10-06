from flask import Flask, request, jsonify
from config import razorpay_client
from functions import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# API to create a Razorpay order


@app.route('/order', methods=['POST'])
def create_order():
    try:
        options = request.json
        order = razorpay_client.order.create(options)

        if not order:
            return jsonify({'error': 'ERROR'}), 500

        return jsonify(order)
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'ERROR'}), 500


@app.route('/order/validate', methods=['POST'])
def validate_order():
    try:
        data = request.json
        razorpay_order_id = data.get('razorpay_order_id')
        razorpay_payment_id = data.get('razorpay_payment_id')
        razorpay_signature = data.get('razorpay_signature')

        is_valid = validate_payment(
            razorpay_order_id, razorpay_payment_id, razorpay_signature)

        if not is_valid:
            return jsonify({'msg': 'Transaction is not legit'}), 400

        return jsonify({
            'msg': 'Success',
            'orderId': razorpay_order_id,
            'paymentId': razorpay_payment_id
        })
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'ERROR'}), 500


@app.route('/order/user/fetch', methods=['POST'])
def fetch_orders():
    try:
        data = request.json
        user_id = data.get('user_id')

        if not user_id:
            return jsonify({"error": "user_id is required"}), 400

        print("User ID:", user_id)
        orders = get_orders(user_id)

        if orders is None:
            return jsonify({"error": "No orders found for user"}), 404

        # Return a JSON response with the orders
        return jsonify({"orders": orders}), 200

    except Exception as error:
        print("Error fetching orders with user_id:", error)
        return jsonify({"error": str(error)}), 500


if __name__ == '__main__':
    app.run(port=5000, debug=True)
