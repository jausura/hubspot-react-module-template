import { ModuleFields, TextField } from "@hubspot/cms-components/fields";

export function Component({ fieldValues }) {
  return (
    <>
      <h1>{fieldValues.testText}</h1>
    </>
  );
}

export const fields = (
  <ModuleFields>
    <TextField
      label="My Test Text"
      name="testText"
      default="This is the default text"
    />
  </ModuleFields>
);

export const meta = {
  label: "This is the test Goober Module",
};
