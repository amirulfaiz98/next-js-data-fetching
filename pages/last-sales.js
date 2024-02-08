import { useState, useEffect } from "react";

import useSWR from "swr";

function LastSalesPage(props) {
  const [sales, etSales] = useState(props.sales);
  //   const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR(
    "https://nextjs-course-c81cc-default-rtdb.firebaseio.com/sales.json"
  );

  useEffect(() => {
    const transformedSales = [];

    for (const key in data) {
      transformedSales.push({
        id: key,
        username: data[key].username,
        volume: data[key].volume,
      });
    }

    setSales(transformedSales);
  }, [data]);
  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch("https://nextjs-course-c81cc-default-rtdb.firebaseio.com/sales.json")
  //       .then((responese) => response.json)
  //       .then((data) => {
  //         const transformedSales = [];

  //         for (const key in data) {
  //           transformedSales.push({
  //             id: key,
  //             username: data[key].username,
  //             volume: data[key].volume,
  //           });
  //         }

  //         setSales();
  //         setIsLoading(false);
  //       }); // put link such as firebase in fetch example: 'https://nextjs-course-c81cc-default-rtdb.firebaseio.com/sales.json'
  //   }, []);

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  return fetch("https://nextjs-course-c81cc-default-rtdb.firebaseio.com/sales.json");
   
    const data = await response.json();

      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      return {props: {
        sales: transformedSales
      },
      revalidate: 10
    };
    
}

export default LastSalesPage;
