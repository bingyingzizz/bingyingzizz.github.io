# Riesz–Markov 表示　`thm.riesz-markov`　·　说明
根 `../`

**第四步：表示引理**。设 $f \in C_{c}(X)$。先设 $f \ge 0$，记 $M = \lVert f \rVert_{\infty}$、$K = \operatorname{supp} f$；取上面的紧邻域构造中的 $W = \operatorname{int} L \supseteq K$，则 $\mu(W) < \infty$。

**下界 $\Lambda(f) \ge \int f\,\mathrm{d}\mu$**：对 $n \ge 1$ 令 $t_i = iM/n$（$i = 0, \ldots, n$）、$A_i = \{\, f > t_i \,\}$（开；$A_n = \emptyset$），并令

$$s := \sum_{i=1}^{n} (t_i - t_{i-1})\,\chi_{A_i}.$$

则 $s \le f \le s + M/n$。对每个 $i$ 取 $g_i \in C_{c}(X)$，$0 \le g_i \le 1$、$\operatorname{supp} g_i \subseteq A_i$、$\Lambda(g_i) \ge \mu(A_i) - \delta$（$A_i = \emptyset$ 时取 $g_i = 0$），令 $g := \sum_{i} (t_i - t_{i-1})\,g_i$。因 $g_i \le \chi_{A_i}$，有 $g \le s \le f$，故

$$\Lambda(f) \ge \Lambda(g) = \sum_{i} (t_i - t_{i-1})\Lambda(g_i) \ge \int s\,\mathrm{d}\mu - M\delta.$$

> 续见 notes/thm.riesz-markov.10.md
