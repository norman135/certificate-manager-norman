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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SupplierDTO
 */
export interface SupplierDTO {
    /**
     * 
     * @type {string}
     * @memberof SupplierDTO
     */
    handle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SupplierDTO
     */
    name?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SupplierDTO
     */
    index?: number;
    /**
     * 
     * @type {string}
     * @memberof SupplierDTO
     */
    city?: string | null;
}

/**
 * Check if a given object implements the SupplierDTO interface.
 */
export function instanceOfSupplierDTO(value: object): value is SupplierDTO {
    return true;
}

export function SupplierDTOFromJSON(json: any): SupplierDTO {
    return SupplierDTOFromJSONTyped(json, false);
}

export function SupplierDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SupplierDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'handle': json['handle'] == null ? undefined : json['handle'],
        'name': json['name'] == null ? undefined : json['name'],
        'index': json['index'] == null ? undefined : json['index'],
        'city': json['city'] == null ? undefined : json['city'],
    };
}

export function SupplierDTOToJSON(value?: SupplierDTO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'handle': value['handle'],
        'name': value['name'],
        'index': value['index'],
        'city': value['city'],
    };
}

