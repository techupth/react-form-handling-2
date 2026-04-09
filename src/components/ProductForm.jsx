import { useState } from "react"


function ProductForm() {
  // state ค่าต่างๆ ที่จะเปลี่ยนได้
  const [ name, setName ] = useState("");
  const [ price, setPrice] = useState("");
  const [ image, setImage] = useState("");
  const [ description, setDescription] = useState("")

  //handle เมื่อกดปุ่ม Create ใส่ event prevent default ให้จอไม่รีเฟรช 
  const handleSubmit = (event) => {
    event.preventDefault();
  //สร้าง object เพื่อเอาข้อมูลจาก state มามัดรวมกัน

  const allData = {
    name: name,
    price: Number(price),
    image: image,
    description: description
  };

  alert(JSON.stringify(allData, null, 2));

  }




  return (
    <form className="post-form"  onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      {/* ช่อง Name: ใช้ State 'name' และฟังก์ชัน 'setName' */}
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </div>

      {/* ช่อง Image Url: ใช้ State 'image' และฟังก์ชัน 'setImage' */}
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </label>
      </div>

      {/* ช่อง Price: ใช้ State 'price' และฟังก์ชัน 'setPrice' */}
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </label>
      </div>
      {/* ช่อง Description: ใช้ State 'description' และฟังก์ชัน 'setDescription' */}
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
