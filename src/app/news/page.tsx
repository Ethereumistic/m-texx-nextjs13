"use client"
import React from 'react'
import BlogCard from '../components/BlogCard'
import { GraphQLClient, gql } from 'graphql-request'

const graphcms = new GraphQLClient('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clix7xwnx075v01us5z6wehix/master');

const QUERY = gql`
{
  posts{
    id,
    title,
    datePublished,
    slug,
    author{
      name,
      avatar{
        url
      }
    }
    coverPhoto{
      url
    }
  }
}`

interface Post {
  id: string;
  title: string;
  datePublished: string;
  slug: string;
  author: {
    name: string;
    avatar: {
      url: string;
    };
  };
  coverPhoto: {
    url: string;
  };
}

interface QueryResult {
  posts: Post[];
}

export async function getStaticProps() {
  const data: QueryResult = await graphcms.request(QUERY);
  const { posts } = data;

  return {
    props: {
      posts,
    },
  };
}

export default function News({ posts }: { posts: Post[] }) {
  if (!posts || !Array.isArray(posts)) {
    return <div>Loading or no posts available...</div>;
  }

  return (
    <div className=''>
      <h1 className='text-3xl font-oswald mt-40'>Blog</h1>
      <div>
        {posts.map((post: Post) => (
          <BlogCard 
            title={post.title} 
            author={post.author} 
            coverPhoto={post.coverPhoto}
            datePublished={post.datePublished} 
            slug={post.slug} 
            key={post.id} 
          />
        ))}
      </div>
    </div>
  )
}




