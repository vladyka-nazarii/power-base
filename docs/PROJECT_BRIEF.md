# PowerBase Project Brief

PowerBase is a knowledge base and comparison tool for alternative energy equipment. It helps users catalog inverters, batteries, solar panels, portable power stations, and related components, then compare technical characteristics and evaluate compatibility for real system designs.

## Problem

Alternative energy equipment data is fragmented across PDF manuals, manufacturer websites, distributor pages, photos, and forum posts. This makes it slow to compare products or answer practical questions such as:

- Which batteries are compatible with this inverter?
- What PV input range can this charge controller support?
- Which models support a required communication protocol?
- Which equipment combination fits a given power, capacity, budget, or space constraint?

PowerBase turns scattered sources into structured, searchable, comparable data.

## Product Goals

- Maintain a structured catalog of equipment and manufacturers.
- Store detailed, typed technical specifications.
- Preserve source references for important claims.
- Support side-by-side comparison workflows.
- Support compatibility and system-design checks.
- Handle product images and documents without coupling media storage to the app container.

## Initial Equipment Categories

- Inverters
- Hybrid inverters
- Batteries
- Solar panels
- Portable power stations
- Charge controllers
- Balance-of-system components

## Data Quality Principles

- Prefer manufacturer documentation over reseller summaries.
- Store canonical values in base units where practical.
- Keep the original source and retrieval context for specs.
- Separate confirmed specs from inferred or user-submitted values when that distinction is available.
- Make uncertainty visible in the data model instead of hiding it in notes.
