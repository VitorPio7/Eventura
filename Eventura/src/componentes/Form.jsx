import Style from "../componentes/css/Form.module.css";
export default function Form({ handleSubmit, data, imageData }) {
  const today = new Date().toISOString().split("T")[0];
  const twoYearsLater = new Date();
  twoYearsLater.setFullYear(twoYearsLater.getFullYear()+2);
  const maxDate = twoYearsLater.toISOString().split("T")[0];

  return (
    <form className={Style.formDiv} onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        minLength="12"
        maxLength="17"
        name="title"
        defaultValue={data?.title ?? ""}
        required
      />
      <label htmlFor="date">Date</label>
      <input type="date" min={today} max={maxDate} name="date" defaultValue={data?.date ?? ""} required />
      <label htmlFor="time">Time</label>
      <input type="time" name="time" defaultValue={data?.time ?? ""} required />
      <label htmlFor="location">Place</label>
      <input
        type="text"
        name="location"
        maxLength="20"
        defaultValue={data?.location ?? ""}
        required
      />
      <label htmlFor="price">Price</label>
      <input
        type="number"
        name="price"
        defaultValue={data?.price ?? ""}
        required
      />
      <label htmlFor="entries">Entries</label>
      <input
        type="number"
        name="entries"
        defaultValue={data?.entries ?? ""}
        required
      />
      <label htmlFor="image">Image</label>
      <select name="image">
        {imageData?.map((el, index) => {
          return (
            <option
              key={index}
              style={{
                backgroundImage: `url(${"http://localhost:3000/" + el.path})`,
              }}
              value={el.path}
            >
              {el.caption}
            </option>
          );
        })}
      </select>
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        maxLength="200"
        required
        defaultValue={data?.description ?? ""}
      ></textarea>
      <button>Send</button>
    </form>
  );
}
