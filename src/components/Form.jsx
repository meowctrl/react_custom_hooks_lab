import { useLocalStorage } from "../hooks/useLocalStorage";
function Form() {
  const [name, setName] = useLocalStorage("name", '');
  const [serviceNumber, setServiceNumber] = useLocalStorage("service", "")
    return (
      <>
        <form style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="name">Name:</label>
            <input type="text" data-testid={"name"} onChange={(e) => setName(e.target.value)} value={name}/>
            <label htmlFor="service">Service Number:</label>
            <input type="text" data-testid={"service"}  onChange={(e) => setServiceNumber(e.target.value)} value={serviceNumber}/>

        </form>
        <h4>{name ? `Welcome, ${name}!` : "Enter your name"}</h4>
      </>
    );
}

export default Form;