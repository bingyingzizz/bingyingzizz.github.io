# symmetric point with respect to a circle　`def.symmetric-point`
English entry · root `../`
[in graph](../#n=def.symmetric-point)　·　[Chinese page (authoritative)](./def.symmetric-point.md)

## Notes · **draft**
**Why define it this way**: inside the circle $|z - a| < R$, the symmetric point lands outside — this is an **inversion**. It makes the "centre" and the "point at infinity" correspond ($z = a$ gives $z^{*} = \infty$), which is exactly why `prop.mobius-symmetry` can preserve symmetry under fractional linear transformations.

⭐ **Computational formula** (the one most used in exercises):

$$z^{*} = a + \frac{R^{2}}{\overline{z - a}}.$$

Symmetry with respect to the real axis is $z^{*} = \bar z$; symmetry with respect to the unit circle is $z^{*} = 1/\bar z$.

> continued in nodes/def.symmetric-point.en.4.md
