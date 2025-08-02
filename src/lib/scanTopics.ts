import path from "path";
import fs from "fs";

export interface TopicConfig {
    name: string,
    path: string,
    subject: string,
    tags: string[],
    description: string,
    state: "published" | "draft"
}

export interface TopicItem extends TopicConfig {
    fullPath: string,
    configPath: string
}

export function scanTopics(): TopicItem[] {
    const topicsDir = path.join(process.cwd(), "src", "app", "topics");
    const topics: TopicItem[] = [];

    if (!fs.existsSync(topicsDir)) {
        return topics;
    }

    function scanDirectory(dir: string, relativePath: string = "") {
        const entries = fs.readdirSync(dir, { withFileTypes: true });

        for(const entry of entries) {
            if (entry.isDirectory()) {
                const fullDirPath = path.join(dir, entry.name);
                const configPath = path.join(fullDirPath, "config.json");
                const currentRelativePath = path.join(relativePath, entry.name);

                if (fs.existsSync(configPath)) {
                    try {
                        const configContent = fs.readFileSync(configPath, 'utf-8');
                        const config: TopicConfig = JSON.parse(configContent);

                        const isDraft = config.state === "draft";
                        const isProduction = process.env.NODE_ENV === "production";

                        if (!isDraft || !isProduction) {
                            topics.push({
                                ...config,
                                fullPath: currentRelativePath,
                                configPath: configPath,
                            });
                        }
                    } catch {}
                }
            }
        }
    }

    scanDirectory(topicsDir)
    return topics;
}