"use client"
import React from 'react'
import Navbar from '../navbar/page'
import TextBox from '../components/TextBox'
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
    content {
      html
    }
    author{
      name,
      avatar{
        url
      }
    }
    coverPhoto{
      publishedAt{
        createdBy{
          id
        }
        url
      }
    }
  }
}`

// define your interfaces here
interface Post {
  id: string;
  title: string;
  datePublished: string;
  slug: string;
  content: {
    html: string;
  };
  author: {
    name: string;
    avatar: {
      url: string;
    };
  };
  coverPhoto: {
    publishedAt: {
      createdBy: {
        id: string;
      };
      url: string;
    };
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



// define the News component
export default function News({ posts }: any) {
  // If posts are not available or not an array, display a message
  if (!posts || !Array.isArray(posts)) {
    return <div>Loading or no posts available...</div>;
  }

  // If posts are available, map over them and display a BlogCard for each post
  return (
    <div className=''>
      <h1 className='text-3xl font-oswald mt-40'>Blog</h1>
      <div>
        {posts.map((post: any, index: number) => (
          <BlogCard 
            title={post.title} 
            author={post.author} 
            coverPhoto={post.coverPhoto} 
            key={post.key} // for now, use index as key
            datePublished={post.datePublished} 
            slug={post.slug} 
          />
        ))}
      </div>
    </div>
  )
}



