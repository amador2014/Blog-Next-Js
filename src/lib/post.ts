import fileSistem from "fs";
import path from "path";
import matter from "gray-matter";

interface postDataType {
  id: string,
  title: string,
  date: string
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
    return <postDataType> {
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
