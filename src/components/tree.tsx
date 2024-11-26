"use client"
import { TreeNodeData } from "@/types";
import TreeView from "./tree-view";
import { useRecoilState } from "recoil";
import { treeDataState } from "@/recoil";
import { useEffect } from "react";



//링크 처넣고 링크는 uuid 로 넣는다. -> 세그먼트가 링크로 들어가서 페이지 열수 있또록/ 두번터치시 이름변경가능하게
const treeTempData: TreeNodeData[] = [
  {
    id: '1',
    parentId: '0',
    label: '상위폴더 1',
    kind: 'D',
    depth: 1,
    segment: "te2323-23232-3234",
    children: [
      { id: '2', parentId: '1', kind: 'F',segment: "te2323-22-32342", label: '파일 1', depth: 2 },
      {
        id: '3',
        parentId: '1',
        kind: 'D',
        label: '파일 1-2',
        depth: 2,
        segment: "ab23232-32323-23",
        children: [
          { id: '4', parentId: '3', label: '하위 파일 무언가', segment: "te111-23232-34", kind: 'F', depth: 3 }
        ]
      },
    ],
  },
  {
    id: '5',
    parentId: "0",
    label: '상위폴더 2',
    kind: 'D',
    depth: 1,
    segment: "pw2212-22322-3234",
    children: [{ id: '6', parentId: '5',segment: "r232323-2323-2324", kind: 'F', label: '두번째 파일', depth: 2 }],
  },
];

const FileTree = () => {

  const [treeData, setTreeData] = useRecoilState(treeDataState);
  useEffect(() => {
    setTreeData(treeTempData);

  }, []);

  if(treeData && treeData.length === 0){
    return (
      <div>
        비었음
      </div>
    )
  }

  if(!treeData){
    return (
      <div>
        로딩중
      </div>
    )
  }
  return (
      <>
        <TreeView data={treeData!} />
      </>
  )
}

export default FileTree;