const App = () => {
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
      <div></div>
    </div>
   );
}
 
export default App;