

export class UsersModel {
  id: string;
  org_id?: string;
  status?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  roles?: [];

  constructor() {
    this.org_id = "";
    this.status = "";
    this.firstName = "";
    this.lastName = "";
    this.id = "";
    this.email = "";
    this.phoneNumber = "";
  }
}
