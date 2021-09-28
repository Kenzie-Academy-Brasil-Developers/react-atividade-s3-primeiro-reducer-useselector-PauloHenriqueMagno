//importando useSelector do react-redux
import { useSelector } from "react-redux";

const FruitsPage = () => {
	//acessando o estado global e pegando o state fruits
  const fruits = useSelector(state => state.fruits);

  return (
    <div className="fruit_list">
      {fruits.map((fruit) => (
        <div key={fruit.name} className="fruit">
          <img src={fruit.image} alt={fruit.name}/> 
          <p>{fruit.name}</p>
        </div>
      ))}
    </div>
  );
}

export default FruitsPage;