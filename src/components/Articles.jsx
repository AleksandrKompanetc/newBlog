import { useState, useEffect } from 'react';
import s from './Articles.module.css';
import data from '../data.json';
import Card from './Card';

const Articles = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        setPosts(data);
  }, []);
    return (
      <div className={s.appContent}>
        {
          posts.map((item) => (
            <Card title={item.title} key={item.id} imageUrl={item.imageUrl} id={item.id} />
          ))
        }
      </div>
    )
}

export default Articles;