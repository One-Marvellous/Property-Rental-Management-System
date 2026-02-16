import Property from "../models/Property.js";
import Booking from "../models/Booking.js"; 
import Rental from "../models/Rental.js";
import Payment from "../models/Payments.js";
import {calculateTotal} from "../utils/pricing.js";
import { title } from "node:process";
import { id } from "zod/locales";
import { start } from "node:repl";
import { property } from "zod";


export const createProperty = async (req,res) =>{
const property = await Property.create({

        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        pricingUnit:req.body.pricingUnit,
        imageUrl:req.file?.path,
        managerId: req.user.userId,
        status: "AVAILABLE"
})

res.status(201).json(property);

};



export const updateProperty = async(req,res) =>{
const property = await Property.findone({
    where:{
        id: req.params.id,
        managerId:req.user.userId,

    },


});

if (!property)
    return res.status(404).json({message: "property not found"});

await property.update(req.body);


res.json(property);


};





export const deleteProperty = async(req, res) =>{
    const property = await Property.findone({
        where:{
            
            id: req.params.id,
            managerId: req.user.userId,



        },

});
if (!property)
    return res.status(404).json({message:"property not found"});

    await property.destroy();

    res.json({message:"property deleted"});

};






export const getMyProperties = async (req, res) => {

        const properties = await Property.findAll({
            where: { managerId: req.user.userId},
});

res.json(properties);


};





export const getPropertyBookings = async (req,res) => {
const properties = await Property.findAll({
        where: {managerId: req.user.userId},
        attributes: ["id"],
});


const propertyIds = properties.map(p => p.id);


const bookings = await Booking.findAll({

where: { propertyId: propertyIds},
});

res.json(bookings);
};

export const approvedBooking = async (req, res) => {
const booking = await Booking.findByPk(req.params.id);


if (!booking)
    return res.status(404).json({message: "booking not found"});



const property = await Property.findone({
        where: {
            id: booking.propertyId,
            managerId: req.user.userId,
},
});


if(!property)
    return res.status(403).json({message: "unauthorized"});




if (booking.status !== "PENDING")
    return res.status(400).json({message: "Already processed"});

const totalAmount = calculateTotal(

        property.price,
        property.pricingUnit,
        booking.startDate,
        booking.endDate
);

booking.status = "APPROVED";
await booking.save();

const rental = await Rental.create ({

    bookingId: booking.id,
    propertyId: property.id,
    tenantId: booking.tenantId,
    startDate: booking.startDate,
    endDate: booking.endDate,
    totalAmount,

    balance: totalAmount,
    status:"ACTIVE",

});

property.status = "BOOKED";
await property.save();

res.json({message: "Booking approved", rental});
};


export const rejectBooking = async (req,res) => {
const booking = await Booking.findByPk(req.params.id);


if(!booking)
    return res.status(404).json({message:"booking not found"});


const property = await Property.findone({

where:{
id: booking.propertyId,
managerId: req.user.userId,
},

});

if (!property)
    return res.status(403).json({message:"unauthorized"});


booking.status = "REJECTED";
await booking.save();

res.json({message: "booking rejected"});
};

export const getPropertyRentals = async (req, res) =>{

const properties = await property.findAll({

    where:{managerId:req.user.userId},
    attributes:["id"],


});
const propertyIds = properties.map(p => p.id);


const rentals = await Rental.findAll({
    where:{propertyId:propertyIds},
    });


res.json(rentals);

}

export const getPropertyPayments = async (req,res) => {
const properties = await Property.findAll({
where: {managerId: req.user.userId},
attributes:["id"],
});
const propertyIds = properties.map(p => p.id);

const rentals = await Rentals.findAll({
 where: {propertyId:propertyIds},
 attributes: ["id"],

});

const rentalIds = rentals.map(r => r.id);

const payments = await Payment.findAll({
where: {rentalId: rentalIds},

});

res.json(payments);

};


















