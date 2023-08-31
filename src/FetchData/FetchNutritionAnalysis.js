import Swal from "sweetalert2";
import chef from '../Assets/Images/chef3.png';


const FetchNutritionAnalysis = async (APP_URL, APP_ID, APP_KEY, ingr) => {
  const response = await fetch(`${APP_URL}?app_id=${APP_ID}&app_key=${APP_KEY}`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ingr: ingr })
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    // throw new Error('Ingredients entered incorrectly')
    Swal.fire({
      title: 'Sorry',
      text: 'Ingredients entered incorrectly. Example: 1egg 2bananas 1apple, etc',
      imageUrl: chef,
      imageWidth: 150,
      // imageHeight: 200,
      imageAlt: 'Custom image',
    });
  }
};

export default FetchNutritionAnalysis;
