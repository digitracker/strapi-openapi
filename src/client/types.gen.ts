// This file is auto-generated by @hey-api/openapi-ts

export type Error = {
    data?: {
    [key: string]: unknown;
} | Array<{
    [key: string]: unknown;
}> | null;
    error: {
        status?: number;
        name?: string;
        message?: string;
        details?: {
            [key: string]: unknown;
        };
    };
};

export type ProfileInfoRequest = {
    data: {
        user?: number | string;
        description?: string;
        name?: string;
    };
};

export type ProfileInfoListResponseDataItem = {
    id?: number;
    attributes?: ProfileInfo;
};

export type ProfileInfoListResponse = {
    data?: Array<ProfileInfoListResponseDataItem>;
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};

export type ProfileInfo = {
    user?: {
        data?: {
            id?: number;
            attributes?: {
                firstname?: string;
                lastname?: string;
                username?: string;
                email?: string;
                resetPasswordToken?: string;
                registrationToken?: string;
                isActive?: boolean;
                roles?: {
                    data?: Array<{
                        id?: number;
                        attributes?: {
                            name?: string;
                            code?: string;
                            description?: string;
                            users?: {
                                data?: Array<{
                                    id?: number;
                                    attributes?: unknown;
                                }>;
                            };
                            permissions?: {
                                data?: Array<{
                                    id?: number;
                                    attributes?: {
                                        action?: string;
                                        actionParameters?: unknown;
                                        subject?: string;
                                        properties?: unknown;
                                        conditions?: unknown;
                                        role?: {
                                            data?: {
                                                id?: number;
                                                attributes?: unknown;
                                            };
                                        };
                                        createdAt?: string;
                                        updatedAt?: string;
                                        createdBy?: {
                                            data?: {
                                                id?: number;
                                                attributes?: unknown;
                                            };
                                        };
                                        updatedBy?: {
                                            data?: {
                                                id?: number;
                                                attributes?: unknown;
                                            };
                                        };
                                    };
                                }>;
                            };
                            createdAt?: string;
                            updatedAt?: string;
                            createdBy?: {
                                data?: {
                                    id?: number;
                                    attributes?: unknown;
                                };
                            };
                            updatedBy?: {
                                data?: {
                                    id?: number;
                                    attributes?: unknown;
                                };
                            };
                        };
                    }>;
                };
                blocked?: boolean;
                preferedLanguage?: string;
                createdAt?: string;
                updatedAt?: string;
                createdBy?: {
                    data?: {
                        id?: number;
                        attributes?: unknown;
                    };
                };
                updatedBy?: {
                    data?: {
                        id?: number;
                        attributes?: unknown;
                    };
                };
            };
        };
    };
    description?: string;
    name?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: {
        data?: {
            id?: number;
            attributes?: unknown;
        };
    };
    updatedBy?: {
        data?: {
            id?: number;
            attributes?: unknown;
        };
    };
};

export type ProfileInfoResponseDataObject = {
    id?: number;
    attributes?: ProfileInfo;
};

export type ProfileInfoResponse = {
    data?: ProfileInfoResponseDataObject;
    meta?: {
        [key: string]: unknown;
    };
};

export type Users_Permissions_Role = {
    id?: number;
    name?: string;
    description?: string;
    type?: string;
    createdAt?: string;
    updatedAt?: string;
};

export type Users_Permissions_User = {
    id?: number;
    username?: string;
    email?: string;
    provider?: string;
    confirmed?: boolean;
    blocked?: boolean;
    createdAt?: string;
    updatedAt?: string;
};

export type Users_Permissions_UserRegistration = {
    jwt?: string;
    user?: Users_Permissions_User;
};

export type Users_Permissions_PermissionsTree = {
    [key: string]: {
        /**
         * every controller of the api
         */
        controllers?: {
            [key: string]: {
                [key: string]: {
                    enabled?: boolean;
                    policy?: string;
                };
            };
        };
    };
};

export type GetProfileInfosData = {
    /**
     * Fields to return (ex: title,author)
     */
    fields?: string;
    /**
     * Filters to apply
     */
    filters?: {
        [key: string]: unknown;
    };
    /**
     * Locale to apply
     */
    locale?: string;
    /**
     * Number of entities to return (default: 25)
     */
    paginationLimit?: number;
    /**
     * Page number (default: 0)
     */
    paginationPage?: number;
    /**
     * Page size (default: 25)
     */
    paginationPageSize?: number;
    /**
     * Offset value (default: 0)
     */
    paginationStart?: number;
    /**
     * Return page/pageSize (default: true)
     */
    paginationWithCount?: boolean;
    /**
     * Relations to return
     */
    populate?: string;
    /**
     * Sort by attributes ascending (asc) or descending (desc)
     */
    sort?: string;
};

