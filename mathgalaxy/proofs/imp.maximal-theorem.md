# 覆盖引理 $\implies$ 极大定理
`imp.maximal-theorem` · 推出 · strong 边 · 根 `../`

`lem.covering` 覆盖引理 + `def.maximal-function` 极大函数 → `thm.maximal-theorem` 极大定理

**① 把坏集换成球族。** 令 $E_\alpha = \{x : Hf(x) > \alpha\}$。对每个 $x \in E_\alpha$，由 Hf 的定义（上确界）存在 $r_x > 0$ 使

$$A_{r_x}|f|(x) > \alpha\quad  \iff\quad  \int_{B(r_x, x)} |f(y)| dy > \alpha\cdot m(B(r_x, x))$$

于是 $\{B(r_x, x)\}_{x \in E_\alpha}$ 是 $E_\alpha$ 的一个开球覆盖，且每个球都满足上面那个「超额」不等式。

**② 用覆盖引理挑不交子族。** 任取 $c < m(E_\alpha)$（先设 $m(E_\alpha ) < \infty$）。由**覆盖引理**，存在 $x_1, \ldots , x_k \in E_\alpha$ 使 $B_j = B(r_{x_j}, x_j)$ 两两不交，且

$$\sum_j m(B_j) > 3^{-n} c$$

**③ 把测度换成积分。** 由 ① 里每个球的超额不等式，

> 续见 proofs/imp.maximal-theorem.2.md
