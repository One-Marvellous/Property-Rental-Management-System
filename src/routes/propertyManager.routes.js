import express from "express";
import auth from "../middlewares/auth.middleware.js";
import {manageronly} from "../middlewares/flowGuard.js";
import * as managercontroller from "../controllers/propertyManager.controller.js";

const router = express.Router();



//property management
router.post("/properties", auth,manageronly,managercontroller.createProperty);
router.put("/properties/:id", auth, manageronly,managercontroller.updateProperty);
router.delete("/properties/:id", auth, manageronly, managercontroller.deleteProperty);
router.get("/properties", auth, manageronly,managercontroller.getMyProperties);

//Booking
router.get("/bookings", auth,manageronly,managercontroller.getPropertyBookings);
router.post("/bookings/:id/approve", auth, manageronly,managercontroller.approveBooking);
router.post("/bookings/:id/reject", auth, manageronly, managercontroller.rejectBooking);


//Rentals
router.get("/rentals", auth, manageronly, managercontroller.getpropertyRentals);

//Payments
router.get("/payments", auth, manageronly,managercontroller.getPropertyPayment);