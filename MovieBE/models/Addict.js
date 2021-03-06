const { date } = require('@hapi/joi/lib/template');
const mongoose = require('mongoose');
const Addict=new mongoose.Schema({
    AddictCode: {type:String},
    FirstName: {type:String},
    LastName: {type:String},
    FullName: {type:String},
    OtherName: {type:String},
    GenderID: {type:String},
    PlaceOfBirthID: {type:String},
    DateOfBirth: {type:date},
    YearOfBirth: {type:Number},
    MonthOfBirth: {type:Number},
    DateOfBirth: {type:Number},    
    PemanentAddress: {type:String},
    CurrentAddress: {type:String},
    Profession: {type:String},
    PhoneNumber: {type:String},
    SocialNetwork: {type:String},
    EducationLevelID: {type:String},
    CitizenID: {type:String},
    CriminalConviction:{type:String},
    CriminalRecord: {type:String},
    Detoxed:{type:String},
    FartherName: {type:String},
    MotherName: {type:String},
    PartnerName: {type:String},
    Characteristics: {type:String},
    Remarks1: {type:String},
    Remarks2: {type:String},
    ManageType: {type:String},
    Complete: {type:String},
    CompleteDate: {type:date},
    CreateDate:{type:date,default:Date.now},
    CreateUser: {type:String},
    ImgLink: {type:String},
    ManagePlaceID: {type:String}
});
module.exports = mongoose.model("Addict",Addict);