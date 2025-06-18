import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardComponent({ img, title, description, price, oldPrice }) {
  return (
    <div className="relative group w-full max-w-xs mx-auto sm:max-w-sm md:max-w-[17rem] lg:max-w-[18rem] xl:max-w-[19rem]">
      {/* Card Content */}
      <Card className="transition duration-300 group-hover:opacity-80 h-full">
        <Card.Img variant="top" src={img} className="object-cover" />
        <div className="cardbody bg-gray-100">
          <Card.Body>
            <Card.Title className="text-lg font-semibold">{title}</Card.Title>
            <Card.Text className="text-sm text-gray-600">{description}</Card.Text>
            <h5 className="mt-2">
              <strong>{price}</strong>{" "}
              {oldPrice && (
                <span className="line-through text-gray-500 text-sm ml-2">
                  {oldPrice}
                </span>
              )}
            </h5>
          </Card.Body>
        </div>
      </Card>

      {/* Overlay Button */}
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded shadow-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default CardComponent;
