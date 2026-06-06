# Equipment Data Modeling

Use this skill when designing or changing catalog schemas, spec normalization, equipment import flows, comparison logic, compatibility checks, or source attribution for PowerBase.

## Domain Goal

PowerBase equipment data must support structured search, comparison, and compatibility reasoning. Avoid modeling important specs as opaque text if users will need to filter, sort, calculate, or compare them.

## Core Entity Guidance

Common entities likely include:

- manufacturer
- equipment category
- equipment model
- technical specification
- media asset
- source document
- compatibility rule or compatibility result

Do not force every category into identical fields. Use shared fields for cross-category comparison and category-specific specs where the domain requires precision.

## Canonical Values

Prefer canonical storage units:

- power: watts
- energy: watt-hours
- voltage: volts
- current: amps
- capacity: amp-hours when battery context requires it
- dimensions: millimeters
- weight: grams or kilograms, consistently chosen
- temperature: Celsius

Display units can be formatted separately in the UI.

## Spec Quality

For each important spec, consider whether the model needs:

- value
- unit
- min and max range
- tolerance
- source reference
- confidence level
- notes for ambiguous manufacturer wording

## Source Traceability

Important claims should be attributable to a source:

- manufacturer datasheet
- user manual
- official product page
- certification document
- distributor listing
- user-submitted evidence

Prefer storing enough source metadata to answer where a value came from and when it was captured.

## Compatibility Reasoning

Compatibility checks should be explainable. A result should be able to show:

- compatible, incompatible, warning, or unknown status
- fields evaluated
- failed constraints
- assumptions
- source data used

Avoid hard-coding compatibility decisions directly in UI components.

## Import Guidance

When importing from PDFs or manufacturer pages:

1. Preserve original source metadata.
2. Normalize units explicitly.
3. Flag ambiguous values instead of silently guessing.
4. Keep raw notes separate from structured fields.
5. Record extraction confidence if automated extraction is used.
