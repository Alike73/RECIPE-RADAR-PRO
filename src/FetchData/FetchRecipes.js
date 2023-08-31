
const MY_ID = 'ff73d02c';
const MY_KEY = '3482bf3d283e8323a07ae75c81c5a582';

const getRecipes = async (setMyRecipes, wordSubmitted) => {
  
  try {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    if(!response.ok) {
      return null;
    }else {
      const data = await response.json();
      console.log(data.hits)
      setMyRecipes(data.hits)
    }
  }
  catch(err) {
    return null;
  }
}

export { getRecipes };