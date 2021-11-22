import React, {Component} from "react";
import {genreOptions} from '../../data/data';
import {components, default as ReactSelect} from "react-select";

const Option = (props) => {
  return (
      <div>
        <components.Option {...props}>
          <input
              type="checkbox"
              checked={props.isSelected}
              onChange={() => null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
  );
};

export default class SelectGenre extends Component {
  constructor(props) {
    super(props);
    this.state = {optionSelected: this.selectedGenres(props.genre)}
  }

  selectedGenres = (genres) => {
    return genres.map((genre) => ({value: genre, label: genre}))
  }

  arrayGenres = (selectedGenres) => {
    return selectedGenres.map(select => select.label)
  }

  handleChange = (selected) => {
    this.setState({optionSelected: selected});
    this.props.setGenre(this.arrayGenres(selected))
  };

  render() {
    return (
        <ReactSelect
            options={genreOptions}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{Option}}
            onChange={this.handleChange}
            allowSelectAll={true}
            value={this.state.optionSelected}
        />
    );
  }
}
