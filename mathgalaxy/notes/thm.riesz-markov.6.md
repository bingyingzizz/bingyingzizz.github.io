# Riesz–Markov 表示　`thm.riesz-markov`　·　说明
根 `../`

**（甲）开集上内正则**：$\mu(U) = \sup\{\, \nu(K) : K \subseteq U,\ K\ \text{紧} \,\}$。证明：对 $f \prec U$，$K = \operatorname{supp} f$ 紧且 $\Lambda(f) \le \nu(K)$，故 $\mu(U) \le \sup_{K} \nu(K)$；反向不等式由 $\nu(K) \le \mu(U)$。∎

**（乙）分裂估计**：若 $V$ 开、$K \subseteq V$ 紧，则 $\nu(K) + \mu(V \setminus K) \le \mu(V)$。证明：取 $f \prec V \setminus K$ 与 $g$（$0 \le g \le 1$、$\operatorname{supp} g \subseteq K$）。两支集不交且都含于 $V$，故 $f + g \prec V$，于是 $\Lambda(f) + \Lambda(g) \le \mu(V)$；先对 $f$ 取上确界得 $\mu(V \setminus K) + \Lambda(g) \le \mu(V)$，再对 $g$ 取上确界即得。∎

> 续见 notes/thm.riesz-markov.7.md
