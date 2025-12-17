'use client';

import { createClient } from '../../lib/supabase/client';
import { useEffect, useState } from "react";
import { Database } from '@/database.types';
import TreeMenu, { defaultChildren, ItemComponent } from 'react-simple-tree-menu';
import { TreeMenuProps } from 'react-simple-tree-menu';

export default function Replays() {
    type Replays = Database['public']['Tables']['replays']['Row'];
    const supabase = createClient();
    const [treeData, setTreeData] = useState<TreeMenuProps['data']>([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
      const getReplays = async () => {
        const { data, error } = await supabase.from('replays').select('*');
        if (data) {
            console.log(data)
            setTreeData([{
                key: 'nyse-27',
                label: "NYCMelee's Stock Exchange #27",
                nodes: data.map((replay) => ({
                    key: replay.id,
                    label: replay.name || 'Unnamed Replay',
                })),
            }]);
            console.log(treeData);
        }
      }
      getReplays();
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
                            <ItemComponent
                                key={key}
                                style={{
                                    fontSize: '16px',
                                    border: '1px solid #ccc',
                                    margin: '5px',
                                    padding: '5px',
                                }}
                                {...props}
                            />
                        ))}
                    </ul>
                </div>
            )}
            </TreeMenu>
        </div>
    );
}
