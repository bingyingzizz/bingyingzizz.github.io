# Riesz–Markov 表示　`thm.riesz-markov`　·　说明
根 `../`

它是外测度：单调与 $\mu^{*}(\emptyset) = 0$ 显然。**可数次可加**：取 $E_{n} \subseteq U_{n}$（$U_{n}$ 开）。对紧支 $f$ 令 $K = \operatorname{supp} f \Subset \bigcup_{n} U_{n}$，由引理 2 的有限次可加性（对并归纳），$K$ 有有限子覆盖 $U_{n_{1}},\ldots,U_{n_{k}}$，得 $\Lambda(f) \le \mu(\bigcup_{i} U_{n_{i}}) \le \sum_{i} \mu(U_{n_{i}}) \le \sum_{n} \mu(U_{n})$；对可行 $f$ 取上确界得 $\mu(\bigcup_{n}U_{n}) \le \sum_{n}\mu(U_{n})$，再对 $E \subseteq \bigcup_{n}U_{n}$ 取下确界即得 $\mu^{*}$ 的可数次可加性。

**引理 4（开集 Carathéodory 可测；完整证明）**：对任意 $A \subseteq X$ 与开集 $U$，有

$$\mu^{*}(A \cap U) + \mu^{*}(A \setminus U) \le \mu^{*}(A).$$

记 $\nu(E) := \sup\{\, \Lambda(f) : f \in C_{c}(X),\ 0 \le f \le 1,\ \operatorname{supp} f \subseteq E \,\}$（对任意 $E$ 定义；$E$ 开时 $\nu(E) = \mu(E)$）。先证两条辅助事实。

> 续见 notes/thm.riesz-markov.6.md
