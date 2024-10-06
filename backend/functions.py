import hmac
import hashlib
import config

import psycopg2


def validate_payment(order_id, payment_id, signature):
    # Create a HMAC SHA256 digest
    key_secret = b"VNFvKVgrqt6uFAh7vXjTaCOL"
    message = f"{order_id}|{payment_id}".encode('utf-8')

    digester = hmac.new(key_secret, message, hashlib.sha256)
    digest = digester.hexdigest()

    return digest == signature


def get_orders(user_id):
    connection = None
    cursor = None
    try:
        connection = psycopg2.connect(
            user="postgres",
            password="post1234",
            host="127.0.0.1",
            port="5432",
            database="s_kales"
        )

        cursor = connection.cursor()

        print("Connected to PostgreSQL database")

        orders_query = "SELECT * FROM s_kales.dev_skales.orders WHERE user_id = %s"

        cursor.execute(orders_query, (user_id,))

        rows = cursor.fetchall()

        columns = [desc[0] for desc in cursor.description]

        result = [dict(zip(columns, row)) for row in rows]

        return result

    except Exception as error:
        print("Error connecting to PostgreSQL:", error)
        return None  # Return None if an error occurs

    finally:
        # Ensure that cursor and connection are closed properly
        if cursor:
            cursor.close()
        if connection:
            connection.close()
