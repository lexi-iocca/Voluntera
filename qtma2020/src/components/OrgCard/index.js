import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { withStyles } from "@material-ui/styles";
import { bindActionCreators, compose } from "redux";

const styles = (theme) => ({
  root: {
    maxWidth: 365,
    height: 355,
    textAlign: "left",
    borderRadius: 30,
  },
  media: {
    margin: "auto",
    width: "90%",
    height: 145,
    padding: 15,
    paddingBottom: 0,
    borderRadius: 30,
  },
  title: {
    fontFamily: "Recoleta Alt",
    margin: "auto",
    width: "95%",
    fontSize: 16,
  },
  body: {
    margin: "auto",
    fontFamily: "Circular Std",
    width: "95%",
    fontSize: 12,
  },
  select: {
    fontFamily: "Circular Std",
    borderRadius: 10,
    borderColor: "black",
    height: 35,
    fontSize: 18,
  },
  button: {
    fontFamily: "Circular Std",
    borderRadius: 10,
    height: 35,
    width: "100%",
    fontSize: 14,
  },
  row: {
    margin: "auto",
    width: "85%",
  },
  item: {
    fontFamily: "Circular Std",
    fontSize: 18,
  },
});

class OrgCardBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 10,
    };
  }
  handleClick = (title, amount) => {
    this.props.addToCart(title, amount);
  };
  handleChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          component="img"
          src={this.props.img}
        />
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            {this.props.title}
          </Typography>
          <Typography
            className={classes.body}
            variant="caption"
            color="textSecondary"
            component="p"
          >
            {this.props.location}
          </Typography>
          <Typography
            className={classes.body}
            variant="body2"
            color="textPrimary"
            component="p"
          >
            {this.props.desc}
          </Typography>
        </CardContent>
        <CardActions className={classes.row}>
          <Select
            variant="outlined"
            value={this.state.selectedOption}
            onChange={this.handleChange}
            className={classes.select}
          >
            <MenuItem className={classes.item} value={10}>
              $10
            </MenuItem>
            <MenuItem className={classes.item} value={20}>
              $20
            </MenuItem>
            <MenuItem className={classes.item} value={50}>
              $50
            </MenuItem>
          </Select>
          <Button
            variant="contained"
            disableElevation
            className={classes.button}
            size="small"
            color="primary"
            onClick={() => {
              this.handleClick(this.props.title, this.state.selectedOption);
            }}
          >
            Donate
          </Button>
        </CardActions>
      </Card>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (title, amount) => {
      dispatch(addToCart(title, amount));
    },
  };
};

const OrgCardStyle = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(OrgCardBase);

const OrgCard = ({ title, img, location, desc }) => {
  return (
    <div>
      <OrgCardStyle title={title} img={img} location={location} desc={desc} />
    </div>
  );
};

export default OrgCard;
