# derivative of an NBV function and its measure　`prop.nbv-derivative`
English entry · root `../`
[in graph](../#n=prop.nbv-derivative)　·　[Chinese page (authoritative)](./prop.nbv-derivative.md)

$$\mu_F \perp  m \iff F' = 0\quad  \text{a.e.}$$
$$\mu_F \ll  m \iff F(x) = \int_{-\infty}^{x} F'(t) dt$$

## Notes · **reviewed**
Proof: write $d\mu_F = d\lambda + f\cdot dm$ (Lebesgue decomposition); by the corresponding theorem for measures, $f = F'$ a.e. Hence

$\cdot$ $\mu_F \perp  m$ means the absolutely continuous part vanishes, that is $f = 0 \implies F' = 0 \text{a.e.}$;

$\cdot$ $\mu_F \ll  m$ means $\lambda = 0$, so $F(x) = \mu_F((-\infty,x]) = \int_{-\infty}^x f\cdot dm = \int_{-\infty}^x F'\cdot dt$.

> 续见 nodes/prop.nbv-derivative.en.4.md
