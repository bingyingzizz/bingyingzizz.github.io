# Riesz–Markov 表示　`thm.riesz-markov`　·　说明
根 `../`

**（丙）可测性**：可设 $\mu^{*}(A) < \infty$（否则右边为 $+\infty$，不等式显然）。任给 $\varepsilon > 0$，取开 $V \supseteq A$ 使 $\mu(V) < \mu^{*}(A) + \varepsilon$。由（甲）取紧 $K \subseteq V \cap U$ 使 $\nu(K) > \mu(V \cap U) - \varepsilon$。由 $K \subseteq U$ 得 $A \setminus U \subseteq V \setminus K$，而 $V \setminus K$ 开；又 $A \cap U \subseteq V \cap U$。于是

$$\mu^{*}(A \cap U) + \mu^{*}(A \setminus U) \le \mu(V \cap U) + \mu(V \setminus K) \le (\nu(K) + \varepsilon) + \mu(V \setminus K) \le \mu(V) + \varepsilon < \mu^{*}(A) + 2\varepsilon.$$

令 $\varepsilon \to 0$ 即得。∎

> 续见 notes/thm.riesz-markov.8.md
