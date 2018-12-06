import React from "react";
import dropBtn from "../../assets/dropdown-arrow.svg";

export default class BasicInfo extends React.Component {
  render() {
    const profileData = this.props.profileData;
    return (
      <div className="q-category" id="basic-id">
        <div className="cat-header">
          <h2>Basic Info</h2>
          <button
            type="button"
            id="toggle-button"
            onClick={() => this.props.expand("basic-info")}
          >
            <img src={dropBtn} alt="dropdown" />
          </button>
        </div>
        <fieldset id="basic-info-section">
          <label htmlFor="basic-info">
            <h4 id="basic-first">Company Name:</h4>
          </label>
          <input
            id="company_name"
            onChange={this.props.onChange}
            className="basic-info"
            type="text"
            value={profileData.company_name}
            required
          />

          <label htmlFor="basic-info">
            <h4>Website:</h4>
          </label>
          <input
            id="website"
            onChange={this.props.onChange}
            className="basic-info"
            type="text"
            value={profileData.website}
            required
          />

          <label htmlFor="basic-info">
            <h4>Contact Name:</h4>
          </label>
          <input
            id="contact_name"
            onChange={this.props.onChange}
            className="basic-info"
            type="text"
            value={profileData.contact_name}
            required
          />

          <label htmlFor="basic-info">
            <h4>Contact Title:</h4>
          </label>
          <input
            id="contact_title"
            onChange={this.props.onChange}
            className="basic-info"
            type="text"
            value={profileData.contact_title}
            required
          />

          <label htmlFor="basic-info">
            <h4>Contact Email:</h4>
          </label>
          <input
            id="contact_email"
            onChange={this.props.onChange}
            className="basic-info"
            type="text"
            value={profileData.contact_email}
            autoComplete="email"
            required
          />

          <label htmlFor="basic-info">
            <h4>Company Description:</h4>
          </label>
          <textarea
            id="description"
            onChange={this.props.onChange}
            className="basic-info"
            type="text"
            value={profileData.description}
            rows="5"
            required
          />

          <label htmlFor="basic-info">
            <h4>Logo:</h4>
          </label>
          <input
            id="logo_url"
            onChange={this.props.onChange}
            className="basic-info"
            type="file"
            accept="image/*"
          />
          <p>
            Current File:
            {profileData.logo_url ? profileData.logo_url : "None"}
          </p>
        </fieldset>
      </div>
    );
  }
}
