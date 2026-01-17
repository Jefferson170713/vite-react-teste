import Card from "./components/Card";

const App = () => {

  const [produtos, setProdutos] = useSetate([]);

  async function buscarPprodutos(params) {
    const request = await fetch("https://fakestoreapi.com/products");
    const response = await request.json()

    setProdutos(response);
  }
  return ( 
    <div>
      <header className="flex justify-between px-15 py-4 bg-blue-400">
        <input 
          type="text"
          placeholder="Digite o nome do produto"
          className="h-12 bg-white pl-4 w-100 rounded focus:outline-amber-300"
        />
        <div className="flex gap-4">
          <select name="" id="" className="h-12 bg-white px-4 rounded outline-0">
            <option value="">Escolha a categoria A</option>
            <option value="">Escolha a categoria C</option>
            <option value="">Escolha a categoria B</option>
          </select>
          <select name="" id="" className="h-12 bg-white px-4 rounded outline-0">
            <option value="">Escolha a categoria A</option>
            <option value="">Escolha a categoria C</option>
            <option value="">Escolha a categoria B</option>
          </select>
        </div>
      </header>

      <div>
        {/* <Card nome={"Produto 1"} categoria={"Categoria A"} preco={"9,99"}/>
        <Card nome={"Produto 2"} categoria={"Categoria B"} preco={"9,99"}/>
        <Card nome={"Produto 3"} categoria={"Categoria C"} preco={"9,99"}/> */}
      </div>

    </div>
   );
}
 
export default App;