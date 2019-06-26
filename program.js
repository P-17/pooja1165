var express = require('express');
var app = express();
//Reusable controllers
var employeeController=function (req, res) {
  console.log("CAlling rest api");
  var employee=[
            {firstName:'pooja',lastName:'pawar',age:23,status:'manager'},
			{firstName:'patil',lastName:'patil',age:23,status:'employee'},
            {firstName:'gorprit',lastName:'shikh',age:23,status:'sales'},
            
            
      ];
  res.send(employee);
};

// setting router to map requests  with controllers

app.get('/employee',employeeController );

var server = app.listen(2000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:2000", host, port)
})