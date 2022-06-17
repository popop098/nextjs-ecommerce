const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
import getConfig from 'next/config';
import dbConnect from "../../../lib/dbConnect";
import Users from "../../../models/Users";
import { apiHandler, usersRepo } from 'helpers/api';

const { serverRuntimeConfig } = getConfig();

export default apiHandler({
    post: authenticate
});

async function authenticate(req, res) {
    const { userid, password } = req.body;
    await dbConnect()
    const user = await Users.findOne({ userid: userid }).lean();
    //const user = usersRepo.find(u => u.userid === userid);
    // validate
    if (!(user && bcrypt.compareSync(password, user.hash))) {
        throw '아이디 또는 비밀번호가 올바르지 않습니다.';
    }

    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: user._id.toString() }, serverRuntimeConfig.secret, { expiresIn: '7d' });

    // return basic user details and token
    return res.status(200).json({
        id: user._id.toString(),
        userid:user.userid,
        username: user.username,
        token
    });
}
