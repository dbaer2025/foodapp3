/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
import { Diart } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DiartUpdateFormInputValues = {
    name?: string;
    img?: string;
    description?: string;
    author?: string;
};
export declare type DiartUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    img?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    author?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DiartUpdateFormOverridesProps = {
    DiartUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    img?: PrimitiveOverrideProps<StorageManagerProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DiartUpdateFormProps = React.PropsWithChildren<{
    overrides?: DiartUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    diart?: Diart;
    onSubmit?: (fields: DiartUpdateFormInputValues) => DiartUpdateFormInputValues;
    onSuccess?: (fields: DiartUpdateFormInputValues) => void;
    onError?: (fields: DiartUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DiartUpdateFormInputValues) => DiartUpdateFormInputValues;
    onValidate?: DiartUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DiartUpdateForm(props: DiartUpdateFormProps): React.ReactElement;
