export class HeaderService {
  private afko = [
    {
      name: 'Afkotheek'
    },
    {
      name: 'Game'
    },
    {
      name: 'support'
    }
  ];

  private moderator = [
    {
      name: 'Overzicht'
    },
    {
      name: 'Instellingen'
    },
    {
      name: 'Zoek'
    }
  ]

  getAfko() {
    return this.afko;
  }

  getModerator() {
    return this.moderator;
  }

}
