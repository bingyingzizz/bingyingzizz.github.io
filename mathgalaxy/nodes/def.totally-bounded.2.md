# 全有界　`def.totally-bounded`　·　续页（第 2 页）
[在星图里打开](../#n=def.totally-bounded)　·　第 1 页 [nodes/def.totally-bounded.md](./def.totally-bounded.md)

## 陈述（续）
**证明（$\implies$）**：设 $X$ 全有界，$(x_n)$ 是序列。用 $\varepsilon = 1$ 取有限 $1$-网，有限多个球里必有一个含无穷多项，取其中的子列（仍记作 $(x_n)$），于是这子列的两两距离 $< 2$。再对这子列用 $\varepsilon = 1/2$ 的网、取含无穷多项的那个球，得更细的子列，两两距离 $< 1$。依此取对角线子列 $(x_{n_k})$：对每个 $j$，第 $k \ge j$ 步之后它的项两两距离 $< 2^{-j+1}$，故它是 Cauchy 列。$(\Leftarrow)$ 反过来：若 $X$ 不全有界，则存在 $\varepsilon > 0$ 使任何有限球族都
盖不住它 —— 于是可递归取 $x_n$ 使 $d(x_n, x_m) \ge \varepsilon$ 对一切 $m < n$ 成立，这个序列没有 Cauchy 子列。$\square$

> 续见 [nodes/def.totally-bounded.3.md](./def.totally-bounded.3.md)
