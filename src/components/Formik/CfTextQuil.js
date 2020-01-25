import React from 'react'
import PropTypes from 'prop-types'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Label } from 'reactstrap'
import { requireLabel } from '../../helpers'

const CfTextQuil = ({
  label,
  isRequired,
  field,
  form: { touched, errors, setFieldValue, setFieldTouched },
  ...props
}) => {
  const TextQuilFormats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ]

  const TextQuilModules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }

  return (
    <>
      <Label>
        <b>Nama Role</b>
        &nbsp;
        {isRequired && requireLabel()}
      </Label>
      <ReactQuill
        {...props}
        modules={TextQuilModules}
        formats={TextQuilFormats}
        onBlur={() => setFieldTouched(field.name, true)}
        onChange={value => setFieldValue(field.name, value)}
        value={field.value ? field.value : ''}
      />

      {touched[field.name] && errors[field.name] && (
        <span className="form-text text-danger" style={{ paddingBottom: '10px' }}>
          {errors[field.name]}
        </span>
      )}
    </>
  )
}

CfTextQuil.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  isRequired: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  field: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  form: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
}

export default CfTextQuil
