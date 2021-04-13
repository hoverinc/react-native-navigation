// @ts-nocheck
import store from './LayoutStore';
import { events } from './EventsStore';
import _ from 'lodash';
import LayoutNodeFactory from './Layouts/LayoutNodeFactory';
import ParentNode from './Layouts/ParentNode';

interface NativeCommandsModule {
    setRoot(commandId: string, layout: { root: any; modals: any[]; overlays: any[] }): Promise<any>;
    setDefaultOptions(options: object): void;
    mergeOptions(componentId: string, options: object): void;
    push(commandId: string, onComponentId: string, layout: object): Promise<any>;
    pop(commandId: string, componentId: string, options?: object): Promise<any>;
    popTo(commandId: string, componentId: string, options?: object): Promise<any>;
    popToRoot(commandId: string, componentId: string, options?: object): Promise<any>;
    setStackRoot(commandId: string, onComponentId: string, layout: object): Promise<any>;
    showModal(commandId: string, layout: object): Promise<any>;
    dismissModal(commandId: string, componentId: string, options?: object): Promise<any>;
    dismissAllModals(commandId: string, options?: object): Promise<any>;
    showOverlay(commandId: string, layout: object): Promise<any>;
    dismissOverlay(commandId: string, componentId: string): Promise<any>;
    dismissAllOverlays(commandId: string): Promise<any>;
    getLaunchArgs(commandId: string): Promise<any>;
}

export class NativeCommandsSender {
    constructor() { }

    setRoot(commandId: string, layout: { root: any; modals: any[]; overlays: any[] }) {
        const layoutNode = LayoutNodeFactory.create(layout.root);
        store.setters.setLayout(layoutNode);
    }

    setDefaultOptions(options: object) {
        // return this.nativeCommandsModule.setDefaultOptions(options);
    }

    mergeOptions(componentId: string, options: object) {
        // return this.nativeCommandsModule.mergeOptions(componentId, options);
    }

    push(commandId: string, onComponentId: string, layout: ParentNode) {
        const layoutNode = LayoutNodeFactory.create(layout);
        store.setters.push(onComponentId, layoutNode);
    }

    pop(commandId: string, componentId: string, options?: object) {
        store.setters.pop(componentId);
    }

    popTo(commandId: string, componentId: string, options?: object) {
        // return this.nativeCommandsModule.popTo(commandId, componentId, options);
    }

    popToRoot(commandId: string, componentId: string, options?: object) {
        // return this.nativeCommandsModule.popToRoot(commandId, componentId, options);
    }

    setStackRoot(commandId: string, onComponentId: string, layout: object) {
        // return this.nativeCommandsModule.setStackRoot(commandId, onComponentId, layout);
    }

    showModal(commandId: string, layout: object) {
        const layoutNode = LayoutNodeFactory.create(layout);
        store.setters.showModal(layoutNode);
    }

    dismissModal(commandId: string, componentId: string, options?: object) {
        store.setters.dismissModal(componentId);
    }

    dismissAllModals(commandId: string, options?: object) {
        // return this.nativeCommandsModule.dismissAllModals(commandId, options);
    }

    showOverlay(commandId: string, layout: object) {
        const layoutNode = LayoutNodeFactory.create(layout);
        store.setters.showOverlay(layoutNode);
        // return this.nativeCommandsModule.showOverlay(commandId, layout);
    }

    dismissOverlay(commandId: string, componentId: string) {
        // return this.nativeCommandsModule.dismissOverlay(commandId, componentId);
    }

    dismissAllOverlays(commandId: string) {
        // return this.nativeCommandsModule.dismissAllOverlays(commandId);
    }

    getLaunchArgs(commandId: string) {
        // return this.nativeCommandsModule.getLaunchArgs(commandId);
    }
}