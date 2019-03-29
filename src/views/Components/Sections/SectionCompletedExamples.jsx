import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import completedStyle from "assets/jss/material-kit-react/views/componentsSections/completedStyle.jsx";

class SectionCompletedExamples extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>ABOUT US</h2>
              <h4>
                <strong>Diet Cart</strong> was made keeping health-care in mind
                for customers so that fresh fruits and vegetables reach them
                directly from the farmers. The main idea is to remove the
                presence of vendors and wholesalers from their role, thereby
                making it easier and more convenient for the customers and
                retailers to get fresh fruits delivered to them directly from
                farmers without any involvement of the middlemen and ensure more
                income for farmers with consistent demand.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(completedStyle)(SectionCompletedExamples);
