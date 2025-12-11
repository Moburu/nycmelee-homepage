'use client';

import { createClient } from '../../lib/supabase/client';
import { useEffect, useState } from "react";
import { Database } from '@/database.types';
import TreeMenu from 'react-simple-tree-menu';
import { TreeMenuProps } from 'react-simple-tree-menu';

export default function Replays() {
    type Replays = Database['public']['Tables']['replays']['Row'];
    const supabase = createClient();
    const [treeData, setTreeData] = useState<TreeMenuProps['data']>([]);

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
            <TreeMenu data={treeData} />
        </div>
    );
}
