import React from "react";
import { Table, Avatar } from "antd";

const RecentClients = () => {
  const dataSource = [
    {
      key: "1",
      avatar: "https://i.pravatar.cc/60?img=1",
      name: "John Doe",
      task: "Meeting Scheduled",
      time: "10:30 AM, Feb 2",
    },
    {
      key: "2",
      avatar: "https://i.pravatar.cc/60?img=2",
      name: "Alice Smith",
      task: "Update on Marketing Campaign",
      time: "3:15 PM, Feb 3",
    },
    {
      key: "3",
      avatar: "https://i.pravatar.cc/60?img=3",
      name: "Michael Johnson",
      task: "Contract Signed",
      time: "9:00 AM, Feb 4",
    },
    {
      key: "4",
      avatar: "https://i.pravatar.cc/60?img=4",
      name: "Roy Harper",
      task: "News Added",
      time: "12:00 PM, Feb 28",
    },
  ];

  const columns = [
    {
      //   title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar) => (
        <div className="text-center">
          <Avatar
            src={avatar}
            alt="clients-avatar"
            style={{ width: "60px", height: "60px" }}
          />
        </div>
      ),
    },
    {
      //   title: "Client Name",
      dataIndex: "name",
      key: "name",
    },
    {
      //   title: "Task Performed",
      dataIndex: "task",
      key: "task",
    },
    {
      //   title: "Time",
      dataIndex: "time",
      key: "time",
    },
  ];

  return (
    <div className="recent-clients">
      <h4>Recent Clients</h4>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default RecentClients;
