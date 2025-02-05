# SBRC Portal V2

Improve version of the user portal for SoftBank

## Beta

Currently we have a beta version that can be deployed from Github Actions.

This version uses CloudFront so the portla maybe cache at times

[Beta Version](https://d23fjbsx1dhfrb.cloudfront.net/)

This is the S3 version which will be updated as soon as a new version is released

[S3 Beta Version](http://sbrc-portal-beta.s3-website-us-west-2.amazonaws.com/)

# Pages

### Index

- [User Settings](https://github.com/FormantIO/SBRC?tab=readme-ov-file#user-settings)

### User Settings

- [ ] Page is divided in three sections: Personal details, access settigns, and preferences
- [ ] Personal Detail sections displays: first name, last name, email, and job title.
- [ ] User should be able to edit first name, last name and jobtitle from personal details section.
- [ ] User should not be able to edit email.
- [ ] Access settings should display user's role if it's an instance of `Admin`, `Fleet` or `User`
- [ ] User should not be able to edit hist own role
- [ ] Preferences section should display: Measurement units, language, and timezone.
- [ ] User should be able to edit: Measurement units, language, and timezone.
- [ ] Measurement units and timezones should have a tooltip.
- [ ] When changing the language the text on the screen should update on the spot.
- [ ] Personal Details should are required.
- [ ] If no changes are made the submit button should stay disabled.
