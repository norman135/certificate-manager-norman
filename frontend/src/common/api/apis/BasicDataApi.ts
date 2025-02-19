/* tslint:disable */
/* eslint-disable */
/**
 * CertificatesManagerApi
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CertificateTypeDTO,
  SupplierDTO,
  UserDTO,
} from '../models/index';
import {
    CertificateTypeDTOFromJSON,
    CertificateTypeDTOToJSON,
    SupplierDTOFromJSON,
    SupplierDTOToJSON,
    UserDTOFromJSON,
    UserDTOToJSON,
} from '../models/index';

export interface SuppliersGetRequest {
    index?: number;
    name?: string;
    city?: string;
}

export interface UsersGetRequest {
    name?: string;
    firstName?: string;
    userId?: string;
    department?: string;
    plant?: string;
}

/**
 * 
 */
export class BasicDataApi extends runtime.BaseAPI {

    /**
     */
    async certificatesTypesGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CertificateTypeDTO>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/certificates/types`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CertificateTypeDTOFromJSON));
    }

    /**
     */
    async certificatesTypesGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CertificateTypeDTO>> {
        const response = await this.certificatesTypesGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async suppliersGetRaw(requestParameters: SuppliersGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<SupplierDTO>>> {
        const queryParameters: any = {};

        if (requestParameters['index'] != null) {
            queryParameters['Index'] = requestParameters['index'];
        }

        if (requestParameters['name'] != null) {
            queryParameters['Name'] = requestParameters['name'];
        }

        if (requestParameters['city'] != null) {
            queryParameters['City'] = requestParameters['city'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/suppliers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SupplierDTOFromJSON));
    }

    /**
     */
    async suppliersGet(requestParameters: SuppliersGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<SupplierDTO>> {
        const response = await this.suppliersGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async usersGetRaw(requestParameters: UsersGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<UserDTO>>> {
        const queryParameters: any = {};

        if (requestParameters['name'] != null) {
            queryParameters['Name'] = requestParameters['name'];
        }

        if (requestParameters['firstName'] != null) {
            queryParameters['FirstName'] = requestParameters['firstName'];
        }

        if (requestParameters['userId'] != null) {
            queryParameters['UserId'] = requestParameters['userId'];
        }

        if (requestParameters['department'] != null) {
            queryParameters['Department'] = requestParameters['department'];
        }

        if (requestParameters['plant'] != null) {
            queryParameters['Plant'] = requestParameters['plant'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserDTOFromJSON));
    }

    /**
     */
    async usersGet(requestParameters: UsersGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<UserDTO>> {
        const response = await this.usersGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
