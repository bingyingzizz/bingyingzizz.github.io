# a.e. 收敛 + 有限测度 $\implies$ 近一致
`imp.egorov` · 推出 · strong 边 · 根 `../`

`def.convergence-modes` 五种收敛 → `thm.egorov` Egorov 定理

设 $f_n \to f$ a.e.，$\mu(X) < \infty$。

**① 收敛点集与坏集合。** 令 $F = \{x : f_n(x) \to f(x)\}$，则 $\mu(F^c) = 0$。对每个固定的 $k \in \mathbb{N}$ 令

$$E_n(k) = \bigcup_{m \ge n} \{x : |f_m(x) - f(x)| \ge k^{-1}\}$$

（「从第 $n$ 项起还有偏差 $\ge 1/k$ 的点」）。

**② 对固定 $k$，$E_n(k)$ 随 $n$ 递减，且 $\bigcap_n E_n(k) = F^c$。**（若 $x$ 最终偏差都 $< 1/k$，就不在任何足够靠后的 $E_n(k)$ 里。）

**③ 用有限测度取极限。** 由 $\mu(X) < \infty$ 与测度的上连续性（递减列），

$$\mu(E_n(k)) \to \mu(F^c) = 0\quad  (n \to \infty)$$

**④ 挑出「足够快趋于 0」的那些 $n$。** 给定 $\varepsilon > 0$，对每个 $k$ 选 $n_k$ 使

$$\mu(E_{n_k}(k)) < \varepsilon \cdot 2^{-k}$$

**⑤ 并起来。** 令 $E = \bigcup_k E_{n_k}(k)$。则

> 续见 proofs/imp.egorov.2.md
