// This file is auto-generated by @hey-api/openapi-ts

export const $Error = {
    type: 'object',
    required: ['error'],
    properties: {
        data: {
            nullable: true,
            oneOf: [
                {
                    type: 'object'
                },
                {
                    type: 'array',
                    items: {
                        type: 'object'
                    }
                }
            ]
        },
        error: {
            type: 'object',
            properties: {
                status: {
                    type: 'integer'
                },
                name: {
                    type: 'string'
                },
                message: {
                    type: 'string'
                },
                details: {
                    type: 'object'
                }
            }
        }
    }
} as const;

export const $ProfileInfoRequest = {
    type: 'object',
    required: ['data'],
    properties: {
        data: {
            type: 'object',
            properties: {
                user: {
                    oneOf: [
                        {
                            type: 'integer'
                        },
                        {
                            type: 'string'
                        }
                    ],
                    example: 'string or id'
                },
                description: {
                    type: 'string'
                }
            }
        }
    }
} as const;

export const $ProfileInfoListResponseDataItem = {
    type: 'object',
    properties: {
        id: {
            type: 'number'
        },
        attributes: {
            '$ref': '#/components/schemas/ProfileInfo'
        }
    }
} as const;

export const $ProfileInfoListResponse = {
    type: 'object',
    properties: {
        data: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ProfileInfoListResponseDataItem'
            }
        },
        meta: {
            type: 'object',
            properties: {
                pagination: {
                    type: 'object',
                    properties: {
                        page: {
                            type: 'integer'
                        },
                        pageSize: {
                            type: 'integer',
                            minimum: 25
                        },
                        pageCount: {
                            type: 'integer',
                            maximum: 1
                        },
                        total: {
                            type: 'integer'
                        }
                    }
                }
            }
        }
    }
} as const;

