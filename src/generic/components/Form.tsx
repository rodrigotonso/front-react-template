import { useForm, UseFormProps, UnpackNestedValue, FormProvider } from 'react-hook-form';

import { ReactElement } from '~/types/react';

interface FormProps<FormValues> extends UseFormProps<FormValues> {
  children: ReactElement | ReactElement[];
  className?: string;
  cleanOnSubmit?: boolean;
  id?: string;
  onReset?: () => void;
  onSubmit: (data: UnpackNestedValue<FormValues>) => Promise<void>;
}

export const Form = <FormValues,>({
  children,
  className,
  id,
  onReset,
  onSubmit,
  mode,
  defaultValues,
  resolver,
  context,
  criteriaMode,
  shouldFocusError,
  shouldUnregister,
  shouldUseNativeValidation,
  delayError,
  cleanOnSubmit = true,
  reValidateMode = 'onChange',
}: FormProps<FormValues>): ReactElement => {
  const methods = useForm<FormValues>({
    mode,
    reValidateMode,
    defaultValues,
    resolver,
    context,
    criteriaMode,
    shouldFocusError,
    shouldUnregister,
    shouldUseNativeValidation,
    delayError,
  });
  return (
    <FormProvider {...methods}>
      <form
        className={className}
        id={id}
        onSubmit={(e) => {
          e.preventDefault();
          methods.handleSubmit(onSubmit)();
          if (cleanOnSubmit && methods.formState.isSubmitted) methods.reset();
        }}
        onReset={() => {
          onReset?.();
          methods.reset();
        }}
        noValidate
      >
        {children}
      </form>
    </FormProvider>
  );
};
