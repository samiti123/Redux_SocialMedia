import React, { useState } from 'react';
import { useStyles } from './styles';
import Popper from '@material-ui/core/Popper';
import { deleteReaction, likePost } from '../../../Redux/Action/postAction';
import { useDispatch } from 'react-redux';

import {
  AiFillLike,
  AiFillDislike,
  AiFillHeart,
  AiFillFrown,
} from 'react-icons/ai';

import {
  FaRegGrinSquintTears,
  FaAngry,
  FaRegLaughSquint,
} from 'react-icons/fa';

export default function ({ post, anchorEl, open }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const IconForReaction = {
    Like: <AiFillLike />,
    Hate: <AiFillDislike />,
    Love: <AiFillHeart />,
    Angry: <FaAngry />,
    Frown: <AiFillFrown />,
    Rofl: <FaRegGrinSquintTears />,
    Lol: <FaRegLaughSquint />,
  };

  const [state, setState] = useState({
    reaction: {
      Like: post.yourReactions.Like || false,
      Hate: post.yourReactions.Hate || false,
      Frown: post.yourReactions.Frown || false,
      Angry: post.yourReactions.Angry || false,
      Lol: post.yourReactions.LOl || false,
      Love: post.yourReactions.Love || false,
      Rofl: post.yourReactions.Rolf || false,
    },
  });

  return (
    <>
      <Popper id={post.id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>
          {Object.keys(IconForReaction).map((reaction) => (
            <button
              className={post.yourReactions[reaction] ? classes.like : ''}
              key={reaction}
              onClick={(e) => {
                post.yourReactions[reaction]
                  ? dispatch(deleteReaction(post.id, reaction))
                  : dispatch(likePost(post.id, reaction));
              }}
            >
              {IconForReaction[reaction]}
            </button>
          ))}
        </div>
      </Popper>
    </>
  );
}
