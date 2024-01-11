const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { data: null, error: `Server error! Status: ${response.status}`}
    }
    const data = await response.json();
    return { data, error: null };
  }
  catch (error) {
    return { data: null, error: `Error fetching data: ${error}`}
  }
};

export default fetchData
