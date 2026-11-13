# Baire category theorem　`thm.baire`
English entry · root `../`
[in graph](../#n=thm.baire)　·　[Chinese page (authoritative)](./thm.baire.md)

$O_1$ dense open $\implies$ $B_0 \cap O_1$ is nonempty open, so choose $x_1$ and $\varepsilon_1 < \min(\varepsilon/2,\ 1)$ with

$$\overline{B(x_1, \varepsilon_1)} \subseteq B(x, \varepsilon) \cap O_1 .$$

2. **Induction**: suppose $x_n, \varepsilon_n$ have been chosen (with $\varepsilon_n < 1/n$).

Since $O_{n+1}$ is dense open, $B(x_n, \varepsilon_n) \cap O_{n+1}$ is still nonempty open; choose

$$\overline{B(x_{n+1}, \varepsilon_{n+1})} \subseteq B(x_n, \varepsilon_n) \cap O_{n+1}, \qquad \varepsilon_{n+1} < \frac{1}{n+1} .$$

> continued in nodes/thm.baire.en.3.md
