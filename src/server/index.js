import http from './http';

export const listObj = {
//  注册页面登录接口
    registAccount: (content) => http.post(`/register`,content),
//  登录页面接口
    loginAccount: (content) => http.post(`/login`,content),
//  录入学生信息接口
    injectStuInfo: (content) => http.post('/student_info',content),
//  入学考试接口
    entryExam: (content) => http.post(`/entry_exam`,content),
//  期中考试接口
    midExam: (content) => http.post(`/mid_exam`,content),
//  期末考试接口
    endExam: (content) => http.post('/end_exam',content),
//  学生信息接口(带头像)
    stuInfo: () => http.get('/search_info'),
//  学生信息接口(无头像)
    stuInfoNot:() => http.get('/search_info_not'),
//  入学考试查询接口
    searchEntry: (id) => http.get(`/search_entry/${id}`),
//  期中考试查询接口
    searchMid: (id) => http.get(`/search_mid?stu_id=${id}`),
//  期末考试查询接口
    searchEnd: (id) => http.get(`/search_end/${id}`)
}