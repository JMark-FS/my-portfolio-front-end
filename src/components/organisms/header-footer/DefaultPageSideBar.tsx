import { MINIMUM_TOP_HEADER_HEIGHT } from '@/components/organisms/header-footer/DefaultPageHeader';
import { CalendarMonth, Dashboard, Group, LibraryAdd, ManageAccounts, PanToolSharp, Person } from '@mui/icons-material';
import { Box, Link, List, ListItem, ListItemIcon, ListItemText, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

export default function DefaultPageSideBar() {
  const router = useRouter();

  const sidebarItems = [
    {
      href: '/projects',
      label: 'Projects',
      renderIcon: () => <Dashboard />,
    },{
      href: '/education',
      label: 'Education',
      renderIcon: () => <Dashboard />,
    }
  ];
  return (
    <List
      component="aside"
      sx={{
        zIndex: 1100,
        backgroundColor: 'white',
        position: 'fixed',
        top: MINIMUM_TOP_HEADER_HEIGHT,
        left: 0,
        height: '100vh',
        overflowY: 'auto',
        transition: 'width 0.3s ease-in-out',
        width: {
          xs: '0px',
          md: '90px',
          lg: '250px',
        },
        flexShrink: 0,
        pl: '1rem',
        pr: {
          xs: 0,
          lg: '2rem',
        },
        display: {
          xs: 'none',
          md2: 'block',
        },
        borderRight: '1px solid #D4D4D8',
      }}>
      {sidebarItems.map((item, index) => (
        <React.Fragment key={item.href}>
          {/* @ts-ignore */}
          <ListItem
            component={Link}
            href={item.href}
            sx={{
              textTransform: 'uppercase',
              mt: index === 0 ? '1.5rem' : '0',
              mb: {
                xs: '.5rem',
                lg: 0,
              },
              cursor: 'pointer',
              color: 'neutral.accent1',
              '&.Mui-selected': {
                cursor: 'pointer',
                color: 'black',
                backgroundColor: 'white',
                '& svg': {
                  cursor: 'pointer',
                  color: 'black',
                },
              },
              '&.Mui-selected:hover': {
                color: 'black',
                cursor: 'pointer',
                backgroundColor: 'white',
                '& svg': {
                  cursor: 'pointer',
                  color: 'neutral.tundora',
                },
              },
              '&:hover': {
                cursor: 'pointer',
                color: 'neutral.tundora',
                backgroundColor: 'white',
                '& svg': {
                  cursor: 'pointer',
                  color: 'neutral.tundora',
                },
              },
            }}
            selected={router.pathname.includes(item.href)}>
            {/* {lgUp ? ( */}
            <ListItemIcon
              sx={{
                cursor: 'pointer',
              }}>
              {item.renderIcon()}
            </ListItemIcon>
            {/* ) : (
                <Tooltip title={item.label} placement="right">
                  <ListItemIcon
                    sx={{
                      cursor: 'pointer',
                      minWidth: 'fit-content',
                    }}>
                    {}
                  </ListItemIcon>
                </Tooltip>
              )} */}

            <ListItemText
              sx={{
                cursor: 'pointer',
                display: {
                  xs: 'none',
                  lg: 'block',
                },
              }}
              primary={item.label}
            />
          </ListItem>
          {/* {item.subItems && (
              <List component="div" disablePadding>
                {item.subItems.map((subItem) => (
                  <ListItem
                    key={subItem.href}
                    component={Link}
                    href={subItem.href}
                    sx={{
                      textTransform: 'uppercase',
                      gap: 0,
                      pl: {
                        xs: 2,
                        lg: 4,
                      },
                      mb: {
                        xs: '.5rem',
                        lg: 0,
                      },
                      cursor: 'pointer',
                      color: 'neutral.accent1',
                      '&.Mui-selected': {
                        color: 'black',
                        backgroundColor: 'white',
                        '& svg': {
                          color: 'black',
                        },
                      },
                      '&.Mui-selected:hover': {
                        color: 'black',
                        backgroundColor: 'white',
                        '& svg': {
                          color: 'neutral.tundora',
                        },
                      },
                      '&:hover': {
                        color: 'neutral.tundora',
                        backgroundColor: 'white',
                        '& svg': {
                          color: 'neutral.tundora',
                        },
                      },
                    }}
                    selected={router.pathname.includes(subItem.href)}>
                    {lgUp ? (
                      <ListItemIcon>{subItem.renderIcon()}</ListItemIcon>
                    ) : (
                      <Tooltip title={subItem.label} placement="right">
                        <ListItemIcon
                          sx={{
                            minWidth: 'fit-content',
                          }}>
                          {subItem.renderIcon()}
                        </ListItemIcon>
                      </Tooltip>
                    )}

                    <ListItemText
                      sx={{
                        display: {
                          xs: 'none',
                          lg: 'block',
                        },
                      }}
                      primary={subItem.label}
                    />
                  </ListItem>
                ))}
              </List>
            )} */}
        </React.Fragment>
      ))}
    </List>
  );
}
