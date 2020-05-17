import React, { Component } from 'react'
import { Button, Table, Divider, Tag } from 'antd'
import { connect } from 'react-redux'
import { listData } from '@/action/listAction'
import './styles.less'

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Msg',
    dataIndex: 'msg',
    key: 'msg',
  },
  {
    title: 'Gender',
    key: 'gender',
    dataIndex: 'gender',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>Edit</a>&nbsp;&nbsp;
        <a>Delete</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  }
];

export default @connect(state => {
  return {
    users: state.list.data
  }
},{
  listData
})

class Tablee extends Component {
  componentDidMount () {
    this.props.listData()
  }
  render() {
    const { users } = this.props
    return (
      <div className="Tablee">
        <div className="BiaoDan">
          <p>Striped Table</p>
          <p>Add class .table-striped <Button>Add User</Button></p>
          <Table 
            columns={columns} 
            dataSource={users} 
            rowKey={v => v.id}
          />
        </div>
      </div>
    )
  }
}
