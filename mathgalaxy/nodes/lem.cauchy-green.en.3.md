# Cauchy–Green Identity　`lem.cauchy-green`
English entry · root `../`
[in graph](../#n=lem.cauchy-green)　·　[Chinese page (authoritative)](./lem.cauchy-green.md)

## Notes · **draft**
⭐ This is a direct translation of Green's formula.

Green's formula: $\oint_{\partial\Omega}(P\,\mathrm{d}x + Q\,\mathrm{d}y) = \iint_\Omega (Q_x - P_y)\,\mathrm{d}x\mathrm{d}y$.

Split the integral as $\oint (u\,\mathrm{d}x - v\,\mathrm{d}y) + i\oint (v\,\mathrm{d}x + u\,\mathrm{d}y)$; matching terms twice gives $\iint [-(u_y + v_x)] + i\iint(u_x - v_y)$ — and $2i f_{\bar z}$ computed term by term is exactly $-(u_y + v_x) + i(u_x - v_y)$.

⭐ Componentwise it is the **integrated form** of the CR equations: holomorphic $\iff f_{\bar z} = 0 \implies$ the right-hand side is zero.

> continued in nodes/lem.cauchy-green.en.4.md
