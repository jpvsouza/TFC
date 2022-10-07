interface IService<T> {
  create(obj: T): Promise<T>;
//   readOne(id: number): Promise<T>;
//   read(): Promise<T[]>;
//   delete(id: number): void;
}

export default IService;
