// import Counter1 from './component/counter1'
// import UseStateExample2 from './component/userstate_example2'
// import UserReducerExample from './component/userreducer_example'
// import SetStateDemo from './component/usereducer_setstate'

import {useState} from 'react';

import Greeting from './component/Greeting'
import StarRating from './component/star_rating';


export default function App() {
  const [rating, setRating] = useState(2.5);

  const [articles, setArticles] = useState([
    {id: 1, title: "Article 1", rating: 2.5, color: "green"},
    {id: 2, title: "Article 2", rating: 4.5, color: "blue"},
    {id: 3, title: "Article 3", rating: 3.5, color: "purple"},
  ]);

  function action(message) {
    alert(message);
  }

  const handleChange = (value) => {
    alert(value);
    setRating(value);
  }

  const articleRatingChange = (id, ratingValue) => {
    //alert(`${id}-${ratingValue}`);
    let updatedArticles = articles.map(a => {
      if (a.id == id) {
        a.rating = ratingValue;
      }
      return a;
    });
    
    setArticles([...updatedArticles]);
  }
  
  
  return(
    <div>
      <Greeting message="Hello World!" priority="High" callback = {action}/>
      <StarRating value={rating} count={5} size={40} activeColor={'red'} inactiveColor = {'#ddd'} onChange={handleChange} />
      <StarRating value={rating} count= {10} size={40} activeColor={'blue'} inactiveColor = {'#ddd'} onChange={handleChange} />
      <StarRating value={rating} count= {10}  activeColor={'yellow'} onChange={handleChange} />

      {
        articles.map(a => {
          return (
              <div key={a.id}>
                  <h2>{a.title}</h2>
                  <StarRating 
                    count={5}
                    size={30}
                    value={a.rating}
                    activeColor ={a.color}
                    inactiveColor={'#ddd'}
                    onChange={(value) => {articleRatingChange(a.id, value)}}                     /> 
              </div>
          )
        })
      }

    </div>
  )
}