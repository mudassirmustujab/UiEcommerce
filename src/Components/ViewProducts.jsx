import { Table } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ViewProducts = () => {
  const [data, setData] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((res) => res.json())
      .then((data) => data && setData(data));
    setDeleted(false);
    console.log(data);
  }, [deleted]);

  const columns = [
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "address",
    },
    {
      title: "Edit",
      dataIndex: "id",
      render: (record) => {
          
    return  <Link key={record} to={`edit/${record}`}>
          Edit
        </Link>
      }
    },
    {
      title: "Delete",
      dataIndex: "id",
      render: (record) => {
        const deleted = () => {
          fetch(`http://localhost:8000/data/${record}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              setDeleted(true);
              return data;
            })
            .catch((err) => {
              setDeleted(false);
              return err;
            });
        };

        return <button onClick={deleted}>Delete</button>;
      },
    },
  ];
  return (
    <>
      ViewProducts
      <Table dataSource={data} columns={columns} />;
    </>
  );
};

export default ViewProducts;
