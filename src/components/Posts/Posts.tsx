import React, { useEffect, useState } from 'react';
import './Posts.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedUserID, getUserPostsFromStore } from '../../store/selectors';
import { getUserPosts } from '../../api/api';
import { setUserPosts } from '../../store';

export const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const selectUserID = useSelector(getSelectedUserID);
  const posts = useSelector(getUserPostsFromStore);
  const [selectPostId, setSelectPostId] = useState<number>(0);

  useEffect(() => {
    const loadUserPostsFromServer = async (id: number) => {
      try {
        const response = await getUserPosts(id);

        dispatch(setUserPosts(response));
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('Error try later');
      }
    };

    if (selectUserID) {
      loadUserPostsFromServer(selectUserID);
    }
  }, [selectUserID]);

  const showPost = (post:Post) => {
    if (selectPostId !== post.id) {
      setSelectPostId(post.id);
    } else {
      setSelectPostId(0);
    }
  };

  return (
    <div className="post">
      {
        posts.map(post => (
          <div className="post__box" key={post.id}>
            <h2
              onClick={() => showPost(post)}
              aria-hidden="true"
              className="post__title"
            >
              {post.title}
            </h2>
            {
              selectPostId === post.id && (
                <p className="post__description">{post.body}</p>
              )
            }
          </div>
        ))
      }
    </div>
  );
};
