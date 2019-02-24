function numberOnly(event): boolean {
  const charCode = (event.which) ? event.which : event.keyCode;
  return !(charCode > 31 && (charCode < 48 || charCode > 57));
}

export default numberOnly;
