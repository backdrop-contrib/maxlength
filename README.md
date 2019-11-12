# MaxLength

MaxLength allows you to set maximum length of any field on any form making use
of the Form API. This includes fields created using the UI (e.g. any text
field on a node). It is compatible with Backdrop's CKEditor out of the box.

## Installation

- Install this module using the 
[official Backdrop CMS instructions](https://backdropcms.org/guide/modules).

## Configuration and Usage

When the maximum length is enforced for a field, while a user is editing content
of that type some Javascript will count down how many characters are left. (If
the Javascript is turned off, it falls back to form API validation.)

MaxLength creates a new Form Property: #maxlength_js which in conjunction
with #maxlength will enforce, via Javascript, the maxlength of a textfield or
textarea and will show the number of characters left.

Using the field setting page, you can limit text fields and text areas. For 
text fields this module will use the "Maximum length" value set in the field 
settings.

More details may be found (or added) in the 
[Wiki](https://github.com/backdrop-contrib/maxlength/issues)

## Issues

Bugs and Feature requests should be reported in the 
[Issue Queue](https://github.com/backdrop-contrib/maxlength/issues)

## Current Maintainers

- [Laryn Kragt Bakker](https://github.com/laryn), [CEDC.org](https://CEDC.org) 

## Credits

- Ported to Backdrop by [Laryn Kragt Bakker](https://github.com/laryn),
  [CEDC.org](https://CEDC.org)
- Maintained for Drupal by [Inovae](https://www.inovae.ch/), 
  [jm.federico](https://www.drupal.org/user/509892), 
  and [Schnitzel](https://www.drupal.org/user/643820), 
  sponsored by [Amazee Labs](https://www.amazeelabs.com/en).
- Drupal version is thanks to jm.federico, johnnygamba, Seed EM, a_c_m, dereine,
  and mariuss and others as noted in the commit history.
- Originally inspired by functionality found in the `ed_classified` module.


## License

This project is GPL v2 software. See the LICENSE.txt file in this directory for
complete text.
