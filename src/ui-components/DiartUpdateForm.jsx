/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import {
  fetchByPath,
  getOverrideProps,
  processFile,
  validateField,
} from "./utils";
import { generateClient } from "aws-amplify/api";
import { getDiart } from "../graphql/queries";
import { updateDiart } from "../graphql/mutations";
import { Field } from "@aws-amplify/ui-react/internal";
const client = generateClient();
export default function DiartUpdateForm(props) {
  const {
    id: idProp,
    diart: diartModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    img: undefined,
    description: "",
    author: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [img, setImg] = React.useState(initialValues.img);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [author, setAuthor] = React.useState(initialValues.author);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = diartRecord
      ? { ...initialValues, ...diartRecord }
      : initialValues;
    setName(cleanValues.name);
    setImg(cleanValues.img);
    setDescription(cleanValues.description);
    setAuthor(cleanValues.author);
    setErrors({});
  };
  const [diartRecord, setDiartRecord] = React.useState(diartModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getDiart.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getDiart
        : diartModelProp;
      setDiartRecord(record);
    };
    queryData();
  }, [idProp, diartModelProp]);
  React.useEffect(resetStateValues, [diartRecord]);
  const validations = {
    name: [],
    img: [],
    description: [],
    author: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name: name ?? null,
          img: img ?? null,
          description: description ?? null,
          author: author ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateDiart.replaceAll("__typename", ""),
            variables: {
              input: {
                id: diartRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "DiartUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              img,
              description,
              author,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <Field
        errorMessage={errors.img?.errorMessage}
        hasError={errors.img?.hasError}
        label={"Img"}
        isRequired={false}
        isReadOnly={false}
      >
        {diartRecord && (
          <StorageManager
            defaultFiles={[{ key: diartRecord.img }]}
            onUploadSuccess={({ key }) => {
              setImg((prev) => {
                let value = key;
                if (onChange) {
                  const modelFields = {
                    name,
                    img: value,
                    description,
                    author,
                  };
                  const result = onChange(modelFields);
                  value = result?.img ?? value;
                }
                return value;
              });
            }}
            onFileRemove={({ key }) => {
              setImg((prev) => {
                let value = initialValues?.img;
                if (onChange) {
                  const modelFields = {
                    name,
                    img: value,
                    description,
                    author,
                  };
                  const result = onChange(modelFields);
                  value = result?.img ?? value;
                }
                return value;
              });
            }}
            processFile={processFile}
            accessLevel={"private"}
            acceptedFileTypes={[]}
            isResumable={false}
            showThumbnails={true}
            maxFileCount={1}
            {...getOverrideProps(overrides, "img")}
          ></StorageManager>
        )}
      </Field>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              img,
              description: value,
              author,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Author"
        isRequired={false}
        isReadOnly={false}
        value={author}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              img,
              description,
              author: value,
            };
            const result = onChange(modelFields);
            value = result?.author ?? value;
          }
          if (errors.author?.hasError) {
            runValidationTasks("author", value);
          }
          setAuthor(value);
        }}
        onBlur={() => runValidationTasks("author", author)}
        errorMessage={errors.author?.errorMessage}
        hasError={errors.author?.hasError}
        {...getOverrideProps(overrides, "author")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || diartModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || diartModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
