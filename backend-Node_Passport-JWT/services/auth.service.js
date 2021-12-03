const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const { config } = require('../config/config');
const UserService = require('./user.service');
const service = new UserService();

class AuthService {

  async getUSer(email, password) {
    const user = await service.findEmail(email);
    if (!user) {
      throw (boom.unauthorized());
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw (boom.unauthorized());
    }
    // user is returned by sequelize
    delete user.dataValues.password;
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, config.jwtSecret);
    return {
      user,
      token,
    };
  }

  async sendRecovery(email) {

    const user = await service.findEmail(email);
    if (!user) {
      throw (boom.unauthorized());
    }
    const payload = {
      sub: user.id,
    }
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '15min' });
    const link = `http://localhost:3000/recovery/${token}`;

    const mail = {
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: `${user.email}`, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: `<b>Hello world? -> ${link}</b>`, // html body
    }
    const rta = await this.sendMail(mail);
    return rta;
  }

  async changePassword(token, newPassword) {
    try {
      const payload = jwt.verify(token, config.jwtSecret);
      const user = await service.findOne(payload.sub);
      if (user.recoveryToken !== token) {
        throw (boom.unauthorized());
        // this allow not reuse a token
      }
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await service.update(user.id, { recoveryToken: null, password: hashedPassword });
      return { message: 'Password changed' };
    } catch (error) {
      throw boom.unauthorized();
    }
  }

  async sendMail(InfoEmail) {

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'testAccount.user',
        pass: 'testAccount.pass',
      },
    });
    await transporter.sendMail(
      InfoEmail);
    return { message: 'Email sent' };
  }
}

module.exports = AuthService;