import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardComponent({ img, title, description, price, oldPrice }) {
  return (
    <div
      className="relative group overflow-hidden"
      style={{ width: "19rem", marginBottom: "20px" }}
    >
      {/* Card Content */}
      <Card className="transition duration-300 group-hover:opacity-80">
        <Card.Img variant="top" src={img} />
        <div className="cardbody bg-gray-100">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <h5>
              <strong>{price}</strong>{" "}
              {oldPrice && (
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "gray",
                    fontSize: "0.9rem",
                  }}
                >
                  {oldPrice}
                </span>
              )}
            </h5>
          </Card.Body>
        </div>
      </Card>

      {/* Overlay with Add to Cart Button */}
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded shadow-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default CardComponent;
