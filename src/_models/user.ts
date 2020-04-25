export class User {

  id: number;
  userName: string;
  roles: Roles[];

  constructor({id, userName, roles}) {
    this.id = id;
    this.userName = userName;
    this.roles = [...roles];

  }
}

export enum Roles {
  ADMIN,
  USER
}
