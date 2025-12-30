'use client';

import { useEffect, useState } from "react";
import replays from  '../../database/replays.json';
import TreeMenu, { defaultChildren, ItemComponent } from 'react-simple-tree-menu';
import { TreeMenuProps } from 'react-simple-tree-menu';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

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
            <TreeMenu data={treeData}>
            {({ search, items, resetOpenNodes }) => (
                <div className="w-1/2 mx-auto my-10">
                    <input
                        onChange={e => search && search(e.target.value)}
                        placeholder="Type and search"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <ul>
                        {items.map(({key, ...props}) => (
                            props.url ? (
                            <a href={props.url} target="_blank" rel="noopener noreferrer">
                                <div className="flex w-full items-center">
                                    <ItemComponent
                                        key={key}
                                        style={{
                                            fontSize: '16px',
                                            borderBottom: '1px solid #ccc',
                                            margin: '5px',
                                            padding: '5px',
                                        }}
                                        {...props}
                                    />
                                    <OpenInNewIcon fontSize="small" className="ml-2" />
                                </div>
                            </a>
                            ) : (
                            <div className="flex w-full items-center">
                                <ItemComponent
                                    key={key}
                                    style={{
                                        fontSize: '16px',
                                        borderBottom: '1px solid #ccc',
                                        margin: '5px',
                                        padding: '5px',
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
