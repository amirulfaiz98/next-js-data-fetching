import { useEffect } from "react";

function LastSalesPage() {
    const [sales, etSales] =  useState();
    const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch().then((responese) => response.json)
    .then(data => {
        const transformedSales = [];

        for (const key in data) {
            transformedSales.push({id: key, username: data[key].username, volume: data[key].volume});
        }

        setSales();
        setIsLoading(false);
    }); // put link such as firebase in fetch example: 'https://nextjs-course-c81cc-default-rtdb.firebaseio.com/sales.json'
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!sales) {
      return <p>No data yet!</p>;
  }

  return <ul>
    {sales.map((sale) => <li key={sale.id}>
      {sale.username} - ${sale.volume}
    </li>)}
  </ul>
}

export default LastSalesPage;
