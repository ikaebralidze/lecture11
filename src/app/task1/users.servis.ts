export class UsersService {
  getUsers(): Promise<User[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const users: User[] = [
          {
            name: 'Irakli',
            lastName: 'ebralidze',
            birthData: new Date('1997-12-14'),
            status: Status.Active,
            about: 'Developer',
          },
          {
            name: 'Irakli1',
            lastName: 'ebralidze1',
            birthData: new Date('2000-12-14'),
            status: Status.Inactive,
            about: 'Developer',
          },
          {
            name: 'Irakli2',
            lastName: 'ebralidze2',
            birthData: new Date('2002-12-14'),
            status: Status.Deleted,
            about: 'Developer',
          },
        ];
        resolve(users);
      }, 2000);
    });
  }
}
export interface User {
  name: string;
  lastName: string;
  birthData: Date;
  status: Status;
  about: string;
}

export enum Status {
  Active = 'active',
  Deleted = 'disable',
  Inactive = 'inactive',
}
