'use client';

import { useEffect, useState } from "react";
import replays from  '../../database/replays.json';
import TreeMenu, { defaultChildren, ItemComponent } from 'react-simple-tree-menu';
import { TreeMenuProps } from 'react-simple-tree-menu';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';

export default function Replays() {
    const [treeData, setTreeData] = useState<TreeMenuProps['data']>([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const dataHolder = [];
        // Get unique tournaments
        const tournamentList = new Set(replays.map(replay => replay.tournament));
        for (const tournament of tournamentList) {
            const filteredReplays = replays.filter(replay => replay.tournament === tournament);
            // Make an array of child nodes for each replay in the given tournament
            const replayNodes = filteredReplays.map(replay => ({
                key: replay.name,
                label: replay.name,
                url: replay.webContentLink,
            }));    
            // Make a parent node for the given tournament
            const tournamentNode = {
                key: tournament,
                label: tournament,
                nodes: replayNodes,
            };
            dataHolder.push(tournamentNode);
        }
        // const sortedData = dataHolder.sort((a, b) => a.label.localeCompare(b.label));
        setTreeData(dataHolder);
    }, [])

    return (
        <div>
            <TreeMenu 
                data={treeData}
            >
            {({ search, items, resetOpenNodes }) => (
                <div className="w-1/2 mx-auto mt-10">
                    <input
                        onChange={e => search && search(e.target.value)}
                        placeholder="Search for a tag or a character..."
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <ul className="list-none">
                        {items.map(({key, ...props}, index) => (
                            props.url ? (
                            // File
                            <a href={props.url} target="_blank" rel="noopener noreferrer" className="no-underline text-inherit">
                                <div 
                                    className="flex w-full items-center"
                                    style={{
                                        backgroundColor: index % 2 === 0 ? '#a305ff27' : '#0000005b',
                                    }}
                                >
                                    <DescriptionIcon />
                                    <ItemComponent
                                        key={key}
                                        style={{
                                            fontSize: '16px',
                                            margin: '5px',
                                            padding: '5px',
                                            paddingLeft: `${props.level * 20}px`,
                                            cursor: 'pointer'
                                        }}
                                        {...props}
                                    />
                                    <OpenInNewIcon fontSize="small" className="ml-2" />
                                </div>
                            </a>
                            ) : (
                            // Folder
                            <div 
                                className="flex w-full items-center"
                                style={{
                                    backgroundColor: index % 2 === 0 ? '#a305ff27' : '#0000005b',
                                }}
                            >
                                <FolderIcon />
                                <ItemComponent
                                    key={key}
                                    style={{
                                        display: 'flex',
                                        gap: '5px',
                                        fontSize: '16px',
                                        margin: '5px',
                                        padding: '5px',
                                        paddingLeft: `${props.level * 20}px`,
                                        cursor: 'default',
                                    }}
                                    {...props}
                                />
                            </div>
                        )
                        ))}
                    </ul>
                </div>
            )}
            </TreeMenu>
        </div>
    );
}