export type GetProfileInfosResponse = ProfileInfoListResponse;

export type PostProfileInfosData = {
    requestBody: ProfileInfoRequest;
};

export type PostProfileInfosResponse = ProfileInfoResponse;

export type GetProfileInfosIdData = {
    id: number;
};

export type GetProfileInfosIdResponse = ProfileInfoResponse;

export type PutProfileInfosIdData = {
    id: number;
    requestBody: ProfileInfoRequest;
};

export type PutProfileInfosIdResponse = ProfileInfoResponse;

export type DeleteProfileInfosIdData = {
    id: number;
};

export type DeleteProfileInfosIdResponse = number;

export type GetConnectByProviderData = {
    /**
     * Provider name
     */
    provider: string;
};

export type GetConnectByProviderResponse = Error;

export type PostAuthLocalData = {
    requestBody: {
        identifier?: string;
        password?: string;
    };
};

export type PostAuthLocalResponse = Users_Permissions_UserRegistration | Error;

export type PostAuthLocalRegisterData = {
    requestBody: {
        username?: string;
        email?: string;
        password?: string;
    };
};

export type PostAuthLocalRegisterResponse = Users_Permissions_UserRegistration | Error;

export type GetAuthByProviderCallbackData = {
    /**
     * Provider name
     */
    provider: string;
};

export type GetAuthByProviderCallbackResponse = Users_Permissions_UserRegistration | Error;

export type PostAuthForgotPasswordData = {
    requestBody: {
        email?: string;
    };
};

export type PostAuthForgotPasswordResponse = {
    ok?: string;
} | Error;

export type PostAuthResetPasswordData = {
    requestBody: {
        password?: string;
        passwordConfirmation?: string;
        code?: string;
    };
};

export type PostAuthResetPasswordResponse = Users_Permissions_UserRegistration | Error;

export type PostAuthChangePasswordData = {
    requestBody: {
        password: string;
        currentPassword: string;
        passwordConfirmation: string;
    };
};

export type PostAuthChangePasswordResponse = Users_Permissions_UserRegistration | Error;

export type GetAuthEmailConfirmationData = {
    /**
     * confirmation token received by email
     */
    confirmation?: string;
};

export type GetAuthEmailConfirmationResponse = Error;

export type PostAuthSendEmailConfirmationData = {
    requestBody: {
        email?: string;
    };
};

export type PostAuthSendEmailConfirmationResponse = {
    email?: string;
    sent?: string;
} | Error;

export type GetUsersPermissionsPermissionsResponse = {
    permissions?: Users_Permissions_PermissionsTree;
} | Error;

export type GetUsersPermissionsRolesResponse = {
    roles?: Array<(Users_Permissions_Role & {
    nb_users?: number;
})>;
} | Error;

export type PostUsersPermissionsRolesData = {
    requestBody: {
        name?: string;
        description?: string;
        type?: string;
        permissions?: Users_Permissions_PermissionsTree;
    };
};

export type PostUsersPermissionsRolesResponse = {
    ok?: string;
} | Error;

export type GetUsersPermissionsRolesByIdData = {
    /**
     * role Id
     */
    id: string;
};

export type GetUsersPermissionsRolesByIdResponse = {
    role?: Users_Permissions_Role;
} | Error;

export type PutUsersPermissionsRolesByRoleData = {
    requestBody: {
        name?: string;
        description?: string;
        type?: string;
        permissions?: Users_Permissions_PermissionsTree;
    };
    /**
     * role Id
     */
    role: string;
};

export type PutUsersPermissionsRolesByRoleResponse = {
    ok?: string;
} | Error;

export type DeleteUsersPermissionsRolesByRoleData = {
    /**
     * role Id
     */
    role: string;
};

export type DeleteUsersPermissionsRolesByRoleResponse = {
    ok?: string;
} | Error;

export type GetUsersResponse = Array<Users_Permissions_User> | Error;

export type PostUsersData = {
    requestBody: {
        email: string;
        username: string;
        password: string;
    };
};

export type PostUsersResponse = Users_Permissions_User & {
    role?: Users_Permissions_Role;
} | Error;

