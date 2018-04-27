export function configureFakeBackend() {
    // let users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // authenticate
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);

                    // if login details are valid return user details and fake jwt token
                    let user = params;
                    let responseJson = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    resolve({ ok: true, json: () => responseJson });


                    return;
                }

                // get users
                if (url.endsWith('/users') && opts.method === 'GET') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    // if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                    //     resolve({ ok: true, json: () => users });
                    // } else {
                    //     // return 401 not authorised if token is null or invalid
                    //     reject('Unauthorised');
                    // }
                    //
                    // return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}