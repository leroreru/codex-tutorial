import React, { useEffect, useState, Fragment } from "react";
import Content from "../shared/content";
import { BsThreeDotsVertical, BsPencil, BsTrash } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { doRequestGetProductCat } from "../redux/action/actionReducer";
import alert from "../config/alert";
import Link from "next/link";
import DeleteProdCat from "./deleteproductcat";
import Pagination from "../shared/pagination";

const ProductCat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [prodCatById, setProdCatById] = useState("");

  let { productcat, message, status, refresh } = useSelector(
    (state: any) => state.productCatReducers
  );
  const dispatch = useDispatch();
  const column = [
    { name: "Category ID" },
    { name: "Nama Product" },
    { name: "Description" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const totalPages = Math.ceil(productcat?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = productcat?.slice(startIndex, endIndex);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(doRequestGetProductCat());
    if (message) {
      setTimeout(() => {
        if (status === 200) {
          alert.succesAlert(message);
        } else {
          alert.unSuccesAlert(message);
        }
      }, 500);
    }
  }, [refresh]);
  return (
    <div>
      {isDelete ? (
        <DeleteProdCat
          show={isDelete}
          prodCatById={prodCatById}
          closeModal={() => setIsDelete(false)}
        />
      ) : (
        ""
      )}

      <ToastContainer />
      <Content
        title="Product Category"
        path="productcat"
        isOpen={() => setIsOpen(true)}
      >
        <table className="min-w-full table-fixed">
          <thead>
            <tr className="border-t border-gray-200">
              {(column || []).map((col) => (
                <th className="pr-6 py-2 text-left border-b border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <span className="lg:pl-2">{col.name}</span>
                </th>
              ))}
              <th className="pr-6 py-2 text-left border-b border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {(currentItems || []).map((data: any, index: any) => (
              <tr key={data.id}>
                <td className="px-6 py-3 text-sm text-gray-900 text-left">
                  {startIndex + index + 1}
                </td>
                <td className="px-6 py-3 text-sm text-gray-900 text-left">
                  {data.name}
                </td>
                <td className="px-6 py-3 text-sm text-gray-900 text-left">
                  {data.description}
                </td>
                <td className="px-6 py-3 text-sm text-gray-900">
                  <div className="w-full text-right">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                          <BsThreeDotsVertical
                            className="ml-2 -mr-1 h-5 w-5 text-gray-700 hover:text-gray-400 sm:flex"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-7 -mt-7 mr-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="px-1 py-1 ">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href={{
                                    pathname: "/productcat/updateproductcat",
                                    query: {
                                      id: data.id,
                                      name: data.name,
                                      description: data.description,
                                    },
                                  }}
                                  // onClick={()=>{setProdCatById(data); setIsEdit(true)}}
                                  className={`${
                                    active
                                      ? "bg-violet-500 text-white"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  {active ? (
                                    <BsPencil
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <BsPencil
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                  Edit
                                </Link>
                              )}
                            </Menu.Item>
                          </div>

                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => {
                                    setProdCatById(data);
                                    setIsDelete(true);
                                  }}
                                  className={`${
                                    active
                                      ? "bg-violet-500 text-white"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  {active ? (
                                    <BsTrash
                                      className="mr-2 h-5 w-5 text-violet-400"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <BsTrash
                                      className="mr-2 h-5 w-5 text-violet-400"
                                      aria-hidden="true"
                                    />
                                  )}
                                  Delete
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
      <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange}></Pagination>
    </div>
  );
};

export default ProductCat;
