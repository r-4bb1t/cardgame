import {
  ArrowBack,
  ArrowDownward,
  ArrowForward,
  ArrowUpward,
  GridOn,
  PlusOne,
  SelectAll,
} from "@material-ui/icons";

export interface cardInterface {
  name: string;
  type: actionType;
  action: { y?: number; x?: number; num?: number }[];
  icon: any;
  description: string;
}

export enum actionType {
  attack,
  move,
  heal,
  maxHeal,
  draw,
  tp,
  newCards,
  //item
  //random
}

export const cardList = [
  {
    id: 0,
    name: "왼쪽으로 한 칸 이동",
    type: actionType.move,
    icon: ArrowBack,
    action: [{ y: 0, x: -1 }],
    description:
      "왼쪽으로 한 칸 이동합니다. 이동할 수 없는 경우 아무 것도 하지 않습니다.",
  },
  {
    id: 1,
    name: "오른쪽으로 한 칸 이동",
    type: actionType.move,
    action: [{ y: 0, x: 1 }],
    icon: ArrowForward,
    description:
      "오른쪽으로 한 칸 이동합니다. 이동할 수 없는 경우 아무 것도 하지 않습니다.",
  },
  {
    id: 2,
    name: "위쪽으로 한 칸 이동",
    type: actionType.move,
    action: [{ y: -1, x: 0 }],
    icon: ArrowUpward,
    description:
      "위쪽으로 한 칸 이동합니다. 이동할 수 없는 경우 아무 것도 하지 않습니다.",
  },
  {
    id: 3,
    name: "아래쪽으로 한 칸 이동",
    type: actionType.move,
    action: [{ y: 1, x: 0 }],
    icon: ArrowDownward,
    description:
      "아래쪽으로 한 칸 이동합니다. 이동할 수 없는 경우 아무 것도 하지 않습니다.",
  },
  {
    id: 4,
    name: "카드 한 장 뽑기",
    type: actionType.draw,
    action: [{ num: 1 }],
    icon: PlusOne,
    description: "카드를 한 장 뽑습니다.",
  },
  {
    id: 5,
    name: "왼쪽으로 두 칸 이동",
    type: actionType.move,
    icon: ArrowBack,
    action: [
      { y: 0, x: -1 },
      { y: 0, x: -1 },
    ],
    description:
      "왼쪽으로 두 칸 이동합니다. 이동할 수 없는 경우 아무 것도 하지 않습니다.",
  },
  {
    id: 6,
    name: "오른쪽으로 두 칸 이동",
    type: actionType.move,
    action: [
      { y: 0, x: 1 },
      { y: 0, x: 1 },
    ],
    icon: ArrowForward,
    description:
      "오른쪽으로 두 칸 이동합니다. 이동할 수 없는 경우 아무 것도 하지 않습니다.",
  },
  {
    id: 7,
    name: "위쪽으로 두 칸 이동",
    type: actionType.move,
    action: [
      { y: -1, x: 0 },
      { y: -1, x: 0 },
    ],
    icon: ArrowUpward,
    description:
      "위쪽으로 두 칸 이동합니다. 이동할 수 없는 경우 아무 것도 하지 않습니다.",
  },
  {
    id: 8,
    name: "아래쪽으로 두 칸 이동",
    type: actionType.move,
    action: [
      { y: 1, x: 0 },
      { y: 1, x: 0 },
    ],
    icon: ArrowDownward,
    description:
      "아래쪽으로 두 칸 이동합니다. 이동할 수 없는 경우 아무 것도 하지 않습니다.",
  },
  {
    id: 9,
    name: "사방향 기본 공격",
    type: actionType.attack,
    action: [
      { y: 1, x: 0, num: 1 },
      { y: 0, x: 1, num: 1 },
      { y: -1, x: 0, num: 1 },
      { y: 0, x: -1, num: 1 },
    ],
    icon: SelectAll,
    description: "왼쪽, 오른쪽, 위쪽, 아래쪽 사방향에 1의 공격을 날립니다.",
  },
  {
    id: 10,
    name: "체력 포션",
    type: actionType.heal,
    action: [{ num: 3 }],
    description: "체력을 3 회복합니다.",
  },
  {
    id: 11,
    name: "파워 엘릭서",
    type: actionType.maxHeal,
    description: "체력을 모두 회복합니다.",
    action: [],
  },
  {
    id: 12,
    name: "순간이동",
    type: actionType.tp,
    description: "순간이동합니다. 어디로 갈지는 몰라요!",
    action: [],
  },
  {
    id: 13,
    name: "이게 아니야!",
    type: actionType.newCards,
    description: "모든 카드를 새로운 카드로 교체합니다.",
    action: [],
  },
];
