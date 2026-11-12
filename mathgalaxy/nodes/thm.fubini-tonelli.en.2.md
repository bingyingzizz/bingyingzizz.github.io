# Fubini–Tonelli theorem　`thm.fubini-tonelli`
English entry · root `../`
[in graph](../#n=thm.fubini-tonelli)　·　[Chinese page (authoritative)](./thm.fubini-tonelli.md)

$$\int f d(\mu \times \nu) = \int_X ( \int_Y f(x, y) d\nu(y) ) d\mu(x) = \int_Y ( \int_X f(x, y) d\mu(x) ) d\nu(y)$$

**(b) Fubini (integrable case)**: if $f \in L^1(\mu \times \nu)$, then

- $f_x \in L^1(\nu)$ holds for a.e. x, and $f^y \in L^1(\mu)$ for a.e. y;
- $\int f_x d\nu \in L^1(\mu)$, $\int f^y d\mu \in L^1(\nu)$ (both defined a.e.);
- the two triple identities above hold as well.

> continued in nodes/thm.fubini-tonelli.en.3.md
