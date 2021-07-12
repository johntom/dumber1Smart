export class MissingPage {
  static parameters = ['id'];
  missingComponent;

  enter(parameters) {
    this.missingComponent = parameters.id;
  }
}
