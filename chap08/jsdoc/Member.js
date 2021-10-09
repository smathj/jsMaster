/**
 * @constructor
 * @classdesc 멤버에 대한 정보를 관리한다.
 * @param {string} firstName 명
 * @param {string} lastName 성
 * @throws {Error} firstName이나 lastName이 부족합니다.
 * @author Yoshihiro Yamada
 * @version 1.0.0
 */
var Member = function(firstName, lastName){
  if (firstName === undefined || lastName === undefined) {
    throw new Error('firstName이나 lastName이 부족합니다.');
  }
  this.firstName = firstName;
  this.lastName = lastName;
  
};

/**
 * 멤버에 관한 상세 정보를 나타낸다.
 * @return {String} 멤버의 성명
 * @deprecated {@link Member#toString}메소드를 대신해서 이용해주세요.
 */
Member.prototype.getName = function() {
  return this.lastName + ' ' + this.firstName;
};

/**
 * Member클래스의 내용을 문자열화한다.
 * @return {String} 멤버의 성명
 */
Member.prototype.toString = function() {
  return this.lastName + ' ' + this.firstName;
};
