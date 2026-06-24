# TODO

## Destinations Directory
- [x] Update `app/(main)/destinations/page.tsx` to be a unified directory.
- [x] Load ALL states and ALL places by default.
  - [ ] Add filter UI: state dropdown, city dropdown, search field.
  - [ ] Implement filtering from URL params: `?state`, `?city`, `?q`.
  - [ ] Ensure URL sync + back/forward support via Next router search params.
  - [ ] Implement correct empty state message.
  - [ ] Performance: useMemo to avoid repeated filtering.
  - [ ] Responsive layout: desktop horizontal filters + grid; mobile stacked filters.
- [ ] Run `pnpm lint` and `pnpm build`.

