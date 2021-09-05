import { CreateMessageDto } from '../dtos/create-message.dto';
import { MessagesService } from '../messages.service';
export declare class MessagesController {
    private messagesService;
    constructor(messagesService: MessagesService);
    list(): Promise<any>;
    create(body: CreateMessageDto): Promise<void>;
    get(id: string): Promise<any>;
}
