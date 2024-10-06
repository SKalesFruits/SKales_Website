import React, { useState } from "react";
import "../styles/StockManagement.css";
interface Product {
  productId: number;
  productName: string;
  productSource: string;
  productAddedDate: string;
  productDescription: string;
  productStockPerKg: number;
  productCostPerKg: number;
  popularityRating: number;
  productType: string;
  productReviews: number;
}

const initialProductData: Product[] = [
  {
    productId: 1,
    productName: "Mangoes",
    productSource: "XYZ",
    productAddedDate: "2024-05-21",
    productDescription: "Lorem Ipsum",
    productStockPerKg: 20,
    productCostPerKg: 320,
    popularityRating: 8,
    productType: "Stone",
    productReviews: 8,
  },
  {
    productId: 2,
    productName: "Apples",
    productSource: "XYZ",
    productAddedDate: "2024-09-02",
    productDescription: "Lorem Ipsum",
    productStockPerKg: 14,
    productCostPerKg: 220,
    popularityRating: 7,
    productType: "Pome",
    productReviews: 5,
  },
  {
    productId: 3,
    productName: "Papayas",
    productSource: "XYZ",
    productAddedDate: "2024-01-01",
    productDescription: "Lorem Ipsum",
    productStockPerKg: 40,
    productCostPerKg: 180,
    popularityRating: 4,
    productType: "Others",
    productReviews: 3,
  },
];

