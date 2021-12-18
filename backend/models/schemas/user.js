const { Schema } = require("mongoose");


const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }, //이제껏 결제한 총 시간
    totalTime: {
        type: Number,
    }, //사용한 총 시간
    usedTime: {
        type: Number,
    }, //가장 최근에 결제한 티켓
    userTicket: {
        type: Schema.Types.ObjectId
    }, //좌석 position 과 연결
    userSeat: {
        type: Schema.Types.ObjectId,
        ref: "Position",
    }, //이제껏 결제한 종 티켓들을 배열로 받았습니다.
    userTicketHistory: [{
        type: Schema.Types.ObjectId,
        ref: "Ticket",
    }],
}, { timestamps: true });

module.exports = UserSchema;