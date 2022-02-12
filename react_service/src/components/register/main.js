import React from 'react';
import {Column, Grid, Search, Tag, Button} from "@carbon/react";
// https://lodash.com/docs/4.17.15


/* ----------------------------------------------------------
AnalyticMainPage
---------------------------------------------------------- */
function RegisterMainPage() {

  // https://www.cssscript.com/multiple-select-dropdown/
  // https://github.com/varundewan/multiselect
  return (
    <div className={'top-pad'}>
      <div className={'top-level-page'}>
        <Grid>
          <Column sm={4} md={{span: 6, offset: 1}} lg={{span: 8, offset: 1}}>
            <div className={'display-box'}>
              <Search id={'search'} placeholder={'Search'}/>
            </div>
          </Column>
          <Column md={1} lg={7}>
            <Button size={'md'} >Post<i className="far fa-comment-alt-plus fa-lg"/></Button>
          </Column>
        </Grid>
        <br/>
        <Grid>
          <Column sm={4} md={{span: 6, offset: 1}} lg={{span: 10, offset: 1}}>
            <div className={'register-item'}>
              <Grid>
                <Column sm={4} md={8} lg={10}><div className={'register-item-title'}>TheBasics Survey Changes</div></Column>
                <Column sm={4} md={{span: 2}} lg={{span: 2}}>
                  <div className={'register-item-ts'}>Feb 16, 2022 12:24 AM (CST)</div>
                  <div>
                    <Tag type={'blue'} size={'sm'}>DRC Codebook</Tag><Tag type={'green'} size={'sm'}>Survey</Tag>
                  </div>
                </Column>
                <Column sm={4} md={{span: 6}} lg={{span: 8}}>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </Column>
              </Grid>
            </div>
          </Column>
          <Column sm={4} md={{span: 6, offset: 1}} lg={{span: 10, offset: 1}}>
            <div className={'register-item'}>
              <Grid>
                <Column sm={4} md={6} lg={8}><div className={'register-item-title'}>RDR Genomics Work Queue Update Release</div></Column>
                <Column sm={4} md={2} lg={2}><Button size={'sm'} >Comment<i className="far fa-comment-plus fa-lg"/></Button></Column>
                <Column sm={4} md={{span: 2}} lg={{span: 2}}>
                  <div className={'register-item-ts'}>Feb 10, 2022 3:31 PM (CST)</div>
                  <div>
                    <Tag type={'blue'} size={'sm'}>RDR</Tag><Tag type={'green'} size={'sm'}>Genomics</Tag>
                  </div>
                </Column>
                <Column sm={4} md={{span: 6}} lg={{span: 8}}>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </div>
                  <div className={'register-item-events'}>
                    Schedule: Testing: March 12, 2020 · Stable: March 20, 2022 · Prod: March 20, 2022
                  </div>
                </Column>
              </Grid>
            </div>
          </Column>
          <Column sm={4} md={{span: 6, offset: 1}} lg={{span: 10, offset: 1}}>
            <div className={'register-item'}>
              <Grid>
                <Column sm={4} md={8} lg={10}><div className={'register-item-title'}>Curation Vocabulary Release</div></Column>
                <Column sm={4} md={{span: 2}} lg={{span: 2}}>
                  <div className={'register-item-ts'}>Feb 8, 2022 8:01 AM (CST)</div>
                  <div>
                    <Tag type={'blue'} size={'sm'}>Curation</Tag>
                  </div>
                </Column>
                <Column sm={4} md={{span: 6}} lg={{span: 8}}>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                  <div className={'register-item-events'}>
                    Schedule: Prod: March 20, 2022
                  </div>
                </Column>
              </Grid>
            </div>
          </Column>
          <Column sm={4} md={{span: 6, offset: 1}} lg={{span: 10, offset: 1}}>
            <div className={'register-item'}>
              <Grid>
                <Column sm={4} md={8} lg={10}><div className={'register-item-title'}>PDR Hotfix For Participant View (edited)</div></Column>
                <Column sm={4} md={{span: 2}} lg={{span: 2}}>
                  <div className={'register-item-ts'}>Feb 6, 2022 10:01 AM (CST)</div>
                  <div>
                    <Tag type={'blue'} size={'sm'}>PDR</Tag><Tag type={'green'} size={'sm'}>Vocabulary</Tag><Tag type={'red'} size={'sm'}>Hotfix</Tag>
                  </div>
                </Column>
                <Column sm={4} md={{span: 6}} lg={{span: 8}}>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                  <div className={'register-item-events'}>
                    Schedule: Prod: March 1, 2022
                  </div>
                </Column>
              </Grid>
            </div>
          </Column>
        </Grid>
      </div>
    </div>
  );
}

export default RegisterMainPage;