export type GetUsersByIdData = {
    /**
     * user Id
     */
    id: string;
};

export type GetUsersByIdResponse = Users_Permissions_User | Error;

export type PutUsersByIdData = {
    /**
     * user Id
     */
    id: string;
    requestBody: {
        email: string;
        username: string;
        password: string;
    };
};

export type PutUsersByIdResponse = Users_Permissions_User & {
    role?: Users_Permissions_Role;
} | Error;

export type DeleteUsersByIdData = {
    /**
     * user Id
     */
    id: string;
};

export type DeleteUsersByIdResponse = Users_Permissions_User | Error;

export type GetUsersMeResponse = Users_Permissions_User | Error;

export type GetUsersCountResponse = number | Error;

export type $OpenApiTs = {
    '/profile-infos': {
        get: {
            req: GetProfileInfosData;
            res: {
                /**
                 * OK
                 */
                200: ProfileInfoListResponse;
                /**
                 * Bad Request
                 */
                400: Error;
                /**
                 * Unauthorized
                 */
                401: Error;
                /**
                 * Forbidden
                 */
                403: Error;
                /**
                 * Not Found
                 */
                404: Error;
                /**
                 * Internal Server Error
                 */
                500: Error;
            };
        };
        post: {
            req: PostProfileInfosData;
            res: {
                /**
                 * OK
                 */
                200: ProfileInfoResponse;
                /**
                 * Bad Request
                 */
                400: Error;
                /**
                 * Unauthorized
                 */
                401: Error;
                /**
                 * Forbidden
                 */
                403: Error;
                /**
                 * Not Found
                 */
                404: Error;
                /**
                 * Internal Server Error
                 */
                500: Error;
            };
        };
    };
    '/profile-infos/{id}': {
        get: {
            req: GetProfileInfosIdData;
            res: {
                /**
                 * OK
                 */
                200: ProfileInfoResponse;
                /**
                 * Bad Request
                 */
                400: Error;
                /**
                 * Unauthorized
                 */
                401: Error;
                /**
                 * Forbidden
                 */
                403: Error;
                /**
                 * Not Found
                 */
                404: Error;
                /**
                 * Internal Server Error
                 */
                500: Error;
            };
        };
        put: {
            req: PutProfileInfosIdData;
            res: {
                /**
                 * OK
                 */
                200: ProfileInfoResponse;
                /**
                 * Bad Request
                 */
                400: Error;
                /**
                 * Unauthorized
                 */
                401: Error;
                /**
                 * Forbidden
                 */
                403: Error;
                /**
                 * Not Found
                 */
                404: Error;
                /**
                 * Internal Server Error
                 */
                500: Error;
            };
        };
        delete: {
            req: DeleteProfileInfosIdData;
            res: {
                /**
                 * OK
                 */
                200: number;
                /**
                 * Bad Request
                 */
                400: Error;
                /**
                 * Unauthorized
                 */
                401: Error;
                /**
                 * Forbidden
                 */
                403: Error;
                /**
                 * Not Found
                 */
                404: Error;
                /**
                 * Internal Server Error
                 */
                500: Error;
            };
        };
    };
    '/connect/{provider}': {
        get: {
            req: GetConnectByProviderData;
            res: {
                /**
                 * Redirect response
                 */
                301: unknown;
                /**
                 * Error
                 */
                default: Error;
            };
        };
    };
    '/auth/local': {
        post: {
            req: PostAuthLocalData;
            res: {
                /**
                 * Connection
                 */
                200: Users_Permissions_UserRegistration;
                /**
                 * Error
                 */
                default: Error;
            };
        };
    };
    '/auth/local/register': {
        post: {
            req: PostAuthLocalRegisterData;
            res: {
                /**
                 * Successful registration
                 */
                200: Users_Permissions_UserRegistration;
                /**
                 * Error
                 */
                default: Error;
            };
        };
    };
    '/auth/{provider}/callback': {
        get: {
            req: GetAuthByProviderCallbackData;
            res: {
                /**
                 * Returns a jwt token and user info
                 */
                200: Users_Permissions_UserRegistration;
                /**
                 * Error
                 */
                default: Error;
            };
        };
    };
    '/auth/forgot-password': {
        post: {
            req: PostAuthForgotPasswordData;
            res: {
                /**
                 * Returns ok
                 */
                200: {
                    ok?: string;
                };
                /**
                 * Error
                 */
                default: Error;
            };
        };
    };
    '/auth/reset-password': {
        post: {
            req: PostAuthResetPasswordData;
            res: {
                /**
                 * Returns a jwt token and user info
                 */
                200: Users_Permissions_UserRegistration;
                /**
                 * Error
                 */
                default: Error;
            };
        };
    };
    '/auth/change-password': {
        post: {
            req: PostAuthChangePasswordData;
            res: {
                /**
                 * Returns a jwt token and user info
                 */
                200: Users_Permissions_UserRegistration;
                /**
                 * Error
                 */
                default: Error;
            };
        };
    };
    '/auth/email-confirmation': {
        get: {
            req: GetAuthEmailConfirmationData;
            res: {
                /**
                 * Redirects to the configure email confirmation redirect url
                 */
                301: unknown;
                /**
                 * Error
                 */
                default: Error;
            };
        };
    };
    '/auth/send-email-confirmation': {
        post: {
            req: PostAuthSendEmailConfirmationData;
            res: {
                /**
                 * Returns email and boolean to confirm email was sent
                 */
                200: {
                    email?: string;
                    sent?: string;
                };
                /**
                 * Error
                 */
                default: Error;
            };
        };
    };
    '/users-permissions/permissions': {
        get: {
            res: {
                /**
                 * Returns the permissions tree
                 */
                200: {
                    permissions?: Users_Permissions_PermissionsTree;
                };
                /**
                 * Error
                 */
                default: Error;
            };
        };
    };
    '/users-permissions/roles': {
        get: {
            res: {
                /**
                 * Returns list of roles
                 */
                200: {
                    roles?: Array<(Users_Permissions_Role & {
    nb_users?: number;
})>;
                };
                /**
                 * Error
                 */
                default: Error;
            };
        };
        post: {
            req: PostUsersPermissionsRolesData;
            res: {
                /**
                 * Returns ok if the role was create
                 */
                200: {
                    ok?: string;
                };
                /**
                 * Error
                 */
                default: Error;
            };
        };
    };
    '/users-permissions/roles/{id}': {
        get: {
            req: GetUsersPermissionsRolesByIdData;
            res: {
                /**
                 * Returns the role
                 */
                200: {
                    role?: Users_Permissions_Role;
                };
                /**
                 * Error
                 */
                default: Error;
            };
        };
    };
    '/users-permissions/roles/{role}': {
        put: {
            req: PutUsersPermissionsRolesByRoleData;
            res: {
                /**
                 * Returns ok if the role was udpated
                 */
                200: {
                    ok?: string;
                };
                /**
                 * Error
                 */
                default: Error;
            };
        };
        delete: {
            req: DeleteUsersPermissionsRolesByRoleData;
            res: {
                /**
                 * Returns ok if the role was delete
                 */
                200: {
                    ok?: string;
                };
                /**
                 * Error
                 */
                default: Error;
            };
        };
    };
    '/users': {
        get: {
            res: {
                /**
                 * Returns an array of users
                 */
                200: Array<Users_Permissions_User>;
                /**
                 * Error
                 */
                default: Error;
            };
        };
        post: {
            req: PostUsersData;
            res: {
                /**
                 * Returns created user info
                 */
                201: Users_Permissions_User & {
    role?: Users_Permissions_Role;
};
                /**
                 * Error
                 */
                default: Error;
            };
        };
    };
    '/users/{id}': {
        get: {
            req: GetUsersByIdData;
            res: {
                /**
                 * Returns a user
                 */
                200: Users_Permissions_User;
                /**
                 * Error
                 */
                default: Error;
            };
        };
        put: {
            req: PutUsersByIdData;
            res: {
                /**
                 * Returns updated user info
                 */
                200: Users_Permissions_User & {
    role?: Users_Permissions_Role;
};
                /**
                 * Error
                 */
                default: Error;
            };
        };
        delete: {
            req: DeleteUsersByIdData;
            res: {
                /**
                 * Returns deleted user info
                 */
                200: Users_Permissions_User;
                /**
                 * Error
                 */
                default: Error;
            };
        };
    };
    '/users/me': {
        get: {
            res: {
                /**
                 * Returns user info
                 */
                200: Users_Permissions_User;
                /**
                 * Error
                 */
                default: Error;
            };
        };
    };
    '/users/count': {
        get: {
            res: {
                /**
                 * Returns a number
                 */
                200: number;
                /**
                 * Error
                 */
                default: Error;
            };
        };
    };
};