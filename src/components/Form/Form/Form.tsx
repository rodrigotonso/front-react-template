import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import Swal from 'sweetalert2';

import { testFormDefaultValues } from './formConfig';
import { FormContent } from './FormContent/FormContent';
import { testFormValidationSchema } from './formValidation';
import { Form } from '~/generic/components/Form';
import { i18n } from '~/internationalization';
import { TestForm } from '~/types/form';
import { FC } from '~/types/react';

export interface FormComponentProps {
  className?: string;
}

export const FormComponent: FC<FormComponentProps> = ({ className }) => (
  <div>
    <Form<TestForm>
      className={className}
      defaultValues={testFormDefaultValues}
      onSubmit={async (data: TestForm) => {
        Swal.fire(i18n.get('FORM_TITLE'), JSON.stringify(data), 'success');
      }}
      resolver={yupResolver(testFormValidationSchema)}
    >
      <FormContent />
    </Form>
  </div>
);
