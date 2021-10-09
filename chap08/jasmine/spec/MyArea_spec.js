describe('Jasmine의 기본', function() {
  var area;

  beforeEach(function() {
    area = new MyArea(10, 5);
  });

  afterEach(function() {
  });

  it('getTriangle메소드의 테스트', function() {
    expect(area.getTriangle()).toEqual(25);
  });

  it('getSquare메소드의 테스트', function() {
    expect(area.getSquare() === 50).toBeTruthy();
  });
});