'use client'
import React, { useState, useEffect } from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm'
import { ScrollableMarkdown } from './ScrollableMarkdown';
import remarkBreaks from 'remark-breaks'

const MarkdownComponent = ({ url, maxHeight }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(url);
        const markdownText = await response.text();
        const htmlContent = await unified()
            .use(remarkParse)
            .use(remarkGfm)
            .use(remarkBreaks)
            .use(remarkRehype, { allowDangerousHtml: true })
            .use(rehypeRaw)
            .use(rehypeStringify)
          .process(markdownText);
        console.log(htmlContent)
        setContent(htmlContent.toString());
      } catch (error) {
        console.error('Error fetching markdown:', error);
      }
    };

    fetchMarkdown();
  }, [url]);

  return (
    <ScrollableMarkdown dangerouslySetInnerHTML={{ __html: content }} maxHeight={maxHeight} />
  );
};

export default MarkdownComponent;
