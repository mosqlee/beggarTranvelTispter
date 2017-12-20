import Mock from 'mockjs';

let Random = Mock.Random;

Mock.mock(
    '/api/user', {
        'name': '@cname',
    'intro': '@image(20)'

});
Mock.mock('/api/travel', {
    'travelList|1-10':[
        {
            'title': '@ctitle(10,20)',
            'intro': '@cword(20)',
            'id|+1': 1,
            'img': "@image(100)",
            'date': '@date(yyyy-MM-dd)',
            'location':'@region'
        }
    ],

});