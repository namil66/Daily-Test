function solution(angle) {
  if (90 > angle) {
      return 1
  } else if (angle === 90) {
       return 2
  } else if (angle > 90, angle < 180) {
       return 3
  } else if (angle === 180){
       return 4
}
}

// -------------------------------------------------------------------------------------------------------
// 다른 풀이들

/* 1. filter 메서드 사용
function solution(angle) {
   return [0, 90, 91, 180].filter(x => angle>=x).length;
}
*/

/* 2. 삼항 연산자 사용
function solution(angle) {
    return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}
*/

/* 3. 삼항 연산자 및 &&(and) 활용
function solution(angle) {
    //예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4
    return angle<90? 1 : (angle>90 && angle<180)? 3 : (angle===180)? 4 : 2;;
}
*/