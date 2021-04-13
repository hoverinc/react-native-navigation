import _ from "lodash";
import BottomTabsNode from "./Layouts/BottomTabsNode";
import Node from "./Layouts/Node";
import ParentNode from "./Layouts/ParentNode";
import { events } from './EventsStore';

const remx = require('remx');

const state = remx.state({
  layout: {},
  modals: [],
  overlays: []
});

const setters = remx.setters({
  setLayout(layout: ParentNode) {
    state.layout = layout;
  },
  push(layoutId: string, child: ParentNode) {
    getters.getLayoutById(layoutId).getStack().children.push(child);
    console.log(child.data.name);
    events.componentDidAppear({ componentName: child.data.name, componentId: child.nodeId, componentType: 'Component' });
  },
  pop(layoutId: string) {
    return getters.getLayoutById(layoutId).getStack().children.pop();
  },
  showModal(modal: ParentNode) {
    state.modals.push(modal);
  },
  showOverlay(overlay: ParentNode) {
    state.overlays.push(overlay);
  },
  dismissModal() {
    // TODO: Impelment modals behavior
    state.modals.pop();
  },
  selectTabIndex(layout: BottomTabsNode, index: number) {
    layout.selectedIndex = index;
  }
});

const getters = remx.getters({
  getLayout() {
    return state.layout;
  },
  getVisibleLayout() {
    if (state.modals.length > 0) {
      return _.last<Node>(state.modals)!.getVisibleLayout();
    } else
      return state.layout.getVisibleLayout();
  },
  isVisibleLayout(layout: Node) {
    return getters.getVisibleLayout() && getters.getVisibleLayout().nodeId === layout.nodeId;
  },
  getModals() {
    return state.modals;
  },
  getOverlays() {
    return state.overlays;
  },
  getLayoutById(layoutId: string) {
    return (findParentNode(layoutId, state.layout) || _.find(state.modals, (layout) => findParentNode(layoutId, layout)));
  },
  getLayoutChildren(layoutId: string) {
    return getters.getLayoutById(layoutId).children;
  },
  getStack(layoutId: string) {
    return findStack(layoutId, state.layout) || _.find(state.modals, (layout) => findStack(layoutId, layout));
  },
});

function findParentNode(layoutId: string, layout: ParentNode): any | ParentNode {
  if (layoutId === layout.nodeId) {
    return layout;
  } else if (layout.children) {
    for (let i = 0; i < layout.children.length; i += 1) {
      const child = layout.children[i];
      const result = findParentNode(layoutId, child);

      if (result !== false) {
        return result;
      }
    }
  }

  return false;
}

function findStack(layoutId: string, layout: ParentNode): any | ParentNode {
  if (layout.type === 'Stack' && _.find(layout.children, (child) => child.nodeId === layoutId)) {
    return layout;
  } else if (layout.children) {
    for (let i = 0; i < layout.children.length; i += 1) {
      const child = layout.children[i];
      const result = findStack(layoutId, child);

      if (result !== false) {
        return result;
      }
    }
  }

  return false;
}

export default {
  setters,
  getters,
};