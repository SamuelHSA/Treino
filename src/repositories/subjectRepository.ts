import { Subject } from "../entity/Subject"
import { AppDataSource } from "../data-source";

export const subjectRepository = AppDataSource.getRepository(Subject)