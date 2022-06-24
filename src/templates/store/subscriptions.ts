import { GetState, SetState } from "zustand";
import { TemplateValue } from "../types/TemplateValue";
import { Store } from "./store";

export const handleTemplateUpdate = (get: GetState<Store>, set: SetState<Store>) => (newValue: TemplateValue) => {
  const { templateValues } = get();

  set({ templateValues: templateValues.concat([newValue]) });
}
