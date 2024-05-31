import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';


const Documentation = () => {
  let { id } = useParams();

 

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Here is the matchup!</h1>
      </div>

        <div className="blog-post">
          <h2 className="blog-post-title">Blog Post Title</h2>
          <p className="blog-post-meta">January 1, 2022 by <a href="#">Author</a></p>
          <p>This is some sample blog post content. You can replace this with actual content.</p>
        </div>
      
    </div>
  );
};

export default Documentation;