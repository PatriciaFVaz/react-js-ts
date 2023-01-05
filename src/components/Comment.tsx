import { Trash, ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentsProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentsProps) {
  const [likeCount, setLikeCount] = useState(0);


  function handleDeleteComment() {
    onDeleteComment(content);

  }

  function handleLikeComment() {
    setLikeCount((state) =>{
      return state + 1
    });
  }


  return (
    <div className={styles.comment}>
      <Avatar 
      hasBorder={false} 
      src="https://images.pexels.com/photos/6633/car-superhero-symbol-batman.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      alt="" 
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong> Erick Bello </strong>
              <time title="15 de Novembro às 12:43h" dateTime="2022-11-15 12:43:55"> Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}