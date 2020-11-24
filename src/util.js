const API_LOCALHOST = false;

export const API_host = function (){

    if (API_LOCALHOST) {

        return 'http://localhost:4000';
    } else {

        return 'https://volunteernation-api.herokuapp.com';
    }

}()
