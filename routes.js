
import CardsIndexComponent from "./src/components/cardIndexComponent";
import CardDetailComponent from "./src/components/CardDetailComponent";

export const routes = [
        {path:"/", component:CardsIndexComponent},
        {path:"/:details?" ,component:CardDetailComponent}
];

