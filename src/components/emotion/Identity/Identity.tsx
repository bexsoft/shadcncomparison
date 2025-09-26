import * as React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

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

const Container = styled.div`
  background-color: #f6f7f9;
  min-height: 100vh;
`

const TopBar = styled.div`
  background-color: #f6f7f9;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e7eb;
`

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span:first-of-type {
    font-size: 12px;
    color: #6b7280;
  }

  span:nth-of-type(2) {
    color: #9ca3af;
  }

  span:last-child {
    font-size: 12px;
    color: #374151;
  }
`

const TopBarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    padding: 4px;
    color: #4b5563;
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      color: #111827;
    }
  }
`

const PageHeader = styled.div`
  padding: 16px 24px;
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
`

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`

const LayoutContainer = styled.div`
  display: flex;
  height: calc(100vh - 120px);
`

const Sidebar = styled.div`
  width: 192px;
  background-color: white;
  border-right: 1px solid #e5e7eb;
`

const SidebarNav = styled.nav`
  padding: 8px;
`

const NavButton = styled.button<{ isActive: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 6px;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  ${props => props.isActive ? css`
    background-color: #dbeafe;
    color: #1d4ed8;
  ` : css`
    color: #374151;

    &:hover {
      background-color: #f9fafb;
    }
  `}
`

const MainContent = styled.div`
  flex: 1;
  background-color: white;
`

const ContentArea = styled.div`
  padding: 24px;
`

const UsersHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`

const UsersTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const SearchWrapper = styled.div`
  position: relative;
`

const SearchInput = styled.input`
  padding-left: 32px;
  padding-right: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 14px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  outline: none;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px #3b82f6;
  }

  &::placeholder {
    color: #9ca3af;
  }
`

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #9ca3af;
`

const AddUserButton = styled.button`
  padding: 6px 12px;
  background-color: #2563eb;
  color: white;
  font-size: 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }
`

const TableContainer = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const TableHeader = styled.thead`
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
`

const TableHeaderRow = styled.tr``

const TableHeaderCell = styled.th<{ isCheckbox?: boolean }>`
  padding: 12px;
  text-align: left;
  font-size: 12px;
  font-weight: 500;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  ${props => props.isCheckbox && css`
    width: 40px;
  `}
`

const SortButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const TableBody = styled.tbody`
  & > tr {
    border-bottom: 1px solid #e5e7eb;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background-color: #f9fafb;
    }
  }
`

const TableRow = styled.tr``

const TableCell = styled.td`
  padding: 12px;
  font-size: 14px;
  color: #111827;
`

const StatusBadge = styled.span<{ isEnabled: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid;

  ${props => props.isEnabled ? css`
    background-color: #dcfce7;
    color: #166534;
    border-color: #bbf7d0;
  ` : css`
    background-color: #f3f4f6;
    color: #374151;
    border-color: #d1d5db;
  `}
`

const StatusDot = styled.span<{ isEnabled: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 6px;

  ${props => props.isEnabled ? css`
    background-color: #22c55e;
  ` : css`
    background-color: #6b7280;
  `}
`

const GroupsPoliciesText = styled.span`
  font-size: 14px;
  color: #4b5563;
`

const SuccessAlert = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`

const AlertIcon = styled.div`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background-color: #dcfce7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #16a34a;
`

const AlertText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #166534;
  margin: 0;
`

const AlertCloseButton = styled.button`
  flex-shrink: 0;
  color: #16a34a;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #166534;
  }
`

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
    <Container className={className}>
      <TopBar>
        <Breadcrumb>
          <span>OBJECT STORE</span>
          <span>/</span>
          <span>Identity</span>
        </Breadcrumb>
        <TopBarActions>
          <button>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 5v3M8 11h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <button>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 3a2 2 0 100 4 2 2 0 000-4zM8 9a4 4 0 00-4 4h8a4 4 0 00-4-4z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </button>
        </TopBarActions>
      </TopBar>

      <PageHeader>
        <PageTitle>Identity</PageTitle>
      </PageHeader>

      <LayoutContainer>
        <Sidebar>
          <SidebarNav>
            <NavButton
              isActive={activeTab === 'users'}
              onClick={() => setActiveTab('users')}
            >
              <UsersIcon />
              Users
            </NavButton>
            <NavButton
              isActive={activeTab === 'groups'}
              onClick={() => setActiveTab('groups')}
            >
              <GroupsIcon />
              Groups
            </NavButton>
            <NavButton
              isActive={activeTab === 'policies'}
              onClick={() => setActiveTab('policies')}
            >
              <PoliciesIcon />
              Policies
            </NavButton>
          </SidebarNav>
        </Sidebar>

        <MainContent>
          <ContentArea>
            <UsersHeader>
              <UsersTitle>Users</UsersTitle>
              <HeaderActions>
                <SearchWrapper>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <SearchInput
                    type="text"
                    placeholder="Find Users"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </SearchWrapper>
                <AddUserButton>
                  <PlusIcon />
                  Add User
                </AddUserButton>
              </HeaderActions>
            </UsersHeader>

            <TableContainer>
              <Table>
                <TableHeader>
                  <TableHeaderRow>
                    <TableHeaderCell isCheckbox>
                      <input
                        type="checkbox"
                        checked={selectedUsers.length === users.length}
                        onChange={selectAllUsers}
                      />
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <SortButton>
                        Name
                        <ChevronDownIcon />
                      </SortButton>
                    </TableHeaderCell>
                    <TableHeaderCell>Status</TableHeaderCell>
                    <TableHeaderCell>Groups</TableHeaderCell>
                    <TableHeaderCell>Policies</TableHeaderCell>
                  </TableHeaderRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <input
                          type="checkbox"
                          checked={selectedUsers.includes(user.id)}
                          onChange={() => toggleUserSelection(user.id)}
                        />
                      </TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>
                        <StatusBadge isEnabled={user.status === 'Enabled'}>
                          <StatusDot isEnabled={user.status === 'Enabled'} />
                          {user.status}
                        </StatusBadge>
                      </TableCell>
                      <TableCell>
                        <GroupsPoliciesText>
                          {user.groups.join(', ')}...
                        </GroupsPoliciesText>
                      </TableCell>
                      <TableCell>
                        <GroupsPoliciesText>
                          {user.policies.join(', ')}...
                        </GroupsPoliciesText>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ContentArea>

          {showSuccessAlert && (
            <SuccessAlert>
              <AlertIcon>
                <CheckIcon />
              </AlertIcon>
              <AlertText>User added successfully</AlertText>
              <AlertCloseButton onClick={() => setShowSuccessAlert(false)}>
                <CloseIcon />
              </AlertCloseButton>
            </SuccessAlert>
          )}
        </MainContent>
      </LayoutContainer>
    </Container>
  )
}

Identity.displayName = "Identity"

export { Identity }