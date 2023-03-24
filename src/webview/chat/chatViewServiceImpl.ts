import {
    IChatViewService,
    CHAT_VIEW_SERVICE_NAME,
} from "../../common/chatService";

export class ChatViewServiceImpl implements IChatViewService {
    setHasSelectionAction: ((hasSelection: boolean) => void) | null = null;

    get name(): string {
        return CHAT_VIEW_SERVICE_NAME;
    }

    async setHasSelection(hasSelection: boolean): Promise<void> {
        this.setHasSelectionAction?.call(null, hasSelection);
    }
}
