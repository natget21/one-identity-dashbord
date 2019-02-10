import LModel from './api';
import ClientSession from './client-session.js';
import { message } from 'antd';
import moment from 'moment';

const pluralName = 'users';

class User {

    static login = (email, password) => {
        const url = pluralName + '/login';
        if (email !="" && password !="") {

            return LModel.create(url, { "email": email, "password": password })
                .then(
                    response => {
                        ClientSession.storeAuth(response.data, (err) => {
                            if(err){
                                console.log("cant save session");
                            }
                        });

                        return {
                            success: true,
                            message: "Logged in successfuly",
                            user: response.data
                        }
                    },
                    error => {
                        if (error.response) {
                            if (error.response.status == 401) {
                                return {
                                    error: true,
                                    message: "Invalid username or password"
                                }
                            }
                            return {
                                error: true,
                                message: "Oops error occured please. Try Again"
                            }
                        }
                        return {
                            error: true,
                            message: "Error: Not connected"
                        }



                    }
                );
        }else{
            return {
                error: true,
                message: "Invalid username or password"
            }
        }

    };

    static validateLicense = (userId) => {
        // let filter = { where: { ownerId: userId } };

        const filter = `filter={"where": {"ownerId": "${userId}"}}`;
        return LModel.find('OwnerLicenses', null, filter)
            .then(
                response => {
                    var myDate = new Date();

                    var year = myDate.getFullYear();
                    var month = myDate.getMonth() + 1;
                    if (month <= 9)
                        month = '0' + month;

                    var day = myDate.getDate();
                    if (day <= 9)
                        day = '0' + day;

                    var today = year + '' + month + '' + day;
                    if (parseInt(moment(response.data[0].endDate, 'DD-MM-YYYY').format("YYYYMMDD").toString()) > parseInt(today)) {
                        return {
                            success: true,
                            message: "Licence Verified successfully",
                            user: response.data
                        }
                    } else {
                        return {
                            success: false,
                            message: "Licence Expired ! Contact ******** To Reactivate Your Licence",
                            user: response.data
                        }
                    }

                },
                error => {
                    return {
                        error: true,
                        message: "Licence Verification failed. Try Again"
                    }
                }
            ).catch(error => {
                return {
                    error: true,
                    message: "Oops error Occurred please. Try Again"
                }
            });
    };

    static reset = (email) => {
        if (email) {
            return LModel.create("users/reset", { "email": email })
                .then(response => {
                    // ClientSession.storeAuth(response.data, err => {err ? console.error('cannot save session'): ''})
                    return {
                        success: true,
                        message: "Email sent Successfully",
                        user: response.data
                    }
                },
                    error => {
                        if (error.response) {
                            if (error.response.status == 401) {
                                return {
                                    error: true,
                                    message: "user email is not found"
                                }
                            }
                            return {
                                error: true,
                                message: "Oops error occurred please. Try Again"
                            }
                        }
                        return {
                            error: true,
                            message: "Error: Not connected"
                        }

                    }
                );
        }
    };
    static changePassword = (password, accessToken) => {
        ClientSession.removeAuth(err => {
          
        });

        if (password) {
            return LModel.create('users/reset-password' + accessToken, { "newPassword": password })
                .then(
                    response => {
                        return {
                            success: true,
                            message: "Password changed successfully",
                            user: response.data
                        }
                    },
                    error => {
                        return {
                            error: true,
                            message: "Oops error occurred please. Try Again"
                        }
                    }
                ).catch(error => {
                    return {
                        error: true,
                        message: "Oops error Occurred please. Try Again"
                    }
                });
        }
    };

    static register = (values) => {
        // const url = pluralName;
        /**
         * this one will double check if the required field is g fill or not (email and password)
         */

        if (values.email && values.username) {
            return LModel.create(pluralName, values)
                .then(
                    response => {
                        // Since Registration is admin only we dont store auth here
                        // ClientSession.storeAuth(response.data, err => {
                        //     err ? console.error('cannot save session') : ''
                        // });
                        // get  the user id and by checking the the role  we can

                        const userId = response.data.id;
                        // get the id where name is admin or manger
                        //create the road mapping
                        // const filter2 = `filter={"where":{"or" : [{"first_name":{"like":".*${name}.*"}},{"last_name":{"like":".*${name}.*"}}]}}`;

                        let filter = '';
                        if (values.role == 'Owner') {
                            filter = `filter={"where":{"name":"admin"}}`;
                        } else if (values.role == 'Super Admin') {
                            filter = `filter={"where":{"name":"super-admin"}}`;
                        } else if (values.role == 'Store Manager') {
                            filter = `filter={"where":{"name":"store-manager"}}`;
                        } else if (values.role == 'Editor') {
                            filter = `filter={"where":{"name":"editor"}}`;
                        } else if (values.role == 'Brand Manager') {
                            filter = `filter={"where":{"name":"brand-manager"}}`;
                        } else return message.error("Please Select a Role")

                        LModel.find('roles', null, filter)
                            .then((response) => {
                                const roleData = response.data.map(role => {
                                    return {
                                        "principalType": "USER",
                                        "principalId": userId,
                                        "roleId": role.id
                                    };

                                });
                                LModel.create('roleMappings', roleData)
                                    .then((response) => { })
                            });

                        return {
                            success: true,
                            message: "Registered successfully! Check email to confirm account",
                            user: response.data
                        }
                    },
                    error => {
                        if (error.response) {
                            if (error.response.status == 422) {
                                return {
                                    error: true,
                                    message: error.response.data.error.message, 
                                    codes: error.response.data.error.details.codes
                                }
                            }
                        } else {
                            return {
                                error: true,
                                message: "Oops error occurred please. Try Again"
                            }
                        }

                    }
                ).catch(error => {
                    return {
                        error: true,
                        message: "Oops error Occurred please. Try Again"
                    }
                })
        }

    };

    static logout = () => {
        ClientSession.getAccessToken(function (isLoggedIn, authData) {
            if (isLoggedIn && authData != null) {
                LModel.create('users/logout', {})
                    .then(response => {
                        ClientSession.removeAuth(err => {

                        });
                        window.location = "#/login";
                    }).catch( err => {
                        ClientSession.removeAuth(err => {

                        });
                        window.location = "#/login";
                    });
            }
        });
    };

    static changeCustomerPassword = (password, accessToken) => {

        if (password) {
            return LModel.create('customers/reset-password' + accessToken, { "newPassword": password })
                .then(
                    response => {
                        return {
                            success: true,
                            message: "Password changed successfully",
                            user: response.data
                        }
                    },
                    error => {
                        return {
                            error: true,
                            message: "Oops error occurred please. Try Again"
                        }
                    }
                ).catch(error => {
                    return {
                        error: true,
                        message: "Oops error Occurred please. Try Again"
                    }
                });
        }
    };


}


export default User;
