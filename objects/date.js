const now = new Date();
const date1 = new Date('May 11 2018 09:00');
// format 더 보고 싶으면 javascript date 구글에 검색해보기
const date2 = new Date(2018, 4, 11, 9, 0);
const date3 = new Date(2018, 4, 11, 9);
// default로 0으로 초기화되기 때문에 9:00시의 00분은 따로 작성하지 않아도 된다. 

now.getDay();
now.setFullYear(2017);

now.toDateString();
now.toTimeString();
now.toISOString();
// Standard ISO Format이고, 백엔드와 통신하는 애플리케이션이라면, 
// 해당 포맷이 date를 클라이언트와 서버간에 transfer 하는데에 사용된다. 