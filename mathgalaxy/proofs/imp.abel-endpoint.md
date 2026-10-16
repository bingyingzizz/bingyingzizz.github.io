# Abel–Dirichlet 判别法 $\implies$ Abel 第二定理
`imp.abel-endpoint` · 推出 · strong 边 · 根 `../`

`def.power-series` 幂级数 + `thm.abel-dirichlet-series` Abel–Dirichlet 判别法 → `thm.abel-endpoint` Abel 第二定理

设 $R = 1$、$\sum a_n$ 收敛，要证 $\lim_{x \to 1^{-}} f(x) = \sum a_n$。记 $s := \sum_{n} a_n$、$s_N := \sum_{n \le N} a_n$。

1. **分部求和（Abel 求和）**：对 $0 \le x < 1$，

$$f(x) = \sum_{n=0}^{\infty} a_n x^{n} = (1 - x)\sum_{n=0}^{\infty} s_n x^{n}$$

（证明：把 $a_n = s_n - s_{n-1}$ 代入，交换求和次序，得到 $(1-x)\sum s_n x^n$。）
2. 由 $\sum a_n = s$ 收敛，$\{s_n\}$ 有界，且 $s_n \to s$。把上式改写成

> 续见 proofs/imp.abel-endpoint.2.md
