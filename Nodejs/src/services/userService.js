import db from "../models/index";
import bcrypt from 'bcryptjs';
import _ from 'lodash';


let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(email);
            if (isExist) {
                // user already exist
                let user = await db.User.findOne({
                    attributes: ['email', 'roleId', 'password'], // lấy ra 3 trường
                    where: { email: email }, // vẫn kiểm tra email, trừ trường hợp người ta xoá trong lúc hàm checkEmail trên đang chạy
                    raw: true // ẩn phần k cần thiết
                });
                if (user) {
                    //compare password
                    // kiểm tra xem nhập password có đúng không
                    let check = await bcrypt.compareSync(password, user.password) // false
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = 'OK';
                        delete user.password;   // xoá trường password
                        userData.user = user;
                    }
                    else {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong password';
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `User isn't not found`
                }
            } else {
                //return error
                userData.errCode = 1;
                userData.errMessage = `Your's Email isn't exist in your system. Plz try other email`
            }
            resolve(userData)
        } catch (e) {
            reject(e)
        }
    })
}

// kiểm tra xem email đã có trong db hay chưa
let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })
}

// cach viet function khac
export async function getAllUserRecoed(userId){
    try {
        if(_.isEmpty(userId)){
            // khoong co id get all
        } else {
             // find One 
        }

        return await db.User.findAll({})
        
    } catch(e){
        console.log(e)
    }    
}

let getAllUsers = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = '';
            if (userId === 'ALL') {
                users = await db.User.findAll({
                    attributes: {
                        exclude: ['password']
                    }
                })
            }
            if (userId && userId !== 'ALL') {
                users = await db.User.findOne({
                    where: {
                        id: userId
                    },
                    attributes: {
                        exclude: ['password']
                    }
                })
            }
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}


module.exports = {
    handleUserLogin: handleUserLogin,
    checkUserEmail: checkUserEmail,
    getAllUsers: getAllUsers,
    getAllUserRecoed: getAllUserRecoed
}