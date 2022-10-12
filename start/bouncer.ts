/**
 * Contract source: https://git.io/Jte3T
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */
 import User from "App/Models/User";
import Bouncer from '@ioc:Adonis/Addons/Bouncer'

export const { actions } = Bouncer
  .define('admin', (user:User) => {
    return user.email === "alde@gmail.com"
  })
  
 
