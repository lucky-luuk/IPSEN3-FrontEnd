

export class UsersModel {
  userid: string;
  org_id: string;
  status: string;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;

  constructor() {
    this.org_id = "";
    this.status = "";
    this.firstname = "";
    this.lastname = "";
    this.userid = "";
    this.email = "";
    this.phoneNumber = "";
  }
}
