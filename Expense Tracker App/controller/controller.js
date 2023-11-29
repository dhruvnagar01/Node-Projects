const Expenses = require('../modal/expenses');
const path = require('path');


//GET ALL EXPENSES FROM DATABASE
exports.getData = (req, res, next) => {
    Expenses.findAll()
    .then((result) => {
        res.render('index', {
            data: result,
            editable : false
        });
    })
    .catch(err => console.log(err));
};

//CREATE NEW EXPENSE IN DATABASE
exports.createExpense = (req, res, next) => {
    const category = req.body.category;
    const amount = req.body.amount;
    const description = req.body.description;

    Expenses.create({
        category: category,
        amount : amount,
        description : description
    }).then((result) => {
        console.log("successfully data saved in db ", result);
        res.redirect('/')
    }).catch((err) => {
        console.log(err);
    });
}

// GET EXPENSE BY ID 
exports.getById = async (req, res, next) => {
    const id = req.query.id;
    console.log(id);
    try {
    const expense = await Expenses.findOne({where: {id}});
    console.log(expense);
    res.render('index', { data : expense,
        editable : true}
        )}

    catch {
        return res.status(500).json({err: "An error occured"});
    }

}


// UPDATE EXPENSES
exports.updateExpense =  async (req, res, next) => {
    const id = req.body.id;
    const category = req.body.category;
    const amount = req.body.amount;
    const description = req.body.description;
    try {
        // const expense = await Expenses.findOne({where: {id}});
        // expense.category = category;
        // expense.amount = amount;
        // expense.description = description;

     await Expenses.update({category, amount, description }, {where:{id}});
        res.redirect('/');
    }
    catch(err) {
        res.status(500).json({err : "An eror occured during update query"});
    }
}

//DELETE EXPENSE USING ID
exports.deleteById = async (req, res, next) => {
    const id = req.query.id;
    console.log(id);
    try {
    const expense = await Expenses.destroy({where: {id}});
        res.redirect('/');
    }
    catch {
        return res.status(500).json({err: "An error occured"});
    }

}