const StockManagement: React.FC = () => {
  const [productData, setProductData] = useState<Product[]>(initialProductData);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Product;
    direction: "ascending" | "descending";
  } | null>(null);
  const [addNewProductModal, setAddNewProductModalActive] = useState(false);
  const [prdNameInputChange, setPrdNameInputChange] = useState("");
  const [prdSourceInputChange, setPrdSourceInputChange] = useState("");
  const [prdDescInputChange, setPrdDescInputChange] = useState("");
  const [stockInputChange, setStockInputChange] = useState(0);
  const [costInputChange, setCostInputChange] = useState(0);
  const [imgInputChange, setImgInputChange] = useState("");
  const [prdType, setPrdType] = useState("");

  const handleAddProduct = async () => {
    try {
      await fetch(`/api/orders/productnew`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productName: prdNameInputChange,
          productSource: prdSourceInputChange,
          productDesc: prdDescInputChange,
          productStock: stockInputChange,
          productCost: costInputChange,
          productImg: imgInputChange,
          productType: prdType,
        }),
      });
    } catch (err) {
      console.error(err);
    }

    setProductData((prev) => [
      ...prev,
      {
        productId: productData.length + 1,
        productName: prdNameInputChange,
        productSource: prdSourceInputChange,
        productAddedDate: new Date().toString(),
        productDescription: prdDescInputChange,
        productStockPerKg: stockInputChange,
        productCostPerKg: costInputChange,
        popularityRating: 0,
        productType: prdType,
        productReviews: 0,
      },
    ]);
    setAddNewProductModalActive(false);
  };

  const handleStatusChange = async (
    productId: number,
    newValue: string,
    fieldName: string
  ) => {
    // Simulate API call
    await fetch(`/api/orders/${productId}/status`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newValue }),
    });

    setProductData((prevData) =>
      prevData.map((prd) =>
        prd.productId === productId ? { ...prd, [fieldName]: newValue } : prd
      )
    );
  };

  const onSort = (key: keyof Product) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
    setProductData((prevData) =>
      [...prevData].sort((a, b) => {
        if (a[key] < b[key]) {
          return direction === "ascending" ? -1 : 1;
        }
        if (a[key] > b[key]) {
          return direction === "ascending" ? 1 : -1;
        }
        return 0;
      })
    );
  };
  const handlePrdNameInputChange = (text: string) => {
    setPrdNameInputChange(text);
  };
  const handlePrdSourceInputChange = (text: string) => {
    setPrdSourceInputChange(text);
  };
  const handlePrdDescInputChange = (text: string) => {
    setPrdDescInputChange(text);
  };
  const handleStockInputChange = (text: number) => {
    setStockInputChange(text);
  };
  const handleCostInputChange = (text: number) => {
    setCostInputChange(text);
  };
  const handleImgInputChange = (text: string) => {
    setImgInputChange(text);
  };
  const handlePrdTypeInputChange = (text: string) => {
    setPrdType(text);
  };
  return (
    <div className="order-status">
      <h3>Order status</h3>
      <button
        id="add-new-product-btn"
        onClick={() => setAddNewProductModalActive(true)}
      >
        Add New Product
      </button>
      <div className="orders-list">
        <table>
          <thead>
            <tr>
              <th onClick={() => onSort("productId")}>Product ID</th>
              <th onClick={() => onSort("productName")}>Product Name</th>
              <th onClick={() => onSort("productStockPerKg")}>
                Product Stock/kg
              </th>
              <th onClick={() => onSort("productCostPerKg")}>
                Product Cost/kg
              </th>
              <th onClick={() => onSort("productSource")}>Product Seller</th>
              <th onClick={() => onSort("productDescription")}>
                Product Description
              </th>
            </tr>
          </thead>
          <tbody>
            {productData.map((prd) => (
              <tr key={prd.productId}>
                <td>#{prd.productId}</td>
                <td>{prd.productName}</td>
                <td>
                  <input
                    value={prd.productStockPerKg}
                    onChange={(e) =>
                      handleStatusChange(
                        prd.productId,
                        e.target.value,
                        "productStockPerKg"
                      )
                    }
                    type={"number"}
                  ></input>
                </td>
                <td>
                  <input
                    value={prd.productCostPerKg}
                    onChange={(e) =>
                      handleStatusChange(
                        prd.productId,
                        e.target.value,
                        "productCostPerKg"
                      )
                    }
                    type={"number"}
                  ></input>
                </td>
                <td>{prd.productSource}</td>
                <td>
                  <input
                    value={prd.productDescription}
                    onChange={(e) =>
                      handleStatusChange(
                        prd.productId,
                        e.target.value,
                        "productDescription"
                      )
                    }
                    type={"text"}
                  ></input>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {addNewProductModal ? (
        <div className="overlay-stock">
          <div className="add-new-modal">
            <p id="add-new-title">Add New Product</p>
            <div className="modal-content-stock">
              <div className="modal-titles">
                <p>Product Name:</p>
                <p>Product Source:</p>
                <p>Product Description:</p>
                <p>Product Stock (per kg):</p>
                <p>Product Cost (per kg):</p>
                <p>Product Image:</p>
                <p>Product Type:</p>
              </div>
              <div className="modal-input">
                <input
                  type={"text"}
                  id="modal-input-item"
                  onChange={(e) => handlePrdNameInputChange(e.target.value)}
                ></input>
                <input
                  type={"text"}
                  id="modal-input-item"
                  onChange={(e) => handlePrdSourceInputChange(e.target.value)}
                ></input>
                <input
                  type={"text"}
                  id="modal-input-item"
                  onChange={(e) => handlePrdDescInputChange(e.target.value)}
                ></input>
                <input
                  type={"number"}
                  id="modal-input-item"
                  onChange={(e) =>
                    handleStockInputChange(parseInt(e.target.value))
                  }
                ></input>
                <input
                  type={"number"}
                  id="modal-input-item"
                  onChange={(e) =>
                    handleCostInputChange(parseInt(e.target.value))
                  }
                ></input>
                <input
                  type={"string"}
                  id="modal-input-item"
                  onChange={(e) => handleImgInputChange(e.target.value)}
                ></input>
                <input
                  type={"string"}
                  id="modal-input-item"
                  onChange={(e) => handlePrdTypeInputChange(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="product-btns">
              <button
                id="add-product-submit-btn"
                onClick={() => handleAddProduct()}
              >
                Add Product
              </button>
              <button
                id="add-product-submit-btn"
                onClick={() => setAddNewProductModalActive(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default StockManagement;
