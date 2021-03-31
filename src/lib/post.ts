import fileSistem from "fs";
import path from "path";
import matter from "gray-matter";

import remark from "remark";
import html from "remark-html";

interface postDataType {
  id: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

const postsDirectory = path.join(process.cwd(), "src/posts");

export function getSortedPostsData() {
  const fileNames = fileSistem.readdirSync(postsDirectory);

  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);

    // Read markdown file as string
    const fileContents = fileSistem.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return <postDataType>{
      id,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fileSistem.readdirSync(postsDirectory);

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fileSistem.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Data, id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
