
import React from "react";
import PageMain from "./PageMain";
import { PageMainProps } from "./PageMain.types";
import { Story } from '@storybook/react/types-6-0';

export default {
    title: 'Library/structure/Page Main Container',
    component: PageMain
};

const Template: Story<PageMainProps> = (args) => <PageMain {...args}>Children of the page container goes here</PageMain>;

export const PageMainExample = Template.bind({});
PageMainExample.args = {
  classes: 'testclass',
};


export const ExampleOfTables = () =>
  <PageMain>
    <p>This is an example container for page main including a table:</p>
    <table>
      <tbody>
          <tr>
              <td>Monday</td>
              <td>Closed</td>
          </tr>
          <tr>
              <td>Tuesday</td>
              <td>10:30 — 19:00</td>
          </tr>
          <tr>
              <td>Wednesday</td>
              <td>10:30 — 19:00</td>
          </tr>
          <tr>
              <td>Thursday</td>
              <td>10:30 — 19:00</td>
          </tr>
          <tr>
              <td>Friday</td>
              <td>10:30 — 19:00</td>
          </tr>
          <tr>
              <td>Saturday</td>
              <td>10:30 — 19:00</td>
          </tr>
          <tr>
              <td>Sunday</td>
              <td>Closed</td>
          </tr>
      </tbody>
    </table>

    <p>A table with header rows</p>
    <table>
      <thead>
          <tr>
              <th>Date</th>
              <th>Status</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Monday</td>
              <td>Closed</td>
          </tr>
          <tr>
              <td>Tuesday</td>
              <td>10:30 — 19:00</td>
          </tr>
          <tr>
              <td>Wednesday</td>
              <td>10:30 — 19:00</td>
          </tr>
          <tr>
              <td>Thursday</td>
              <td>10:30 — 19:00</td>
          </tr>
          <tr>
              <td>Friday</td>
              <td>10:30 — 19:00</td>
          </tr>
          <tr>
              <td>Saturday</td>
              <td>10:30 — 19:00</td>
          </tr>
          <tr>
              <td>Sunday</td>
              <td>Closed</td>
          </tr>
      </tbody>
  </table>

  <p>A table with both header rows</p>
  <table>
    <thead>
        <tr>
            <th>Date</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Monday</th>
            <td>Closed</td>
        </tr>
        <tr>
            <th>Tuesday</th>
            <td>10:30 — 19:00</td>
        </tr>
        <tr>
            <th>Wednesday</th>
            <td>10:30 — 19:00</td>
        </tr>
        <tr>
            <th>Thursday</th>
            <td>10:30 — 19:00</td>
        </tr>
        <tr>
            <th>Friday</th>
            <td>10:30 — 19:00</td>
        </tr>
        <tr>
            <th>Saturday</th>
            <td>10:30 — 19:00</td>
        </tr>
        <tr>
            <th>Sunday</th>
            <td>Closed</td>
        </tr>
    </tbody>
  </table>

  <p>A table with side heading row with caption</p>
  <table>
    <caption>test caption</caption>
    <tbody>
      <tr>
          <th>Monday</th>
          <td>Closed</td>
      </tr>
      <tr>
          <th>Tuesday</th>
          <td>10:30 — 19:00</td>
      </tr>
      <tr>
          <th>Wednesday</th>
          <td>10:30 — 19:00</td>
      </tr>
      <tr>
          <th>Thursday</th>
          <td>10:30 — 19:00</td>
      </tr>
      <tr>
          <th>Friday</th>
          <td>10:30 — 19:00</td>
      </tr>
      <tr>
          <th>Saturday</th>
          <td>10:30 — 19:00</td>
      </tr>
      <tr>
          <th>Sunday</th>
          <td>Closed</td>
      </tr>
    </tbody>
  </table>
</PageMain>