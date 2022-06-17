const bcrypt = require('bcryptjs');
import dbConnect from "../../../lib/dbConnect";
import Users from "../../../models/Users";
import { apiHandler } from 'helpers/api';

export default apiHandler({
    post: register
});

async function register(req, res) {
    // split out password from user details
    await dbConnect()
    const { password, ...user } = req.body;
    delete user.passwordre
    // validate
    const useraccount = await Users.findOne({ userid: user.userid }).lean();
    if (useraccount)
        throw `입력한 아이디 "${user.userid}"는 이미 사용중입니다.`;

    // hash password
    user.hash = bcrypt.hashSync(password, 10);

    //usersRepo.create(user);
    await Users.create(user);
    return res.status(200).json({});
}
