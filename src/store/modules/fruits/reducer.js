import Apple from "../../../components/images/apple.png"
import Kiwi from "../../../components/images/kiwi.png"
import Orange from "../../../components/images/orange.png"

const initialState = [
  {
    name: "Kiwi",
    image: Kiwi
  }, 
  { 
    name:"Maçã",
    image: Apple
  },
  {
    name: "Laranja",
    image: Orange
  }];

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default fruitsReducer;