import { useParams } from 'react-router-dom';
import data from '../data.json';
import s from './PostPage.module.css';

const PostPage = () => {
    const {id} = useParams();
    const selectedElement = data.find(el => el.id == id)

    return (
        <div className={s.postPage}>
            <h1 className={s.postPageTitle}>{selectedElement.title}</h1>
            <img className={s.postPageImg} src={selectedElement.imageUrl} alt="..." />
            <div className={s.postPageDescription}>{selectedElement.description}</div>
            <div className={s.comment}>
                <h3>Experts Comment</h3>
                <div className={s.postPageComment}>{selectedElement.expertComment}</div>
            </div>
        </div>
    )
}

export default PostPage;

// const [posts, setPosts] = useState([]);
//     useEffect(() => {
//         setPosts(data);
//   }, []);
//     return (
//         <div className="app-content">
//       {
//         posts.map((item) => (
//           <Card title={item.title} key={item.id} imageUrl={item.imageUrl} id={item.id} />
//         ))
//       }
//     </div>
//     )