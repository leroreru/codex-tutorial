import React, { useEffect, useState, Fragment } from 'react';
import Content from '../shared/content';
import { BsThreeDotsVertical, BsPencil, BsTrash } from 'react-icons/bs';
import { Menu, Transition } from '@headlessui/react';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import DeleteProduct from './deleteproduct';
import { useRouter } from 'next/router';
import { doRequestGetProduct } from '../redux/action/actionReducer';
// import Image from 'next/image'
import Link from 'next/link'


const Product = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete,setIsDelete] = useState(false);
  const [prodById, setProdById ]= useState('');

  let { product,message,refresh} = useSelector((state:any) => state.productReducers)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
      dispatch(doRequestGetProduct())
  }, [refresh]);

  return (
    <div>
      {isDelete ? <DeleteProduct show={isDelete} prodById={prodById} closeModal={()=> setIsDelete(false) }/> : ''}
      
      <ToastContainer/>
      <Content title="Product" path="product" isOpen={() => setIsOpen(true)}>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 -mt-20">
          {
          (product || []).map((data:any) => (
            <div className="group hover:scale-110 transition-all duration-500 cursor-pointer">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                
                <img
                  src={`http://localhost:7300/uploads/${data.image}`}
                  alt={data.image}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700 truncate">{data.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900 text-green-600">Rp.{data.price}</p>

              <div className="w-full text-right z-20">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      
                          <BsThreeDotsVertical
                            className=" absolute -top-6 right-2 ml-2 -mr-1 h-5 w-5 text-gray-700 hover:text-gray-400 sm:flex"
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
                        <Menu.Items className="absolute right-3 -mt-20 mr-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="px-1 py-1 ">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                href={{
                                  pathname: '/product/updateproduct',
                                  query: { productId: data.id, products: JSON.stringify(data) },
                                }}
                                  className={`${
                                    active
                                      ? 'bg-violet-500 text-white'
                                      : 'text-gray-900'
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
                                onClick={()=> {setProdById(data); setIsDelete(true)}}
                                  className={`${
                                    active
                                      ? 'bg-violet-500 text-white'
                                      : 'text-gray-900'
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
            </div>
          ))}
        </div>
      </div>
    </div>
      </Content>
    </div>
  );
};

export default Product;