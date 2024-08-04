import ProductList from "@/components/ ProductList";
import SearchForm from "@/components/SearchForm";
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import axios from '@/lib/axios';
import Head from "next/head";




export default function Search() {
    const [products, setProducts] = useState([]);
    const router = useRouter();
    const { q } = router.query;
  
    async function getProducts(query) {
      const res = await axios.get(`/products/?q=${query}`);
      const nextProducts = res.data.results;
      setProducts(nextProducts);
    }
  
    useEffect(() => {
      getProducts(q);
    }, [q]);

    return(
    <div>
        <Head>
        <title>{q} 검색결과 - Codeitmall</title>
        </Head>
        <SearchForm initialValue={q} />
        <ProductList  products={products}/>
    </div>
    )
}