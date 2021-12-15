export class HeaderService {
  private afkotheekHeaderOptions = [
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

  private moderatorHeaderOptions = [
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

  getAfkotheekHeaderOptions() {
    return this.afkotheekHeaderOptions;
  }

  getModeratorHeaderOptions() {
    return this.moderatorHeaderOptions;
  }

}
