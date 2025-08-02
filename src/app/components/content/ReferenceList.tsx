import Link from 'next/link';
import { FC } from 'react';
import fs from 'fs';
import { SECTION_TITLE, SUBSECTION_TITLE } from '@/styles/elements';

interface ReferenceLink {
    name: string;
    url: string;
    description: string;
}

interface ReferenceCategory {
    category: string;
    weight: number;
    links: ReferenceLink[];
}

interface ReferencesProps {
    filePath: string;
    title?: string;
}

const ReferencesList: FC<ReferencesProps> = ({ filePath, title="References" }) => {
    const references: ReferenceCategory[] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const sortedReferences = [...references].sort((a, b) => a.weight - b.weight);

    return (
        <div>
            <h2 className={SECTION_TITLE}>{title}</h2>
            {sortedReferences.map((section) => (
                <div key={section.category}>
                    <h3 className={SUBSECTION_TITLE}>{section.category}</h3>
                    <ul>
                        {section.links.map((link) => (
                            <li key={link.url} className="group relative">
                                <Link
                                    href={link.url}
                                    target="_blank"
                                    className="text-blue-600 hover:underline"
                                >
                                    {link.name}
                                </Link>
                                 <div className="invisible group-hover:visible absolute z-10 bg-gray-900 text-white text-sm p-3 rounded-lg shadow-lg max-w-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {link.description}
                  <div className="absolute top-0 left-4 transform -translate-y-1 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
                                {/* <div className="absolute left-0 mt-1 hidden w-max max-w-xs rounded-lg bg-gray-800 text-white text-sm p-2 opacity-0 group-hover:block group-hover:opacity-100 transition-opacity">
                                    {link.description}
                                </div> */}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ReferencesList;
