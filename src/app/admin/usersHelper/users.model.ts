

export class UsersModel {
  userid: string;
  org_id: string;
  status: string;
  firstname: string;
  lastname: string;

  constructor() {
    this.org_id = 'id';
    this.status = 'status';
    this.firstname = 'firstname';
    this.lastname = 'lastname';
    this.userid = 'userid';
  }
}
