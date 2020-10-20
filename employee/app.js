const request = require('postman-request')
const connection = require('./db/mysql_connection') //db연결문

const baseUrl = 'http://dummy.restapiexample.com/'

let queryUrl = baseUrl + 'api/v1/employees'

request.get({url : queryUrl, json : true},function(error, response, body){
    for(let i = 0; i < body.data.length; i++){
       let id = body.data[i].id
        let name = body.data[i].employee_name
       let age = body.data[i].employee_age
       let salary = body.data[i].employee_salary

       //한꺼번에 쓰기($,{}사용)
       //let query = `insert into employee (name, salary, age) 
       //values("${body.data[i].employee_name}",${body.data[i].employee_salary},
       //${body.data[i].employee_age})`
       let query = 'insert into employee values('+id+','+'"'+name+'"'+','+age+','+salary+')'
       console.log(query)
       connection.query(query, function(error, results, field){
        console.log(results)
    })
    
    }
    connection.end()
})
// let array = body.data
// let query = 'insert into employee (name, salary, age) values'
// for(let i = 0; i < array.length; i++){
//     query + `("${array[i].employee_name}",
//                 ${array[i].employee_salary},
//                  ${array[i].employee_age}),`
// }
// query = query.slice(0,-1)//마지막 콤마지우는 방법
// console.log(query)

//-------------------------

// request.get({url : queryUrl, json : true},function(error, response, body){
//     let array = body.data
//     let query = body.data
//     let query = 'insert into employee(name, salary, age)values ?'
//     //위의 ?에 들어갈 데이터는 array([])로 만들어야 한다
//     let data = []
//     for(let i = 0; i < array.length; i++){
//         data.push([ array[0].employee_name, array[0].employee_salary, array[0].employee_age ])
//     }
//     //아래 [data]의 뜻은 첫번째 물음표가 data라는 뜻
//     connection.query(query, [data], function(error,results,fields){
//         console.log(results)
    
//     })
//     connection.end()
// })

// 인서트 문 하나로 여러 문장을 한번에 집어 넣는 방법.
// insert into employee (name, salary, age) values
// ("${body.data[0].name}",${body.data[0].salary},${body.data[0].age}),
// ("${body.data[1].name}",${body.data[1].salary},${body.data[1].age}),
// ("${body.data[2].name}",${body.data[2].salary},${body.data[2].age}),
// ("${body.data[3].name}",${body.data[3].salary},${body.data[3].age})

