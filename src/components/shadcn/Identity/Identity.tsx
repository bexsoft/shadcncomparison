import * as React from "react"
import { cn } from "@/lib/utils"

export interface IdentityProps {
  className?: string
}

interface User {
  id: string
  name: string
  status: 'Enabled' | 'Disabled'
  groups: string[]
  policies: string[]
}

const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 7a4 4 0 11-8 0 4 4 0 018 0zM10 18a8 8 0 100-16 8 8 0 000 16z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 13a5 5 0 00-5 5M10 13a5 5 0 015 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const GroupsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 11a3 3 0 00-3-3h-4a3 3 0 00-3 3v2h10v-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 5a2 2 0 114 0 2 2 0 01-4 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 15v-2a3 3 0 013-3M15 5a2 2 0 102-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PoliciesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 2L3 7v6c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V7l-6-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M10 10l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const Identity: React.FC<IdentityProps> = ({ className }) => {
  const [activeTab, setActiveTab] = React.useState<'users' | 'groups' | 'policies'>('users')
  const [searchTerm, setSearchTerm] = React.useState('')
  const [showSuccessAlert, setShowSuccessAlert] = React.useState(true)
  const [selectedUsers, setSelectedUsers] = React.useState<string[]>([])

  const users: User[] = [
    { id: '1', name: '[$user-name]', status: 'Enabled', groups: ['group-name', 'group-name', 'group-name'], policies: ['policy-name', 'policy-name', 'policy-name'] },
    { id: '2', name: '[$user-name]', status: 'Enabled', groups: ['group-name', 'group-name', 'group-name'], policies: ['policy-name', 'policy-name', 'policy-name'] },
    { id: '3', name: '[$user-name]', status: 'Enabled', groups: ['group-name', 'group-name', 'group-name'], policies: ['policy-name', 'policy-name', 'policy-name'] },
    { id: '4', name: '[$user-name]', status: 'Disabled', groups: ['group-name', 'group-name', 'group-name'], policies: ['policy-name', 'policy-name', 'policy-name'] },
    { id: '5', name: '[$user-name]', status: 'Enabled', groups: ['group-name', 'group-name', 'group-name'], policies: ['policy-name', 'policy-name', 'policy-name'] },
    { id: '6', name: '[$user-name]', status: 'Disabled', groups: ['group-name', 'group-name', 'group-name'], policies: ['policy-name', 'policy-name', 'policy-name'] },
    { id: '7', name: '[$user-name]', status: 'Enabled', groups: ['group-name', 'group-name', 'group-name'], policies: ['policy-name', 'policy-name', 'policy-name'] },
    { id: '8', name: '[$new-user-name]', status: 'Enabled', groups: ['group-name', 'group-name', 'group-name'], policies: ['policy-name', 'policy-name', 'policy-name'] },
  ]

  const toggleUserSelection = (userId: string) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    )
  }

  const selectAllUsers = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([])
    } else {
      setSelectedUsers(users.map(u => u.id))
    }
  }

  return (
    <div className={cn("bg-[#f6f7f9] min-h-screen", className)}>
      {/* Top Bar */}
      <div className="bg-[#f6f7f9] px-6 py-2 flex items-center justify-between border-b border-[#e5e7eb]">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">OBJECT STORE</span>
          <span className="text-gray-400">/</span>
          <span className="text-xs text-gray-700">Identity</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1 text-gray-600 hover:text-gray-900">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 5v3M8 11h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="p-1 text-gray-600 hover:text-gray-900">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 3a2 2 0 100 4 2 2 0 000-4zM8 9a4 4 0 00-4 4h8a4 4 0 00-4-4z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Page Header */}
      <div className="px-6 py-4 bg-white border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-900">Identity</h1>
      </div>

      <div className="flex h-[calc(100vh-120px)]">
        {/* Sidebar */}
        <div className="w-48 bg-white border-r border-gray-200">
          <nav className="p-2">
            <button
              onClick={() => setActiveTab('users')}
              className={cn(
                "w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors",
                activeTab === 'users'
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              )}
            >
              <UsersIcon />
              Users
            </button>
            <button
              onClick={() => setActiveTab('groups')}
              className={cn(
                "w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors",
                activeTab === 'groups'
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              )}
            >
              <GroupsIcon />
              Groups
            </button>
            <button
              onClick={() => setActiveTab('policies')}
              className={cn(
                "w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors",
                activeTab === 'policies'
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              )}
            >
              <PoliciesIcon />
              Policies
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white">
          <div className="p-6">
            {/* Users Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Users</h2>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <SearchIcon />
                  <input
                    type="text"
                    placeholder="Find Users"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8 pr-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none">
                    <SearchIcon />
                  </div>
                </div>
                <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 flex items-center gap-1">
                  <PlusIcon />
                  Add User
                </button>
              </div>
            </div>

            {/* Users Table */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="w-10 px-3 py-3">
                      <input
                        type="checkbox"
                        checked={selectedUsers.length === users.length}
                        onChange={selectAllUsers}
                        className="rounded border-gray-300"
                      />
                    </th>
                    <th className="px-3 py-3 text-left">
                      <button className="flex items-center gap-1 text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Name
                        <ChevronDownIcon />
                      </button>
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Groups
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Policies
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-3 py-3">
                        <input
                          type="checkbox"
                          checked={selectedUsers.includes(user.id)}
                          onChange={() => toggleUserSelection(user.id)}
                          className="rounded border-gray-300"
                        />
                      </td>
                      <td className="px-3 py-3 text-sm text-gray-900">
                        {user.name}
                      </td>
                      <td className="px-3 py-3">
                        <span className={cn(
                          "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium",
                          user.status === 'Enabled'
                            ? "bg-green-100 text-green-800 border border-green-200"
                            : "bg-gray-100 text-gray-800 border border-gray-300"
                        )}>
                          <span className={cn(
                            "w-1.5 h-1.5 rounded-full mr-1.5",
                            user.status === 'Enabled' ? "bg-green-500" : "bg-gray-500"
                          )} />
                          {user.status}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-sm text-gray-600">
                        {user.groups.join(', ')}...
                      </td>
                      <td className="px-3 py-3 text-sm text-gray-600">
                        {user.policies.join(', ')}...
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Success Alert */}
          {showSuccessAlert && (
            <div className="fixed bottom-4 right-4 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3 shadow-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckIcon />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-green-800">User added successfully</p>
              </div>
              <button
                onClick={() => setShowSuccessAlert(false)}
                className="flex-shrink-0 text-green-600 hover:text-green-800"
              >
                <CloseIcon />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

Identity.displayName = "Identity"

export { Identity }