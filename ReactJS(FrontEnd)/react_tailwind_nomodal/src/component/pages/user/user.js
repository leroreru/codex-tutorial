import React, { useEffect, useState, Fragment } from 'react';
import apiMethod from '../../api/apiMethod';
import Content from './contentUser';
import { BsThreeDotsVertical, BsPencil, BsTrash } from 'react-icons/bs';
import { Menu, Transition } from '@headlessui/react';
import AddUser from './addUser';
import EditUser from './editUser';
import DeleteUser from './deleteUser'
import { ToastContainer } from 'react-toastify';
import SearchComponent from '../search';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../redux/action/actionReducer';
import { Link } from 'react-router-dom'

const Users = (props) => {
  const [users, setUser] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete,setIsDelete] = useState(false);
  const [userById, setUserById ]= useState('');

  let { userx,message,refresh} = useSelector(state => state.userReducer)
  const dispatch = useDispatch()
  const column = [
    { name: 'No' },
    { name: 'Username' },
    { name: 'Firstname' },
    { name: 'Lastname' },
  ];
  // const GetDeleteId =async (id)=>{
  //   const result = await apiMethod.getById(id)
  //   setUserById(result.data.result)
  //   setIsDelete(true)
  // }

  // const GetEditId =async (id)=>{
  //   const result = await apiMethod.getById(id)
  //   setUserById(result.data.result)
  //   setIsEdit(true)
  // }

  

  useEffect(() => {
    // const getData = async () => { //noredux
      // const result = await apiMethod.findAllUser();
      // setUser(result.data.result);
      dispatch(getAll())
  }, [refresh]);

  return (
    <div>
      {/* {isOpen ? <AddUser show={isOpen} closeModal={()=> setIsOpen(false) }/> : '' } */}
      {isEdit ? <EditUser show={isEdit} userById={userById} closeModal={()=> setIsEdit(false)}/> : ''}
      {isDelete ? <DeleteUser show={isDelete} userById={userById} closeModal={()=> setIsDelete(false) }/> : ''}

      <ToastContainer/>
      {/* <SearchComponent data={handleInputChange()} data2={handleFormSubmit()} value={searchTerm}/> */}
      <Content title="User" isOpen={() => setIsOpen(true)}>
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
            {(userx || []).map((dt, index) => (
              <tr key={dt.id}>
                <td className="px-6 py-3 text-sm text-gray-900 text-left">
                  {index + 1}
                </td>
                <td className="px-6 py-3 text-sm text-gray-900 text-left">
                  {dt.username}
                </td>
                <td className="px-6 py-3 text-sm text-gray-900 text-left">
                  {dt.firstname}
                </td>
                <td className="px-6 py-3 text-sm text-gray-900 text-left">
                  {dt.lastname}
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
                                <button
                                onClick={()=>{setUserById(dt); setIsEdit(true)}}
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
                                </button>
                              )}
                            </Menu.Item>
                          </div>

                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button onClick={()=> {setUserById(dt); setIsDelete(true)}}
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </div>
  );
};

export default Users;