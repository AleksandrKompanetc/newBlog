import { useState, useEffect } from 'react';
import s from './Articles.module.css';
// import data from '../data.json';
import Card from './Card';

import { db } from "../firebase";
import { query, collection, onSnapshot } from "firebase/firestore";

const Articles = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
      const q = query(collection(db, "articles"))
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let articlesArr = []
        querySnapshot.forEach((doc) => {
          articlesArr.push({...doc.data(), id: doc.id})
        });
        setPosts(articlesArr)
      })
      return () => unsubscribe()
    }, []);


  //   useEffect(() => {
  //       setPosts(data);
  // }, []);
    return (
      <div className={s.appContent}>
        {
          posts.map((item) => (
            <Card title={item.title} key={item.id} imageUrl={item.imageUrl} id={item.id} description={item.description} />
          ))
        }
      </div>
    )
}

export default Articles;