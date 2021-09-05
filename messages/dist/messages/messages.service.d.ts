import { MessagesRepository } from './messages.repository';
export declare class MessagesService {
    private messageRepository;
    constructor(messageRepository: MessagesRepository);
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    create(content: string): Promise<void>;
}
