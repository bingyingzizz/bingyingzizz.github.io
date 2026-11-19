# imp.k-bounded-completion
`imp.k-bounded-completion` · 推出 · strong 边 · 根 `../`

`def.semi-normed-ab-group` 半范数阿贝尔群 + `def.complete` 完备 + `def.k-bounded-exact` K-有界正合 → `lem.k-bounded-completion` K-有界正合在完备化下不变

**证明（两个方向各算一次 $\varepsilon/2$）。** 先商掉 $M_{0}$（$K$-有界正合在商掉范数为零的元素下不变），于是可设 $M^{\bullet} \subseteq \widehat{M}^{\bullet}$ 是稠密保范嵌入。
- **$\implies$**：给 $s \in \widehat{M}^{n}$ 与 $\varepsilon>0$。

由稠密性取 $t \in M^{n}$ 使 $\|s - t\| \le \frac{\varepsilon}{2(1+K\|d^{n}\|)}$；

由 $M^{\bullet}$ 的 $K$-有界性取 $s' \in M^{n+1}$ 使 $\|t - ds'\| \le K\|dt\| + \frac{\varepsilon}{2}$。

> 续见 proofs/imp.k-bounded-completion.2.md
