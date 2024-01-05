const slot = require('../model/slot');
const meet = require('../model/meet');

exports.createMeeting = async (req, res, next)=> {
    try {
    const slotData = await slot.create(req.body);

    const meetTime = await meet.findByPk(req.body.meetId);
    
    if(meetTime) {
        const oldSlot = meetTime.slotsAvail;

        if(oldSlot > 0) {
            meetTime.slotsAvail = oldSlot - 1;
            await meetTime.save();
        } else {
            return res.status(400).json({ message : "No slot available for meeting"});
        }

    } else {
        return res.status(400).json({ message : "meeting not found!"});
    }

    res.status(200).redirect('/');

    } catch (err) {
        console.log(err);
        res.status(500).json({message : err.message});
    }
    
};

exports.getAll = async (req, res, next) => {
    const data =  await slot.findAll({});
    const meetData = await meet.findAll({});
        res.render('index',{data, meetData});
};


exports.deleteById = async(req, res, next) => {
    const slotId = req.query.id;
    try {
        
        const slotData = await slot.findByPk(slotId);

        if (!slotData) {
            return res.status(404).json({ message: 'Slot not found.' });
        }

        const meetData = await meet.findByPk(slotData.meetId);
        
        if (!meetData) {
            return res.status(404).json({ message: 'Slot not found.' });
        }

            const oldSlot = meetData.slotsAvail;
            let updatedSlots = oldSlot + 1;

            meetData.slotsAvail = updatedSlots;
            await meetData.save();

            const deletedSlot = await slot.destroy({ where: {id: req.query.id}});
            
            res.redirect('/');

    } catch (err) {
        console.log(err);
        res.status(500).json({message : err.message});
    }

};