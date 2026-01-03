"use client";

import { useEffect, useState } from "react";
import replays from "../../database/replays.json";
import TreeMenu, {
  defaultChildren,
  ItemComponent,
} from "react-simple-tree-menu";
import { TreeMenuProps } from "react-simple-tree-menu";

export default function Replays() {
  const [treeData, setTreeData] = useState<TreeMenuProps["data"]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const dataHolder = [];
    const tournamentList = new Set(replays.map((replay) => replay.tournament));
    for (const tournament of tournamentList) {
      const filteredReplays = replays.filter(
        (replay) => replay.tournament === tournament,
      );
      const replayNodes = filteredReplays.map((replay) => ({
        key: replay.name,
        label: replay.name,
        url: replay.webContentLink,
      }));
      const tournamentNode = {
        key: tournament,
        label: tournament,
        nodes: replayNodes,
      };
      dataHolder.push(tournamentNode);
    }
    // const sortedData = dataHolder.sort((a, b) => a.label.localeCompare(b.label));
    setTreeData(dataHolder);
  }, []);

  return (
    <div>
      <TreeMenu data={treeData}>
        {({ search, items, resetOpenNodes }) => (
          <div className="w-1/2 mx-auto my-10">
            <input
              onChange={(e) => search && search(e.target.value)}
              placeholder="Type and search"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <ul>
              {items.map(({ key, ...props }) => (
                <a href={props.url} target="_blank" rel="noopener noreferrer">
                  <ItemComponent
                    key={key}
                    style={{
                      fontSize: "16px",
                      border: "1px solid #ccc",
                      margin: "5px",
                      padding: "5px",
                    }}
                    {...props}
                  />
                </a>
              ))}
            </ul>
          </div>
        )}
      </TreeMenu>
    </div>
  );
}
