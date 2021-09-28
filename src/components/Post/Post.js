import React from 'react'
import { FaHeart, FaShareAlt } from 'react-icons/fa'
import styles from './Post.module.scss'
import PropTypes from 'prop-types'

const Post = ({ content, date }) => {
  return (
    <>
      <p className={styles.postContent}>
        {content}
      </p>
      <ul className={styles.postMeta}>
        <li className={styles.postMetaData}><FaHeart />34</li>
        <li className={styles.postMetaData}><FaShareAlt />Share</li>
        <li className={styles.postMetaData}>{date}</li>

      </ul>
    </>
  )
}

Post.propTypes = {
  content: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired
}

export default Post