export const $ProfileInfo = {
    type: 'object',
    properties: {
        user: {
            type: 'object',
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'number'
                        },
                        attributes: {
                            type: 'object',
                            properties: {
                                firstname: {
                                    type: 'string'
                                },
                                lastname: {
                                    type: 'string'
                                },
                                username: {
                                    type: 'string'
                                },
                                email: {
                                    type: 'string',
                                    format: 'email'
                                },
                                resetPasswordToken: {
                                    type: 'string'
                                },
                                registrationToken: {
                                    type: 'string'
                                },
                                isActive: {
                                    type: 'boolean'
                                },
                                roles: {
                                    type: 'object',
                                    properties: {
                                        data: {
                                            type: 'array',
                                            items: {
                                                type: 'object',
                                                properties: {
                                                    id: {
                                                        type: 'number'
                                                    },
                                                    attributes: {
                                                        type: 'object',
                                                        properties: {
                                                            name: {
                                                                type: 'string'
                                                            },
                                                            code: {
                                                                type: 'string'
                                                            },
                                                            description: {
                                                                type: 'string'
                                                            },
                                                            users: {
                                                                type: 'object',
                                                                properties: {
                                                                    data: {
                                                                        type: 'array',
                                                                        items: {
                                                                            type: 'object',
                                                                            properties: {
                                                                                id: {
                                                                                    type: 'number'
                                                                                },
                                                                                attributes: {
                                                                                    type: 'object',
                                                                                    properties: {}
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            permissions: {
                                                                type: 'object',
                                                                properties: {
                                                                    data: {
                                                                        type: 'array',
                                                                        items: {
                                                                            type: 'object',
                                                                            properties: {
                                                                                id: {
                                                                                    type: 'number'
                                                                                },
                                                                                attributes: {
                                                                                    type: 'object',
                                                                                    properties: {
                                                                                        action: {
                                                                                            type: 'string'
                                                                                        },
                                                                                        actionParameters: {},
                                                                                        subject: {
                                                                                            type: 'string'
                                                                                        },
                                                                                        properties: {},
                                                                                        conditions: {},
                                                                                        role: {
                                                                                            type: 'object',
                                                                                            properties: {
                                                                                                data: {
                                                                                                    type: 'object',
                                                                                                    properties: {
                                                                                                        id: {
                                                                                                            type: 'number'
                                                                                                        },
                                                                                                        attributes: {
                                                                                                            type: 'object',
                                                                                                            properties: {}
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        },
                                                                                        createdAt: {
                                                                                            type: 'string',
                                                                                            format: 'date-time'
                                                                                        },
                                                                                        updatedAt: {
                                                                                            type: 'string',
                                                                                            format: 'date-time'
                                                                                        },
                                                                                        createdBy: {
                                                                                            type: 'object',
                                                                                            properties: {
                                                                                                data: {
                                                                                                    type: 'object',
                                                                                                    properties: {
                                                                                                        id: {
                                                                                                            type: 'number'
                                                                                                        },
                                                                                                        attributes: {
                                                                                                            type: 'object',
                                                                                                            properties: {}
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        },
                                                                                        updatedBy: {
                                                                                            type: 'object',
                                                                                            properties: {
                                                                                                data: {
                                                                                                    type: 'object',
                                                                                                    properties: {
                                                                                                        id: {
                                                                                                            type: 'number'
                                                                                                        },
                                                                                                        attributes: {
                                                                                                            type: 'object',
                                                                                                            properties: {}
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            createdAt: {
                                                                type: 'string',
                                                                format: 'date-time'
                                                            },
                                                            updatedAt: {
                                                                type: 'string',
                                                                format: 'date-time'
                                                            },
                                                            createdBy: {
                                                                type: 'object',
                                                                properties: {
                                                                    data: {
                                                                        type: 'object',
                                                                        properties: {
                                                                            id: {
                                                                                type: 'number'
                                                                            },
                                                                            attributes: {
                                                                                type: 'object',
                                                                                properties: {}
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            updatedBy: {
                                                                type: 'object',
                                                                properties: {
                                                                    data: {
                                                                        type: 'object',
                                                                        properties: {
                                                                            id: {
                                                                                type: 'number'
                                                                            },
                                                                            attributes: {
                                                                                type: 'object',
                                                                                properties: {}
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                blocked: {
                                    type: 'boolean'
                                },
                                preferedLanguage: {
                                    type: 'string'
                                },
                                createdAt: {
                                    type: 'string',
                                    format: 'date-time'
                                },
                                updatedAt: {
                                    type: 'string',
                                    format: 'date-time'
                                },
                                createdBy: {
                                    type: 'object',
                                    properties: {
                                        data: {
                                            type: 'object',
                                            properties: {
                                                id: {
                                                    type: 'number'
                                                },
                                                attributes: {
                                                    type: 'object',
                                                    properties: {}
                                                }
                                            }
                                        }
                                    }
                                },
                                updatedBy: {
                                    type: 'object',
                                    properties: {
                                        data: {
                                            type: 'object',
                                            properties: {
                                                id: {
                                                    type: 'number'
                                                },
                                                attributes: {
                                                    type: 'object',
                                                    properties: {}
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        description: {
            type: 'string'
        },
        createdAt: {
            type: 'string',
            format: 'date-time'
        },
        updatedAt: {
            type: 'string',
            format: 'date-time'
        },
        publishedAt: {
            type: 'string',
            format: 'date-time'
        },
        createdBy: {
            type: 'object',
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'number'
                        },
                        attributes: {
                            type: 'object',
                            properties: {}
                        }
                    }
                }
            }
        },
        updatedBy: {
            type: 'object',
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'number'
                        },
                        attributes: {
                            type: 'object',
                            properties: {}
                        }
                    }
                }
            }
        }
    }
} as const;

export const $ProfileInfoResponseDataObject = {
    type: 'object',
    properties: {
        id: {
            type: 'number'
        },
        attributes: {
            '$ref': '#/components/schemas/ProfileInfo'
        }
    }
} as const;

export const $ProfileInfoResponse = {
    type: 'object',
    properties: {
        data: {
            '$ref': '#/components/schemas/ProfileInfoResponseDataObject'
        },
        meta: {
            type: 'object'
        }
    }
} as const;