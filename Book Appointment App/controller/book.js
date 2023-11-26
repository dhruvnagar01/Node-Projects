const con = require("../util/database");
const path = require("path");

// to get data from database
exports.getData =  (req, res, next) => {
   con.connect(function (err) {
    // console.log(name, email, phone);
    try {
      const quer = "select * from data";
    
       con.query(quer,  function (err, data) {
        
        try{
           
            res.render('index', {
                data :data,
            });
        }
        
        catch {
          console.log("the error is ", err.code);
        } 
      });
    } catch {
      console.log(err);
    }
    
  });
};


//to save data in database
exports.postData = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  
  con.connect(function (err) {
    console.log(name, email, phone);
    try {
      const quer = "INSERT INTO data(name, email, phone) VALUES(? , ?, ?)";

      con.query(quer, [name, email, phone], function (err, data) {
        if (err) {
          console.log("the error is ", err.code);
        }
        res.redirect("/");
      });
    } catch {
      console.log(err);
    }
  });
};



// to delete record from database
exports.deleteData = (req, res, next)=> {
    con.connect((err)=>{
        try{
            const quer = "DELETE FROM data WHERE id =  ?"
            con.query(quer, [req.query.id], (err,data) => {
                if(err) throw err;

                res.redirect('/');
            })
        }
        catch {
    console.log(err);
        }

    })
}


//get data by ID
exports.getById = (req, res, next) => {
    con.connect((err)=>{
        try{
            console.log(req.body.buttonId);
            const quer =  "select * from data where id = ?";
            con.query(quer, [req.query.id], (err,data) => {
              
                if(err) throw err;
                
               res.render('edit', {
                data: data,
            });   
            })
        }
        catch {
    console.log(err);
        }

    })
}


// to edit the data 
exports.updateById = (req, res, next) => {
    con.connect((err)=>{
        try{
            const id = req.body.id;
            const name = req.body.name;
            const email = req.body.email;
            const phone = req.body.phone;

            const quer =  "UPDATE data SET name=? , email = ?, phone = ? WHERE id = ?";
            con.query(quer, [name, email, phone, id ], (err,data) => {
              
                if(err) throw err;

                res.redirect('/');
            })
        }
        catch {
    console.log("NO Erroe ",err);
        }
    })
}


// search data from database
exports.searchAppointment = (req, res, next) => {
    con.connect((err)=>{
        try{
            const name = req.body.name;
            const email = req.body.email;
            const phone = req.body.phone;

            const quer =  "select * from data where name LIKE '%"+name+"%' AND email LIKE '%"+email+"%' AND phone LIKE '%"+phone+"';";
            con.query(quer,  (err,data) => {
              
                if(err) throw err;

                res.render('index', {
                    data: data,
                });   
            })
        }
        catch {
    console.log("NO Erroe ",err);
        }
    })
}