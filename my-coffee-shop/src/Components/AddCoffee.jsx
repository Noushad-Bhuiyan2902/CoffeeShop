import React from "react";

const AddCoffee = () => {
  const handleAddcoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

    console.log(newCoffee);

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('After adding coffee to database, ',data);
      });
  };
  return (
    <div className="bg-[#F4F3F0] rounded-lg flex items-center justify-center p-10 flex-col gap-2">
      <h1 className="text-4xl font-bold ">Add Coffee</h1>
      <p className="text-center w-7/12">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form onSubmit={handleAddcoffee}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <fieldset className="fieldset rounded-box w-xs">
            <label className="label">Name</label>
            <input
              name="coffee"
              type="text"
              className="input"
              placeholder="Coffee name"
            />
          </fieldset>
          <fieldset className="fieldset rounded-box w-xs">
            <label className="label">Quantity</label>
            <input
              name="quantity"
              type="text"
              className="input"
              placeholder="Number of coffees"
            />
          </fieldset>
          <fieldset className="fieldset rounded-box w-xs">
            <label className="label">Supplier</label>
            <input
              name="supplier"
              type="text"
              className="input"
              placeholder="Supplier name"
            />
          </fieldset>
          <fieldset className="fieldset rounded-box  w-xs">
            <label className="label">Taste</label>
            <input
              name="taste"
              type="text"
              className="input"
              placeholder="Your taste"
            />
          </fieldset>
          <fieldset className="fieldset rounded-box  w-xs">
            <label className="label">Category</label>
            <input
              name="category"
              type="text"
              className="input"
              placeholder="Choose category"
            />
          </fieldset>
          <fieldset className="fieldset rounded-box w-xs">
            <label className="label">Details</label>
            <input
              name="details"
              type="text"
              className="input"
              placeholder="Details"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset rounded-box w-full">
          <label className="label">Photo</label>
          <input
            name="photoUrl"
            type="text"
            className="input w-full"
            placeholder="Photo url = https//:..."
          />
        </fieldset>
        <button
          type="submit"
          className="btn w-full my-2.5 mx-auto bg-[#D2B48C]"
        >
          Add Coffee
        </button>
      </form>
    </div>
  );
};

export default AddCoffee;
