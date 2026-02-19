import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/blog");

export function getPosts() {
    const files = fs.readdirSync(postsDir);

    return files.map((filename) => {
        const slug = filename.replace(".md", "");
        const filePath = path.join(postsDir, filename);
        const content = fs.readFileSync(filePath, "utf-8");

        const { data } = matter(content);

        return {
            slug,
            ...data,
        };
    }).sort((a: any, b: any) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string) {
    const filePath = path.join(postsDir, `${slug}.md`);
    const content = fs.readFileSync(filePath, "utf-8");

    const { data, content: body } = matter(content);

    return {
        slug,
        ...data,
        content: body,
    };
}