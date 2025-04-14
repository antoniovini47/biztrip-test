import SupplierListItem from "./supplier-list-item";

const SuppliersList = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <SupplierListItem key={index} />
      ))}
    </>
  );
};

export default SuppliersList;
